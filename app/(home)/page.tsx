"use client";

import { useEffect, useState } from "react";

// 먼저 react 에서 기본적으로 사용하던 fetch 방시을 사용해보자
// client 브라우저에서 api에 요청을 보낸다
// api key를 사용할 수도 없고 DB와 소통할 수도 없다
// 사용자는 항상 loading을 봐야한다

// 그래서 주로 보통은 ...
// React App <-> API <-> DB

export default function Page() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getMoives = async () => {
    const json = await (
      await fetch("https://nomad-movies.nomadcoders.workers.dev/movies")
    ).json();

    setMovies(json);
    setIsLoading(false);
  };

  useEffect(() => {
    getMoives();
  }, []);

  console.log(movies);

  return (
    <div>
      <h1>Hello NextJs!</h1>
      <div>{isLoading ? "loading..." : JSON.stringify(movies)}</div>
    </div>
  );
}
