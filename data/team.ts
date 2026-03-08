export interface TeamMember {
  id: string;
  name: string;
  nameCN?: string;
  role: string;
  affiliation: string;
  group: "self" | "domestic" | "international" | "student";
  scholarUrl?: string;
  researchArea?: string;
  avatar?: string;
}

export const team: TeamMember[] = [
  {
    id: "tianye-jia",
    name: "Tianye Jia",
    nameCN: "贾天野",
    role: "Collaborator",
    affiliation: "Peking University",
    group: "domestic",
    scholarUrl:
      "https://scholar.google.com/citations?user=4q3pussAAAAJ&hl=zh-CN",
    researchArea: "Computational Neuroscience",
    avatar: "./images/tianye-jia.jpg",
  },
  {
    id: "jianfeng-feng",
    name: "Jianfeng Feng",
    nameCN: "冯建峰",
    role: "Collaborator",
    affiliation: "Fudan University",
    group: "domestic",
    scholarUrl:
      "https://scholar.google.com/citations?user=0MtAVz4AAAAJ&hl=zh-CN",
    researchArea: "Computational Neuroscience & AI",
    avatar: "./images/jianfeng-feng.jpg",
  },
  {
    id: "lu-mi",
    name: "Lu Mi",
    nameCN: "米露",
    role: "Collaborator",
    affiliation: "Tsinghua University, School of AI",
    group: "domestic",
    scholarUrl:
      "https://scholar.google.com/citations?user=vokCG-MAAAAJ&hl=zh-CN&oi=ao",
    researchArea: "Artificial Intelligence",
    avatar: "./images/lu-mi.jpg",
  },
  {
    id: "shitong-xiang",
    name: "Shitong Xiang",
    nameCN: "项诗童",
    role: "Collaborator",
    affiliation: "Fudan University",
    group: "domestic",
    scholarUrl:
      "https://scholar.google.com/citations?user=MHZH5K4AAAAJ&hl=zh-CN&oi=ao",
    researchArea: "Computational Neuroscience",
    avatar: "./images/shitong-xiang.jpg",
  },
  {
    id: "miao-liu",
    name: "Miao Liu",
    nameCN: "刘淼",
    role: "Collaborator",
    affiliation: "Tsinghua University, School of AI",
    group: "domestic",
    scholarUrl:
      "https://scholar.google.com/citations?user=Ud7boIwAAAAJ&hl=en",
    researchArea: "Artificial Intelligence",
    avatar: "./images/miao-liu.jpg",
  },
  {
    id: "shaozheng-qin",
    name: "Shaozheng Qin",
    nameCN: "秦绍正",
    role: "Collaborator",
    affiliation: "Beijing Normal University",
    group: "domestic",
    scholarUrl:
      "https://scholar.google.com/citations?user=LHjM-YYAAAAJ&hl=en",
    researchArea: "Psychology",
    avatar: "./images/shaozheng-qin.jpg",
  },
  {
    id: "trevor-robbins",
    name: "Trevor Robbins",
    role: "Collaborator",
    affiliation: "University of Cambridge",
    group: "international",
    scholarUrl:
      "https://scholar.google.com/citations?user=7vl9HdwAAAAJ&hl=zh-CN",
    researchArea: "Cognitive Neuroscience & Psychopharmacology",
    avatar: "./images/trevor-robbins.jpg",
  },
  {
    id: "barbara-sahakian",
    name: "Barbara J. Sahakian",
    role: "Collaborator",
    affiliation: "University of Cambridge",
    group: "international",
    scholarUrl:
      "https://scholar.google.com/citations?user=gOAdhEoAAAAJ&hl=zh-CN",
    researchArea: "Neuropsychology & Psychiatric Neuroscience",
    avatar: "./images/barbara-sahakian.jpg",
  },
  {
    id: "gunter-schumann",
    name: "Gunter Schumann",
    role: "Collaborator",
    affiliation: "Charité – Universitätsmedizin Berlin",
    group: "international",
    scholarUrl:
      "https://scholar.google.com/citations?user=e8q7A28AAAAJ&hl=zh-CN",
    researchArea: "Translational Psychiatry",
    avatar: "./images/gunter-schumann.jpg",
  },
  {
    id: "yiming-wei",
    name: "YiMing Wei",
    nameCN: "魏一鸣",
    role: "PhD Student",
    affiliation: "Oxford University",
    group: "student",
    researchArea: "Computational Neuroscience",
  },
  {
    id: "qin-lin",
    name: "Qin Lin",
    nameCN: "林钦",
    role: "PhD Student",
    affiliation: "Fudan University",
    group: "student",
    researchArea: "Computational Psychiatry",
  },
  {
    id: "chenglu-ma",
    name: "Chenglu Ma",
    nameCN: "马晨露",
    role: "PhD Student",
    affiliation: "The University of Edinburgh",
    group: "student",
    researchArea: "Computational Psychiatry",
  },
];
