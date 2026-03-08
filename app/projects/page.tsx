import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resource",
  description: "Computational Psychiatry in the Era of Open Science - Data, Computation, and Natural Behavior",
};

const dataResources = [
  { name: "OpenNeuro", description: "Large repository of openly shared neuroimaging datasets" },
  { name: "Human Connectome Project", description: "High-resolution brain data with rich behavioral phenotyping" },
  { name: "UK Biobank", description: "Population-scale imaging, genetics, and health records" },
  { name: "ABCD Study", description: "Longitudinal brain and mental health development data" },
  { name: "IMAGEN Consortium", description: "Imaging genetics data on adolescent psychiatric risk" },
];

const computationResources = [
  {
    category: "Statistical & Probabilistic Modeling",
    items: ["Bayesian inference", "Hierarchical models", "Normative modeling"],
  },
  {
    category: "Machine Learning & AI",
    items: ["Representation learning", "Deep neural networks", "Generative models"],
  },
  {
    category: "Computational Cognitive Models",
    items: ["Reinforcement learning", "Decision-making models", "Cognitive control models"],
  },
];

const naturalisticResources = [
  { name: "Natural Scenes Dataset", description: "Brain responses to thousands of natural images" },
  { name: "Narratives Dataset", description: "Neural responses during real-world story listening" },
  { name: "Natural Movie Datasets", description: "Large-scale behavioral recordings in natural settings" },
];

const loopSteps = [
  { num: "01", title: "Understanding Data", desc: "Analyze existing datasets to reveal patterns in brain organization and behavior" },
  { num: "02", title: "Computing Data", desc: "Use computational models to uncover hidden structure and causal mechanisms" },
  { num: "03", title: "Generating Data", desc: "Design new experiments and datasets informed by these models" },
];

