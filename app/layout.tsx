import Navigation from "../components/navigation";

export const metadata = {
  title: "NextJs",
  description: "letsss goo",
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
