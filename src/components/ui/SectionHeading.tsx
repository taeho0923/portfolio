import type { ReactNode } from "react";
import styles from "@/styles/modules/SectionHeading.module.scss";

type Props = {
  index?: string;
  label: string;
  title: ReactNode;
  description?: string;
};

export function SectionHeading({ index, label, title, description }: Props) {
  return (
    <header className={styles.heading}>
      <p className={styles.meta}>
        {index && <span className={styles.index}>{index}</span>}
        <span className={styles.label}>{label}</span>
      </p>
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.desc}>{description}</p>}
    </header>
  );
}
