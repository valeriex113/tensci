import React from "react";
import { Link } from "react-router";
import { Users, Clock, Calendar, PieChart, Target, Share, Heart, PlayCircle, MapPin, Building2, CheckCircle2 } from "lucide-react";
import { proposalImages } from "../data/proposalImages";
import { mockProposals } from "../data/MockData";

export function ExampleProps() {
  const project = mockProposals.find((p) => p.id === "9");
  const image = proposalImages[project.id];
  const percentFunded = Math.round((project.currentAmount / project.goalAmount) * 100);

  return (
    <div className="bg-white min-h-screen font-sans animate-fade-in pb-20">
      {/* ── Breadcrumb ── */}
      <div className="border-b border-gray-200" style={{ backgroundColor: "#F5F5F5" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 text-sm text-gray-500 flex items-center gap-2">
          <Link to="/" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">Home</Link>
          <span className="opacity-50">›</span>
          <Link to="/proposals" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">Proposals</Link>
          <span className="opacity-50">›</span>
          <span className="text-gray-600 font-medium">{project.title}</span>
        </div>
      </div>

      {/* ── Header Section ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-10 pb-16">
        <div className="flex flex-col items-center text-center mb-10 max-w-4xl mx-auto">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full mb-4">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 tracking-tight" style={{ color: "#303841" }}>
            {project.title}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            A behavioral economics framework for identifying and intervening on early-warning
            psychological signals in algorithmic trading systems before they cascade into
            systemic financial crises.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">

          {/* ── Main Media (Image) ── */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-4">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl bg-gray-900 group cursor-pointer border border-gray-200">
              <img
                src={image}
                alt={project.title}
                className="w-full h-full object-cover opacity-90 group-hover:opacity-70 transition-opacity duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <PlayCircle className="w-12 h-12 text-white" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between text-white text-sm font-medium drop-shadow-md">
                <span>Project Pitch Video</span>
                <span>04:12</span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500 justify-center lg:justify-start">
              <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> London, United Kingdom</span>
              <span className="flex items-center gap-1"><Building2 className="w-4 h-4" /> {project.institution}</span>
            </div>
          </div>

          {/* ── Funding Progress Widget ── */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col justify-center">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-xl shadow-blue-900/5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gray-100">
                <div className="h-full" style={{ width: `${percentFunded}%`, backgroundColor: "#76ABAE" }}></div>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-5xl font-extrabold tracking-tight" style={{ color: "#303841" }}>
                    ${project.currentAmount.toLocaleString()}
                  </span>
                  <span className="text-xl text-gray-500 font-medium">USD</span>
                </div>
                <p className="text-gray-500 font-medium">pledged of ${project.goalAmount.toLocaleString()} goal</p>
              </div>

              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "#EAF2F2", color: "#76ABAE" }}>
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold" style={{ color: "#303841" }}>{project.backers.toLocaleString()}</p>
                    <p className="text-sm text-gray-500 font-medium">Backers</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold" style={{ color: "#303841" }}>{project.daysLeft}</p>
                    <p className="text-sm text-gray-500 font-medium">Days to go</p>
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
              <p className="text-xs text-center text-gray-500 mt-4">
                All or nothing. This project will only be funded if it reaches its ${project.goalAmount.toLocaleString()} goal before the campaign ends.
              </p>
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
            <a href="#updates" className="py-4 text-sm font-medium text-gray-500 hover:text-gray-900 whitespace-nowrap">Updates ({project.updates})</a>
            <a href="#comments" className="py-4 text-sm font-medium text-gray-500 hover:text-gray-900 whitespace-nowrap">Comments (89)</a>
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
                Over 70% of trading volume in major equity markets is now executed by algorithms,
                many of which react to the same signals within microseconds of one another. When
                enough of these systems converge on the same response at once, the result isn't
                a single bad trade — it's a flash crash.
              </p>
              <p className="mb-4">
                Existing circuit-breaker mechanisms intervene only after a crash has already
                begun, halting trading once prices have moved beyond a threshold. By that point,
                the damage to liquidity, investor confidence, and downstream markets is already
                underway. Our research asks a different question: can the early behavioral
                signatures that precede a cascade — herding patterns, abrupt shifts in order-book
                sentiment, correlated algorithmic "panic" responses — be detected and acted on
                before the threshold is ever crossed?
              </p>
              <p>
                Our team at the <strong>London School of Economics</strong> has spent the past two years
                building a behavioral-finance model that treats algorithmic trading systems not
                as purely rational actors, but as agents susceptible to the same herding and
                overreaction dynamics long observed in human markets. We call this framework{" "}
                <strong>Project SENTINEL (Systemic Early-warning Network for Trading Instability and Erratic Loss)</strong>.
              </p>
              <figure className="my-8 rounded-xl overflow-hidden border border-gray-200" style={{ backgroundColor: "#F5F5F5" }}>
                <img src={image} alt="Stock market data visualization" className="w-full aspect-video object-cover" />
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
                    <h3 className="text-xl font-bold mb-2" style={{ color: "#303841" }}>Build a Behavioral Signal Index</h3>
                    <p className="text-gray-600 leading-relaxed">Construct a composite index of herding and overreaction indicators derived from historical order-book data across five major flash-crash events since 2010.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold shrink-0 mt-1">2</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: "#303841" }}>Run a 6-Month Simulated Market Trial</h3>
                    <p className="text-gray-600 leading-relaxed">Deploy the early-warning model in a sandboxed market simulation alongside real historical data feeds to measure detection lead time ahead of known instability events.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold shrink-0 mt-1">3</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: "#303841" }}>Publish an Open Policy Framework</h3>
                    <p className="text-gray-600 leading-relaxed">Release our findings and a proposed intervention framework to regulators and exchanges, aimed at informing the next generation of pre-emptive (not just reactive) market-stability tools.</p>
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
                <h3 className="text-lg font-bold" style={{ color: "#303841" }}>Phase 1: Historical Data Acquisition</h3>
                <span className="text-sm font-bold text-purple-600 uppercase tracking-wider mb-2 block">Months 1-2</span>
                <p className="text-gray-600">Licensing and cleaning high-frequency order-book data from five historical flash-crash periods, including the 2010 "Flash Crash" and the 2015 ETF mispricing event.</p>
              </div>
              <div className="relative pl-8">
                <div className="absolute -left-2 top-1.5 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-white"></div>
                <h3 className="text-lg font-bold" style={{ color: "#303841" }}>Phase 2: Behavioral Model Calibration</h3>
                <span className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2 block">Months 3-4</span>
                <p className="text-gray-600">Training the herding-detection model against labeled instability events, validating signal lead-time against ground-truth crash timestamps.</p>
              </div>
              <div className="relative pl-8">
                <div className="absolute -left-2 top-1.5 w-4 h-4 rounded-full bg-emerald-500 ring-4 ring-white"></div>
                <h3 className="text-lg font-bold" style={{ color: "#303841" }}>Phase 3: Sandboxed Market Simulation</h3>
                <span className="text-sm font-bold text-emerald-600 uppercase tracking-wider mb-2 block">Months 5-9</span>
                <p className="text-gray-600">Running the early-warning system live against simulated and replayed market feeds, stress-testing false-positive rates under normal volatility.</p>
              </div>
              <div className="relative pl-8">
                <div className="absolute -left-2 top-1.5 w-4 h-4 rounded-full bg-orange-500 ring-4 ring-white"></div>
                <h3 className="text-lg font-bold" style={{ color: "#303841" }}>Phase 4: Policy Framework & Publication</h3>
                <span className="text-sm font-bold text-orange-600 uppercase tracking-wider mb-2 block">Months 10-12</span>
                <p className="text-gray-600">Drafting the regulatory policy brief, finalizing the academic paper, and engaging exchange partners on pilot adoption.</p>
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
                    RV
                  </div>
                  <div>
                    <h4 className="font-bold text-xl" style={{ color: "#303841" }}>{project.researcher}</h4>
                    <p className="text-sm font-medium mb-3" style={{ color: "#76ABAE" }}>Lead Principal Investigator</p>
                    <p className="text-sm text-gray-600 leading-relaxed">Ph.D. in Behavioral Economics from LSE. 15+ years studying market microstructure and crisis dynamics.</p>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-100 to-pink-100 border border-gray-200 flex items-center justify-center text-2xl font-bold text-gray-600">
                    NK
                  </div>
                  <div>
                    <h4 className="font-bold text-xl" style={{ color: "#303841" }}>Dr. Nadia Kessler</h4>
                    <p className="text-sm font-medium mb-3" style={{ color: "#76ABAE" }}>Co-Investigator, Quantitative Finance</p>
                    <p className="text-sm text-gray-600 leading-relaxed">Specialist in high-frequency trading systems and algorithmic risk modeling.</p>
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
              <div className="flex flex-col md:flex-row items-center gap-10">
                {/* Pie Chart */}
                <div className="w-48 h-48 rounded-full shrink-0 shadow-inner" style={{
                  background: "conic-gradient(#76ABAE 0% 35%, #10b981 35% 65%, #a855f7 65% 85%, #f97316 85% 100%)"
                }}></div>

                {/* Itemized List */}
                <div className="flex-1 space-y-4 w-full">
                  <div className="flex flex-col p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="flex justify-between items-start">
                      <div className="flex items-start gap-3">
                        <div className="w-3 h-3 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: "#76ABAE" }}></div>
                        <div>
                          <span className="font-bold text-gray-800">Data Licensing & Acquisition</span>
                          <p className="text-sm text-gray-500 mt-1 leading-relaxed">High-frequency order-book datasets (NYSE/NASDAQ), 3rd-party data cleaning APIs, historical tick data feeds.</p>
                        </div>
                      </div>
                      <div className="text-right shrink-0 ml-4">
                        <div className="font-bold text-lg" style={{ color: "#303841" }}>${(project.goalAmount * 0.35).toLocaleString()}</div>
                        <div className="text-sm font-semibold text-gray-500">35%</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="flex justify-between items-start">
                      <div className="flex items-start gap-3">
                        <div className="w-3 h-3 rounded-full mt-1.5 shrink-0 bg-emerald-500"></div>
                        <div>
                          <span className="font-bold text-gray-800">Model Development & Compute</span>
                          <p className="text-sm text-gray-500 mt-1 leading-relaxed">Cloud GPU instances (AWS/GCP) for training machine learning models, software licenses, data storage costs.</p>
                        </div>
                      </div>
                      <div className="text-right shrink-0 ml-4">
                        <div className="font-bold text-lg" style={{ color: "#303841" }}>${(project.goalAmount * 0.30).toLocaleString()}</div>
                        <div className="text-sm font-semibold text-gray-500">30%</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="flex justify-between items-start">
                      <div className="flex items-start gap-3">
                        <div className="w-3 h-3 rounded-full mt-1.5 shrink-0 bg-purple-500"></div>
                        <div>
                          <span className="font-bold text-gray-800">Simulation Infrastructure</span>
                          <p className="text-sm text-gray-500 mt-1 leading-relaxed">Development of sandboxed trading environment, server hosting for low-latency testing, network infrastructure.</p>
                        </div>
                      </div>
                      <div className="text-right shrink-0 ml-4">
                        <div className="font-bold text-lg" style={{ color: "#303841" }}>${(project.goalAmount * 0.20).toLocaleString()}</div>
                        <div className="text-sm font-semibold text-gray-500">20%</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="flex justify-between items-start">
                      <div className="flex items-start gap-3">
                        <div className="w-3 h-3 rounded-full mt-1.5 shrink-0 bg-orange-500"></div>
                        <div>
                          <span className="font-bold text-gray-800">Policy Outreach & Publication</span>
                          <p className="text-sm text-gray-500 mt-1 leading-relaxed">Academic conference travel (e.g., AFA, WFA), open-access publication fees, hosting workshops with regulators.</p>
                        </div>
                      </div>
                      <div className="text-right shrink-0 ml-4">
                        <div className="font-bold text-lg" style={{ color: "#303841" }}>${(project.goalAmount * 0.15).toLocaleString()}</div>
                        <div className="text-sm font-semibold text-gray-500">15%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                    <p className="text-sm text-gray-500">Pledged $250 • 3 hrs ago</p>
                  </div>
                </li>
                <li className="flex items-center gap-4 border-b border-gray-100 pb-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-base font-bold shrink-0" style={{ backgroundColor: "#EAF2F2", color: "#76ABAE" }}>TH</div>
                  <div className="flex-1">
                    <p className="text-base font-semibold" style={{ color: "#303841" }}>Thomas Holloway</p>
                    <p className="text-sm text-gray-500">Pledged $1,000 • 6 hrs ago</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-base font-bold text-emerald-700 shrink-0">QR</div>
                  <div className="flex-1">
                    <p className="text-base font-semibold" style={{ color: "#303841" }}>Quantra Research Group</p>
                    <p className="text-sm text-gray-500">Pledged $15,000 • 1 day ago</p>
                  </div>
                </li>
              </ul>
              <button className="w-full mt-8 py-3 text-sm font-semibold rounded-xl transition-colors" style={{ color: "#76ABAE", backgroundColor: "#EAF2F2" }}>
                See all {project.backers.toLocaleString()} backers
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}