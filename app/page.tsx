// root segment
import Navigation from "../components/navigation";

// app/page.tsx 파일에서 export default 되어야만 한다
export default function Tomato() {
  return (
    <div>
      <Navigation></Navigation>
      <h1>Hello NextJs!</h1>
    </div>
  );
}
