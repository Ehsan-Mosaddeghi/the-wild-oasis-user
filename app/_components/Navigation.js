import Link from "next/link";
import UserProfile from "./UserProfile";

export default function Navigation() {
  return (
    <nav className="z-10 text-base md:text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link
            href="/cabins"
            className="hover:text-accent-400 transition-colors"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          <UserProfile />
        </li>
      </ul>
    </nav>
  );
}
