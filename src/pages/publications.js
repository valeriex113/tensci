import { useMemo, useState } from "react";
import { mockPublications } from "../data/MockData";
import { PublicationCard } from "../components/card";
import { NotebookPen } from "lucide-react";

const SORT_OPTIONS = [
  { value: "newest", label: "Newest" },
  { value: "oldest", label: "Oldest" },
  { value: "mostBacked", label: "Most backed" },
];

export function Publications() {
  const categories = useMemo(
    () => [...new Set(mockPublications.map((p) => p.category))],
    []
  );

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortBy, setSortBy] = useState("newest");

  function toggleCategory(category) {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  }

  const filteredProps = mockPublications
    .filter(
      (project) =>
        selectedCategories.length === 0 || selectedCategories.includes(project.category)
    )
    .sort((a, b) => {
      const dateA = new Date(a.publishedDate);
      const dateB = new Date(b.publishedDate);

      if (sortBy === "newest") return dateB - dateA;
      if (sortBy === "oldest") return dateA - dateB;
      if (sortBy === "mostBacked") return b.backers - a.backers;
      return 0;
    });

  return (
    <div>
      <section className="pt-8 pb-20">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
              <NotebookPen className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Publications</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-[200px_1fr]">
            {/* Filter sidebar */}
            <aside>
              <h3 className="mb-3 text-sm font-semibold text-gray-900">Category</h3>
              <ul className="flex flex-col gap-2">
                {categories.map((category) => (
                  <li key={category}>
                    <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-600">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => toggleCategory(category)}
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-300"
                      />
                      {category}
                    </label>
                  </li>
                ))}
              </ul>
            </aside>

            {/* Results */}
            <div>
              <div className="mb-6 flex items-center justify-between">
                <p className="text-sm text-gray-500">
                  {filteredProps.length} publication{filteredProps.length !== 1 ? "s" : ""}
                </p>

                <div className="flex items-center gap-2">
                  <label htmlFor="sort-by" className="text-sm text-gray-600">
                    Sort by
                  </label>
                  <select
                    id="sort-by"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-700 focus:border-blue-300 focus:outline-none"
                  >
                    {SORT_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
                {filteredProps.map((project) => (
                  <PublicationCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}