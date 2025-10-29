import Navigation from "../../components/navigation";

export default function AboutUs() {
  console.log("no use client");
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
*/
