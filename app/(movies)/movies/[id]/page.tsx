import { API_URL } from "../../../(home)/page";

const getMovie = async (id: string) => {
  console.log(`Fetching Movies: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
};

const getVideos = async (id: string) => {
  console.log(`Fetching Videos: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
};

export default async function MovieDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  console.log(`Fetching Start: ${Date.now()}`);
  // const movie = await getMovie(id);
  // const vidoes = await getVideos(id);
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  console.log(`Fetching End: ${Date.now()}`);

  return (
    <div>
      <h1>{movie.title}</h1>
    </div>
  );
}
