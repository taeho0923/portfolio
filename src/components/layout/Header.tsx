"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { navItems, profile } from "@/data/portfolio";
import styles from "@/styles/modules/Header.module.scss";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // 홈("/")에서만 GNB(섹션 앵커)를 노출. 하위 페이지에선 로고만 홈으로.
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={styles.header} data-scrolled={scrolled}>
      <div className={styles.inner}>
        {isHome ? (
          <a href="#top" className={styles.logo}>
            {profile.nameEn}
          </a>
        ) : (
          <Link href="/" className={styles.logo}>
            {profile.nameEn}
          </Link>
        )}

        {isHome && (
          <nav className={styles.nav} aria-label="주요 메뉴">
            <ul className={styles.navList} data-open={open}>
              {navItems.map((item, i) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={styles.navLink}
                    onClick={() => setOpen(false)}
                  >
                    <span className={styles.navIndex} aria-hidden="true">
                      0{i + 1}
                    </span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        <div className={styles.actions}>
          <ThemeToggle />
          {isHome && (
            <button
              type="button"
              className={styles.menuBtn}
              aria-expanded={open}
              aria-label="메뉴 열기/닫기"
              onClick={() => setOpen((v) => !v)}
            >
              <span data-open={open} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
