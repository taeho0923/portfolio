"use client";

import { useState } from "react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects, maintenance, maintenanceTags } from "@/data/portfolio";
import styles from "@/styles/modules/Projects.module.scss";

// 메인에 노출할 구축 프로젝트 수
const HOME_LIMIT = 6;

type Tab = "build" | "maintenance";

export function Projects() {
  const [tab, setTab] = useState<Tab>("build");

  const shown = projects.slice(0, HOME_LIMIT);
  const hasMore = projects.length > HOME_LIMIT;

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.inner}>
        <SectionHeading
          index="03"
          label="Selected Works"
          title="선택된 작업"
          description="구축 프로젝트와 유지·운영으로 나눠 정리했습니다."
        />

        <div className={styles.tabs} role="tablist" aria-label="프로젝트 분류">
          <button
            type="button"
            role="tab"
            aria-selected={tab === "build"}
            className={styles.tab}
            data-active={tab === "build"}
            onClick={() => setTab("build")}
          >
            구축 프로젝트
            <span className={styles.tabCount}>{projects.length}</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={tab === "maintenance"}
            className={styles.tab}
            data-active={tab === "maintenance"}
            onClick={() => setTab("maintenance")}
          >
            유지 · 운영
            <span className={styles.tabCount}>{maintenance.length}</span>
          </button>
        </div>

        {tab === "build" ? (
          <>
            <div className={styles.grid}>
              {shown.map((project, i) => (
                <ProjectCard key={project.slug} project={project} index={i + 1} />
              ))}
            </div>
            {hasMore && (
              <div className={styles.more}>
                <Link href="/projects" className={styles.moreBtn}>
                  전체 작업 보기 ({projects.length}) →
                </Link>
              </div>
            )}
          </>
        ) : (
          <div className={styles.grid}>
            {maintenance.map((item) => (
              <div key={item.name} className={styles.opCard}>
                <span className={styles.opName}>{item.name}</span>
                <ul className={styles.opPoints}>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <ul className={styles.opTags}>
                  {(item.tags ?? maintenanceTags).map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
