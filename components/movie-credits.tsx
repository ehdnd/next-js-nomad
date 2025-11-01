import { API_URL } from "../app/constatns";

async function getMovieCredits(id: string) {
  const response = await fetch(`${API_URL}/${id}/credits`, {
    cache: "force-cache",
  });
  return response.json();
}

export default async function MovieCredits({ id }: { id: string }) {
  const credits = await getMovieCredits(id);
  return (
    <>
      <h3>Movie Credits</h3>
      <h6>{JSON.stringify(credits)}</h6>
    </>
  );
}
