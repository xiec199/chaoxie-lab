import type { Metadata } from "next";
import { team } from "@/data/team";
import MemberCard from "./MemberCard";

export const metadata: Metadata = {
  title: "Team",
  description: "Students, collaborators, and research partners of Chao Xie's lab at Tsinghua University.",
};

export default function TeamPage() {
  const students = team.filter((m) => m.group === "student");
  const domestic = team.filter((m) => m.group === "domestic");
  const international = team.filter((m) => m.group === "international");

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-14 max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#4f46e5] mb-2">
          Team
        </p>
        <h1 className="text-4xl font-bold text-[#0f172a] leading-tight">
          Students & Collaborators
        </h1>
        <p className="mt-3 text-[#64748b] leading-relaxed">
          We collaborate with outstanding researchers across the globe to advance
          our understanding of the brain and mental health.
        </p>
      </div>

      {/* Students */}
      {students.length > 0 && (
        <div className="mb-14">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-[#94a3b8] mb-5">
            Students
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {students.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      )}

      {/* Domestic collaborators */}
      <div className="mb-14">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-[#94a3b8] mb-5">
          Domestic Collaborators
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {domestic.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>

      {/* International collaborators */}
      <div className="mb-14">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-[#94a3b8] mb-5">
          International Collaborators
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {international.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>

      {/* Join CTA */}
      <div className="rounded-2xl border border-dashed border-[#cbd5e1] bg-[#f8fafc] p-8 text-center">
        <div className="text-4xl mb-3">🤝</div>
        <h3 className="text-xl font-bold text-[#0f172a] mb-2">
          Join the Team
        </h3>
        <p className="text-[#64748b] text-sm mb-4 max-w-md mx-auto">
          We welcome collaborations and motivated students interested in
          computational psychiatry and neuroscience.
        </p>
        <a
          href="mailto:xiec199@gmail.com"
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#4f46e5] text-white text-sm font-medium rounded-lg hover:bg-[#4338ca] transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
}
