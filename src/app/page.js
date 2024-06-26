import Pagination from "@/components/Pagination/Pagination";
import Results from "@/components/ResultsData/Results";

const API_KEY = process.env.API_KEY;

export default async function page({ searchParams }) {
  const page = searchParams.page || "fetchTrending";
  const pageNumber = searchParams.pageNumber || 1;

  // QUERY FOR FETCHING DATA
  let pageParamsCheck;

  if (page === "fetchTopRated") pageParamsCheck = "movie/top_rated";
  if (page === "fetchNew") pageParamsCheck = "movie/now_playing";
  if (page === "fetchTrending") pageParamsCheck = "trending/movie/week";

  const res = await fetch(
    `https://api.themoviedb.org/3/${pageParamsCheck}?api_key=${process.env.API_KEY}&language=en-Us&page=${pageNumber}`,
    { next: { revalidate: 1000000 } }
  );

  if (!res.ok) throw new Error("Failed to fetch data!");

  const data = await res.json();

  return (
    <div>
      <Results results={data.results} />
      {data?.total_results >= 1 && (
        <Pagination totalPages={data?.total_pages} currentPage={page} />
      )}
    </div>
  );
}
