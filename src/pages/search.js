import { useMemo } from "react";
import { useSearchParams } from "react-router";
import { mockProposals, mockPublications } from "../data/MockData";
import { ProposalCard, PublicationCard } from "../components/card";
import { SearchIcon } from "lucide-react";

function matches(project, query) {
  const haystack = [
    project.title,
    project.researcher,
    project.institution,
    project.category,
    ...(project.tags || []),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  return haystack.includes(query.toLowerCase());
}

export function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const matchedProposals = useMemo(
    () => (query ? mockProposals.filter((p) => matches(p, query)) : []),
    [query]
  );

  const matchedPublications = useMemo(
    () => (query ? mockPublications.filter((p) => matches(p, query)) : []),
    [query]
  );

  const totalResults = matchedProposals.length + matchedPublications.length;

  if (!query) {
    return (
      <section className="py-20 text-center" style={{ backgroundColor: "#F5F5F5" }}>
        <p className="text-gray-500">Type something into the search bar to get started.</p>
      </section>
    );
  }

  return (
    <div style={{ backgroundColor: "#F5F5F5" }}>
      <section className="pt-8 pb-20">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full" style={{ backgroundColor: "#EAF2F2" }}>
              <SearchIcon className="h-6 w-6" style={{ color: "#76ABAE" }} />
            </div>
            <div>
              <h2 className="text-3xl font-bold" style={{ color: "#303841" }}>
                Results for "{query}"
              </h2>
              <p className="text-sm text-gray-500">
                {totalResults} result{totalResults !== 1 ? "s" : ""}
              </p>
            </div>
          </div>

          {totalResults === 0 && (
            <p className="text-gray-500">No proposals or publications matched your search.</p>
          )}

          {matchedProposals.length > 0 && (
            <div className="mb-12">
              <h3 className="mb-4 text-xl font-semibold" style={{ color: "#303841" }}>
                Proposals ({matchedProposals.length})
              </h3>
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
                {matchedProposals.map((project) => (
                  <ProposalCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          )}

          {matchedPublications.length > 0 && (
            <div>
              <h3 className="mb-4 text-xl font-semibold" style={{ color: "#303841" }}>
                Publications ({matchedPublications.length})
              </h3>
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
                {matchedPublications.map((project) => (
                  <PublicationCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}