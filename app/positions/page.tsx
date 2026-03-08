"use client";

import type { Metadata } from "next";
import { useState } from "react";

// Research directions
const researchInterests = [
  {
    id: "brain-science",
    icon: "🧠",
    title: "Brain Science",
    description: "Study human brain using neuroimaging techniques to understand neural mechanisms underlying cognition and behavior.",
    skills: ["sMRI", "fMRI"],
    color: "from-[#eef2ff] to-white",
    borderColor: "border-[#4f46e5]",
  },
  {
    id: "ai-behavior",
    icon: "🤖",
    title: "AI + Naturalistic Behavior",
    description: "Apply artificial intelligence and large language models to analyze naturalistic human behavior and cognitive processes.",
    skills: ["AI", "LLM"],
    color: "from-[#f0fdf4] to-white",
    borderColor: "border-[#10b981]",
  },
  {
    id: "mental-health",
    icon: "💚",
    title: "Mental Health",
    description: "Bridge neuroscience and clinical practice to understand mental disorders and develop computational models for psychiatry.",
    skills: ["Psychology", "Psychiatry", "Computational Psychiatry"],
    color: "from-[#fef3c7] to-white",
    borderColor: "border-[#f59e0b]",
  },
];

// Skill categories - 3 categories for horizontal layout
const skillCategories = [
  {
    id: "neuroimaging",
    icon: "🧠",
    title: "Neuroimaging",
    skills: ["rs-fMRI","tb-fMRI","sMRI", "DTI","MRS","EEG", "MEG","iEEG"],
    description: "Brain imaging techniques",
    color: "from-[#eef2ff] to-white",
    borderColor: "border-[#4f46e5]",
  },
  {
    id: "ai-ml",
    icon: "🤖",
    title: "AI & Machine Learning",
    skills: ["Large Langugae Model", "Deep Learning", "PyTorch", "Python","R","Matlab"],
    description: "Computational methods",
    color: "from-[#f0fdf4] to-white",
    borderColor: "border-[#10b981]",
  },
  {
    id: "Psy-Bio-Social-other",
    icon: "💚",
    title: "Psychology & Other",
    skills: ["Psychology", "Genetics","Psychiatry", "Psychopy","Credamo", "Bioinformatics"],
    description: "Mental health & supporting skills",
    color: "from-[#fef3c7] to-white",
    borderColor: "border-[#f59e0b]",
  },
];

// Position types
const positions = [
  {
    id: "intern",
    icon: "📚",
    title: "Research Interns",
    status: "Open Year-round",
    statusColor: "bg-[#dcfce7] text-[#166534]",
    description: "For undergraduate and master students who want to gain research experience in computational neuroscience and psychiatry.",
    requirements: [
      "Currently enrolled in university",
      "Basic programming skills (Python preferred)",
      "Interest in neuroscience or AI",
      "Commitment of at least 6 months",
    ],
  },
  {
    id: "phd",
    icon: "🎓",
    title: "PhD Students",
    status: "Open",
    statusColor: "bg-[#dcfce7] text-[#166534]",
    description: "We are recruiting PhD students passionate about understanding the human brain using computational and neuroimaging approaches.",
    requirements: [
      "Strong quantitative/programming skills",
      "Background in neuroscience, psychology, or CS",
      "Intellectual curiosity and independence",
      "Motivation for interdisciplinary research",
    ],
  },
  {
    id: "postdoc",
    icon: "🔬",
    title: "Postdoctoral Researchers",
    status: "Open",
    statusColor: "bg-[#dcfce7] text-[#166534]",
    description: "We welcome postdocs with strong publication records in computational neuroscience, neuroimaging, or machine learning.",
    requirements: [
      "PhD in relevant field",
      "Strong publication record",
      "Expertise in neuroimaging or ML",
      "Ability to work independently",
    ],
  },
];

