import { useMemo, useState } from "react";
import { mockPublications, mockCategories } from "../data/MockData";
import { PublicationCard } from "../components/card";
import { Newspaper } from "lucide-react";

const SORT_OPTIONS = [
  { value: "newest", label: "Newest" },
  { value: "mostFunded", label: "Most funded" }
];

export function Publications() {

  const categories = useMemo(
    () => [...new Set(mockCategories)],
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
      if (sortBy === "endingSoon") return a.daysAgo - b.daysAgo;
      if (sortBy === "mostFunded") return b.goalAmount - a.goalAmount;
      return 0;
    });

  return (
    <div style={{ backgroundColor: "#F5F5F5" }}>
      <section className="py-10">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full" style={{ backgroundColor: "#EAF2F2" }}>
              <Newspaper className="h-6 w-6" style={{ color: "#76ABAE" }} />
            </div>
            <div>
              <h2 className="text-3xl font-bold" style={{ color: "#303841" }}>Publications</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-[200px_1fr]">
            {/* Filter sidebar */}
            <aside>
              <h3 className="mb-3 text-sm font-semibold" style={{ color: "#303841" }}>Category</h3>
              <ul className="flex flex-col gap-2">
                {categories.map((category) => (
                  <li key={category}>
                    <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-600">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => toggleCategory(category)}
                        className="h-4 w-4 rounded border-gray-300"
                        style={{ accentColor: "#76ABAE" }}
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
                    className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm focus:outline-none"
                    style={{ color: "#303841" }}
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