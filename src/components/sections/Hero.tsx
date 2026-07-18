import { profile, stats } from "@/data/portfolio";
import styles from "@/styles/modules/Hero.module.scss";

export function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.inner}>
        <p className={styles.status}>
          <span className={styles.dot} aria-hidden="true" />
          {profile.name} · 현재 새로운 기회를 찾고 있습니다
        </p>

        <h1 className={styles.title}>
          <span className={styles.line}>Publisher</span>
          <span className={styles.line}>
            <em>&amp;</em> Frontend
          </span>
          <span className={styles.line}>Developer.</span>
        </h1>

        <p className={styles.intro}>{profile.tagline}</p>

        <div className={styles.actions}>
          <a href="#projects" className={styles.cta}>
            작업 보기
          </a>
          <a href="#contact" className={styles.link}>
            연락하기
          </a>
        </div>

        <dl className={styles.stats}>
          {stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <dt className={styles.statValue}>{s.value}</dt>
              <dd className={styles.statLabel}>{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
