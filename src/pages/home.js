import { DollarSign, BookOpen, TrendingUp, Users, CheckCircle, Star } from "lucide-react";
import { mockProposals, mockPublications } from "../data/MockData";
import { ProposalCard, PublicationCard } from "../components/card";

export function Home() {
  const almostFundedProps = mockProposals.filter((project) => project.daysLeft < 7);
  const popularProps = mockProposals.filter((project) => project.backers > 3000);
  const fundedPublications = mockPublications;

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#82C2B7] to-[#82ADC2] px-6 pt-24 pb-40 text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 text-sm font-semibold text-white">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          Trusted by 45,000+ researchers worldwide
        </div>

        <h1 className="mx-auto mt-8 max-w-4xl text-5xl font-extrabold leading-tight text-white sm:text-6xl">
          Genius ideas, crowd-funded.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
          TenSci connects brilliant researchers with the crowd.
        </p>
      </section>

      {/* Stats */}
      <div className="relative z-10 -mt-16 px-6">
        <div className="mx-auto max-w-5xl rounded-3xl bg-white shadow-xl">
          <div className="grid grid-cols-2 divide-x divide-y divide-gray-100 md:grid-cols-4 md:divide-y-0">
            <div className="flex flex-col items-center gap-2 px-6 py-8">
              <div className="mb-1 flex h-11 w-11 items-center justify-center rounded-full bg-yellow-50">
                <DollarSign className="h-5 w-5 text-yellow-600" />
              </div>
              <div className="text-3xl font-extrabold text-gray-900">$12.5M</div>
              <div className="text-sm font-medium text-gray-500">Total Funded</div>
            </div>

            <div className="flex flex-col items-center gap-2 px-6 py-8">
              <div className="mb-1 flex h-11 w-11 items-center justify-center rounded-full bg-purple-50">
                <BookOpen className="h-5 w-5 text-purple-600" />
              </div>
              <div className="text-3xl font-extrabold text-gray-900">234</div>
              <div className="text-sm font-medium text-gray-500">Successful Publications</div>
            </div>

            <div className="flex flex-col items-center gap-2 px-6 py-8">
              <div className="mb-1 flex h-11 w-11 items-center justify-center rounded-full bg-blue-50">
                <Users className="h-5 w-5 text-blue-600" />
              </div>
              <div className="text-3xl font-extrabold text-gray-900">45K</div>
              <div className="text-sm font-medium text-gray-500">Community Members</div>
            </div>

            <div className="flex flex-col items-center gap-2 px-6 py-8">
              <div className="mb-1 flex h-11 w-11 items-center justify-center rounded-full bg-green-50">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <div className="text-3xl font-extrabold text-gray-900">89%</div>
              <div className="text-sm font-medium text-gray-500">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Almost Funded Proposals */}
      <section className="py-20">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
              <TrendingUp className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Almost Funded Proposals</h2>
              <p className="text-gray-600">Proposals gaining momentum</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {almostFundedProps.map((project) => (
              <ProposalCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

        {/* Almost Funded Proposals */}
        <section className="py-20">
            <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
            <div className="mb-8 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
                <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                <h2 className="text-3xl font-bold text-gray-900">Rising Proposals</h2>
                <p className="text-gray-600">Proposals with a lot of support</p>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {popularProps.map((project) => (
                <ProposalCard key={project.id} project={project} />
                ))}
            </div>
            </div>
        </section>

      {/* Popular Publications */}
      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-50">
              <BookOpen className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Popular Publications</h2>
              <p className="text-gray-600">Successfully funded proposals</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {fundedPublications.map((project) => (
              <PublicationCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}