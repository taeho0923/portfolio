// ============================================================
// 포트폴리오 콘텐츠 — 이 파일만 수정하면 사이트 내용이 바뀝니다.
// ============================================================

export const profile = {
  name: "김태호",
  nameEn: "Kim Taeho",
  role: "Publisher & Frontend Developer",
  tagline: "성실함을 바탕으로, 반응형에 강점을 가진 퍼블리셔이자 프론트엔드 개발자입니다.",
  intro:
    "2022년부터 웹 퍼블리셔로 커리어를 시작해 다양한 웹 서비스를 구축하며 HTML, CSS, JavaScript 기반의 UI 구현 경험을 쌓았습니다. 2024년부터는 프론트엔드 개발을 병행하며 React, Next.js 등으로 기능 개발까지 담당하고 있습니다. 퍼블리싱 경험을 바탕으로 디자인 의도를 정확하게 구현하는 것은 물론, 사용자 경험과 유지보수성을 함께 고려하는 개발자가 되고자 노력하고 있습니다.",
  email: "lmnb200@gmail.com",
  location: "경기도 의정부시",
  // GitHub·블로그 등은 준비되면 { label, href } 형태로 추가하면 Contact에 버튼이 생깁니다.
  socials: [] as { label: string; href: string }[],
};

export const stats = [
  { value: "4+", label: "년 퍼블리싱 경력" },
  { value: "1+", label: "년 프론트엔드 경력" },
  { value: "10+", label: "진행 프로젝트" },
];

export type SkillGroup = {
  category: string;
  description: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Publishing",
    description: "시맨틱 마크업과 크로스 브라우징, 접근성 중심의 퍼블리싱",
    items: [
      "HTML5 / 시맨틱 마크업",
      "CSS3 / SCSS",
      "반응형 · 적응형 레이아웃",
      "웹 접근성 (WCAG)",
      "크로스 브라우징",
      "웹 표준",
    ],
  },
  {
    category: "Frontend",
    description: "컴포넌트 기반 UI 개발과 API 연동",
    items: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Next.js",
      "상태 관리 (Zustand)",
      "Fetch API 통신",
      "GSAP",
      "Thymeleaf",
    ],
  },
  {
    category: "Tools & Workflow",
    description: "디자인 시안 작업과 협업·버전 관리에 사용하는 도구들",
    items: ["Photoshop", "Figma", "Git", "GitHub", "Gitea"],
  },
];

export type Project = {
  slug: string; // URL 경로: /projects/{slug}
  title: string;
  summary: string; // 목록에 보이는 한 줄 요약
  tags: string[];
  year: string;
  role?: string; // 담당 역할
  period?: string; // 진행 기간
  overview?: string[]; // 상세 페이지 개요 문단 (여러 단락)
  contributions?: string[]; // 주요 기여/작업 항목
  links?: { label: string; href: string }[]; // 라이브 사이트 / GitHub 등
};

