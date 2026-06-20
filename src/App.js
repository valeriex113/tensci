import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { ProjectCard } from "../components/ProjectCard";
import { mockProjects } from "../data/projects";
import { ArrowRight, Target, Users, Award, TrendingUp, DollarSign, BookOpen, Star, CheckCircle } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

export function HomePage() {
  const featuredProjects = mockProjects.slice(0, 3);
  const trendingProjects = mockProjects.slice(3, 6);

  return (
    <div>
      {/* Hero + Stats Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white pt-20 pb-0">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center pb-16">
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6 backdrop-blur-sm">
              <Star className="h-3.5 w-3.5 text-yellow-300 fill-yellow-300" />
              Trusted by 45,000+ researchers worldwide
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-5 tracking-tight leading-[1.05]">
              Kickstart your Ideas
            </h1>
            <p className="text-lg md:text-xl mb-10 text-blue-100 max-w-xl mx-auto">
              The platform where scientific breakthroughs begin. Fund, publish, and grow your research with a community that believes in you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/explore">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto font-semibold">
                  Browse Proposals
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/submit">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 border-white/40 text-white hover:bg-white/20 font-semibold">
                  Post Your Research
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats bar — sits at the bottom of the hero, bridging into white */}
          <div className="bg-white rounded-t-3xl shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
              <div className="flex flex-col items-center py-8 px-6 gap-2">
                <div className="flex items-center justify-center w-11 h-11 rounded-full bg-blue-50 mb-1">
                  <DollarSign className="h-5 w-5 text-blue-600" />
                </div>
                <div className="text-3xl font-extrabold text-gray-900">$12.5M</div>
                <div className="text-sm text-gray-500 font-medium">Total Funded</div>
              </div>
              <div className="flex flex-col items-center py-8 px-6 gap-2">
                <div className="flex items-center justify-center w-11 h-11 rounded-full bg-purple-50 mb-1">
                  <BookOpen className="h-5 w-5 text-purple-600" />
                </div>
                <div className="text-3xl font-extrabold text-gray-900">234</div>
                <div className="text-sm text-gray-500 font-medium">Active Projects</div>
              </div>
              <div className="flex flex-col items-center py-8 px-6 gap-2">
                <div className="flex items-center justify-center w-11 h-11 rounded-full bg-blue-50 mb-1">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <div className="text-3xl font-extrabold text-gray-900">45K</div>
                <div className="text-sm text-gray-500 font-medium">Community Members</div>
              </div>
              <div className="flex flex-col items-center py-8 px-6 gap-2">
                <div className="flex items-center justify-center w-11 h-11 rounded-full bg-green-50 mb-1">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div className="text-3xl font-extrabold text-gray-900">89%</div>
                <div className="text-sm text-gray-500 font-medium">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
              <p className="text-gray-600">Handpicked research making a real impact</p>
            </div>
            <Link to="/explore">
              <Button variant="outline">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Supporting scientific research has never been easier. Here's how you can make a difference.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Discover Research</h3>
                <p className="text-gray-600">
                  Browse through vetted research projects across various scientific disciplines.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Support Projects</h3>
                <p className="text-gray-600">
                  Choose projects that resonate with you and contribute to their funding goals.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Track Progress</h3>
                <p className="text-gray-600">
                  Stay updated with regular progress reports and research breakthroughs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trending Projects */}
      <section className="py-16">
        <div className="container">
          <div className="flex items-center gap-2 mb-8">
            <TrendingUp className="h-8 w-8 text-blue-600" />
            <div>
              <h2 className="text-3xl font-bold">Trending Now</h2>
              <p className="text-gray-600">Projects gaining momentum</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Have a Research Project?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join hundreds of researchers who have successfully funded their projects through our platform.
          </p>
          <Link to="/submit">
            <Button size="lg" variant="secondary">
              Submit Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
