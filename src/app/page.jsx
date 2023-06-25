import CategoriesSlides from "@/components/Sections/MovieSlide";
import Hero from "@/components/Sections/Hero";
import tmdb from "@/utils/tmdb";

const getHomePage = async () => {
  const response = await tmdb(
    "https://api.themoviedb.org/3/movie/popular?page=1"
  );
  const data = await response.json();
  return data?.results;
};

const getSlides = async () => {
  const genreIds = [53, 9648, 35, 28, 12];
  const requests = genreIds.map((id) =>
    tmdb(`https://api.themoviedb.org/3/discover/movie?with_genres=${id}`)
  );

  try {
    const responses = await Promise.all(requests);
    const data = await Promise.all(responses.map((resp) => resp.json()));
    const [thriller, mystery, comedy, action, adventure] = data;
    return [
      { name: "thriller movies", data: thriller?.results },
      { name: "mystery movies", data: mystery?.results },
      { name: "comedy movies", data: comedy?.results },
      { name: "action movies", data: action?.results },
      { name: "adventure movies", data: adventure?.results },
    ];
  } catch (error) {
    throw error;
  }
};

export default async function Home() {

  const data = await getHomePage();
  const slides = await getSlides();

  return (
    <main className="relative min-h-screen ">
      <Hero data={data} />
      {slides?.map((slide) => {
        return <CategoriesSlides key={slide?.name}  title={slide?.name} slides={slide?.data} />;
      })}
    </main>
  );
}
