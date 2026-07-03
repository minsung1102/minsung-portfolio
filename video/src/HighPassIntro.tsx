import {
  AbsoluteFill,
  Img,
  Sequence,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

const FONT = "'Malgun Gothic', 'Apple SD Gothic Neo', Arial, sans-serif";

const SLIDES = [
  {
    src: "01.png",
    title: "캘린더",
    desc: "자격증 일정을 한눈에 관리합니다",
    tech: "월별 일정 보기 · 오늘 할 일 · 일정 추가",
  },
  {
    src: "02.png",
    title: "자격증 정보",
    desc: "Q-Net · 데이터자격검정 일정을 조회하고 캘린더에 바로 추가합니다",
    tech: "일정 필터링 · 캘린더 연동",
  },
  {
    src: "03.png",
    title: "마이페이지",
    desc: "내 정보와 활동 내역을 관리합니다",
    tech: "회원정보 수정 · 내 게시물 · 좋아요 · 댓글",
  },
  {
    src: "04.png",
    title: "스터디 모집",
    desc: "자격증·지역 필터로 원하는 스터디를 찾습니다",
    tech: "온라인/오프라인 필터 · 모집글 작성",
  },
  {
    src: "05.png",
    title: "자유게시판",
    desc: "합격 후기와 정보를 나누는 커뮤니티 공간입니다",
    tech: "태그 필터 · 실시간 댓글",
  },
  {
    src: "06.png",
    title: "실시간 채팅",
    desc: "스터디 상대와 실시간으로 대화합니다",
    tech: "WebSocket 기반 1:1 채팅",
  },
  {
    src: "07.png",
    title: "회원 관리",
    desc: "관리자 페이지에서 전체 회원 상태를 관리합니다",
    tech: "회원 검색 · 정지 · 탈퇴 처리",
  },
  {
    src: "08.png",
    title: "게시글 관리",
    desc: "부적절한 게시글을 공개·숨김·삭제 처리합니다",
    tech: "게시글 상태 필터 · 복구",
  },
  {
    src: "09.png",
    title: "신고 및 문의",
    desc: "회원 신고와 문의를 접수하고 처리합니다",
    tech: "대기/처리 상태 관리",
  },
  {
    src: "10.png",
    title: "자격증 일정 관리",
    desc: "Q-Net · 데이터자격검정 원본 일정을 갱신합니다",
    tech: "외부 일정 데이터 동기화",
  },
];

const PER_IMAGE_FRAMES = 90;

function Slide({
  src,
  title,
  desc,
  tech,
  index,
}: {
  src: string;
  title: string;
  desc: string;
  tech: string;
  index: number;
}) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const enter = spring({ frame, fps, config: { damping: 200 } });
  const opacity = interpolate(frame, [PER_IMAGE_FRAMES - 15, PER_IMAGE_FRAMES], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const scale = interpolate(enter, [0, 1], [1.05, 1]);
  const textShift = interpolate(enter, [0, 1], [16, 0]);

  return (
    <AbsoluteFill style={{ backgroundColor: "#0E1116", opacity, fontFamily: FONT }}>
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 160,
        }}
      >
        <Img
          src={staticFile(src)}
          style={{
            width: "80%",
            borderRadius: 18,
            boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
            transform: `scale(${scale})`,
          }}
        />
      </AbsoluteFill>

      <AbsoluteFill style={{ alignItems: "center", paddingTop: 64 }}>
        <div
          style={{
            opacity: enter,
            transform: `translateY(${textShift}px)`,
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 18, letterSpacing: 4, color: "#0E9C8C" }}>
            {String(index + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
          </div>
          <div style={{ marginTop: 10, fontSize: 40, fontWeight: 700, color: "#FFFFFF" }}>
            {title}
          </div>
          <div style={{ marginTop: 10, fontSize: 20, color: "#C7CDD6" }}>{desc}</div>
        </div>
      </AbsoluteFill>

      <AbsoluteFill style={{ justifyContent: "flex-end", alignItems: "center", paddingBottom: 44 }}>
        <div
          style={{
            fontSize: 16,
            letterSpacing: 1,
            color: "#E2661F",
            opacity: enter,
          }}
        >
          {tech}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
}

function TitleCard() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const enter = spring({ frame, fps, config: { damping: 200 } });
  const opacity = interpolate(frame, [45, 60], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0E1116",
        justifyContent: "center",
        alignItems: "center",
        opacity,
        fontFamily: FONT,
      }}
    >
      <div
        style={{
          textAlign: "center",
          transform: `translateY(${interpolate(enter, [0, 1], [24, 0])}px)`,
          opacity: enter,
        }}
      >
        <div style={{ fontSize: 20, letterSpacing: 6, color: "#0E9C8C" }}>
          TEAM PROJECT
        </div>
        <div style={{ marginTop: 16, fontSize: 64, fontWeight: 700, color: "#FFFFFF" }}>
          High<span style={{ color: "#E2661F" }}>Pass</span>
        </div>
        <div style={{ marginTop: 16, fontSize: 22, color: "#9CA3AF" }}>
          자격증 일정 관리 · 스터디 매칭 · 실시간 채팅 플랫폼
        </div>
      </div>
    </AbsoluteFill>
  );
}

export function HighPassIntro() {
  return (
    <AbsoluteFill>
      <Sequence durationInFrames={75}>
        <TitleCard />
      </Sequence>
      {SLIDES.map((slide, i) => (
        <Sequence key={slide.src} from={75 + i * PER_IMAGE_FRAMES} durationInFrames={PER_IMAGE_FRAMES}>
          <Slide {...slide} index={i} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
}
