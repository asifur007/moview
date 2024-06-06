"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function NavbarItem({ title, param }) {
  const searchParams = useSearchParams();
  const searchValue = searchParams.get("page");

  const navigationItemActive =
    searchValue &&
    searchValue === param &&
    "underline-offset-8 decoration-white-600 underline decoration-4 ";

  return (
    <Link
      className={`hover:text-cyan-500 dark:hover:text-cyan-500 mx-6 py-2 dark:text-white ${navigationItemActive}`}
      href={`/?page=${param}`}
    >
      {title}
    </Link>
  );
}
