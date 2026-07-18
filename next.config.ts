import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  reactCompiler: true,
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
