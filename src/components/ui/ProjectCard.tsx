import Link from "next/link";
import type { Project } from "@/data/portfolio";
import styles from "@/styles/modules/ProjectCard.module.scss";

type Props = {
  project: Project;
  index: number; // 카드에 표시할 번호 (1부터)
};

export function ProjectCard({ project, index }: Props) {
  return (
    <Link href={`/projects/${project.slug}`} className={styles.card}>
      <div className={styles.top}>
        <span className={styles.num}>{String(index).padStart(2, "0")}</span>
        <span className={styles.year}>{project.year}</span>
      </div>

      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.summary}>{project.summary}</p>

      <div className={styles.foot}>
        <ul className={styles.tags}>
          {project.tags.slice(0, 3).map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <span className={styles.arrow} aria-hidden="true">
          →
        </span>
      </div>
    </Link>
  );
}
