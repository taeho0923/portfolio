import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/portfolio";
import styles from "@/styles/modules/About.module.scss";

export function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.inner}>
        <SectionHeading
          index="01"
          label="About"
          title="퍼블리싱과 프론트엔드, 그 사이"
        />
        <div className={styles.body}>
          <p className={styles.lead}>{profile.intro}</p>
          <dl className={styles.meta}>
            <div className={styles.metaRow}>
              <dt className={styles.metaLabel}>이름</dt>
              <dd className={styles.metaValue}>
                {profile.name} ({profile.nameEn})
              </dd>
            </div>
            <div className={styles.metaRow}>
              <dt className={styles.metaLabel}>역할</dt>
              <dd className={styles.metaValue}>{profile.role}</dd>
            </div>
            <div className={styles.metaRow}>
              <dt className={styles.metaLabel}>위치</dt>
              <dd className={styles.metaValue}>{profile.location}</dd>
            </div>
            <div className={styles.metaRow}>
              <dt className={styles.metaLabel}>이메일</dt>
              <dd className={styles.metaValue}>
                <a className={styles.metaLink} href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