export const projects: Project[] = [
  {
    slug: "daewoong-pharm",
    title: "대웅제약 웹사이트 리뉴얼",
    summary:
      "대웅제약 웹사이트를 Next.js 기반으로 전면 리뉴얼한 프로젝트. 퍼블리싱부터 프론트엔드 구현까지 전반을 담당했습니다.",
    tags: ["Next.js", "TypeScript", "SCSS"],
    year: "2026",
    role: "퍼블리싱 · 프론트엔드",
    period: "2025.08 – 2026.06",
    overview: [
      "대웅제약 웹사이트를 Next.js와 TypeScript 기반으로 전면 리뉴얼한 프로젝트입니다.",
      "디자인 시안을 화면으로 옮기는 퍼블리싱부터 컴포넌트 구현까지 프로젝트 전반의 작업을 담당했습니다.",
    ],
    contributions: [
      "Next.js · TypeScript 환경에서 페이지 전반 퍼블리싱 및 개발",
      "SCSS 모듈 기반 스타일 구조 설계",
      "반응형 레이아웃 및 크로스 브라우징 대응",
    ],
  },
  {
    slug: "daewoong-bio",
    title: "대웅바이오 홈페이지 리뉴얼",
    summary:
      "대웅바이오 홈페이지를 Next.js 기반으로 리뉴얼한 프로젝트. 반응형 작업과 오픈 전 수정사항 대응을 담당했습니다.",
    tags: ["Next.js", "TypeScript", "SCSS"],
    year: "2026",
    role: "퍼블리싱 · 프론트엔드",
    period: "2025.08 – 2026.03",
    overview: [
      "대웅바이오 홈페이지를 Next.js와 TypeScript 기반으로 리뉴얼한 프로젝트입니다.",
      "리스트·상세(뷰) 페이지의 데이터 관련 프론트엔드 작업을 전반적으로 담당했고, 반응형 작업과 오픈 전 수정사항 대응, 일부 페이지 퍼블리싱에도 참여했습니다.",
    ],
    contributions: [
      "리스트·상세(뷰) 페이지의 데이터 관련 프론트엔드 작업 전반 담당",
      "반응형 레이아웃 작업 담당",
      "오픈 전 수정사항 대응",
      "일부 페이지 퍼블리싱 작업 참여",
    ],
  },
  {
    slug: "crown-hotel-park-seoul",
    title: "크라운 호텔 파크 서울 웹사이트",
    summary:
      "크라운 호텔 파크 서울 웹사이트의 전체 페이지를 퍼블리싱하고, fetch로 연동된 데이터의 화면 표시 오류를 수정한 프로젝트.",
    tags: ["HTML5", "SCSS", "JavaScript", "Fetch API"],
    year: "2026",
    role: "퍼블리싱 · 프론트엔드",
    period: "2026.02 – 2026.04",
    overview: [
      "크라운 호텔 파크 서울 웹사이트의 전체 페이지 퍼블리싱을 담당한 프로젝트입니다.",
      "애니메이션과 반응형 작업을 진행했고, fetch로 연동된 데이터가 화면에 표시되는 과정에서 발생한 레이아웃 깨짐과 콘텐츠 오류를 바로잡았습니다.",
    ],
    contributions: [
      "전체 페이지 퍼블리싱",
      "애니메이션 및 인터랙션 구현",
      "반응형 작업",
      "fetch로 연동된 데이터의 화면 표시 오류(레이아웃 깨짐·콘텐츠 오류) 수정",
    ],
  },
  {
    slug: "mirjin-legend",
    title: "미르진 전설 사전예약 사이트",
    summary:
      "모바일 게임 '미르진 전설'의 사전예약 사이트. 로그인·사전예약·이벤트 등 전반적인 API 통신 작업을 담당했습니다.",
    tags: ["HTML5", "SCSS", "JavaScript", "Fetch API"],
    year: "2026",
    role: "퍼블리싱 · 프론트엔드",
    period: "2026.04 – 2026.05",
    overview: [
      "모바일 게임 '미르진 전설'의 사전예약 이벤트 사이트를 작업한 프로젝트입니다.",
      "로그인, 사전예약 등록, 이벤트(묵찌빠·룰렛·URL 등록) 등 사이트 전반의 API 통신 작업을 담당했습니다.",
    ],
    contributions: [
      "로그인 API 연동",
      "사전예약 등록 API 연동",
      "이벤트 기능 구현 및 API 연동 — 묵찌빠, 룰렛, URL 등록",
      "fetch 기반 전체 API 통신 및 화면 연동 작업 담당",
      "수정 및 오류 대응",
    ],
  },
  {
    slug: "gc-care",
    title: "GC케어 모바일 앱 화면",
    summary:
      "GC케어 모바일 앱 기반 화면을 HTML·SCSS·JavaScript로 퍼블리싱한 프로젝트.",
    tags: ["HTML5", "SCSS", "JavaScript"],
    year: "2026",
    role: "퍼블리싱",
    period: "2026.02",
    overview: [
      "GC케어의 모바일 앱 기반 화면을 작업한 프로젝트입니다.",
      "HTML·SCSS·JavaScript로 앱 내 화면을 퍼블리싱했습니다.",
    ],
    contributions: [
      "모바일 앱 기반 화면 퍼블리싱",
      "HTML · SCSS · JavaScript 기반 화면 구현",
    ],
  },
  {
    slug: "ktoa-spam-block",
    title: "KTOA 스팸번호차단시스템",
    summary:
      "KTOA 스팸번호차단시스템 인터랙션 페이지. GSAP를 활용해 모션 인터랙션을 구현했습니다.",
    tags: ["HTML5", "SCSS", "JavaScript", "GSAP"],
    year: "2026",
    role: "퍼블리싱 · 인터랙션",
    period: "2026.01 – 2026.02",
    overview: [
      "KTOA 스팸번호차단시스템의 인터랙션 페이지를 제작한 프로젝트입니다.",
      "GSAP를 활용해 스크롤·모션 인터랙션이 담긴 페이지를 구현했고, 약 2주간 수정사항 대응과 내용 추가 작업까지 진행했습니다.",
    ],
    contributions: [
      "GSAP를 활용한 인터랙션 페이지 제작",
      "스크롤·모션 인터랙션 구현",
      "HTML · SCSS · JavaScript 퍼블리싱",
      "수정사항 대응 및 내용 추가 작업",
    ],
  },
  {
    slug: "hanwha-campaign",
    title: "한화그룹 캠페인 사이트",
    summary:
      "한화그룹 캠페인 사이트. 반응형 퍼블리싱과 이벤트 참여 API 작업을 담당했습니다.",
    tags: ["Next.js", "TypeScript", "SCSS"],
    year: "2025",
    role: "퍼블리싱 · 프론트엔드",
    period: "2025.06 – 2025.07",
    overview: [
      "한화그룹 캠페인 사이트를 Next.js와 TypeScript 기반으로 작업한 프로젝트입니다.",
      "반응형 퍼블리싱과 이벤트 참여 기능의 API 연동 작업을 담당했습니다.",
    ],
    contributions: [
      "반응형 사이트 퍼블리싱",
      "이벤트 참여 기능 API 연동",
    ],
  },
  {
    slug: "dorco-renewal",
    title: "도루코 웹사이트 리뉴얼",
    summary:
      "도루코 웹사이트를 PC·모바일 버전으로 리뉴얼한 프로젝트. 모바일 페이지 전체 퍼블리싱과 PC 페이지 수정 작업을 담당했습니다.",
    tags: ["HTML5", "SCSS", "JavaScript"],
    year: "2025",
    role: "퍼블리싱",
    period: "2025.03 – 2025.07",
    overview: [
      "도루코 웹사이트를 PC·모바일 버전으로 리뉴얼한 프로젝트입니다.",
      "모바일 페이지 전반의 퍼블리싱을 담당했고, PC 페이지는 오픈 전 고객사 요청 수정사항과 내부 테스트 피드백을 반영했습니다.",
    ],
    contributions: [
      "모바일 페이지 전체 퍼블리싱",
      "PC 페이지 오픈 전 고객사 수정사항 반영",
      "내부 테스트 피드백 수정 대응",
    ],
  },
  {
    slug: "incheon-gyeyang-industrial",
    title: "인천 계양산업단지 웹사이트",
    summary:
      "인천 계양산업단지 웹사이트를 PC·모바일로 작업한 프로젝트. 퍼블리싱과 Thymeleaf 기반 데이터 노출, 3D 화면 구조물 배치를 담당했습니다.",
    tags: ["HTML5", "SCSS", "JavaScript", "Thymeleaf", "Unity"],
    year: "2025",
    role: "퍼블리싱 · 프론트엔드",
    period: "2024.09 – 2025.03",
    overview: [
      "인천 계양산업단지 웹사이트를 PC·모바일 버전으로 작업한 프로젝트입니다.",
      "Thymeleaf 템플릿(th:block 등)을 활용해 백엔드에서 전달되는 데이터를 화면에 노출했고, 3D 화면에는 Unity로 건물·벤치·가로등 등 구조물을 배치했습니다.",
    ],
    contributions: [
      "PC·모바일 페이지 퍼블리싱",
      "Thymeleaf(th:block 등)로 백엔드 데이터 화면 노출 작업",
      "Unity로 3D 화면 구조물(건물·벤치·가로등 등) 배치",
    ],
  },
  {
    slug: "pitapat-renewal",
    title: "피터패트 홈페이지 리뉴얼",
    summary:
      "피터패트 홈페이지를 반응형으로 리뉴얼한 프로젝트. 메인·스토리·프로젝트 페이지 작업과 이후 수정을 담당했습니다.",
    tags: ["HTML5", "SCSS", "JavaScript"],
    year: "2024",
    role: "퍼블리싱 · 프론트엔드",
    period: "2024.10 – 2024.12",
    overview: [
      "피터패트 홈페이지를 반응형으로 리뉴얼한 프로젝트입니다.",
      "메인, 스토리(Story), 프로젝트(Project) 페이지를 작업했고, 오픈 이후 수정 작업도 전담했습니다.",
    ],
    contributions: [
      "메인 · 스토리 · 프로젝트 페이지 반응형 퍼블리싱",
      "오픈 이후 수정 및 유지보수 전담",
    ],
  },
  {
    slug: "byryzn-renewal",
    title: "바이리즌(byryzn) 리뉴얼",
    summary:
      "한 페이지로 구성된 바이리즌 사이트 리뉴얼. 페이지 전반에 인터랙션을 구현했습니다.",
    tags: ["HTML5", "CSS", "jQuery", "GSAP"],
    year: "2024",
    role: "퍼블리싱 · 인터랙션",
    period: "2024.06 · 약 2주",
    overview: [
      "한 페이지로 구성된 바이리즌 사이트를 리뉴얼한 프로젝트입니다.",
      "페이지 전반에 스크롤·모션 인터랙션을 적용했으며, 약 2주간 진행했습니다.",
    ],
    contributions: [
      "원페이지 사이트 퍼블리싱",
      "jQuery · GSAP 기반 전체 인터랙션 구현",
    ],
  },
  {
    slug: "samsung-fire-tms",
    title: "삼성화재 TMS",
    summary:
      "삼성화재 TMS 프로젝트. Laravel 환경에서 진행했으며, 처음으로 fetch 통신을 적용해 데이터 연동을 구현했습니다.",
    tags: ["HTML5", "CSS", "JavaScript", "Fetch API", "Laravel"],
    year: "2024",
    role: "퍼블리싱 · 프론트엔드",
    period: "2024.04 – 2024.06",
    overview: [
      "삼성화재 TMS 프로젝트를 Laravel 환경에서 진행했습니다.",
      "처음으로 fetch를 활용한 API 통신을 도입해 백엔드 데이터를 화면에 연동했습니다.",
    ],
    contributions: [
      "Laravel 환경에서 HTML · CSS · JavaScript 퍼블리싱",
      "fetch 기반 API 통신 및 데이터 연동 (첫 적용)",
    ],
  },
  {
    slug: "odin-launch",
    title: "카카오게임 오딘 런칭 페이지",
    summary:
      "카카오게임 '오딘'의 신규 직업 런칭 프로모션 페이지를 퍼블리싱했습니다.",
    tags: ["HTML5", "CSS", "JavaScript"],
    year: "2023",
    role: "퍼블리싱",
    period: "2023.06",
    overview: [
      "카카오게임 '오딘'의 신규 직업 런칭을 알리는 프로모션 페이지를 작업한 프로젝트입니다.",
    ],
    contributions: [
      "신규 직업 런칭 페이지 퍼블리싱",
      "HTML · CSS · JavaScript 기반 구현",
    ],
  },
  {
    slug: "deochaeum-event",
    title: "더채움 이벤트 페이지",
    summary: "더채움 이벤트 페이지를 PC·모바일 두 버전으로 퍼블리싱했습니다.",
    tags: ["HTML5", "CSS", "JavaScript"],
    year: "2023",
    role: "퍼블리싱",
    period: "2023.07 – 2023.08",
    overview: [
      "더채움 이벤트 페이지를 작업한 프로젝트입니다.",
      "PC·모바일 두 버전으로 퍼블리싱했습니다.",
    ],
    contributions: [
      "이벤트 페이지 PC·모바일 퍼블리싱",
      "HTML · CSS · JavaScript 기반 구현",
    ],
  },
  {
    slug: "luna-preregister",
    title: "루나 사전예약 런칭 페이지",
    summary:
      "게임 '루나'의 사전예약 런칭 페이지. 원페이지 구성으로 작업했습니다.",
    tags: ["HTML5", "CSS", "jQuery"],
    year: "2023",
    role: "퍼블리싱",
    period: "2023.06 – 2023.08",
    overview: [
      "게임 '루나'의 사전예약부터 런칭까지 이어지는 원페이지 프로모션 페이지를 작업한 프로젝트입니다.",
    ],
    contributions: [
      "원페이지 사이트 퍼블리싱",
      "HTML · CSS · jQuery 기반 구현",
    ],
  },
  {
    slug: "giftplay",
    title: "기프트플레이",
    summary:
      "기프트플레이 사이트 구축. PC·모바일 전반의 페이지를 제작했습니다.",
    tags: ["HTML5", "CSS", "JavaScript"],
    year: "2024",
    role: "퍼블리싱",
    period: "2023.01 – 2024.07",
    overview: [
      "기프트플레이 사이트를 구축한 프로젝트입니다.",
      "PC·모바일 전반의 페이지 생성을 담당했으며, 백엔드 이슈로 오픈이 지연되어 2024년 7월에 오픈했습니다.",
    ],
    contributions: [
      "PC·모바일 전반 페이지 퍼블리싱",
      "신규 페이지 제작 및 구축",
    ],
  },
  {
    slug: "cloit",
    title: "클로잇",
    summary:
      "클로잇 신규 페이지 구축. Ajax 통신으로 데이터를 연동했습니다.",
    tags: ["HTML5", "CSS", "jQuery", "Ajax"],
    year: "2023",
    role: "퍼블리싱 · 프론트엔드",
    period: "2022.11 – 2023.01",
    overview: [
      "클로잇의 신규 페이지를 구축한 프로젝트입니다.",
      "Ajax 통신을 활용해 백엔드 데이터를 화면에 연동했습니다.",
    ],
    contributions: [
      "신규 페이지 구축 퍼블리싱",
      "Ajax 기반 데이터 연동",
    ],
  },
  {
    slug: "samgi",
    title: "삼기",
    summary:
      "삼기 웹사이트 퍼블리싱. 메인을 제외한 전체 페이지를 PC·모바일로 작업했습니다.",
    tags: ["HTML5", "CSS", "jQuery"],
    year: "2022",
    role: "퍼블리싱",
    period: "2022.10 – 2022.12",
    overview: [
      "삼기 웹사이트를 작업한 프로젝트입니다.",
      "메인 페이지를 제외한 전체 페이지를 PC·모바일로 퍼블리싱했습니다.",
    ],
    contributions: [
      "메인 외 전체 페이지 PC·모바일 퍼블리싱",
      "HTML · CSS · jQuery 기반 구현",
    ],
  },
  {
    slug: "cenovis-events",
    title: "세노비스 이벤트 페이지",
    summary:
      "세노비스 이벤트 페이지 3종(트리플러스·키즈·수퍼바이오틱스)을 PC·모바일로 작업했습니다.",
    tags: ["HTML5", "CSS", "JavaScript"],
    year: "2023",
    role: "퍼블리싱",
    overview: [
      "세노비스의 이벤트 페이지 3종(트리플러스, 키즈, 수퍼바이오틱스)을 작업한 프로젝트입니다.",
      "각 페이지는 1~2주 정도 소요됐으며, PC·모바일 두 버전으로 퍼블리싱했습니다.",
    ],
    contributions: [
      "이벤트 페이지 3종 PC·모바일 퍼블리싱",
      "페이지당 1~2주 진행",
    ],
  },
  {
    slug: "dk-genesis",
    title: "DK제네시스 게임사이트",
    summary:
      "DK제네시스 게임사이트. 원페이지 스크롤 구성으로 약 2주간 작업했습니다.",
    tags: ["HTML5", "CSS", "jQuery"],
    year: "2022",
    role: "퍼블리싱",
    period: "2022.12 · 약 2주",
    overview: [
      "DK제네시스 게임사이트를 작업한 프로젝트입니다.",
      "원페이지 스크롤 형식으로 구성했으며, 약 2주간 진행했습니다.",
    ],
    contributions: [
      "원페이지 스크롤 사이트 퍼블리싱",
      "HTML · CSS · jQuery 기반 구현",
    ],
  },
];

