import React from "react";
import { Link } from "react-router";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { Users, Clock, Calendar, PieChart, Target, ChevronRight, Share, Heart, PlayCircle, MapPin, Building2, CheckCircle2 } from "lucide-react";

export function ExampleProps() {
  const percentFunded = 82;

  return (
    <div className="bg-white min-h-screen font-sans animate-fade-in pb-20">
      {/* ── Breadcrumb ── */}
      <div className="border-b border-gray-200" style={{ backgroundColor: "#F5F5F5" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 text-sm text-gray-500 flex items-center gap-2">
          <Link to="/" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">Home</Link>
          <span className="opacity-50">›</span>
          <Link to="/proposals" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">Proposals</Link>
          <span className="opacity-50">›</span>
          <span className="text-gray-600 font-medium">Project O.A.S.I.S</span>
        </div>
      </div>

      {/* ── Header Section ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-10 pb-16">
        <div className="flex flex-col items-center text-center mb-10 max-w-4xl mx-auto">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full mb-4">
            Environmental Science
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 tracking-tight" style={{ color: "#303841" }}>
            Project O.A.S.I.S: Autonomous Ocean Microplastic Filtration Systems
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            Developing self-sustaining, AI-powered underwater drones to detect, map, and eliminate microplastic pollution in our most vulnerable coral reefs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">

          {/* ── Main Media (Video/Image) ── */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-4">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl bg-gray-900 group cursor-pointer border border-gray-200">
              <img
                src="/ocean_drone_proposal.png"
                alt="Underwater drone"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <PlayCircle className="w-12 h-12 text-white" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between text-white text-sm font-medium drop-shadow-md">
                <span>Project Pitch Video</span>
                <span>03:45</span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500 justify-center lg:justify-start">
              <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Great Barrier Reef, Australia</span>
              <span className="flex items-center gap-1"><Building2 className="w-4 h-4" /> Sydney Institute of Marine Science</span>
            </div>
          </div>

          {/* ── Funding Progress Widget ── */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col justify-center">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-xl shadow-blue-900/5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gray-100">
                <div className="h-full bg-emerald-500" style={{ width: '82%' }}></div>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-5xl font-extrabold tracking-tight" style={{ color: "#303841" }}>$410,000</span>
                  <span className="text-xl text-gray-500 font-medium">USD</span>
                </div>
                <p className="text-gray-500 font-medium">pledged of $500,000 goal</p>
              </div>

              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "#EAF2F2", color: "#76ABAE" }}>
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold" style={{ color: "#303841" }}>1,245</p>
                    <p className="text-sm text-gray-500 font-medium">Backers</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold" style={{ color: "#303841" }}>14</p>
                    <p className="text-sm text-gray-500 font-medium">Days to go (Ends Oct 30)</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <button className="w-full hover:opacity-90 text-white font-bold py-4 rounded-xl text-lg transition-all shadow-md hover:-translate-y-0.5" style={{ backgroundColor: "#76ABAE" }}>
                  Back this Project
                </button>
                <div className="flex gap-3">
                  <button className="flex-1 bg-white border border-gray-300 hover:bg-gray-50 font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors" style={{ color: "#303841" }}>
                    <Heart className="w-5 h-5" /> Save
                  </button>
                  <button className="flex-1 bg-white border border-gray-300 hover:bg-gray-50 font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors" style={{ color: "#303841" }}>
                    <Share className="w-5 h-5" /> Share
                  </button>
                </div>
              </div>
              <p className="text-xs text-center text-gray-500 mt-4">All or nothing. This project will only be funded if it reaches its goal by Oct 30, 2026.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Content Tabs (Decorative) ── */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <nav className="flex gap-8 overflow-x-auto hide-scrollbar">
            <a href="#campaign" className="py-4 text-sm font-bold border-b-2 whitespace-nowrap" style={{ color: "#76ABAE", borderColor: "#76ABAE" }}>Campaign</a>
            <a href="#faq" className="py-4 text-sm font-medium text-gray-500 hover:text-gray-900 whitespace-nowrap">FAQ</a>
            <a href="#updates" className="py-4 text-sm font-medium text-gray-500 hover:text-gray-900 whitespace-nowrap">Updates (3)</a>
            <a href="#comments" className="py-4 text-sm font-medium text-gray-500 hover:text-gray-900 whitespace-nowrap">Comments (142)</a>
          </nav>
        </div>
      </div>

      {/* ── Main Content Area ── */}
      <section id="campaign" className="max-w-7xl mx-auto px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12 lg:gap-16 items-start">

        {/* ── Left Column: Table of Contents (Sidebar) ── */}
        <aside className="hidden lg:flex flex-col gap-6 sticky top-24">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-sm font-bold uppercase tracking-wide mb-4 pb-3 border-b border-gray-100" style={{ color: "#303841" }}>
              Contents
            </h3>
            <ul className="space-y-1">
              <li><a href="#background" className="block px-3 py-2 text-sm font-medium text-gray-600 rounded-md border-l-2 border-transparent hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600 transition-all">Background</a></li>
              <li><a href="#objectives" className="block px-3 py-2 text-sm font-medium text-gray-600 rounded-md border-l-2 border-transparent hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600 transition-all">Objectives</a></li>
              <li><a href="#timeline" className="block px-3 py-2 text-sm font-medium text-gray-600 rounded-md border-l-2 border-transparent hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600 transition-all">Timeline</a></li>
              <li><a href="#team" className="block px-3 py-2 text-sm font-medium text-gray-600 rounded-md border-l-2 border-transparent hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600 transition-all">Research Team</a></li>
              <li><a href="#budget" className="block px-3 py-2 text-sm font-medium text-gray-600 rounded-md border-l-2 border-transparent hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600 transition-all">Budget</a></li>
              <li><a href="#backers" className="block px-3 py-2 text-sm font-medium text-gray-600 rounded-md border-l-2 border-transparent hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600 transition-all">Backers</a></li>
            </ul>
          </div>
        </aside>

        {/* ── Right Column: Main Proposal Details ── */}
        <div className="space-y-16 max-w-4xl">

          {/* Background */}
          <div id="background">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3" style={{ color: "#303841" }}>
              <span className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#EAF2F2", color: "#76ABAE" }}><Target className="w-5 h-5" /></span>
              Background of the Research
            </h2>
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p className="lead text-xl text-gray-600 mb-6 font-medium">
                Every year, 8 million metric tons of plastic enter our oceans. While large debris is visible, the silent killer is microplastics—particles less than 5mm in length that infiltrate marine food webs.
              </p>
              <p className="mb-4">
                Current cleanup efforts focus on surface-level macro-plastics (like the Great Pacific Garbage Patch). However, microplastics suspend throughout the water column, actively degrading the health of coral polyps and entering the dietary tracts of essential marine species.
              </p>
              <p>
                Our research team at the Sydney Institute of Marine Science has spent the last three years designing <strong>O.A.S.I.S. (Oceanic Autonomous Swarm Filtration System)</strong>. These are biomimetic, manta-ray inspired drones that utilize advanced spectroscopic sensors to identify and capture microplastics without harming organic zooplankton.
              </p>
              <figure className="my-8 rounded-xl overflow-hidden border border-gray-200" style={{ backgroundColor: "#F5F5F5" }}>
                <div className="aspect-video flex flex-col items-center justify-center text-center p-8" style={{ backgroundColor: "#EAF2F2", color: "#303841" }}>
                  <div className="text-5xl mb-4">🌊 🤖 🦠</div>
                  <p className="text-sm font-medium">Diagram demonstrating the micro-filtration mechanism distinguishing between organic matter and synthetic polymers.</p>
                </div>
              </figure>
            </div>
          </div>

          {/* Objectives */}
          <div id="objectives">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3" style={{ color: "#303841" }}>
              <span className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600"><CheckCircle2 className="w-5 h-5" /></span>
              Project Objectives
            </h2>
            <div className="bg-emerald-50/50 rounded-2xl border border-emerald-100 p-8">
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold shrink-0 mt-1">1</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: "#303841" }}>Build 5 Prototype O.A.S.I.S. Drones</h3>
                    <p className="text-gray-600 leading-relaxed">Transition from lab-tested scale models to 5 fully functional, ocean-ready prototypes constructed from non-toxic, pressure-resistant materials.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold shrink-0 mt-1">2</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: "#303841" }}>Conduct a 6-Month Reef Deployment</h3>
                    <p className="text-gray-600 leading-relaxed">Deploy the drone swarm in a controlled sector of the Great Barrier Reef. Monitor their efficiency in removing microplastics via a mesh-filtration system while verifying zero impact on local fauna.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold shrink-0 mt-1">3</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: "#303841" }}>Open-Source the AI Mapping Data</h3>
                    <p className="text-gray-600 leading-relaxed">The drones will map plastic concentration density in 3D. We pledge to publish this dataset openly to aid global policy-makers and climate researchers.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Timeline */}
          <div id="timeline">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3" style={{ color: "#303841" }}>
              <span className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600"><Calendar className="w-5 h-5" /></span>
              Project Timeline
            </h2>
            <div className="relative border-l-2 border-gray-200 ml-5 space-y-12">
              <div className="relative pl-8">
                <div className="absolute -left-2 top-1.5 w-4 h-4 rounded-full bg-purple-500 ring-4 ring-white"></div>
                <h3 className="text-lg font-bold" style={{ color: "#303841" }}>Phase 1: Component Procurement & Assembly</h3>
                <span className="text-sm font-bold text-purple-600 uppercase tracking-wider mb-2 block">Months 1-2</span>
                <p className="text-gray-600">Sourcing marine-grade titanium, custom PCB fabrication, and assembling the 5 prototype units in our Sydney workshop.</p>
              </div>
              <div className="relative pl-8">
                <div className="absolute -left-2 top-1.5 w-4 h-4 rounded-full bg-gray-300 ring-4 ring-white"></div>
                <h3 className="text-lg font-bold" style={{ color: "#303841" }}>Phase 2: Tank Testing & AI Calibration</h3>
                <span className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2 block">Months 3-4</span>
                <p className="text-gray-600">Testing the swarm algorithms and obstacle avoidance systems in the university's controlled wave pool facility.</p>
              </div>
              <div className="relative pl-8">
                <div className="absolute -left-2 top-1.5 w-4 h-4 rounded-full bg-gray-300 ring-4 ring-white"></div>
                <h3 className="text-lg font-bold" style={{ color: "#303841" }}>Phase 3: Ocean Deployment</h3>
                <span className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2 block">Months 5-10</span>
                <p className="text-gray-600">Active deployment in the Great Barrier Reef. The drones will operate autonomously, returning to a solar-powered buoy to recharge and offload captured plastics.</p>
              </div>
              <div className="relative pl-8">
                <div className="absolute -left-2 top-1.5 w-4 h-4 rounded-full bg-gray-300 ring-4 ring-white"></div>
                <h3 className="text-lg font-bold" style={{ color: "#303841" }}>Phase 4: Data Analysis & Publication</h3>
                <span className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2 block">Months 11-12</span>
                <p className="text-gray-600">Compiling the filtration efficacy data, drafting the research paper, and releasing the 3D concentration maps to the public domain.</p>
              </div>
            </div>
          </div>

          {/* Team */}
          <div id="team">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3" style={{ color: "#303841" }}>
              <span className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600"><Users className="w-5 h-5" /></span>
              Research Team
            </h2>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex flex-col gap-4">
                  <div className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center text-2xl font-bold text-gray-600" style={{ background: "linear-gradient(135deg, #EAF2F2, #F5F5F5)" }}>
                    SC
                  </div>
                  <div>
                    <h4 className="font-bold text-xl" style={{ color: "#303841" }}>Dr. Sarah Chen</h4>
                    <p className="text-sm font-medium mb-3" style={{ color: "#76ABAE" }}>Lead Principal Investigator</p>
                    <p className="text-sm text-gray-600 leading-relaxed">Ph.D. in Marine Robotics from MIT. 10+ years experience in autonomous underwater vehicles.</p>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-100 to-pink-100 border border-gray-200 flex items-center justify-center text-2xl font-bold text-gray-600">
                    JM
                  </div>
                  <div>
                    <h4 className="font-bold text-xl" style={{ color: "#303841" }}>Dr. James Martinez</h4>
                    <p className="text-sm font-medium mb-3" style={{ color: "#76ABAE" }}>Co-Investigator, Oceanography</p>
                    <p className="text-sm text-gray-600 leading-relaxed">Expert in fluid dynamics and microplastic distribution patterns in pelagic zones.</p>
                  </div>
                </div>
              </div>

              <button className="w-full mt-8 py-3 px-4 hover:bg-gray-100 text-sm font-semibold rounded-xl transition-colors border border-gray-200" style={{ backgroundColor: "#F5F5F5", color: "#303841" }}>
                View full team profile
              </button>
            </div>
          </div>

          {/* Budget */}
          <div id="budget">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3" style={{ color: "#303841" }}>
              <span className="w-10 h-10 rounded-lg bg-pink-100 flex items-center justify-center text-pink-600"><PieChart className="w-5 h-5" /></span>
              Budget Breakdown
            </h2>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="space-y-6 mb-6">
                <div>
                  <div className="flex justify-between text-base mb-2">
                    <span className="font-medium text-gray-700">Hardware & Fabrication</span>
                    <span className="font-bold" style={{ color: "#303841" }}>45%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-3">
                    <div className="h-3 rounded-full" style={{ width: '45%', backgroundColor: "#76ABAE" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-base mb-2">
                    <span className="font-medium text-gray-700">Field Operations & Logistics</span>
                    <span className="font-bold" style={{ color: "#303841" }}>30%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-3">
                    <div className="bg-emerald-500 h-3 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-base mb-2">
                    <span className="font-medium text-gray-700">Data Analysis & Servers</span>
                    <span className="font-bold" style={{ color: "#303841" }}>15%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-3">
                    <div className="bg-purple-500 h-3 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-base mb-2">
                    <span className="font-medium text-gray-700">Overhead & Compliance</span>
                    <span className="font-bold" style={{ color: "#303841" }}>10%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-3">
                    <div className="bg-orange-500 h-3 rounded-full" style={{ width: '10%' }}></div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-500 p-4 rounded-xl" style={{ backgroundColor: "#F5F5F5" }}>
                * Funds strictly allocated to project execution. Institutional salaries are covered separately by existing grants.
              </p>
            </div>
          </div>

          {/* Recent Backers */}
          <div id="backers">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3" style={{ color: "#303841" }}>
              <span className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center text-red-600"><Heart className="w-5 h-5" /></span>
              Recent Backers
            </h2>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              <ul className="space-y-6">
                <li className="flex items-center gap-4 border-b border-gray-100 pb-6">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-base font-bold text-gray-600 shrink-0">A</div>
                  <div className="flex-1">
                    <p className="text-base font-semibold" style={{ color: "#303841" }}>Anonymous</p>
                    <p className="text-sm text-gray-500">Pledged $500 • 2 hrs ago</p>
                  </div>
                </li>
                <li className="flex items-center gap-4 border-b border-gray-100 pb-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-base font-bold shrink-0" style={{ backgroundColor: "#EAF2F2", color: "#76ABAE" }}>MJ</div>
                  <div className="flex-1">
                    <p className="text-base font-semibold" style={{ color: "#303841" }}>Michael Jenkins</p>
                    <p className="text-sm text-gray-500">Pledged $150 • 5 hrs ago</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-base font-bold text-emerald-700 shrink-0">OL</div>
                  <div className="flex-1">
                    <p className="text-base font-semibold" style={{ color: "#303841" }}>OceanLife Foundation</p>
                    <p className="text-sm text-gray-500">Pledged $10,000 • 1 day ago</p>
                  </div>
                </li>
              </ul>
              <button className="w-full mt-8 py-3 text-sm font-semibold rounded-xl transition-colors" style={{ color: "#76ABAE", backgroundColor: "#EAF2F2" }}>
                See all 1,245 backers
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}