import { Link, Outlet } from "react-router";
import { Search } from "lucide-react";

 
export function RootLayout() {
  return (
    <div>
      <header>
        <p>TenSci</p>
        <nav className="inline-flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/publications">Publications</Link>
          <Link to="/proposals">Proposals</Link>
          <Link to="/about">About Us</Link>
          
          <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              <input
                type="text"
                placeholder="Search research..."
                className="pl-9 pr-4 py-1.5 text-sm bg-gray-100 border border-transparent rounded-full w-44 focus:w-56 transition-all focus:outline-none focus:border-blue-300 focus:bg-white placeholder-gray-400"
              />
            </div>
        </nav>
      </header>
 
      <main>
        <Outlet />
      </main>
 
      <footer>
        <p>TenSci</p>
      </footer>
    </div>
  );
}