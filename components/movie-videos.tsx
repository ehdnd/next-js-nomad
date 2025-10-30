import { API_URL } from "../app/(home)/page";

const getVideos = async (id: string) => {
  console.log(`Fetching Videos: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // throw new Error("something broke...");
  const response = await fetch(`${API_URL}/${id}/videos`, {
    cache: "force-cache",
  });
  return response.json();
};

// videos 만을 보여주는 컴포넌트를 만들자
export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>;
}
