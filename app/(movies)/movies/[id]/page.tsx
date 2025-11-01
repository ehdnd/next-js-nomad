import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

interface IParams {
  params: Promise<{ id: string }>;
}

// parmas 를 여기에도 전달해준다
export async function generateMetadata({ params }: IParams) {
  const { id } = await params;
  // 여러번 fetch 시 cache 된다면 큰 문제가 없다
  const movie = await getMovie(id);
  return { title: movie.title };
}

export default async function MovieDetailPage({ params }: IParams) {
  const { id } = await params;

  // 두 컴포넌트 모두 async 컴포넌트이기에 Suspense로 묶자
  // 의미:
  // - AsyncComponent가 데이터 기다리는 동안
  // - fallback(로딩중...)을 보여줌
  // - 데이터 도착하면 AsyncComponent로 교체
  // loading.tsx 가 전체 로딩 화면을 대체했다
  // -> 페이지는 바로 유저에게 표시된다
  return (
    <div>
      <h3>Movie Info</h3>
      <Suspense fallback={<h1>Loading movie info...</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <h3>Movie Videos</h3>
      <Suspense fallback={<h1>Loading movie videos...</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}

/*
0.0초: 사용자 페이지 접속
       ↓
0.1초: HTML Shell 도착 (Streaming!)
       화면:
       ┌────────────────────────────┐
       │ Loading movie info...      │  ← Suspense fallback 1
       │ Loading movie videos...    │  ← Suspense fallback 2
       └────────────────────────────┘
       
       백그라운드:
       - MovieInfo fetch 시작 (1초 예상)
       - MovieVideos fetch 시작 (1초 예상)
       (둘이 동시에 진행! 병렬!)
       ↓
1.0초: MovieInfo 데이터 도착 (Streaming!)
       화면:
       ┌────────────────────────────┐
       │ Avengers: Endgame         │  ← MovieInfo로 교체 ✅
       │ Loading movie videos...    │  ← 아직 로딩 중
       └────────────────────────────┘
       ↓
1.0초: MovieVideos 데이터 도착 (Streaming!)
       화면:
       ┌────────────────────────────┐
       │ Avengers: Endgame         │  
       │ [Video1, Video2, ...]     │  ← MovieVideos로 교체 ✅
       └────────────────────────────┘
 */
