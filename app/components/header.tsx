import { Link } from "@remix-run/react";

export function Header() {
  return (
    <header className="bg-gray-800">
      <div className="max-w-7xl pl-12 py-6 flex">
        <h1 className="text-3xl font-bold text-white">
          John Chynoweth
        </h1>
        <Link to="/" 
        className=" text-xl text-white underline absolute inset-y-6 right-12"> Home</Link>
      </div>
    </header>);
}