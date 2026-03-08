import Image from "next/image";
import Link from "next/link";
import { publications } from "@/data/publications";
import { projects } from "@/data/projects";

const researchKeywords = [
  "Computational Psychiatry",
  "Cognitive Neuroscience",
  "Neuroimaging · fMRI/sMRI",
  "Naturalistic Behavior",
  "Machine Learning & AI",
];

const featuredPubs = publications.filter((p) => p.featured).slice(0, 3);

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
          {/* Avatar */}
          <div className="shrink-0">
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-2xl overflow-hidden bg-[#e2e8f0] shadow-lg">
              <Image
                src="./avatar.jpg"
                alt="Chao Xie"
                width={176}
                height={176}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>

          {/* Hero text */}
          <div className="flex-1">
            <p className="text-sm font-medium text-[#4f46e5] uppercase tracking-widest mb-2">
              Researcher · Tsinghua University
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-[#0f172a] leading-tight tracking-tight">
              Chao Xie
              <span className="text-[#94a3b8] font-normal ml-3 text-3xl md:text-4xl">
                谢超
              </span>
            </h1>
            <p className="mt-2 text-lg text-[#64748b] font-medium">
              Department of Psychological and Cognitive Sciences, Tsinghua University
            </p>

            {/* Keywords */}
            <div className="flex flex-wrap gap-2 mt-5">
              {researchKeywords.map((kw) => (
                <span
                  key={kw}
                  className="px-3 py-1 bg-[#f1f5f9] text-[#475569] text-xs font-medium rounded-full border border-[#e2e8f0]"
                >
                  {kw}
                </span>
              ))}
            </div>

            {/* Quick links */}
            <div className="flex flex-wrap gap-3 mt-6">
              <a
                href="mailto:xiec199@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#4f46e5] text-white text-sm font-medium rounded-lg hover:bg-[#4338ca] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email
              </a>
              <a
                href="https://scholar.google.com/citations?user=Z-XpEsYAAAAJ&hl=zh-CN"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#0f172a] text-sm font-medium rounded-lg border border-[#e2e8f0] hover:border-[#4f46e5] hover:text-[#4f46e5] transition-colors"
              >
                Google Scholar
              </a>
              <a
                href="https://github.com/xiec199"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#0f172a] text-sm font-medium rounded-lg border border-[#e2e8f0] hover:border-[#0f172a] transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bio / Vision Section */}
      <section className="bg-[#f8fafc] border-y border-[#e2e8f0]">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="max-w-3xl">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[#4f46e5] mb-4">
              Research Vision
            </h2>
            <p className="text-xl text-[#0f172a] leading-relaxed font-light">
              AI gives us a new opportunity to study the human brain — perhaps the most complex
              system in the universe. Using brain imaging and computational models, we seek to
              understand how human cognition works and develops across the lifespan.
            </p>
            <p className="mt-4 text-lg text-[#64748b] leading-relaxed">
              By studying naturalistic behavior, we explore the complexity and creativity of human
              thought, while computational psychiatry connects these insights to mental health.
              In trying to understand the brain, we look not only to the stars above us, but also
              to the depths within ourselves.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Publications */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[#4f46e5] mb-1">
              Selected Publications
            </h2>
            <h3 className="text-2xl font-bold text-[#0f172a]">Recent Work</h3>
          </div>
          <Link
            href="/publications"
            className="text-sm font-medium text-[#4f46e5] hover:underline"
          >
            View all →
          </Link>
        </div>

        <div className="space-y-4">
          {featuredPubs.map((pub) => (
            <div
              key={pub.id}
              className="group p-5 rounded-xl border border-[#e2e8f0] bg-white hover:border-[#4f46e5] hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-white bg-[#4f46e5] px-2 py-0.5 rounded">
                      {pub.journalShort}
                    </span>
                    <span className="text-xs text-[#94a3b8]">{pub.year}</span>

                  </div>
                  <p className="font-semibold text-[#0f172a] group-hover:text-[#4f46e5] transition-colors leading-snug">
                    {pub.title}
                  </p>
                  <p className="mt-1 text-sm text-[#64748b]">{pub.authors}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Research Areas */}
      <section className="bg-[#f8fafc] border-t border-[#e2e8f0]">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[#4f46e5] mb-1">
                Research
              </h2>
              <h3 className="text-2xl font-bold text-[#0f172a]">Research Areas</h3>
            </div>
            <Link
              href="/research"
              className="text-sm font-medium text-[#4f46e5] hover:underline"
            >
              Learn more →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="p-5 rounded-xl bg-white border border-[#e2e8f0] hover:border-[#4f46e5] hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
              >
                <div className="text-3xl mb-3">{project.icon}</div>
                <h4 className="font-semibold text-[#0f172a] text-sm leading-snug">
                  {project.title}
                </h4>
                <p className="mt-2 text-xs text-[#64748b] leading-relaxed line-clamp-3">
                  {project.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[#4f46e5] mb-1">
              Opportunities
            </h2>
            <h3 className="text-2xl font-bold text-[#0f172a]">Join Us</h3>
          </div>
          <Link
            href="/positions"
            className="text-sm font-medium text-[#4f46e5] hover:underline"
          >
            Open positions →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-[#e2e8f0] bg-white hover:border-[#4f46e5] hover:shadow-md transition-all duration-200">
            <div className="text-3xl mb-4">🧠</div>
            <h4 className="font-bold text-[#0f172a] text-lg mb-2">Brain Science</h4>
            <p className="text-sm text-[#64748b] mb-4">
              Study the human brain using neuroimaging techniques to understand neural mechanisms underlying cognition and behavior.
            </p>
            <div className="space-y-2">
              <p className="text-xs font-semibold text-[#4f46e5] uppercase tracking-wide">You Need:</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2.5 py-1 rounded-full bg-[#f1f5f9] text-[#475569] border border-[#e2e8f0]">sMRI</span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-[#f1f5f9] text-[#475569] border border-[#e2e8f0]">fMRI</span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-[#e2e8f0] bg-white hover:border-[#4f46e5] hover:shadow-md transition-all duration-200">
            <div className="text-3xl mb-4">🤖</div>
            <h4 className="font-bold text-[#0f172a] text-lg mb-2">AI + Naturalistic Behavior</h4>
            <p className="text-sm text-[#64748b] mb-4">
              Apply artificial intelligence and large language models to analyze naturalistic human behavior and cognitive processes.
            </p>
            <div className="space-y-2">
              <p className="text-xs font-semibold text-[#4f46e5] uppercase tracking-wide">You Need:</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2.5 py-1 rounded-full bg-[#f1f5f9] text-[#475569] border border-[#e2e8f0]">AI</span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-[#f1f5f9] text-[#475569] border border-[#e2e8f0]">LLM</span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-[#e2e8f0] bg-white hover:border-[#4f46e5] hover:shadow-md transition-all duration-200">
            <div className="text-3xl mb-4">💚</div>
            <h4 className="font-bold text-[#0f172a] text-lg mb-2">Mental Health</h4>
            <p className="text-sm text-[#64748b] mb-4">
              Bridge neuroscience and clinical practice to understand mental disorders and develop computational models for psychiatry.
            </p>
            <div className="space-y-2">
              <p className="text-xs font-semibold text-[#4f46e5] uppercase tracking-wide">You Need:</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2.5 py-1 rounded-full bg-[#f1f5f9] text-[#475569] border border-[#e2e8f0]">Psychology</span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-[#f1f5f9] text-[#475569] border border-[#e2e8f0]">Psychiatry</span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-[#f1f5f9] text-[#475569] border border-[#e2e8f0]">Computational Psychiatry</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 rounded-xl bg-[#f8fafc] border border-[#e2e8f0]">
          <h4 className="font-semibold text-[#0f172a] mb-3">Recommended Background Knowledge</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-[#64748b]">
            <div>
              <p className="font-medium text-[#0f172a] mb-1">Brain Science</p>
              <ul className="space-y-1">
                <li>• Neuroimaging analysis (FSL, SPM, AFNI)</li>
                <li>• Brain anatomy and connectivity</li>
                <li>• Statistics and experimental design</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-[#0f172a] mb-1">AI + Behavior</p>
              <ul className="space-y-1">
                <li>• Machine learning / Deep learning</li>
                <li>• Natural language processing</li>
                <li>• Programming (Python, PyTorch)</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-[#0f172a] mb-1">Mental Health</p>
              <ul className="space-y-1">
                <li>• Psychopathology and diagnosis</li>
                <li>• Clinical assessment methods</li>
                <li>• Translational research</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="rounded-2xl bg-[#0f172a] p-10 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">
            Interested in Collaboration or Joining the Lab?
          </h3>
          <p className="text-[#94a3b8] mb-6 max-w-xl mx-auto">
            We welcome motivated PhD students, postdocs, and research collaborators
            in computational neuroscience, psychiatry, and AI.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/positions"
              className="px-5 py-2.5 bg-white text-[#0f172a] font-semibold rounded-lg hover:bg-[#f1f5f9] transition-colors text-sm"
            >
              Open Positions
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-[#4f46e5] text-white font-semibold rounded-lg hover:bg-[#4338ca] transition-colors text-sm"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
