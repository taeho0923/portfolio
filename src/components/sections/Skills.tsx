import { SectionHeading } from "@/components/ui/SectionHeading";
import { skills } from "@/data/portfolio";
import styles from "@/styles/modules/Skills.module.scss";

export function Skills() {
  return (
    <section className={styles.skills} id="skills">
      <div className={styles.inner}>
        <SectionHeading
          index="02"
          label="Skills"
          title="다루는 기술"
          description="마크업 기본기부터 프론트엔드 개발까지, 실무에서 쓰는 도구들입니다."
        />

        <div className={styles.list}>
          {skills.map((group, i) => (
            <article key={group.category} className={styles.row}>
              <div className={styles.head}>
                <span className={styles.num}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className={styles.category}>{group.category}</h3>
                  <p className={styles.desc}>{group.description}</p>
                </div>
              </div>
              <ul className={styles.tags}>
                {group.items.map((item) => (
                  <li key={item} className={styles.tag}>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
