"use client";

import { useState } from "react";
import { publications } from "@/data/publications";

const allYears = [...new Set(publications.map((p) => p.year))].sort(
  (a, b) => b - a
);

type Filter = "all" | "first" | "cofirst" | string;

export default function PublicationsPage() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = publications.filter((pub) => {
    if (filter === "all") return true;
    if (filter === "first") return pub.authorNote === "First author";
    if (filter === "cofirst") return pub.authorNote.startsWith("Co-first");
    return pub.year === parseInt(filter);
  });

  const filterOptions: { label: string; value: Filter }[] = [
    { label: "All", value: "all" },
    { label: "First Author", value: "first" },
    { label: "Co-First Author", value: "cofirst" },
    ...allYears.map((y) => ({ label: String(y), value: String(y) })),
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-10 max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#4f46e5] mb-2">
          Publications
        </p>
        <h1 className="text-4xl font-bold text-[#0f172a] leading-tight">
          Selected Publications
        </h1>
        <p className="mt-3 text-[#64748b]">
          * denotes co-first authorship. Full list on{" "}
          <a
            href="https://scholar.google.com/citations?user=Z-XpEsYAAAAJ&hl=zh-CN"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4f46e5] hover:underline"
          >
            Google Scholar
          </a>
          .
        </p>
      </div>

      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 mb-10">
        {filterOptions.map((opt) => (
          <button
            key={opt.value}
            onClick={() => setFilter(opt.value)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${
              filter === opt.value
                ? "bg-[#4f46e5] text-white border-[#4f46e5]"
                : "bg-white text-[#64748b] border-[#e2e8f0] hover:border-[#4f46e5] hover:text-[#4f46e5]"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* Publications list */}
      <div className="space-y-5">
        {filtered.map((pub, index) => (
          <article
            key={pub.id}
            className="group flex gap-5 p-6 rounded-xl border border-[#e2e8f0] bg-white hover:border-[#4f46e5] hover:shadow-md transition-all duration-200"
          >
            {/* Number */}
            <div className="shrink-0 w-7 text-right text-sm font-mono text-[#94a3b8] pt-0.5">
              {filtered.length - index}.
            </div>

            {/* Content */}
            <div className="flex-1">
              {/* Badges row */}
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs font-bold text-white bg-[#4f46e5] px-2 py-0.5 rounded">
                  {pub.journalShort}
                </span>
                <span className="text-xs text-[#94a3b8]">{pub.year}</span>
                {pub.volume && (
                  <span className="text-xs text-[#94a3b8]">
                    {pub.volume}
                    {pub.pages ? `: ${pub.pages}` : ""}
                  </span>
                )}

              </div>

              {/* Title */}
              <h2 className="text-base font-semibold text-[#0f172a] group-hover:text-[#4f46e5] transition-colors leading-snug mb-1.5">
                {pub.title}
              </h2>

              {/* Authors + journal */}
              <p className="text-sm text-[#64748b] mb-1">
                {pub.authors}
              </p>
              <p className="text-sm text-[#64748b] italic">
                {pub.journal}, {pub.year}
                {pub.volume ? `, ${pub.volume}` : ""}
                {pub.pages ? `: ${pub.pages}` : ""}
              </p>

              {/* Abstract */}
              <p className="mt-3 text-sm text-[#94a3b8] leading-relaxed line-clamp-2">
                {pub.abstract}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-3">
                {pub.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-full bg-[#f1f5f9] text-[#64748b] border border-[#e2e8f0]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-[#94a3b8]">
          No publications match this filter.
        </div>
      )}
    </div>
  );
}
