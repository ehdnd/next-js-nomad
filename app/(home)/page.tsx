import { Metadata } from "next";
import Link from "next/link";
import { API_URL } from "../constatns";

import styles from "../../styles/home.module.css";

export const metadata: Metadata = {
  title: "Home",
};

// server component라 Page() 안에 없어도 된다
// backend 에서 영화를 fetch 해온다
async function getMovies() {
  // 이렇게 되면 이 작업이 완료되기 전까지 사용자는 '아무것도' 보지 못한다
  // loading state가 이동되었기 때문이다
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // fetch한 데이터를 알아서 캐싱해둔다
  // 첫 번째 fetch 만 요청하고 이후 요청부터는 api 호출하지 않는다
  // 최신데이터를 가져와야하는 경우는 나중에 다루자.
  return (await fetch(API_URL, { cache: "force-cache" })).json();
}

// async function 으로 바꿔주자
export default async function HomePage() {
  const movies = await getMovies();

  return (
    <div>
      <h1 className={styles.title}>Best Movies</h1>
      <div className={styles.container}>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
