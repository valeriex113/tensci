import { Target, Users, Lightbulb, ShieldCheck } from "lucide-react";

const VALUES = [
  {
    icon: Target,
    title: "Open science, no gatekeeping",
    body: "Every funded project publishes its results openly, including null results, so knowledge moves forward even when an experiment doesn't go as planned.",
  },
  {
    icon: Users,
    title: "The public funds what matters to them",
    body: "Traditional grant cycles can take years and favor safe, incremental work. We let anyone back the research they care about, directly.",
  },
  {
    icon: ShieldCheck,
    title: "Every proposal is vetted",
    body: "Our editorial team reviews credentials, methodology, and budget before a project goes live, so backers can fund with confidence.",
  },
  {
    icon: Lightbulb,
    title: "Built for early-stage ideas",
    body: "Many of the projects on TenSci are too early or too unconventional for traditional funding bodies. That's exactly what we're here for.",
  },
];

const STEPS = [
  {
    title: "Submit",
    body: "Researchers write up a short project page with goals, budget, timeline, and credentials. Our team reviews it before it goes live.",
  },
  {
    title: "Fund",
    body: "Backers pledge any amount toward the projects they believe in, then follow progress through updates posted directly by the research team.",
  },
  {
    title: "Publish",
    body: "Once a project wraps up, the results, data, and a plain-language summary are published openly back to every single backer.",
  },
];

export function About() {
  return (
    <div>
      {/* Mission */}
      <section className="px-6 pt-20 pb-20 text-center" style={{ background: "linear-gradient(135deg, #76ABAE, #303841)"}}>
        <h1 className="mx-auto max-w-3xl text-4xl font-bold text-white sm:text-5xl">
          Our mission
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-200">
          Most promising research never gets funded, not because it isn't
          good, but because it doesn't fit neatly into an existing grant
          category, or it's too early to have preliminary data. TenSci
          exists to close that gap, giving researchers a direct line to
          people who believe in their work, and giving the public a way to
          be part of discovery as it happens.
        </p>
      </section>

      {/* Values */}
      <section className="bg-slate-50 px-6 py-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">
            What we stand for
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {VALUES.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex gap-4 rounded-2xl bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-teal-50">
                  <Icon className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-10">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">
            How it works
          </h2>
          <ol className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {STEPS.map((step, index) => (
              <li key={step.title} className="text-center">
                <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-slate-900 px-6 py-16 text-center" style={{ background: "#303841"}}>
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 sm:grid-cols-4">
          <div>
            <p className="text-3xl font-extrabold text-white">$12.5M</p>
            <p className="mt-1 text-sm text-slate-400">Total Funded</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-white">234</p>
            <p className="mt-1 text-sm text-slate-400">Successful Publications</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-white">45K</p>
            <p className="mt-1 text-sm text-slate-400">Community Members</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-white">89%</p>
            <p className="mt-1 text-sm text-slate-400">Success Rate</p>
          </div>
        </div>
      </section>
    </div>
  );
}