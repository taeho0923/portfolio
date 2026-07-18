import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getProject, projects, profile } from "@/data/portfolio";
import styles from "@/styles/modules/ProjectDetail.module.scss";

type Params = { params: Promise<{ slug: string }> };

// 빌드 시 모든 프로젝트 경로를 정적 생성
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} · ${profile.name}`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const idx = projects.findIndex((p) => p.slug === slug);
  const prev = projects[idx - 1];
  const next = projects[idx + 1];

  return (
    <>
      <Header />
      <main className={styles.main}>
        <article className={styles.inner}>
          <Link href="/#projects" className={styles.back}>
            ← 작업 목록으로
          </Link>

          <header className={styles.head}>
            <p className={styles.metaLine}>
              <span className={styles.year}>{project.year}</span>
              {project.role && <span>{project.role}</span>}
            </p>
            <h1 className={styles.title}>{project.title}</h1>
            <p className={styles.summary}>{project.summary}</p>
          </header>

          <dl className={styles.facts}>
            {project.period && (
              <div className={styles.factRow}>
                <dt className={styles.factLabel}>기간</dt>
                <dd className={styles.factValue}>{project.period}</dd>
              </div>
            )}
            {project.role && (
              <div className={styles.factRow}>
                <dt className={styles.factLabel}>역할</dt>
                <dd className={styles.factValue}>{project.role}</dd>
              </div>
            )}
            <div className={styles.factRow}>
              <dt className={styles.factLabel}>기술</dt>
              <dd className={styles.factValue}>{project.tags.join(" · ")}</dd>
            </div>
          </dl>

          {project.overview && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Overview</h2>
              {project.overview.map((para) => (
                <p key={para} className={styles.para}>
                  {para}
                </p>
              ))}
            </section>
          )}

          {project.contributions && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>주요 작업</h2>
              <ul className={styles.contribs}>
                {project.contributions.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </section>
          )}

          {project.links && project.links.length > 0 && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Links</h2>
              <div className={styles.links}>
                {project.links.map((l) => (
                  <a
                    key={l.href}
                    className={styles.linkBtn}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {l.label} ↗
                  </a>
                ))}
              </div>
            </section>
          )}

          <nav className={styles.pager} aria-label="프로젝트 이동">
            {prev ? (
              <Link href={`/projects/${prev.slug}`} className={styles.pagerLink}>
                <span className={styles.pagerLabel}>← 이전</span>
                <span className={styles.pagerTitle}>{prev.title}</span>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`/projects/${next.slug}`}
                className={`${styles.pagerLink} ${styles.pagerNext}`}
              >
                <span className={styles.pagerLabel}>다음 →</span>
                <span className={styles.pagerTitle}>{next.title}</span>
              </Link>
            ) : (
              <span />
            )}
          </nav>
        </article>
      </main>
      <Footer />
    </>
  );
}
