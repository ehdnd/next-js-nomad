import Navigation from "../../components/navigation";

export default function AboutUs() {
  console.log("🖥️  [서버 전용] AboutUs 실행 - no use client");
  return (
    <div>
      <Navigation></Navigation>
      <h1>About us!</h1>
    </div>
  );
}

/*
"use client" 가 없다
이건 hydration이 필요없다
즉, "use client" 는
backend 에서 render 되고 frontend 에서 hydrate 되는걸 의미한다
그냥 "use hydrate" 라고 생각하자 ~

"use client" 아닌건 다 server component다
유저가 다운로드할 자바스크립트가 적어진다

client component 만 hydrate 한다
*/

/*
// 서버가 실행하는 순서:

1. AboutUs() 실행
   console.log("no use client")  // ← 터미널에 출력!
   └─ <div> 생성
       ├─ Navigation() 호출
       │   console.log("use client")  // ← 터미널에 출력!
       │   console.log(path) // /about-us ← 터미널에 출력!
       │   └─ <nav> HTML 생성
       └─ <h1>About us!</h1> 생성

2. HTML 완성해서 브라우저에 전송
*/

/*
// HTML 받고 표시
// JavaScript 다운로드
// Hydration 시작!

1. Navigation() 다시 실행!
   console.log("use client")  // ← 브라우저 콘솔에 출력!
   console.log(path) // /about-us ← 브라우저 콘솔에 출력!

2. AboutUs()는 실행 안 됨!
   // "no use client"는 브라우저에서 출력 안 됨!
*/

/*
서버 실행 (1번째)
   ↓
목적: HTML을 만들기 위해
   ↓
console.log("use client") → 터미널 출력
HTML 생성: <nav><button>0</button></nav>
   ↓
브라우저로 전송
   ↓
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   ↓
브라우저 실행 (2번째)
   ↓
목적: Hydration (React 앱으로 깨우기)
   ↓
console.log("use client") → 브라우저 콘솔 출력
Virtual DOM 생성
기존 HTML과 비교
이벤트 리스너 부착: <button onClick={...}>
useState 활성화
*/
