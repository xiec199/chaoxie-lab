import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teaching",
  description: "Courses and teaching materials by Chao Xie at Tsinghua University.",
};

const courses = [
  {
    id: "advanced-brain",
    code: "MBM 301",
    title: "Advanced Brain",
    level: "Undergraduate",
    semester: "Fall",
    description:
      "Advanced course on brain science covering neural mechanisms, cognitive processes, and their applications in understanding mental health and behavior.",
    topics: [
      "Neural circuits and systems",
      "Cognitive neuroscience",
      "Brain imaging techniques",
      "Clinical applications",
    ],
    instructors: ["Chao Xie"],
  },
  {
    id: "advanced-mind",
    code: "MBM 302",
    title: "Advanced MIND",
    level: "Undergraduate",
    semester: "Spring",
    description:
      "In-depth exploration of mind and cognition, focusing on computational models and theoretical frameworks for understanding mental processes.",
    topics: [
      "Computational modeling of mind",
      "Cognitive architectures",
      "Decision-making processes",
      "Mental representations",
    ],
    instructors: ["Fei Wang", "Jinyuan Liu", "Chao Xie"],
  },
  {
    id: "introduction-brain",
    code: "MBM 201",
    title: "Introduction to Brain",
    level: "Undergraduate",
    semester: "Fall",
    description:
      "Foundational course introducing brain structure, function, and basic principles of neuroscience for undergraduate students.",
    topics: [
      "Brain anatomy and organization",
      "Neurons and synapses",
      "Sensory and motor systems",
      "Introduction to neuroimaging",
    ],
    instructors: ["Jia Liu", "Kai Du", "Chao Xie"],
  },
  {
    id: "introduction-brain-method",
    code: "MBM 202",
    title: "Introduction to Brain Methods",
    level: "Undergraduate",
    semester: "Spring",
    description:
      "Practical course on experimental methods and techniques used in brain research, including imaging, electrophysiology, and data analysis.",
    topics: [
      "Experimental design",
      "fMRI and EEG methods",
      "Data analysis techniques",
      "Statistical approaches",
    ],
    instructors: ["Jia Liu", "Zhi Lu", "Chao Xie"],
  },
];

export default function TeachingPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-12 max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#4f46e5] mb-2">
          Teaching
        </p>
        <h1 className="text-4xl font-bold text-[#0f172a] leading-tight">
          Courses
        </h1>
        <p className="mt-3 text-[#64748b] leading-relaxed">
          I teach undergraduate courses for the{" "}
          <span className="font-semibold text-[#0f172a]">MBM (MIND, Brain, Machine)</span>{" "}
          program at Tsinghua University. This interdisciplinary program is designed similar to MIT's curriculum, integrating neuroscience, psychology, and artificial intelligence.
        </p>
      </div>

      <div className="space-y-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="rounded-xl border border-[#e2e8f0] bg-white overflow-hidden hover:border-[#4f46e5] hover:shadow-md transition-all duration-200"
          >
            <div className="p-6 border-b border-[#f1f5f9]">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="text-xs font-mono font-semibold text-[#4f46e5] bg-[#eef2ff] px-2 py-0.5 rounded">
                  {course.code}
                </span>
                <span className="text-xs text-[#94a3b8] bg-[#f8fafc] px-2 py-0.5 rounded border border-[#e2e8f0]">
                  {course.level}
                </span>
                <span className="text-xs text-[#94a3b8]">{course.semester}</span>
              </div>
              <h2 className="text-xl font-bold text-[#0f172a]">{course.title}</h2>
              <p className="mt-2 text-sm text-[#64748b] leading-relaxed">
                {course.description}
              </p>
            </div>
            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#94a3b8] mb-3">
                Topics Covered
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                {course.topics.map((topic) => (
                  <li
                    key={topic}
                    className="text-sm text-[#475569] flex items-start gap-2"
                  >
                    <span className="text-[#4f46e5] shrink-0 mt-0.5">→</span>
                    {topic}
                  </li>
                ))}
              </ul>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#94a3b8] mb-2">
                Instructors
              </p>
              <div className="flex flex-wrap gap-2">
                {course.instructors.map((instructor) => (
                  <span
                    key={instructor}
                    className="text-xs text-[#4f46e5] bg-[#eef2ff] px-2 py-1 rounded-full"
                  >
                    {instructor}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Guest lectures / seminars */}
      <div className="mt-16 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] p-7">
        <h3 className="text-lg font-bold text-[#0f172a] mb-2">
          Guest Lectures & Seminars
        </h3>
        <p className="text-sm text-[#64748b] leading-relaxed">
          I regularly give guest lectures and seminars at universities and research
          institutions. Topics include computational psychiatry, neuroimaging methods,
          and AI applications in mental health. Please{" "}
          <a
            href="mailto:xiec199@gmail.com"
            className="text-[#4f46e5] hover:underline"
          >
            contact me
          </a>{" "}
          to inquire about availability.
        </p>
      </div>
    </div>
  );
}
