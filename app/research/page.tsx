import type { Metadata } from "next";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research themes in computational psychiatry, neuroimaging, AI clinical tools, and naturalistic behavior analysis.",
};

export default function ResearchPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-14 max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#4f46e5] mb-2">
          Research
        </p>
        <h1 className="text-4xl font-bold text-[#0f172a] leading-tight">
          Research Themes
        </h1>
        <p className="mt-4 text-lg text-[#64748b] leading-relaxed">
          Our lab bridges neuroscience, computation, and clinical application to understand
          the brain and translate insights into mental health tools.
        </p>
      </div>

      {/* Research cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <div
            key={project.id}
            className="group rounded-2xl border border-[#e2e8f0] bg-white p-7 hover:border-[#4f46e5] hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
          >
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 rounded-xl bg-[#eef2ff] flex items-center justify-center text-2xl shrink-0">
                {project.icon}
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#0f172a] group-hover:text-[#4f46e5] transition-colors leading-snug">
                  {project.title}
                </h2>
                <p className="mt-1 text-sm text-[#64748b]">{project.summary}</p>
              </div>
            </div>

            <p className="text-[#475569] leading-relaxed text-sm mb-5">
              {project.description}
            </p>

            {/* Highlights */}
            <div className="mb-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#94a3b8] mb-2">
                Current Studies
              </p>
              <ul className="space-y-1">
                {project.highlights.map((h) => (
                  <li key={h} className="text-sm text-[#475569] flex items-start gap-2">
                    <span className="text-[#4f46e5] mt-1 shrink-0">→</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Methods */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#94a3b8] mb-2">
                Methods
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.methods.map((m) => (
                  <span
                    key={m}
                    className="px-2.5 py-1 text-xs rounded-full bg-[#f1f5f9] text-[#475569] border border-[#e2e8f0]"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Overview diagram placeholder */}
      <div className="mt-16 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] p-10 text-center">
        <div className="text-4xl mb-4">🔬</div>
        <h3 className="text-xl font-bold text-[#0f172a] mb-2">
          Integrative Approach
        </h3>
        <p className="text-[#64748b] max-w-2xl mx-auto text-sm leading-relaxed">
          Our research integrates neuroimaging, computational modeling, and machine learning
          to build a comprehensive understanding of the brain in health and disease. By combining
          large-scale data with rigorous analytical methods, we aim to translate basic science
          into clinical tools for mental health.
        </p>
      </div>
    </div>
  );
}
