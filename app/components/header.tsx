import { Link, useMatches } from "@remix-run/react";

export function Header() {
  const matches = useMatches();
  const { id } = matches[matches.length - 1];

  // create class with background color of orange if current route has word blog in import 
  const headerClass = id.includes("blog")
    ? "bg-gray-500"
    : "bg-gray-600";

  return (
    // add headerClass to header className
    <header className={`${headerClass}  py-6`}>
      <div className="px-11 flex justify-between items-center" >
        <h1 className=" text-3xl font-bold text-white">John Chynoweth</h1>
        <div className="space-x-7 ">
          <Link
            to="/"
            className="text-xl text-white underline"
          > Home
          </Link>

          <Link
            to="/blog"
            className="text-xl text-white underline"
          >Blog</Link>
        </div>
      </div>
    </header>
  );
}



