import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact information and academic links for Chao Xie at Tsinghua University.",
};

const links = [
  {
    label: "Email",
    value: "xiec199@gmail.com",
    href: "mailto:xiec199@gmail.com",
    description: "Best for research inquiries and collaborations",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Google Scholar",
    value: "Chao Xie (谢超)",
    href: "https://scholar.google.com/citations?user=Z-XpEsYAAAAJ&hl=zh-CN",
    description: "Full publication list and citation metrics",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "@xiec199",
    href: "https://github.com/xiec199",
    description: "Code, analysis pipelines, and open-source tools",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-12 max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#4f46e5] mb-2">
          Contact
        </p>
        <h1 className="text-4xl font-bold text-[#0f172a] leading-tight">
          Get in Touch
        </h1>
        <p className="mt-3 text-[#64748b] leading-relaxed">
          I am always happy to discuss research ideas, potential collaborations,
          or opportunities for students and postdocs.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Links */}
        <div className="space-y-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="group flex items-center gap-4 p-5 rounded-xl border border-[#e2e8f0] bg-white hover:border-[#4f46e5] hover:shadow-md transition-all duration-200"
            >
              <div className="w-11 h-11 rounded-xl bg-[#eef2ff] text-[#4f46e5] flex items-center justify-center shrink-0 group-hover:bg-[#4f46e5] group-hover:text-white transition-colors">
                {link.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#94a3b8] mb-0.5">
                  {link.label}
                </p>
                <p className="font-semibold text-[#0f172a] group-hover:text-[#4f46e5] transition-colors truncate">
                  {link.value}
                </p>
                <p className="text-xs text-[#94a3b8] mt-0.5">{link.description}</p>
              </div>
              <svg
                className="w-4 h-4 text-[#94a3b8] group-hover:text-[#4f46e5] transition-colors shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          ))}
        </div>

        {/* Address & info */}
        <div className="space-y-5">
          {/* Office */}
          <div className="rounded-xl border border-[#e2e8f0] bg-white p-6">
            <h3 className="font-semibold text-[#0f172a] mb-3 flex items-center gap-2">
              <span>📍</span> Office
            </h3>
            <div className="text-sm text-[#64748b] space-y-1">
              <p className="font-medium text-[#0f172a]">Department of Psychological and Cognitive Sciences</p>
              <p>Tsinghua University</p>
              <p>Beijing, China 100084</p>
            </div>
          </div>

          {/* For prospective students */}
          <div className="rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-6">
            <h3 className="font-semibold text-[#0f172a] mb-2 flex items-center gap-2">
              <span>✉️</span> For Prospective Students
            </h3>
            <p className="text-sm text-[#64748b] leading-relaxed">
              Please include your CV, research statement, and relevant experience
              when reaching out about PhD or postdoc opportunities. Use the subject
              line:{" "}
              <span className="font-mono text-xs bg-[#e2e8f0] px-1.5 py-0.5 rounded text-[#475569]">
                [Position] Application — Your Name
              </span>
            </p>
            <a
              href="/positions"
              className="inline-block mt-3 text-sm text-[#4f46e5] font-medium hover:underline"
            >
              View open positions →
            </a>
          </div>

          {/* Response time */}
          <div className="rounded-xl border border-[#e2e8f0] bg-white p-6">
            <h3 className="font-semibold text-[#0f172a] mb-2 flex items-center gap-2">
              <span>⏱</span> Response Time
            </h3>
            <p className="text-sm text-[#64748b] leading-relaxed">
              I aim to respond to emails within 1–2 weeks. For urgent matters,
              please indicate so in the subject line.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
