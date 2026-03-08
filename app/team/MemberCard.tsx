"use client";

import Image from "next/image";
import { team } from "@/data/team";

export default function MemberCard({ member }: { member: (typeof team)[0] }) {
  return (
    <div className="group flex flex-col p-5 rounded-xl border border-[#e2e8f0] bg-white hover:border-[#4f46e5] hover:shadow-md transition-all duration-200">
      {/* Avatar */}
      {member.avatar ? (
        <div className="w-12 h-12 rounded-full overflow-hidden mb-4 shrink-0 bg-gray-100">
          <Image
            src={member.avatar}
            alt={member.name}
            width={48}
            height={48}
            className="w-full h-full object-contain"
            onError={(e) => {
              // If image fails to load, show initials instead
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                parent.className = "w-12 h-12 rounded-full bg-gradient-to-br from-[#4f46e5] to-[#6366f1] flex items-center justify-center text-white font-bold text-lg mb-4 shrink-0";
                parent.innerText = member.name
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("");
              }
            }}
          />
        </div>
      ) : (
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4f46e5] to-[#6366f1] flex items-center justify-center text-white font-bold text-lg mb-4 shrink-0">
          {member.name
            .split(" ")
            .map((n) => n[0])
            .slice(0, 2)
            .join("")}
        </div>
      )}

      <div className="flex-1">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-semibold text-[#0f172a] group-hover:text-[#4f46e5] transition-colors">
              {member.name}
            </h3>
            {member.nameCN && (
              <span className="text-xs text-[#94a3b8]">{member.nameCN}</span>
            )}
          </div>
        </div>

        <p className="text-xs text-[#64748b] mt-1">{member.role}</p>
        <p className="text-xs text-[#94a3b8] mt-0.5">{member.affiliation}</p>

        {member.researchArea && (
          <p className="text-xs text-[#4f46e5] mt-2">{member.researchArea}</p>
        )}
      </div>

      {member.scholarUrl && (
        <a
          href={member.scholarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-xs text-[#4f46e5] hover:underline"
        >
          Google Scholar →
        </a>
      )}
    </div>
  );
}
