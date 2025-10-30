import { API_URL } from "../app/(home)/page";

const getMovie = async (id: string) => {
  console.log(`Fetching Movies: ${Date.now()}`);
  //   await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(`${API_URL}/${id}`, { cache: "force-cache" });
  return response.json();
};

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return <h6>{JSON.stringify(movie)}</h6>;
}
