import type { Metadata } from "next";
import { labNews, fieldNews } from "@/data/news";

export const metadata: Metadata = {
  title: "News",
  description: "Lab news and field updates from Chao Xie's lab.",
};

const typeConfig: Record<
  string,
  { label: string; bg: string; text: string; icon: string }
> = {
  paper: { label: "Paper", bg: "bg-[#dcfce7]", text: "text-[#166534]", icon: "📄" },
  talk: { label: "Talk", bg: "bg-[#dbeafe]", text: "text-[#1e40af]", icon: "🎤" },
  award: { label: "Award", bg: "bg-[#fef9c3]", text: "text-[#854d0e]", icon: "🏆" },
  media: { label: "Media", bg: "bg-[#f3e8ff]", text: "text-[#6b21a8]", icon: "📰" },
  other: { label: "News", bg: "bg-[#f1f5f9]", text: "text-[#475569]", icon: "📌" },
};

const categoryConfig: Record<
  string,
  { label: string; bg: string; text: string; icon: string }
> = {
  ai: { label: "AI", bg: "bg-[#dbeafe]", text: "text-[#1e40af]", icon: "🤖" },
  brain: { label: "Brain", bg: "bg-[#dcfce7]", text: "text-[#166534]", icon: "🧠" },
  cognition: { label: "Cognition", bg: "bg-[#fef9c3]", text: "text-[#854d0e]", icon: "💡" },
  "mental-health": { label: "Mental Health", bg: "bg-[#f3e8ff]", text: "text-[#6b21a8]", icon: "🌱" },
};

function formatDate(dateStr: string): string {
  const [year, month] = dateStr.split("-");
  const date = new Date(parseInt(year), parseInt(month) - 1);
  return date.toLocaleDateString("en-US", { year: "numeric", month: "long" });
}

export default function NewsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Lab News Section */}
      <div className="mb-12">
        <div className="mb-6 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#4f46e5] mb-2">
            Lab News
          </p>
          <h1 className="text-3xl font-bold text-[#0f172a] leading-tight">
            Research Activities & Projects
          </h1>
          <p className="mt-2 text-sm text-[#64748b] leading-relaxed">
            Updates on our research activities, ongoing projects, and lab achievements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {labNews.map((item) => {
            const config = typeConfig[item.type] || typeConfig.other;
            return (
              <div
                key={item.id}
                className="rounded-xl border border-[#e2e8f0] bg-white p-4 hover:border-[#4f46e5] hover:shadow-md transition-all duration-200"
              >
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded-full ${config.bg} ${config.text}`}
                  >
                    {config.icon} {config.label}
                  </span>
                  <span className="text-xs text-[#94a3b8]">
                    {formatDate(item.date)}
                  </span>
                </div>
                <h2 className="font-semibold text-[#0f172a] text-sm mb-1 leading-tight">
                  {item.title}
                </h2>
                <p className="text-xs text-[#64748b] leading-relaxed line-clamp-3">
                  {item.description}
                </p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-xs text-[#4f46e5] font-medium hover:underline"
                  >
                    Read more →
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Field News Section */}
      <div>
        <div className="mb-6 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#4f46e5] mb-2">
            Field News
          </p>
          <h1 className="text-3xl font-bold text-[#0f172a] leading-tight">
            AI + Brain + Cognition + Mental Health
          </h1>
          <p className="mt-2 text-sm text-[#64748b] leading-relaxed">
            Cutting-edge developments at the intersection of AI, brain science, cognition, and mental health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {fieldNews.map((item) => {
            const config = categoryConfig[item.category];
            return (
              <div
                key={item.id}
                className="rounded-xl border border-[#e2e8f0] bg-white p-4 hover:border-[#4f46e5] hover:shadow-md transition-all duration-200"
              >
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded-full ${config.bg} ${config.text}`}
                  >
                    {config.icon} {config.label}
                  </span>
                  <span className="text-xs text-[#94a3b8]">
                    {formatDate(item.date)}
                  </span>
                </div>
                <h2 className="font-semibold text-[#0f172a] text-sm mb-1 leading-tight">
                  {item.title}
                </h2>
                <p className="text-xs text-[#64748b] leading-relaxed line-clamp-3">
                  {item.description}
                </p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-xs text-[#4f46e5] font-medium hover:underline"
                  >
                    Read more →
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
