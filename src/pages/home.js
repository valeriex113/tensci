import { DollarSign, BookOpen, TrendingUp, Users, CheckCircle, Star } from "lucide-react";
import { mockProposals, mockPublications } from "../data/MockData";
import { ProposalCard, PublicationCard } from "../components/card";
import { InfiniteCardRow } from "../components/InfiniteCardRow";

export function Home() {
  const almostFundedProps = mockProposals.filter((project) => project.daysLeft < 7);
  const popularProps = mockProposals.filter((project) => project.backers > 3000);
  const fundedPublications = mockPublications;

  return (
    <div style={{ backgroundColor: "#F5F5F5" }}>
      {/* Hero Section */}
      <section
        className="px-6 pt-24 pb-32"
        style={{ background: "linear-gradient(135deg, #76ABAE, #303841)" }}
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 lg:flex-row lg:items-center lg:justify-between">
          {/* Hero copy */}
          <div className="max-w-2xl text-center lg:text-left">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 text-sm font-semibold text-white lg:mx-0">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              Trusted by 45,000+ researchers worldwide
            </div>

            <h1 className="mx-auto mt-8 max-w-4xl text-5xl font-extrabold leading-tight text-white sm:text-6xl lg:mx-0">
              Own your research.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 lg:mx-0">
              TenSci connects brilliant researchers with the crowd.
            </p>
          </div>

          {/* Stats vertical bar */}
          <div className="w-full max-w-xs rounded-md bg-white shadow-xl">
            <div className="divide-y divide-gray-100">
              <div className="flex items-center gap-4 px-6 py-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-yellow-50">
                  <DollarSign className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <div className="text-2xl font-extrabold" style={{ color: "#303841" }}>$12.5M</div>
                  <div className="text-sm font-medium text-gray-500">Total Funded</div>
                </div>
              </div>

              <div className="flex items-center gap-4 px-6 py-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-purple-50">
                  <BookOpen className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <div className="text-2xl font-extrabold" style={{ color: "#303841" }}>234</div>
                  <div className="text-sm font-medium text-gray-500">Successful Publications</div>
                </div>
              </div>

              <div className="flex items-center gap-4 px-6 py-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md" style={{ backgroundColor: "#EAF2F2" }}>
                  <Users className="h-5 w-5" style={{ color: "#76ABAE" }} />
                </div>
                <div>
                  <div className="text-2xl font-extrabold" style={{ color: "#303841" }}>45K</div>
                  <div className="text-sm font-medium text-gray-500">Community Members</div>
                </div>
              </div>

              <div className="flex items-center gap-4 px-6 py-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-green-50">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-extrabold" style={{ color: "#303841" }}>89%</div>
                  <div className="text-sm font-medium text-gray-500">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Almost Funded Proposals */}
      <section className="py-20">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full" style={{ backgroundColor: "#EAF2F2" }}>
              <TrendingUp className="h-6 w-6" style={{ color: "#76ABAE" }} />
            </div>
            <div>
              <h2 className="text-3xl font-bold" style={{ color: "#303841" }}>Almost Funded Proposals</h2>
              <p className="text-gray-600">Proposals gaining momentum</p>
            </div>
          </div>
        </div>
        <div className="px-4 md:px-8">
          <InfiniteCardRow
            items={almostFundedProps}
            renderItem={(project) => <ProposalCard project={project} />}
          />
        </div>
      </section>

      {/* Rising Proposals */}
      <section className="py-20">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full" style={{ backgroundColor: "#EAF2F2" }}>
              <TrendingUp className="h-6 w-6" style={{ color: "#76ABAE" }} />
            </div>
            <div>
              <h2 className="text-3xl font-bold" style={{ color: "#303841" }}>Rising Proposals</h2>
              <p className="text-gray-600">Proposals with a lot of support</p>
            </div>
          </div>
        </div>
        <div className="px-4 md:px-8">
          <InfiniteCardRow
            items={popularProps}
            renderItem={(project) => <ProposalCard project={project} />}
          />
        </div>
      </section>

      {/* Popular Publications */}
      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full" style={{ backgroundColor: "#EAF2F2" }}>
              <BookOpen className="h-6 w-6" style={{ color: "#76ABAE" }} />
            </div>
            <div>
              <h2 className="text-3xl font-bold" style={{ color: "#303841" }}>Popular Publications</h2>
              <p className="text-gray-600">Successfully funded proposals</p>
            </div>
          </div>
        </div>
        <div className="px-4 md:px-8">
          <InfiniteCardRow
            items={fundedPublications}
            renderItem={(project) => <PublicationCard project={project} />}
          />
        </div>
      </section>
    </div>
  );
}