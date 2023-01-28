import { Link } from "@remix-run/react";

export function Header() {
  return (

    <header className="bg-gray-800 py-6">
      <div className="px-11 flex justify-between items-center" >
        <h1 className=" text-3xl font-bold text-white">John Chynoweth</h1>
        <div>
          <Link
            to="/"
            className="text-xl text-white underline"
          >
            {" "}
            Home
          </Link>
          <Link
            to="/blog"
            className="text-xl text-white underline"
          >
            {" "}
            Blog
          </Link>
        </div>
      </div>
    </header>
  );
}
