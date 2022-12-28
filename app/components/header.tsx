import { Link } from "@remix-run/react";

export function Header() {
    return ( 
      <header className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex">
          <h1 className="text-3xl font-bold text-white">
            John Chynoweth
          </h1>
          <Link 
           to="/" className="mr-9 mt-6 text-xl text-white underline absolute inset-y-0 right-0"> Home</Link>
        
           </div>
      </header>);
}