// 오픈일(YYYY.MM) — 목록을 최신 오픈순으로 정렬하는 기준.
// 여기 값만 바꾸면 표시 순서가 자동으로 바뀝니다. (없으면 맨 뒤로)
const openDate: Record<string, string> = {
  "daewoong-pharm": "2026.06",
  "daewoong-bio": "2026.03",
  "crown-hotel-park-seoul": "2026.04",
  "mirjin-legend": "2026.05",
  "gc-care": "2026.02",
  "ktoa-spam-block": "2026.02",
  "hanwha-campaign": "2025.07",
  "dorco-renewal": "2025.07",
  "incheon-gyeyang-industrial": "2025.03",
  "pitapat-renewal": "2024.12",
  "byryzn-renewal": "2024.06",
  "samsung-fire-tms": "2024.06",
  giftplay: "2024.07",
  "odin-launch": "2023.06",
  "deochaeum-event": "2023.08",
  "luna-preregister": "2023.08",
  cloit: "2023.01",
  "cenovis-events": "2023.06", // 정확한 월 미확인(대략치)
  samgi: "2022.12",
  "dk-genesis": "2022.12",
};

// 오픈일 내림차순(최신 먼저)으로 정렬
projects.sort((a, b) =>
  (openDate[b.slug] ?? "").localeCompare(openDate[a.slug] ?? "")
);

