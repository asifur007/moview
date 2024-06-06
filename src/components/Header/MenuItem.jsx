import Link from "next/link";

export default function MenuItem({ title, address, Icon }) {
  return (
    <Link href={address} className="flex mr-8 hover:text-cyan-500">
      <Icon className="text-2xl sm:hidden" />
      <p className="uppercase hidden sm:inline font-semibold">{title}</p>
    </Link>
  );
}
