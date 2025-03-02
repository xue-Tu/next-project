import Link from "next/link";

function Navigations() {
  return (
    <nav>
      <ul className="flex items-center gap-16">
        <li>
          <Link
            href="/cabins"
            className="text-xl hover:text-accent-500 transition-colors"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-xl hover:text-accent-500 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/account"
            className="text-xl hover:text-accent-500 transition-colors"
          >
            Guest area
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigations;