// slug로 프로젝트 조회 (상세 페이지에서 사용)
export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

// 유지·운영 담당 (상세 페이지 없이 카드로 노출)
export const maintenanceTags = ["HTML5", "SCSS", "JavaScript"];

export type Maintenance = {
  name: string;
  points: string[];
  tags?: string[]; // 지정하면 이 태그 사용, 없으면 공통(maintenanceTags)
};

export const maintenance: Maintenance[] = [
  {
    name: "메이필드",
    points: [
      "홈페이지 유지보수",
      "신규 페이지 제작 및 수정",
      "다국어 지원 (국문·영문·일문)",
      "PC · 모바일 대응",
    ],
  },
  {
    name: "메이플레이스",
    points: [
      "홈페이지 유지보수",
      "신규 페이지 제작 및 수정",
      "다국어 지원 (국문·영문·일문)",
      "PC · 모바일 대응",
    ],
  },
  {
    name: "삼성디스플레이",
    points: [
      "리스트 업데이트 및 페이지 수정",
      "다국어 지원 (국문·영문·중문·베트남어)",
      "웹 접근성 검사 및 심사 대응",
      "반응형 대응",
    ],
  },
  {
    name: "다오기프트",
    points: ["페이지 수정 및 신규 기능 추가", "메인 페이지 리뉴얼"],
  },
  {
    name: "한국투자증권 (파견)",
    points: ["웹 접근성 개선 작업", "접근성 심사 대응 및 수정"],
  },
  {
    name: "배터리인사이드 (LG에너지솔루션)",
    points: ["홈페이지 유지보수"],
    tags: ["HTML5", "CSS", "jQuery", "WordPress"],
  },
  {
    name: "SSG 블로그",
    points: ["블로그 유지보수"],
    tags: ["HTML5", "CSS", "jQuery", "WordPress"],
  },
  {
    name: "예장총회",
    points: ["홈페이지 유지보수"],
    tags: ["HTML5", "CSS", "jQuery"],
  },
  {
    name: "레오버넷",
    points: ["홈페이지 유지보수"],
    tags: ["HTML5", "CSS", "JavaScript"],
  },
];

export const navItems = [
  { label: "소개", href: "#about" },
  { label: "스킬", href: "#skills" },
  { label: "프로젝트", href: "#projects" },
  { label: "연락처", href: "#contact" },
];
