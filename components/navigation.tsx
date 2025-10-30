"use client";

import styles from "../styles/navigation.module.css";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  // Client Component 에서만 사용가능
  const path = usePathname();
  console.log("📂 현재 경로:", path);

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link> {path === "/" ? "(here)" : ""}
        </li>
        <li>
          <Link href="/about-us">About Us</Link>
          {path === "/about-us" ? "(here)" : ""}
        </li>
      </ul>
    </nav>
  );
}
