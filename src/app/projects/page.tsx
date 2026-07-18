import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects, profile } from "@/data/portfolio";
import styles from "@/styles/modules/ProjectsAll.module.scss";

export const metadata: Metadata = {
  title: `전체 작업 · ${profile.name}`,
  description: "지금까지 진행한 전체 프로젝트 목록",
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.inner}>
          <Link href="/#projects" className={styles.back}>
            ← 홈으로
          </Link>

          <header className={styles.head}>
            <p className={styles.label}>All Works</p>
            <h1 className={styles.title}>전체 작업</h1>
            <p className={styles.count}>총 {projects.length}개의 프로젝트</p>
          </header>

          <div className={styles.grid}>
            {projects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i + 1} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