export default function PositionsPage() {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [university, setUniversity] = useState("");

  const toggleInterest = (id: string) => {
    setSelectedInterests((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  const togglePosition = (id: string) => {
    setSelectedPosition((prev) => (prev === id ? null : id));
  };

  const isInterestSelected = (id: string) => selectedInterests.includes(id);
  const isSkillSelected = (skill: string) => selectedSkills.includes(skill);
  const isPositionSelected = (id: string) => selectedPosition === id;

  // Get all skills from selected interests
  const interestSkills = selectedInterests.flatMap(
    (id) => researchInterests.find((r) => r.id === id)?.skills || []
  );

  // Generate summary text
  const generateSummary = () => {
    const parts = [];
    
    if (selectedInterests.length > 0) {
      const interestNames = selectedInterests
        .map((id) => researchInterests.find((r) => r.id === id)?.title)
        .join(", ");
      parts.push(`You are interested in ${interestNames}.`);
    }
    
    if (selectedSkills.length > 0) {
      parts.push(`You have skills in ${selectedSkills.join(", ")}.`);
    }
    
    if (selectedPosition) {
      const position = positions.find((p) => p.id === selectedPosition);
      if (position) {
        parts.push(`You are interested in the ${position.title} position.`);
      }
    }
    
    return parts.join(" ");
  };

  const handleSubmit = () => {
    if (!name.trim()) {
      alert("Please enter your name");
      return;
    }
    
    if (!email.trim()) {
      alert("Please enter your email");
      return;
    }
    
    if (!university.trim()) {
      alert("Please enter your university");
      return;
    }
    
    if (selectedInterests.length === 0 && selectedSkills.length === 0 && !selectedPosition) {
      alert("Please select at least one research interest, skill, or position");
      return;
    }
    
    const summary = generateSummary();
    const subject = selectedPosition 
      ? `[${positions.find(p => p.id === selectedPosition)?.title}] Application — ${name}`
      : `Application — ${name}`;
    
    const body = `Name: ${name}
Email: ${email}
University: ${university}

Profile Summary:
${summary}`;
    
    window.location.href = `mailto:xiec199@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-12 max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#4f46e5] mb-2">
          Join Us
        </p>
        <h1 className="text-4xl font-bold text-[#0f172a] leading-tight">
          Find Your Path
        </h1>
        <p className="mt-3 text-[#64748b] leading-relaxed">
          Explore our research directions and identify how your skills and interests align with us. Simply click through the three modules (1:Interests + 2:Skills + 3:Positions) below to build your profile.
        </p>
      </div>

      {/* Interest Module */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-lg bg-[#4f46e5] flex items-center justify-center text-white font-bold text-sm">
            1
          </div>
          <h2 className="text-xl font-bold text-[#0f172a]">Research Interests</h2>
          <p className="text-sm text-[#64748b] ml-2">Select one or more directions that interest you</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {researchInterests.map((interest) => (
            <button
              key={interest.id}
              onClick={() => toggleInterest(interest.id)}
              className={`text-left p-4 rounded-xl border-2 transition-all duration-200 bg-gradient-to-r ${interest.color} ${
                isInterestSelected(interest.id)
                  ? `${interest.borderColor} shadow-md`
                  : "border-[#e2e8f0] hover:border-[#cbd5e1]"
              }`}
            >
              <div className="text-2xl mb-2">{interest.icon}</div>
              <h3 className="font-bold text-[#0f172a] text-base mb-1.5">{interest.title}</h3>
              <p className="text-xs text-[#64748b] mb-3 leading-relaxed">{interest.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {interest.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`text-xs px-2 py-0.5 rounded-full border ${
                      isInterestSelected(interest.id)
                        ? "bg-white border-[#cbd5e1] text-[#475569]"
                        : "bg-white/60 border-[#e2e8f0] text-[#64748b]"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Skills Module */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-lg bg-[#4f46e5] flex items-center justify-center text-white font-bold text-sm">
            2
          </div>
          <h2 className="text-xl font-bold text-[#0f172a]">Your Skills</h2>
          <p className="text-sm text-[#64748b] ml-2">Explore our open positions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className={`p-4 rounded-xl border-2 bg-gradient-to-r ${category.color} ${
                category.skills.some((s) => selectedSkills.includes(s))
                  ? `${category.borderColor} shadow-md`
                  : "border-[#e2e8f0]"
              }`}
            >
              <div className="text-2xl mb-2">{category.icon}</div>
              <h3 className="font-bold text-[#0f172a] text-base mb-1.5">{category.title}</h3>
              <p className="text-xs text-[#64748b] mb-3">{category.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <button
                    key={skill}
                    onClick={() => toggleSkill(skill)}
                    className={`text-xs px-2 py-0.5 rounded-full border transition-all duration-200 cursor-pointer hover:shadow-sm ${
                      isSkillSelected(skill)
                        ? "bg-[#4f46e5] text-white border-[#4f46e5] shadow-md"
                        : "bg-white border-[#e2e8f0] text-[#64748b] hover:border-[#4f46e5] hover:text-[#4f46e5]"
                    }`}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Positions */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-lg bg-[#4f46e5] flex items-center justify-center text-white font-bold text-sm">
            3
          </div>
          <h2 className="text-xl font-bold text-[#0f172a]">Open Positions</h2>
          <p className="text-sm text-[#64748b] ml-2">Choose the position that fits you</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {positions.map((position) => (
            <button
              key={position.id}
              onClick={() => togglePosition(position.id)}
              className={`text-left rounded-2xl border-2 bg-white overflow-hidden transition-all duration-200 ${
                isPositionSelected(position.id)
                  ? "border-[#4f46e5] shadow-md"
                  : "border-[#e2e8f0] hover:border-[#4f46e5]"
              }`}
            >
              <div className="p-4 border-b border-[#f1f5f9] bg-gradient-to-r from-[#f8fafc] to-white">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xl">{position.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-sm font-bold text-[#0f172a]">{position.title}</h3>
                    </div>
                  </div>
                </div>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${position.statusColor}`}>
                  {position.status}
                </span>
              </div>
              <div className="p-4">
                <p className="text-xs text-[#64748b] mb-3 leading-relaxed">{position.description}</p>
                <p className="text-xs font-semibold text-[#94a3b8] uppercase tracking-wide mb-2">
                  Requirements
                </p>
                <ul className="space-y-1">
                  {position.requirements.map((req) => (
                    <li key={req} className="text-xs text-[#475569] flex items-start gap-2">
                      <span className="text-[#4f46e5] shrink-0 mt-0.5">→</span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* How to apply */}
      <div className="rounded-2xl bg-[#0f172a] p-8 md:p-10">
        <h3 className="text-xl font-bold text-white mb-3">How to Apply</h3>
        
        {/* Form */}
        <div className="space-y-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-xs font-semibold text-[#94a3b8] uppercase tracking-wide mb-2 block">
                Your Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-4 py-2.5 rounded-lg bg-[#1e293b] text-white text-sm border border-[#334155] focus:border-[#4f46e5] focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-[#94a3b8] uppercase tracking-wide mb-2 block">
                Your Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2.5 rounded-lg bg-[#1e293b] text-white text-sm border border-[#334155] focus:border-[#4f46e5] focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-[#94a3b8] uppercase tracking-wide mb-2 block">
                Your University
              </label>
              <input
                type="text"
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
                placeholder="Enter your university"
                className="w-full px-4 py-2.5 rounded-lg bg-[#1e293b] text-white text-sm border border-[#334155] focus:border-[#4f46e5] focus:outline-none transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Profile Summary */}
        <div className="mb-6 p-4 rounded-xl bg-[#1e293b] border border-[#334155]">
          <h4 className="font-bold text-white text-sm mb-3">Your Profile Summary</h4>
          <p className="text-sm text-[#94a3b8] leading-relaxed">
            {generateSummary() || "Generate by above click"}
          </p>
        </div>

        {/* Application requirements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {[
            { num: "01", title: "CV / Resume", desc: "Full academic CV with publications and relevant experience" },
            { num: "02", title: "Research Statement", desc: "Half page statement describing your research interests and goals" },
            { num: "03", title: "Representative Work", desc: "Up to 2 writing samples, papers, or code repositories" },
          ].map((item) => (
            <div key={item.num} className="bg-[#1e293b] rounded-xl p-4">
              <div className="text-xs font-mono text-[#6366f1] mb-1">{item.num}</div>
              <div className="font-semibold text-white text-sm mb-1">{item.title}</div>
              <div className="text-xs text-[#94a3b8] leading-relaxed">{item.desc}</div>
            </div>
          ))}
        </div>

        <button
          onClick={handleSubmit}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#4f46e5] text-white font-semibold rounded-lg hover:bg-[#4338ca] transition-colors text-sm"
        >
          Submit Application
        </button>
      </div>
    </div>
  );
}
