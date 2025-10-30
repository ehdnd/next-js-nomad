import { Metadata } from "next";
import Navigation from "../components/navigation";

// metadata는 layout이나 page에서만 정의가 가능하다
// 또한 서버 컴포넌트에만 존재 가능하다
export const metadata: Metadata = {
  title: {
    template: "%s | Next Movies",
    default: "Loading...",
  },
  description: "the best movies on the best!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
