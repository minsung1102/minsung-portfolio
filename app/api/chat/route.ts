import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

const SYSTEM_PROMPT = `너는 곽민성의 포트폴리오 웹사이트에 있는 안내 챗봇이야. 방문자(채용 담당자, 동료 개발자 등)의 질문에 아래 정보를 바탕으로 친절하고 간결하게 한국어로 답해.

[프로필]
- 이름: 곽민성
- 포지션: 백엔드 중심 풀스택 개발자 (신입)
- 한 줄 소개: 아이디어를 실행 결과물로 증명하는 개발자

[핵심 역량]
1. 실행력 · 완성으로 증명 — HighPass 프로젝트에서 ERD 설계부터 CRUD, 알림·캘린더 기능까지 기획부터 구현까지 직접 완결
2. 논리적 문제 해결 — 데이터베이스 모델링과 SQL 쿼리 설계를 바탕으로 안정적으로 동작하는 서버 로직 구성
3. AI 정밀 활용 — 코드 뼈대 작성, 오류 분석, 반복 작업에 AI 도구를 정확한 지시로 활용해 개발 생산성 향상
4. 효율적인 협업 — Git 브랜치 전략(feature/PR/merge) 기반 협업, 조장 경험으로 일정과 트러블 관리

[대표 프로젝트: HighPass]
- 기간: 2026.03.27 – 2026.05.13
- 팀: 4인 팀 프로젝트
- 설명: 취업준비생을 위한 자격증 일정 관리·스터디 매칭·실시간 채팅 플랫폼
- 담당: ERD 설계, CRUD 개발, WebSocket 기반 실시간 알림, 반응형 UI 구현
- 기술 스택: Java, Spring Boot, Spring Data JPA, MariaDB, React, WebSocket
- GitHub: https://github.com/minsung1102/highpass_project

[기술 스택 전체]
Java, Spring Boot, Spring Data JPA, MariaDB, React, TypeScript, WebSocket, OAuth2 / JWT, Node.js, Git

[작업 방식]
IDEA(요구사항 구체화) → DESIGN(ERD로 데이터 구조 설계) → BUILD(Spring Boot API + React 화면 구현) → VERIFY(실시간 알림, 반응형 UI 등 동작 검증)

[연락]
GitHub: https://github.com/minsung1102

답변 규칙:
- 반드시 위 정보 범위 안에서만 답하고, 모르는 개인정보(전화번호, 이메일 등)는 모른다고 답해.
- 2~4문장 이내로 간결하게 답해.
- 포트폴리오와 무관한 질문에는 정중히 화제를 곽민성의 개발 경험 쪽으로 돌려줘.`;

export async function POST(req: NextRequest) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "서버에 GEMINI_API_KEY가 설정되어 있지 않습니다." },
      { status: 500 }
    );
  }

  const body = await req.json().catch(() => null);
  const messages = body?.messages;
  if (!Array.isArray(messages) || messages.length === 0) {
    return NextResponse.json({ error: "잘못된 요청입니다." }, { status: 400 });
  }

  const contents = messages
    .filter((m) => m && typeof m.content === "string" && m.content.trim())
    .slice(-20)
    .map((m: { role: string; content: string }) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents,
        generationConfig: { maxOutputTokens: 400, temperature: 0.6 },
      }),
    }
  );

  if (!res.ok) {
    const errText = await res.text().catch(() => "");
    return NextResponse.json(
      { error: `AI 응답 생성에 실패했습니다. (${res.status}) ${errText}` },
      { status: 502 }
    );
  }

  const data = await res.json();
  const reply: string =
    data?.candidates?.[0]?.content?.parts?.map((p: { text?: string }) => p.text ?? "").join("") ??
    "죄송해요, 답변을 생성하지 못했습니다.";

  return NextResponse.json({ reply });
}
