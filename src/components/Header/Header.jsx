import Link from "next/link";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-6 max-w-6xl m-auto">
      <div className="flex gap-4">
        <MenuItem title="home" address="/" Icon={AiFillHome} />
        <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex items-center space-x-4">
        <Link href={"/"}>
          <h2>
            <span className="text-2xl bg-cyan-500 px-2 py-1 rounded-lg text-white font-bold mr-1">
              MoView
            </span>
          </h2>
        </Link>
      </div>
    </div>
  );
}
