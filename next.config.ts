import type { NextConfig } from "next";
import path from "node:path";

// GitHub Pages 배포 시에만 basePath 적용 (로컬 dev는 루트 그대로 유지)
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repo = "portfolio";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // 정적 HTML로 내보내기 (GitHub Pages 등 정적 호스팅용)
  output: "export",
  // /projects/slug/ 형태의 폴더 구조로 생성 → Pages 경로와 호환
  trailingSlash: true,
  // 정적 export에서는 next/image 최적화 서버가 없으므로 비활성
  images: { unoptimized: true },
  // GitHub Pages는 https://<id>.github.io/portfolio/ 하위 경로로 서빙됨
  basePath: isGitHubPages ? `/${repo}` : undefined,
  assetPrefix: isGitHubPages ? `/${repo}/` : undefined,
  // pnpm-workspace.yaml 때문에 Turbopack이 루트를 잘못 추론하는 문제 방지
  turbopack: {
    root: path.resolve(process.cwd()),
  },
  // @use "variables"/"mixins" 처럼 짧은 경로로 SCSS 파셜을 불러오기 위한 설정
  sassOptions: {
    loadPaths: [path.join(process.cwd(), "src/styles")],
  },
};

export default nextConfig;
