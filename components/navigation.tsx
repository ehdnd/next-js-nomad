"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  // Client Component 에서만 사용가능
  const path = usePathname();
  console.log(path);

  return (
    <nav>
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
