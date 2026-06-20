import { ArrowRight, DollarSign, BookOpen, TrendingUp, Users, CheckCircle, Star } from "lucide-react";
import { mockProposals, mockPublications } from "../data/MockData";
import { ProposalCard, PublicationCard } from "../components/card";

export function Home() {
    const almostFundedProps = mockProposals.filter(project => project.daysLeft < 7);
    const fundedPublications = mockPublications

  return (
    <div>
    
    {/* Hero Section */}
        <section className="px-6 pt-20 pb-40 text-center">
            <h1 className="mx-auto mt-8 max-w-4xl">
            Genius ideas, crowd-funded. 
            </h1>

            <p className="mx-auto mt-6 max-w-2xl">
            TenSci connects brilliant researchers with the crowd.
            </p>
            <div className="bg-white rounded-t-3xl shadow-xl">
                {/* Total Funded */}
                <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
                    <div className="flex flex-col items-center py-8 px-6 gap-2">
                        <div className="flex items-center justify-center w-11 h-11 rounded-full bg-yellow-50 mb-1">
                            <DollarSign className="h-5 w-5 text-yellow-600" />
                        </div>
                            <div className="text-3xl font-extrabold text-gray-900">$12.5M</div>
                            <div className="text-sm text-gray-500 font-medium">Total Funded</div>
                    </div>
                {/* Successful Publications */}
                <div className="flex flex-col items-center py-8 px-6 gap-2">
                    <div className="flex items-center justify-center w-11 h-11 rounded-full bg-purple-50 mb-1">
                        <BookOpen className="h-5 w-5 text-purple-600" />
                    </div>
                        <div className="text-3xl font-extrabold text-gray-900">234</div>
                        <div className="text-sm text-gray-500 font-medium">Successful Publications</div>
                </div>
                {/* Community Members */}
                <div className="flex flex-col items-center py-8 px-6 gap-2">
                    <div className="flex items-center justify-center w-11 h-11 rounded-full bg-blue-50 mb-1">
                        <Users className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="text-3xl font-extrabold text-gray-900">45K</div>
                    <div className="text-sm text-gray-500 font-medium">Community Members</div>
                </div>
                {/* Success Rate */}
                <div className="flex flex-col items-center py-8 px-6 gap-2">
                    <div className="flex items-center justify-center w-11 h-11 rounded-full bg-green-50 mb-1">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="text-3xl font-extrabold text-gray-900">89%</div>
                    <div className="text-sm text-gray-500 font-medium">Success Rate</div>
                </div>
            </div>
          </div>

          {/* Proposals */}
            <section className="py-16">
                <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
                    <div className="flex items-center gap-2 mb-8">
                        <TrendingUp className="h-8 w-8 text-blue-600" />
                        <div>
                        <h2 className="text-3xl font-bold">Almost Funded</h2>
                        <p className="text-gray-600">Projects gaining momentum</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {almostFundedProps.map((project) => (
                        <ProposalCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Publications */}
            <section className="py-16">
                <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
                    <div className="flex items-center gap-2 mb-8">
                        <TrendingUp className="h-8 w-8 text-blue-600" />
                        <div>
                        <h2 className="text-3xl font-bold">Popular Publications</h2>
                        <p className="text-gray-600">Successfully funded proposals</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {fundedPublications.map((project) => (
                        <PublicationCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </section>
        </section>
    </div>
  );
}