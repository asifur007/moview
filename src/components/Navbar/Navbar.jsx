import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="bg-cyan-300 dark:bg-red-400 text-center text-lg font-semibold flex flex-wrap justify-center p-2">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
      <NavbarItem title="New" param="fetchNew" />
    </div>
  );
}