export default function ResourcePage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Hero Section */}
      <div className="mb-16 max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#4f46e5] mb-2">
          Resource
        </p>
        <h1 className="text-4xl font-bold text-[#0f172a] leading-tight mb-4">
          Computational Psychiatry in the Era of Open Science
        </h1>
        <p className="text-lg text-[#64748b] leading-relaxed">
          A manifesto for data, computation, and natural behavior
        </p>
      </div>

      {/* Section 1: The Opportunity */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-2xl font-bold text-[#4f46e5]">01</span>
          <h2 className="text-2xl font-bold text-[#0f172a]">The Opportunity</h2>
        </div>
        <div className="bg-white rounded-2xl border border-[#e2e8f0] p-8">
          <p className="text-[#0f172a] font-semibold text-lg mb-4">
            Psychiatry is entering a new era.
          </p>
          <p className="text-[#64748b] leading-relaxed mb-6">
            For the first time, large-scale brain, behavioral, and genetic datasets are becoming openly available. 
            At the same time, advances in machine learning and computational modeling allow us to analyze these 
            datasets at an unprecedented scale.
          </p>
          <div className="bg-[#eef2ff] rounded-xl p-6 mb-6">
            <p className="text-[#4f46e5] font-medium mb-2">
              Computational psychiatry emerges at the intersection of two revolutions:
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1.5 bg-white text-[#4f46e5] rounded-full text-sm font-medium">
                Data-rich neuroscience
              </span>
              <span className="px-3 py-1.5 bg-white text-[#4f46e5] rounded-full text-sm font-medium">
                Model-driven theory
              </span>
            </div>
          </div>
          <p className="text-[#64748b] leading-relaxed">
            Its goal is not only to predict symptoms, but to <span className="font-semibold text-[#0f172a]">understand the mechanisms</span> linking brain, cognition, and mental disorders.
          </p>
        </div>
      </section>

      {/* Section 2: Data */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-2xl font-bold text-[#4f46e5]">02</span>
          <h2 className="text-2xl font-bold text-[#0f172a]">The First Resource: Data</h2>
        </div>
        <div className="bg-white rounded-2xl border border-[#e2e8f0] p-8">
          <p className="text-[#64748b] leading-relaxed mb-6">
            Large open datasets are transforming the study of the human brain and mental health. 
            These datasets provide the empirical foundation for computational psychiatry.
          </p>
          <p className="text-xs font-semibold uppercase tracking-wider text-[#94a3b8] mb-4">
            Major Resources
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {dataResources.map((resource) => (
              <div
                key={resource.name}
                className="p-4 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] hover:border-[#4f46e5] transition-colors"
              >
                <h3 className="font-semibold text-[#0f172a] text-sm mb-1">{resource.name}</h3>
                <p className="text-xs text-[#64748b]">{resource.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Computation */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-2xl font-bold text-[#4f46e5]">03</span>
          <h2 className="text-2xl font-bold text-[#0f172a]">The Second Resource: Computation</h2>
        </div>
        <div className="bg-white rounded-2xl border border-[#e2e8f0] p-8">
          <div className="bg-[#0f172a] rounded-xl p-6 mb-6">
            <p className="text-white font-semibold text-lg">
              Data alone is not enough. To understand the brain, we must compute it.
            </p>
          </div>
          <p className="text-[#64748b] leading-relaxed mb-6">
            Computational psychiatry draws on several methodological foundations:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {computationResources.map((section) => (
              <div key={section.category} className="space-y-3">
                <h3 className="font-semibold text-[#0f172a] text-sm">{section.category}</h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="text-sm text-[#64748b] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4f46e5]"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Naturalistic Behavior */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-2xl font-bold text-[#4f46e5]">04</span>
          <h2 className="text-2xl font-bold text-[#0f172a]">The Third Resource: Naturalistic Behavior</h2>
        </div>
        <div className="bg-white rounded-2xl border border-[#e2e8f0] p-8">
          <p className="text-[#64748b] leading-relaxed mb-4">
            Traditional laboratory tasks capture only a small part of human cognition. 
            A new direction in neuroscience is the study of <span className="font-semibold text-[#0f172a]">naturalistic behavior</span>.
          </p>
          <p className="text-xs font-semibold uppercase tracking-wider text-[#94a3b8] mb-4">
            Open Resources
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {naturalisticResources.map((resource) => (
              <div
                key={resource.name}
                className="p-4 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] hover:border-[#4f46e5] transition-colors"
              >
                <h3 className="font-semibold text-[#0f172a] text-sm mb-1">{resource.name}</h3>
                <p className="text-xs text-[#64748b]">{resource.description}</p>
              </div>
            ))}
          </div>
          <p className="text-[#64748b] text-sm mt-6 leading-relaxed">
            Naturalistic paradigms allow researchers to study cognition as it unfolds in complex, real-world environments.
          </p>
        </div>
      </section>

      {/* Section 5: The Closed Loop */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-2xl font-bold text-[#4f46e5]">05</span>
          <h2 className="text-2xl font-bold text-[#0f172a]">The Closed Loop of Scientific Discovery</h2>
        </div>
        <div className="bg-white rounded-2xl border border-[#e2e8f0] p-8">
          <p className="text-[#64748b] leading-relaxed mb-8">
            Modern brain science increasingly operates through a closed loop:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {loopSteps.map((step) => (
              <div key={step.num} className="text-center p-6 rounded-xl bg-[#f8fafc] border border-[#e2e8f0]">
                <span className="text-3xl font-bold text-[#4f46e5] block mb-3">{step.num}</span>
                <h3 className="font-semibold text-[#0f172a] mb-2">{step.title}</h3>
                <p className="text-xs text-[#64748b] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-4 py-4">
            <span className="px-4 py-2 bg-[#4f46e5] text-white rounded-full text-sm font-medium">Understand</span>
            <span className="text-[#94a3b8]">→</span>
            <span className="px-4 py-2 bg-[#4f46e5] text-white rounded-full text-sm font-medium">Compute</span>
            <span className="text-[#94a3b8]">→</span>
            <span className="px-4 py-2 bg-[#4f46e5] text-white rounded-full text-sm font-medium">Generate</span>
          </div>
          <p className="text-[#64748b] text-sm text-center mt-6 leading-relaxed">
            This creates a scientific cycle where open datasets are not only research material—
            they are training grounds for the next generation of experiments and theories.
          </p>
        </div>
      </section>

      {/* Section 6: Toward a New Science */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-2xl font-bold text-[#4f46e5]">06</span>
          <h2 className="text-2xl font-bold text-[#0f172a]">Toward a New Science of Mind and Mental Health</h2>
        </div>
        <div className="bg-white rounded-2xl border border-[#e2e8f0] p-8">
          <p className="text-[#64748b] leading-relaxed mb-6">
            Computational psychiatry aims to bridge multiple levels of explanation:
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {["Genes & Molecules", "Brain Circuits", "Cognition & Behavior", "Mental Disorders"].map((level) => (
              <span
                key={level}
                className="px-4 py-2 bg-[#eef2ff] text-[#4f46e5] rounded-full text-sm font-medium"
              >
                {level}
              </span>
            ))}
          </div>
          <p className="text-[#64748b] leading-relaxed mb-6">
            By combining open data, computational models, and naturalistic behavior, 
            we can move toward a more mechanistic and quantitative understanding of mental health.
          </p>
          <div className="bg-[#0f172a] rounded-xl p-6">
            <p className="text-white font-semibold text-center">
              The long-term vision is clear:
            </p>
            <p className="text-[#94a3b8] text-center mt-2 leading-relaxed">
              A science where psychiatric disorders are understood not only through symptoms, 
              but through <span className="text-white">computational models of the brain in the real world</span>.
            </p>
          </div>
        </div>
      </section>

      {/* GitHub CTA */}
      <div className="rounded-2xl bg-[#0f172a] p-8 md:p-10">
        <div className="flex items-start gap-5">
          <div className="text-4xl shrink-0">📂</div>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              Open Science & Code
            </h3>
            <p className="text-[#94a3b8] text-sm leading-relaxed mb-4">
              We are committed to open science. Code and data from our publications
              are made publicly available where possible. Visit our GitHub for
              analysis pipelines, computational models, and datasets.
            </p>
            <a
              href="https://github.com/xiec199"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#0f172a] text-sm font-semibold rounded-lg hover:bg-[#f1f5f9] transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub @xiec199
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
