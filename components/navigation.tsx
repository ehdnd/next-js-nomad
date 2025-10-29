"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  console.log("🔄 [서버 + 브라우저] Navigation 실행 - use client");
  console.log(
    "📍 실행 환경:",
    typeof window === "undefined" ? "🖥️  서버(Node.js)" : "🌐 브라우저"
  );

  // Client Component 에서만 사용가능
  const path = usePathname();
  console.log("📂 현재 경로:", path);

  const [count, setCount] = useState(0);
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
        <li>
          <button onClick={() => setCount((c) => c + 1)}>{count}</button>
        </li>
      </ul>
    </nav>
  );
}

/*
/about-us ---> dummy HTML no interacttion (이벤트리스너 부착안됨)
          ---> init() new React App with dummy HTML starting point
          ---> navigation 이 a 에서 react component가 된다
/about-us ---> <button>0</button>
          ---> <button onClinck=...> 
          ---> 이게 hydration 단순 HTML을 React App 으로 초기화하는 작업
*/
