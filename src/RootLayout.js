import { Link, Outlet, ScrollRestoration, useNavigate } from "react-router";
import { useState } from "react";
import { Search as SearchIcon, UserCircle } from "lucide-react";

export function RootLayout() {
    const navigate = useNavigate();
    const [query, setQuery] = useState("");

    function handleSearchSubmit(e) {
        e.preventDefault();
        if (query.trim()) {
        navigate(`/search?q=${encodeURIComponent(query.trim())}`);
        }
    }
    return (
        <div>
            <ScrollRestoration />
            <header className="border-b-2 border-blue-600 bg-white px-6">
            <nav className="mx-auto flex max-w-7xl items-center gap-8 py-4">
                <div className="flex items-center gap-8">
                <Link to="/" className="text-lg font-bold text-gray-900">
                    TenSci
                </Link>

                <div className="flex items-center gap-8 text-gray-700">
                    <Link to="/" className="hover:text-blue-600">
                    Home
                    </Link>
                    <Link to="/publications" className="hover:text-blue-600">
                    Publications
                    </Link>
                    <Link to="/proposals" className="hover:text-blue-600">
                    Proposals
                    </Link>
                    <Link to="/about" className="hover:text-blue-600">
                    About Us
                    </Link>
                </div>
                </div>

                <form onSubmit={handleSearchSubmit} className="relative mx-auto max-w-md flex-1">
                    <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search research..."
                        className="w-full rounded-full border border-transparent bg-gray-100 py-1.5 pl-9 pr-4 text-sm placeholder-gray-400 transition-all focus:border-blue-300 focus:bg-white focus:outline-none"
                    />
                </form>

                <button type="button" className="ml-auto text-gray-700 hover:text-blue-600">
                <UserCircle className="h-7 w-7" />
                </button>
            </nav>
            </header>

            <main>
            <Outlet />
            </main>

            <footer>
            <p>Footer</p>
            </footer>
        </div>
  );
}