import MobileNav from "./MobileNav";

const steps = [
  {
    n: "01",
    key: "IDEA",
    title: "아이디어에서 출발합니다",
    desc: "\u201c이 기능이 있으면 사용자가 더 편하겠다\u201d는 생각을 요구사항으로 구체화하는 것부터 시작합니다.",
  },
  {
    n: "02",
    key: "DESIGN",
    title: "구조를 먼저 설계합니다",
    desc: "ERD로 테이블 간 관계를 먼저 명확히 정의해, 개발 중 데이터 구조 혼선을 줄입니다.",
  },
  {
    n: "03",
    key: "BUILD",
    title: "백엔드와 프론트를 함께 구현합니다",
    desc: "Spring Boot로 API와 비즈니스 로직을, React로 화면과 API 연동을 직접 만듭니다.",
  },
  {
    n: "04",
    key: "VERIFY",
    title: "동작을 검증하고 다듬습니다",
    desc: "실시간 알림, 반응형 UI처럼 눈에 보이는 동작까지 확인한 뒤에야 기능을 완료로 봅니다.",
  },
];

const strengths = [
  {
    title: "실행력 · 완성으로 증명",
    desc: "HighPass 프로젝트에서 ERD 설계부터 CRUD, 알림·캘린더 기능까지 기획부터 구현까지 직접 완결했습니다.",
  },
  {
    title: "논리적 문제 해결",
    desc: "데이터베이스 모델링과 SQL 쿼리 설계를 바탕으로, 안정적으로 동작하는 서버 로직을 구성합니다.",
  },
  {
    title: "AI 정밀 활용",
    desc: "코드 뼈대 작성, 오류 분석, 반복 작업에 AI 도구를 정확한 지시로 활용해 개발 생산성을 높입니다.",
  },
  {
    title: "효율적인 협업",
    desc: "Git 브랜치 전략(feature/PR/merge) 기반으로 협업하고, 조장 경험으로 일정과 트러블을 관리합니다.",
  },
];

const project = {
  name: "HighPass",
  period: "2026.03.27 – 2026.05.13",
  team: "4인 팀 프로젝트",
  desc: "취업준비생을 위한 자격증 일정 관리·스터디 매칭·실시간 채팅 플랫폼. ERD 설계, CRUD 개발, WebSocket 기반 실시간 알림, 반응형 UI 구현을 담당했습니다.",
  stack: ["Java", "Spring Boot", "Spring Data JPA", "MariaDB", "React", "WebSocket"],
  link: "https://github.com/minsung1102/highpass_project",
};

const skills = [
  "Java",
  "Spring Boot",
  "Spring Data JPA",
  "MariaDB",
  "React",
  "TypeScript",
  "WebSocket",
  "OAuth2 / JWT",
  "Node.js",
  "Git",
];

