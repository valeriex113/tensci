import { Link } from "react-router";
import { Download, Link as LinkIcon, Share, Star } from "lucide-react";

export function ExamplePub() {
    return (
        <div className="min-h-screen text-gray-900 font-sans animate-fade-in pb-16" style={{ backgroundColor: "#F5F5F5" }}>
            {/* ── Breadcrumb ── */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 text-sm text-gray-500 flex items-center gap-2">
                <Link to="/" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">Home</Link>
                <span className="opacity-50">›</span>
                <Link to="/publications" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">Publications</Link>
                <span className="opacity-50">›</span>
                <span className="text-gray-600 font-medium">Article</span>
            </div>

            {/* ── Main Layout: Sidebar (Left) + Article (Right) ── */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10 items-start">

                {/* ── Sidebar (Moved to Left) ── */}
                <aside className="lg:sticky lg:top-24 flex flex-col gap-6 order-2 lg:order-1">

                    {/* ── Article Metrics ── */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-sm font-bold uppercase tracking-wide mb-4 pb-3 border-b border-gray-100" style={{ color: "#303841" }}>
                            Article Metrics
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col items-center gap-1 p-3 rounded-lg hover:-translate-y-0.5 transition-all" style={{ backgroundColor: "#F5F5F5" }}>
                                <span className="text-xl font-extrabold" style={{ color: "#76ABAE" }}>1,234</span>
                                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Views</span>
                            </div>
                            <div className="flex flex-col items-center gap-1 p-3 rounded-lg hover:-translate-y-0.5 transition-all" style={{ backgroundColor: "#F5F5F5" }}>
                                <span className="text-xl font-extrabold" style={{ color: "#76ABAE" }}>56</span>
                                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Citations</span>
                            </div>
                            <div className="flex flex-col items-center gap-1 p-3 rounded-lg hover:-translate-y-0.5 transition-all" style={{ backgroundColor: "#F5F5F5" }}>
                                <span className="text-xl font-extrabold" style={{ color: "#76ABAE" }}>789</span>
                                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Downloads</span>
                            </div>
                            <div className="flex flex-col items-center gap-1 p-3 rounded-lg hover:-translate-y-0.5 transition-all" style={{ backgroundColor: "#F5F5F5" }}>
                                <span className="text-xl font-extrabold" style={{ color: "#76ABAE" }}>10</span>
                                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Altmetric</span>
                            </div>
                        </div>
                    </div>

                    {/* ── Table of Contents ── */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-sm font-bold uppercase tracking-wide mb-4 pb-3 border-b border-gray-100" style={{ color: "#303841" }}>
                            Contents
                        </h3>
                        <ul className="space-y-1">
                            <li><a href="#pub-abstract" className="block px-3 py-2 text-sm font-medium text-gray-600 rounded-md border-l-2 border-transparent hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600 transition-all">Abstract</a></li>
                            <li><a href="#pub-introduction" className="block px-3 py-2 text-sm font-medium text-gray-600 rounded-md border-l-2 border-transparent hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600 transition-all">1. Introduction</a></li>
                            <li><a href="#pub-methods" className="block px-3 py-2 text-sm font-medium text-gray-600 rounded-md border-l-2 border-transparent hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600 transition-all">2. Methods</a></li>
                            <li><a href="#pub-results" className="block px-3 py-2 text-sm font-medium text-gray-600 rounded-md border-l-2 border-transparent hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600 transition-all">3. Results</a></li>
                            <li><a href="#pub-discussion" className="block px-3 py-2 text-sm font-medium text-gray-600 rounded-md border-l-2 border-transparent hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600 transition-all">4. Discussion</a></li>
                            <li><a href="#pub-conclusion" className="block px-3 py-2 text-sm font-medium text-gray-600 rounded-md border-l-2 border-transparent hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600 transition-all">5. Conclusion</a></li>
                            <li><a href="#pub-references" className="block px-3 py-2 text-sm font-medium text-gray-600 rounded-md border-l-2 border-transparent hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600 transition-all">References</a></li>
                        </ul>
                    </div>

                    {/* ── Funding Info ── */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-sm font-bold uppercase tracking-wide mb-4 pb-3 border-b border-gray-100" style={{ color: "#303841" }}>
                            Funding
                        </h3>
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col gap-1 p-3 rounded-md" style={{ backgroundColor: "#F5F5F5" }}>
                                <span className="text-sm font-semibold" style={{ color: "#303841" }}>John Doe</span>
                                <span className="text-xs font-mono text-gray-500">$123456</span>
                            </div>
                            <div className="flex flex-col gap-1 p-3 rounded-md" style={{ backgroundColor: "#F5F5F5" }}>
                                <span className="text-sm font-semibold" style={{ color: "#303841" }}>Jane Smith</span>
                                <span className="text-xs font-mono text-gray-500">$654321</span>
                            </div>
                        </div>
                    </div>

                    {/* ── Related Articles ── */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-sm font-bold uppercase tracking-wide mb-4 pb-3 border-b border-gray-100" style={{ color: "#303841" }}>
                            Related Articles
                        </h3>
                        <ul className="divide-y divide-gray-100">
                            <li className="py-3 first:pt-0 last:pb-0">
                                <a href="#related-1" className="block text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline leading-snug transition-colors">
                                    First example related article title for demonstration
                                </a>
                                <span className="block text-xs text-gray-500 mt-1">Doe & Smith · 2025</span>
                            </li>
                            <li className="py-3 last:pb-0">
                                <a href="#related-2" className="block text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline leading-snug transition-colors">
                                    Second placeholder related article with a generic title
                                </a>
                                <span className="block text-xs text-gray-500 mt-1">Johnson et al. · 2024</span>
                            </li>
                            <li className="py-3 last:pb-0">
                                <a href="#related-3" className="block text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline leading-snug transition-colors">
                                    Third example related article for layout purposes
                                </a>
                                <span className="block text-xs text-gray-500 mt-1">Generic & Placeholder · 2024</span>
                            </li>
                        </ul>
                    </div>
                </aside>

                {/* ── Article (Moved to Right) ── */}
                <article className="bg-white rounded-xl border border-gray-200 p-8 md:p-12 shadow-sm leading-relaxed order-1 lg:order-2">

                    {/* ── Article Type ── */}
                    <span className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded mb-4" style={{ color: "#76ABAE", backgroundColor: "#EAF2F2" }}>
                        Research Article
                    </span>

                    {/* ── Title ── */}
                    <h1 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-6 tracking-tight" style={{ color: "#303841" }}>
                        Towards GPU Passthrough in Intel TDX: Design Challenges and Early Baselines
                    </h1>

                    {/* ── Authors ── */}
                    <div className="flex flex-wrap items-baseline gap-1 mb-4 text-base">
                        <span style={{ color: "#303841" }}>
                            <a href="#author-1" className="text-blue-600 font-medium hover:text-blue-800 hover:underline transition-colors">John Doe</a>
                            <sup className="text-xs text-gray-500 ml-0.5">a,*</sup>
                        </span>
                        <span className="text-gray-500 mr-1.5">,</span>
                        <span style={{ color: "#303841" }}>
                            <a href="#author-2" className="text-blue-600 font-medium hover:text-blue-800 hover:underline transition-colors">Jane Smith</a>
                            <sup className="text-xs text-gray-500 ml-0.5">b</sup>
                        </span>
                        <span className="text-gray-500 mr-1.5">,</span>
                        <span style={{ color: "#303841" }}>
                            <a href="#author-3" className="text-blue-600 font-medium hover:text-blue-800 hover:underline transition-colors">Bob Johnson</a>
                            <sup className="text-xs text-gray-500 ml-0.5">a,c</sup>
                        </span>
                    </div>

                    {/* ── Affiliations ── */}
                    <div className="text-sm text-gray-600 leading-relaxed mb-6 pl-1 space-y-1">
                        <p><sup className="text-xs text-gray-400 mr-1">a</sup> Department of Example Studies, University of Placeholder, Anytown 12345, Country</p>
                        <p><sup className="text-xs text-gray-400 mr-1">b</sup> Institute of Generic Research, Sample University, Somewhere 67890, Country</p>
                        <p><sup className="text-xs text-gray-400 mr-1">c</sup> Center for Demonstration Sciences, Test City 11111, Country</p>
                        <p className="mt-2 italic text-gray-500">* Corresponding author. Email: john.doe@placeholder.edu</p>
                    </div>

                    {/* ── Article Meta ── */}
                    <div className="flex flex-wrap gap-6 p-4 md:px-5 rounded-lg mb-6 border border-gray-100" style={{ backgroundColor: "#F5F5F5" }}>
                        <div className="flex flex-col gap-1">
                            <span className="text-xs font-bold uppercase tracking-wide text-gray-500">DOI</span>

                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-xs font-bold uppercase tracking-wide text-gray-500">Received</span>
                            <span className="text-sm font-medium" style={{ color: "#303841" }}>1 January 2026</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-xs font-bold uppercase tracking-wide text-gray-500">Accepted</span>
                            <span className="text-sm font-medium" style={{ color: "#303841" }}>15 February 2026</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-xs font-bold uppercase tracking-wide text-gray-500">Published</span>
                            <span className="text-sm font-medium" style={{ color: "#303841" }}>1 March 2026</span>
                        </div>
                    </div>

                    {/* ── Action Buttons ── */}
                    <div className="flex flex-wrap gap-3 mb-8">
                        <button className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white rounded-lg transition-colors shadow-sm hover:opacity-90" style={{ backgroundColor: "#76ABAE" }}>
                            <Download className="w-4 h-4" /> Download PDF
                        </button>
                        <button className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors shadow-sm" style={{ color: "#303841" }}>
                            <LinkIcon className="w-4 h-4" /> Cite
                        </button>
                        <button className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors shadow-sm" style={{ color: "#303841" }}>
                            <Share className="w-4 h-4" /> Share
                        </button>
                        <button className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors shadow-sm" style={{ color: "#303841" }}>
                            <Star className="w-4 h-4" /> Save
                        </button>
                    </div>

                    <hr className="border-t border-gray-200 my-8" />

                    {/* ── Abstract ── */}
                    <section className="mb-10" id="pub-abstract">
                        <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 inline-block" style={{ color: "#303841", borderColor: "#76ABAE" }}>Abstract</h2>
                        <p className="text-base p-5 md:p-6 border-l-4 rounded-r-lg" style={{ color: "#303841", background: "linear-gradient(135deg, #EAF2F2, #F5F5F5)", borderColor: "#76ABAE" }}>
                            This is a placeholder abstract for demonstration purposes. In a real article,
                            this section would contain a concise summary of the research objectives,
                            methodology, key findings, and conclusions. The abstract typically ranges
                            from 150 to 300 words and provides readers with a quick overview of the
                            entire paper. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </section>

                    {/* ── Keywords ── */}
                    <div className="flex flex-wrap items-center gap-2 mb-4" id="pub-keywords">
                        <span className="text-sm font-semibold text-gray-600">Keywords:</span>
                        {["Keyword One", "Keyword Two", "Keyword Three",
                            "Keyword Four", "Keyword Five", "Keyword Six"].map((kw) => (
                                <span key={kw} className="inline-block text-xs font-medium px-3 py-1.5 rounded-full border border-transparent hover:shadow-sm hover:-translate-y-px transition-all cursor-default" style={{ color: "#76ABAE", backgroundColor: "#EAF2F2" }}>
                                    {kw}
                                </span>
                            ))}
                    </div>

                    <hr className="border-t border-gray-200 my-8" />

                    {/* ── 1. Introduction ── */}
                    <section className="mb-10" id="pub-introduction">
                        <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 inline-block" style={{ color: "#303841", borderColor: "#76ABAE" }}>1. Introduction</h2>
                        <div className="space-y-4 font-serif text-[15px] leading-relaxed text-gray-700">
                            <p>
                                This is the introduction section of the example article. In a real paper,
                                this section would establish the research context, review relevant prior
                                work, and clearly state the research questions or hypotheses being
                                investigated. It would also outline the structure of the rest of the paper.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                            <p>
                                The remainder of this paper is organized as follows. Section 2 describes
                                the methodology. Section 3 presents the results. Section 4 discusses the
                                findings, and Section 5 concludes the paper.
                            </p>
                        </div>
                    </section>

                    {/* ── 2. Methods ── */}
                    <section className="mb-10" id="pub-methods">
                        <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 inline-block" style={{ color: "#303841", borderColor: "#76ABAE" }}>2. Methods</h2>

                        <h3 className="text-lg font-semibold mt-8 mb-3" style={{ color: "#303841" }}>2.1 Example Method A</h3>
                        <p className="font-serif text-[15px] leading-relaxed text-gray-700 mb-4">
                            This subsection would describe the first method or approach used in the
                            study. It would include sufficient detail for other researchers to
                            reproduce the work, including any relevant parameters, configurations,
                            or experimental setups.
                        </p>

                        {/* ── Figure Placeholder ── */}
                        <figure className="my-8" id="pub-figure-1">
                            <div className="flex flex-col items-center justify-center gap-3 p-12 border-2 border-dashed rounded-xl text-gray-500 text-sm text-center transition-colors" style={{ background: "linear-gradient(135deg, #EAF2F2, #F5F5F5)", borderColor: "#76ABAE" }}>
                                <span className="text-3xl">📊</span>
                                <span>Figure 1: Placeholder diagram of the proposed method</span>
                            </div>
                            <figcaption className="text-sm text-gray-600 leading-relaxed mt-3 px-2">
                                <strong style={{ color: "#303841" }}>Fig. 1.</strong> A placeholder figure caption describing the
                                diagram above. In a real article, this would explain the visual
                                representation of the methodology or data.
                            </figcaption>
                        </figure>

                        <h3 className="text-lg font-semibold mt-8 mb-3" style={{ color: "#303841" }}>2.2 Example Method B</h3>
                        <p className="font-serif text-[15px] leading-relaxed text-gray-700 mb-4">
                            This subsection would describe a second method or technique. Lorem ipsum
                            dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                            id est laborum.
                        </p>

                        {/* ── Equation Placeholder ── */}
                        <div className="flex items-center justify-center gap-6 p-5 my-6 rounded-xl border border-gray-100" id="pub-equation-1" style={{ backgroundColor: "#F5F5F5" }}>
                            <span className="font-serif text-lg tracking-wide" style={{ color: "#303841" }}>
                                y = mx + b
                            </span>
                            <span className="text-sm text-gray-500 ml-auto">(1)</span>
                        </div>

                        <h3 className="text-lg font-semibold mt-8 mb-3" style={{ color: "#303841" }}>2.3 Example Method C</h3>
                        <p className="font-serif text-[15px] leading-relaxed text-gray-700 mb-4">
                            A third method or analysis technique would be described here. This might
                            include statistical tests, computational procedures, or experimental
                            protocols relevant to the study.
                        </p>
                    </section>

                    {/* ── 3. Results ── */}
                    <section className="mb-10" id="pub-results">
                        <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 inline-block" style={{ color: "#303841", borderColor: "#76ABAE" }}>3. Results</h2>
                        <p className="font-serif text-[15px] leading-relaxed text-gray-700 mb-4">
                            This section would present the main findings of the study. The results
                            are typically accompanied by tables, figures, and statistical analyses
                            that support the conclusions drawn by the authors.
                        </p>

                        {/* ── Table Placeholder ── */}
                        <figure className="my-8" id="pub-table-1">
                            <figcaption className="text-sm text-gray-600 leading-relaxed mb-3">
                                <strong style={{ color: "#303841" }}>Table 1.</strong> Example results comparing Method A, Method B, and Method C.
                            </figcaption>
                            <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                                <table className="w-full text-sm text-left border-collapse">
                                    <thead className="text-gray-700 uppercase tracking-wider text-xs border-b border-gray-200" style={{ backgroundColor: "#F5F5F5" }}>
                                        <tr>
                                            <th className="px-4 py-3 font-semibold">Experiment</th>
                                            <th className="px-4 py-3 font-semibold">Sample Size</th>
                                            <th className="px-4 py-3 font-semibold">Result A</th>
                                            <th className="px-4 py-3 font-semibold">Result B</th>
                                            <th className="px-4 py-3 font-semibold">Difference</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        <tr className="hover:bg-[#EAF2F2]/50 transition-colors">
                                            <td className="px-4 py-3 text-gray-600 font-mono text-xs">Trial 1</td>
                                            <td className="px-4 py-3 text-gray-600 font-mono text-xs">100</td>
                                            <td className="px-4 py-3 text-gray-600 font-mono text-xs">0.85</td>
                                            <td className="px-4 py-3 text-gray-600 font-mono text-xs">0.82</td>
                                            <td className="px-4 py-3 text-green-600 font-mono text-xs font-medium">+3.6%</td>
                                        </tr>
                                        <tr className="hover:bg-[#EAF2F2]/50 transition-colors">
                                            <td className="px-4 py-3 text-gray-600 font-mono text-xs">Trial 2</td>
                                            <td className="px-4 py-3 text-gray-600 font-mono text-xs">200</td>
                                            <td className="px-4 py-3 text-gray-600 font-mono text-xs">0.87</td>
                                            <td className="px-4 py-3 text-gray-600 font-mono text-xs">0.84</td>
                                            <td className="px-4 py-3 text-green-600 font-mono text-xs font-medium">+3.5%</td>
                                        </tr>
                                        <tr className="hover:bg-[#EAF2F2]/50 transition-colors">
                                            <td className="px-4 py-3 text-gray-600 font-mono text-xs">Trial 3</td>
                                            <td className="px-4 py-3 text-gray-600 font-mono text-xs">500</td>
                                            <td className="px-4 py-3 text-gray-600 font-mono text-xs">0.91</td>
                                            <td className="px-4 py-3 text-gray-600 font-mono text-xs">0.88</td>
                                            <td className="px-4 py-3 text-green-600 font-mono text-xs font-medium">+3.4%</td>
                                        </tr>
                                        <tr className="hover:bg-[#EAF2F2]/50 transition-colors">
                                            <td className="px-4 py-3 text-gray-600 font-mono text-xs">Trial 4</td>
                                            <td className="px-4 py-3 text-gray-600 font-mono text-xs">1000</td>
                                            <td className="px-4 py-3 text-gray-600 font-mono text-xs">0.93</td>
                                            <td className="px-4 py-3 text-gray-400 font-mono text-xs">—</td>
                                            <td className="px-4 py-3 text-gray-400 font-mono text-xs">—</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-xs text-gray-500 italic mt-2">* Values are for demonstration purposes only</p>
                        </figure>

                        {/* ── Figure Placeholder 2 ── */}
                        <figure className="my-8" id="pub-figure-2">
                            <div className="flex flex-col items-center justify-center gap-3 p-12 border-2 border-dashed rounded-xl text-gray-500 text-sm text-center transition-colors" style={{ background: "linear-gradient(135deg, #EAF2F2, #F5F5F5)", borderColor: "#76ABAE" }}>
                                <span className="text-3xl">📈</span>
                                <span>Figure 2: Placeholder chart showing example results</span>
                            </div>
                            <figcaption className="text-sm text-gray-600 leading-relaxed mt-3 px-2">
                                <strong style={{ color: "#303841" }}>Fig. 2.</strong> A placeholder chart caption. In a real article,
                                this would describe trends, comparisons, or patterns visible in the data
                                visualization above.
                            </figcaption>
                        </figure>
                    </section>

                    {/* ── 4. Discussion ── */}
                    <section className="mb-10" id="pub-discussion">
                        <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 inline-block" style={{ color: "#303841", borderColor: "#76ABAE" }}>4. Discussion</h2>
                        <div className="space-y-4 font-serif text-[15px] leading-relaxed text-gray-700">
                            <p>
                                This section would interpret the results presented above and discuss their
                                implications. The authors would compare their findings with prior work
                                and explain any unexpected observations or limitations of the study.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis
                                unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                architecto beatae vitae dicta sunt explicabo.
                            </p>
                            <p>
                                Several limitations should be noted. First, this is placeholder text.
                                Second, the data shown is entirely fictional. Future work would address
                                these limitations and extend the findings to real-world applications.
                            </p>
                        </div>
                    </section>

                    {/* ── 5. Conclusion ── */}
                    <section className="mb-10" id="pub-conclusion">
                        <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 inline-block" style={{ color: "#303841", borderColor: "#76ABAE" }}>5. Conclusion</h2>
                        <p className="font-serif text-[15px] leading-relaxed text-gray-700">
                            This section would summarize the key findings and contributions of the
                            paper. It would restate the main results and suggest directions for
                            future research. This is placeholder text for layout demonstration only.
                        </p>
                    </section>

                    <hr className="border-t border-gray-200 my-8" />

                    {/* ── Acknowledgements ── */}
                    <section className="mb-10" id="pub-acknowledgements">
                        <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 inline-block" style={{ color: "#303841", borderColor: "#76ABAE" }}>Acknowledgements</h2>
                        <p className="font-serif text-[15px] leading-relaxed text-gray-700">
                            This work was supported by the Example Funding Agency under Grant
                            No. EXAMPLE-12345. The authors thank Dr. Alice Placeholder and
                            Prof. Bob Generic for helpful discussions.
                        </p>
                    </section>

                    {/* ── References ── */}
                    <section className="mb-10" id="pub-references">
                        <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 inline-block" style={{ color: "#303841", borderColor: "#76ABAE" }}>References</h2>
                        <ol className="list-decimal pl-6 space-y-3 font-serif text-[14px] leading-relaxed text-gray-700 marker:font-sans marker:font-semibold marker:text-gray-400">
                            <li id="ref-1" className="pl-1">
                                A. Author, B. Writer, <em style={{ color: "#303841" }}>Title of the first example reference</em>,
                                Journal of Examples <strong style={{ color: "#303841" }}>1</strong> (2020) 1–10.
                            </li>
                            <li id="ref-2" className="pl-1">
                                C. Researcher, D. Scholar, <em style={{ color: "#303841" }}>Another placeholder reference title
                                    for demonstration</em>, Placeholder Reviews <strong style={{ color: "#303841" }}>42</strong> (2022) 100–115.
                            </li>
                            <li id="ref-3" className="pl-1">
                                E. Scientist, <em style={{ color: "#303841" }}>A third generic reference entry</em>, Generic
                                Letters <strong style={{ color: "#303841" }}>7</strong> (2023) 55–60.
                            </li>
                            <li id="ref-4" className="pl-1">
                                F. Academic, G. Professor, <em style={{ color: "#303841" }}>Fourth example citation for layout
                                    testing purposes</em>, Sample Journal <strong style={{ color: "#303841" }}>15</strong> (2024) 200–220.
                            </li>
                            <li id="ref-5" className="pl-1">
                                H. Tester et al., <em style={{ color: "#303841" }}>Fifth and final placeholder reference</em>,
                                Demo Proceedings <strong style={{ color: "#303841" }}>3</strong> (2025) 50–58.
                            </li>
                        </ol>
                    </section>

                </article>
            </div>
        </div>
    );
}