import { useState } from "react";
import { FilePlus2 } from "lucide-react";
import { Link } from "react-router";

const CATEGORIES = [
  "Medical Research",
  "Environmental Science",
  "Physics",
  "Anthropology",
  "Public Health",
  "Engineering",
];

const initialFormState = {
  title: "",
  researcher: "",
  institution: "",
  category: CATEGORIES[0],
  goalAmount: "",
  daysLeft: "",
  imageUrl: "",
  tags: "",
  description: "",
};

export function Post() {
  const [form, setForm] = useState(initialFormState);
  const [submitted, setSubmitted] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newProposal = {
      title: form.title,
      researcher: form.researcher,
      institution: form.institution,
      category: form.category,
      goalAmount: Number(form.goalAmount),
      currentAmount: 0,
      backers: 0,
      daysLeft: Number(form.daysLeft),
      imageUrl: form.imageUrl,
      tags: form.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
      updates: 0,
      description: form.description,
    };

    // TODO: send newProposal to your backend / data store
    setSubmitted(newProposal);
    setForm(initialFormState);
  }

  return (
    <div style={{ backgroundColor: "#F5F5F5" }}>
      <section className="pt-8 pb-20">
        <div className="mx-auto w-full max-w-3xl px-4 md:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full" style={{ backgroundColor: "#EAF2F2" }}>
              <FilePlus2 className="h-6 w-6" style={{ color: "#76ABAE" }} />
            </div>
            <div>
              <h2 className="text-3xl font-bold" style={{ color: "#303841" }}>Post a Proposal</h2>
              <p className="text-sm text-gray-500">Share your research with potential backers</p>
            </div>
          </div>

          {submitted && (
            <div className="mb-8 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
              "{submitted.title}" was submitted successfully.
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label htmlFor="title" className="mb-1 block text-sm font-semibold" style={{ color: "#303841" }}>
                Project title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                required
                value={form.title}
                onChange={handleChange}
                placeholder="Novel Treatment for Alzheimer's Disease"
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="researcher" className="mb-1 block text-sm font-semibold" style={{ color: "#303841" }}>
                  Researcher name
                </label>
                <input
                  id="researcher"
                  name="researcher"
                  type="text"
                  required
                  value={form.researcher}
                  onChange={handleChange}
                  placeholder="Dr. Sarah Chen"
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="institution" className="mb-1 block text-sm font-semibold" style={{ color: "#303841" }}>
                  Institution
                </label>
                <input
                  id="institution"
                  name="institution"
                  type="text"
                  required
                  value={form.institution}
                  onChange={handleChange}
                  placeholder="Stanford Medical Center"
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div>
                <label htmlFor="category" className="mb-1 block text-sm font-semibold" style={{ color: "#303841" }}>
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none"
                >
                  {CATEGORIES.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="goalAmount" className="mb-1 block text-sm font-semibold" style={{ color: "#303841" }}>
                  Funding goal ($)
                </label>
                <input
                  id="goalAmount"
                  name="goalAmount"
                  type="number"
                  min="0"
                  required
                  value={form.goalAmount}
                  onChange={handleChange}
                  placeholder="500000"
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="daysLeft" className="mb-1 block text-sm font-semibold" style={{ color: "#303841" }}>
                  Campaign length (days)
                </label>
                <input
                  id="daysLeft"
                  name="daysLeft"
                  type="number"
                  min="1"
                  required
                  value={form.daysLeft}
                  onChange={handleChange}
                  placeholder="30"
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="imageUrl" className="mb-1 block text-sm font-semibold" style={{ color: "#303841" }}>
                Cover image
              </label>
              <input
                id="imageUrl"
                name="imageUrl"
                type="text"
                value={form.imageUrl}
                onChange={handleChange}
                placeholder="medical research laboratory"
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none"
              />
              <p className="mt-1 text-xs text-gray-400">
                Image URL, or a short description if your image pipeline generates one.
              </p>
            </div>

            <div>
              <label htmlFor="tags" className="mb-1 block text-sm font-semibold" style={{ color: "#303841" }}>
                Tags
              </label>
              <input
                id="tags"
                name="tags"
                type="text"
                value={form.tags}
                onChange={handleChange}
                placeholder="Neuroscience, Clinical Trial, Drug Development"
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none"
              />
              <p className="mt-1 text-xs text-gray-400">Separate tags with commas.</p>
            </div>

            <div>
              <label htmlFor="description" className="mb-1 block text-sm font-semibold" style={{ color: "#303841" }}>
                Project description
              </label>
              <textarea
                id="description"
                name="description"
                rows={6}
                required
                value={form.description}
                onChange={handleChange}
                placeholder="Describe your research, methodology, and what backers' funding will support..."
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="self-start rounded-full px-6 py-2.5 text-sm font-semibold text-white"
              style={{ backgroundColor: "#303841" }}
            >
              <Link to="/">
                Submit proposal
              </Link>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}