export default function Home() {
  return (
    <main>
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-line/60 bg-ink/80 backdrop-blur">
        <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="font-display text-lg font-bold tracking-tight">곽민성</span>
          </div>
          <nav className="hidden gap-8 text-sm text-text-muted md:flex">
            <a href="#how" className="hover:text-text transition-colors">작업 방식</a>
            <a href="#strengths" className="hover:text-text transition-colors">핵심 역량</a>
            <a href="#project" className="hover:text-text transition-colors">프로젝트</a>
            <a href="#skills" className="hover:text-text transition-colors">기술 스택</a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/minsung1102"
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-[1.03] sm:inline-block"
            >
              GitHub 보기
            </a>
            <MobileNav />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:pt-24">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-signal">
              BACKEND-LEAN FULLSTACK DEVELOPER
            </p>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.12] tracking-tight md:text-5xl">
              아이디어를 <span className="text-accent">실행 결과물</span>로
              <br />
              증명하는 개발자
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-text-muted">
              Java·Spring Boot 기반 백엔드와 React 프론트엔드를 오가며,
              팀 프로젝트 HighPass에서 ERD 설계부터 실시간 알림(WebSocket)
              구현까지 직접 만들어냈습니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#project"
                className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.03]"
              >
                프로젝트 보기
              </a>
              <a
                href="https://github.com/minsung1102"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-line px-5 py-2.5 text-sm font-medium text-text transition-colors hover:border-text-muted"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Signature: idea-to-verify loop diagram */}
          <div className="relative mx-auto w-full max-w-sm animate-float">
            <svg viewBox="0 0 320 320" className="w-full" aria-hidden="true">
              <circle
                cx="160"
                cy="160"
                r="118"
                fill="none"
                stroke="#DFE3EA"
                strokeWidth="1.5"
              />
              <circle
                cx="160"
                cy="160"
                r="118"
                fill="none"
                stroke="#E2661F"
                strokeWidth="1.5"
                className="agent-path"
                strokeLinecap="round"
              />

              {[
                { step: "1", label: "IDEA", x: 160, y: 42 },
                { step: "2", label: "DESIGN", x: 278, y: 160 },
                { step: "3", label: "BUILD", x: 160, y: 278 },
                { step: "4", label: "VERIFY", x: 42, y: 160 },
              ].map((node) => (
                <g key={node.label} className="agent-node" data-step={node.step}>
                  <circle cx={node.x} cy={node.y} r="26" fill="#FFFFFF" stroke="#E2661F" strokeWidth="1.5" />
                  <text
                    x={node.x}
                    y={node.y + 4}
                    textAnchor="middle"
                    className="fill-text font-mono"
                    fontSize="9"
                  >
                    {node.label}
                  </text>
                </g>
              ))}

              <circle cx="160" cy="160" r="3" fill="#0E9C8C" />
            </svg>
            <div className="mt-2 flex items-center justify-center gap-2 font-mono text-[11px] text-text-muted">
              <span>아이디어 → 설계 → 구현 → 검증을 반복합니다</span>
              <span className="text-signal">● live</span>
            </div>
          </div>
        </div>
      </section>

      {/* How I work */}
      <section id="how" className="border-t border-line/60 bg-surface/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-mono text-xs tracking-[0.2em] text-signal">작업 방식</p>
          <h2 className="mt-3 font-display text-2xl font-bold tracking-tight md:text-3xl">
            네 단계를 거쳐 하나의 기능을 완성합니다
          </h2>

          {/* Signature: horizontal system-flow diagram */}
          <div className="mt-10 rounded-2xl border border-line bg-panel p-6">
            <svg viewBox="0 0 560 90" className="w-full" aria-hidden="true">
              <line x1="40" y1="45" x2="180" y2="45" stroke="#DFE3EA" strokeWidth="1.5" />
              <line x1="180" y1="45" x2="320" y2="45" stroke="#DFE3EA" strokeWidth="1.5" />
              <line x1="320" y1="45" x2="460" y2="45" stroke="#DFE3EA" strokeWidth="1.5" />
              <line
                x1="40"
                y1="45"
                x2="180"
                y2="45"
                stroke="#E2661F"
                strokeWidth="1.5"
                className="agent-path"
                strokeLinecap="round"
              />
              {[
                { x: 40, label: "IDEA", active: true },
                { x: 180, label: "DESIGN", active: false },
                { x: 320, label: "BUILD", active: false },
                { x: 460, label: "VERIFY", active: false },
              ].map((n) => (
                <g key={n.label}>
                  <circle
                    cx={n.x}
                    cy={45}
                    r={20}
                    fill="#FFFFFF"
                    stroke={n.active ? "#E2661F" : "#C7CDD6"}
                    strokeWidth="1.5"
                  />
                  <text
                    x={n.x}
                    y={49}
                    textAnchor="middle"
                    className="font-mono"
                    fontSize="8"
                    fill={n.active ? "#1B2333" : "#6B7280"}
                  >
                    {n.label}
                  </text>
                </g>
              ))}
              <circle cx="110" cy="45" r="3" fill="#0E9C8C" />
            </svg>
            <div className="mt-2 flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] text-text-muted">
              <span>ERD → CRUD → WebSocket → 반응형 UI</span>
              <span className="text-signal">● live</span>
            </div>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.n} className="relative">
                <span className="font-mono text-3xl font-medium text-line">
                  {s.n}
                </span>
                <p className="mt-1 font-mono text-xs tracking-[0.15em] text-accent">
                  {s.key}
                </p>
                <h3 className="mt-3 font-display text-lg font-bold leading-snug">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {s.desc}
                </p>
                {i < steps.length - 1 && (
                  <span className="absolute -right-4 top-2 hidden text-line md:block">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section id="strengths" className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-mono text-xs tracking-[0.2em] text-signal">핵심 역량</p>
        <h2 className="mt-3 font-display text-2xl font-bold tracking-tight md:text-3xl">
          실행과 논리, 그리고 협업으로 완성합니다
        </h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {strengths.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent/50"
            >
              <h3 className="font-display text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Project */}
      <section id="project" className="border-y border-line/60 bg-surface/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-mono text-xs tracking-[0.2em] text-signal">프로젝트</p>
          <h2 className="mt-3 font-display text-2xl font-bold tracking-tight md:text-3xl">
            {project.name}
          </h2>
          <div className="mt-8 rounded-2xl border border-line bg-panel p-8">
            <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-text-muted">
              <span>기간 {project.period}</span>
              <span>{project.team}</span>
            </div>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-text-muted">
              {project.desc}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-line px-3 py-1 font-mono text-xs text-text-muted"
                >
                  {s}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block rounded-full border border-line px-5 py-2 text-sm font-medium text-text transition-colors hover:border-accent"
            >
              GitHub에서 코드 보기 ↗
            </a>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-mono text-xs tracking-[0.2em] text-signal">기술 스택</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {skills.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-line px-4 py-2 font-mono text-xs text-text-muted"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
          함께 일할 기회를 찾고 있습니다
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-text-muted">
          문제가 생기면 지시를 기다리기보다 원인을 스스로 파악하고
          해결책을 제시하는 개발자가 되고 싶습니다.
        </p>
        <a
          href="https://github.com/minsung1102"
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.03]"
        >
          GitHub에서 더 보기
        </a>
      </section>

      <footer className="border-t border-line/60 py-8">
        <div className="mx-auto max-w-6xl px-6 text-xs text-text-muted">
          곽민성 — Backend-lean Fullstack Developer
        </div>
      </footer>
    </main>
  );
}
