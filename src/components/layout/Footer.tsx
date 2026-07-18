import { profile } from "@/data/portfolio";
import styles from "@/styles/modules/Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.name}>{profile.nameEn}</span>
        <p className={styles.copy}>
          © {profile.name}. Built with Next.js &amp; SCSS Modules.
        </p>
        <a href="#top" className={styles.top}>
          맨 위로 ↑
        </a>
      </div>
    </footer>
  );
}
