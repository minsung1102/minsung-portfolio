# 곽민성 — 개발자 포트폴리오

Next.js 14 (App Router) + TypeScript + Tailwind CSS로 만든 개인 포트폴리오 소개 페이지입니다.

## 실행 방법

```bash
npm install
npm run dev
```

브라우저에서 http://localhost:3000 접속.

## 구성

- `app/page.tsx` — 히어로(태그라인), 작업 방식(아이디어→설계→구현→검증), 핵심 역량, HighPass 프로젝트, 기술 스택, 컨택 섹션
- `app/layout.tsx` — 폰트(Space Grotesk / Inter / JetBrains Mono) 및 메타데이터
- `app/globals.css` — 전역 스타일, 시그니처 루프 다이어그램 애니메이션
- `tailwind.config.ts` — 색상/폰트 디자인 토큰 (딥 인디고 배경 · 앰버 포인트 · 티얼 시그널)

## 커스터마이징

- 프로젝트 추가: `app/page.tsx`의 `project` 객체를 배열로 바꿔 여러 개 표시 가능
- 문구: `steps`, `strengths`, `skills` 배열 수정
- 연락처: `#contact` 섹션에 이메일 등 원하는 채널 추가

