import { API_URL } from "../app/constatns";

export async function getMovie(id: string) {
  console.log(`Fetching Movies: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(`${API_URL}/${id}`, { cache: "force-cache" });
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <>
      <h1>{movie.title}</h1>
      <h3>Movie Info</h3>
      <h6>{JSON.stringify(movie)}</h6>
    </>
  );
}
