// use client.. 이게 에러 복구 가능성을 준다 (이 강의에서는 안 가르쳐줄거임)
"use client";

import { useEffect } from "react";

// 자식 컴포넌트에서 오류가 발생하면 `page.tsx` 자체가 로드되지 않는다
// `/movies/[id]` 라우트에서만 적용되는 error 화면
export default function Error({
  error,
  reset, // ← 재시도 함수!
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Error caught:", error);
  }, [error]);

  return (
    <div>
      <h1>Something went wrong!</h1>
      <p>{error.message}</p>

      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
