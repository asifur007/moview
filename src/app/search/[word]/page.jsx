import Results from "@/components/ResultsData/Results";

export default async function page({ params, searchParams }) {
  const searchWord = params.word;
  const pageNumber = searchParams.pageNumber || 1;

  const searchApi = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchWord}&language=en-US&page=${pageNumber}&include_adult=false`
  );

  if (!searchApi.ok) throw new Error("There is no movie with this keyword!");

  const data = await searchApi.json();

  return (
    <>
      <Results results={data?.results} />
    </>
  );
}
