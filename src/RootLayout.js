import { Link, Outlet, ScrollRestoration, useNavigate } from "react-router";
import { useState } from "react";
import { Search as SearchIcon, UserCircle, Plus, Globe } from "lucide-react";
import logo from "./data/logo_tensci.png";

const LANGUAGES = ["EN", "JP", "ZH", "FR", "ES"];

export function RootLayout() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [language, setLanguage] = useState("EN");
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

  function handleSearchSubmit(e) {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  }

  return (
    <div style={{ backgroundColor: "#F5F5F5" }}>
      <ScrollRestoration />
      <header className="border-b-2 px-6" style={{ borderColor: "#76ABAE" }}>
        <nav className="mx-auto flex max-w-7xl items-center gap-8 py-4">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="TenSci" className="h-8 w-auto" />
            </Link>

            <div className="flex items-center gap-8" style={{ color: "#303841" }}>
              <Link to="/" className="hover:text-blue-600">
                Home
              </Link>
              <Link to="/proposals" className="hover:text-blue-600">
                Proposals
              </Link>
              <Link to="/publications" className="hover:text-blue-600">
                Publications
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
              className="w-full rounded-full border py-1.5 pl-9 pr-4 text-sm placeholder-gray-400 transition-all focus:border-[#76ABAE] focus:bg-white focus:outline-none"
              style={{ backgroundColor: "#F5F5F5", borderColor: "#76ABAE" }}
            />
          </form>

          <button
            type="button"
            className="ml-auto inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-semibold text-white transition-colors"
            style={{ backgroundColor: "#76ABAE" }}
          >
            <Plus className="h-4 w-4" />
            <Link to="/post" className="hover:text-blue-300">
              Post Proposal
            </Link>
          </button>

          <div className="relative">
            <button
              type="button"
              onClick={() => setLanguageMenuOpen((open) => !open)}
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-semibold hover:bg-gray-100"
              style={{ color: "#303841" }}
            >
              <Globe className="h-4 w-4" />
              {language}
            </button>

            {languageMenuOpen && (
              <ul className="absolute right-0 mt-2 w-28 overflow-hidden rounded-lg border border-gray-100 bg-white shadow-lg">
                {LANGUAGES.map((lang) => (
                  <li key={lang}>
                    <button
                      type="button"
                      onClick={() => {
                        setLanguage(lang);
                        setLanguageMenuOpen(false);
                      }}
                      className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-50"
                      style={{
                        color: lang === language ? "#76ABAE" : "#303841",
                        fontWeight: lang === language ? 600 : 400,
                      }}
                    >
                      {lang}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button type="button" className="hover:text-blue-600" style={{ color: "#303841" }}>
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