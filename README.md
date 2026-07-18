# Portfolio — 김태호 (Publisher & Frontend Developer)

퍼블리싱 기본기부터 프론트엔드 개발까지 아우르는 개인 포트폴리오 사이트입니다.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Style**: SCSS Modules (변수·믹스인 기반 디자인 시스템)
- **Theme**: 라이트/다크 모드 (next-themes)

## 주요 구성

- 소개 · 스킬 · 프로젝트 · 연락처 섹션
- 프로젝트: 카드 목록 → 상세 페이지(동적 라우트) → 전체 목록 페이지
- 유지·운영 이력 탭
- 무채색 에디토리얼 디자인, 반응형 대응

## 실행

```bash
pnpm install
pnpm dev
```

http://localhost:3000 에서 확인할 수 있습니다.

## 콘텐츠 수정

프로필·프로젝트·스킬 등 모든 내용은 [`src/data/portfolio.ts`](src/data/portfolio.ts) 한 곳에서 관리합니다.
