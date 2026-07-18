import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/portfolio";
import styles from "@/styles/modules/Contact.module.scss";

export function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.inner}>
        <SectionHeading
          index="04"
          label="Contact"
          title={
            <>
              새로운 프로젝트,
              <br />
              함께 이야기해요
            </>
          }
          description="협업 제안이나 궁금한 점이 있다면 편하게 연락 주세요."
        />

        <a className={styles.mail} href={`mailto:${profile.email}`}>
          {profile.email}
        </a>

        <ul className={styles.socials}>
          {profile.socials.map((s) => (
            <li key={s.label}>
              <a
                className={styles.social}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noreferrer noopener" : undefined}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
