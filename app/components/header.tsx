import { Link } from "@remix-run/react";

export function Header() {
  return (
    <header className="bg-gray-800">
      <div className="flex max-w-7xl py-6 pl-12">
        <h1 className="text-3xl font-bold text-white">John Chynoweth</h1>
        <Link
          to="/"
          className=" absolute inset-y-6 right-12 text-xl text-white underline"
        >
          {" "}
          Home
        </Link>
        <Link
          to="/blog"
          className=" absolute inset-y-6 right-12 text-xl text-white underline"
        >
          {" "}
          Blog
        </Link>
      </div>
    </header>
  );
}
