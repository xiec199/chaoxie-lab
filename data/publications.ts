export interface Publication {
  id: string;
  title: string;
  authors: string;
  authorNote: string; // "First author" | "Co-first author (1st)" etc.
  journal: string;
  journalShort: string;
  year: number;
  volume?: string;
  pages?: string;
  impactFactor: number;
  doi?: string;
  pdfUrl?: string;
  codeUrl?: string;
  abstract: string;
  tags: string[];
  featured: boolean;
}

export const publications: Publication[] = [
  {
    id: "nature-medicine-2023",
    title:
      "A shared neural basis underlying psychiatric comorbidity",
    authors: "Xie C, Xiang ST, et al.",
    authorNote: "First author",
    journal: "Nature Medicine",
    journalShort: "Nat Med",
    year: 2023,
    impactFactor: 87.3,
    abstract:
      "This study systematically investigated the neuropsychopathological N factor underlying comorbid psychopathology, revealing shared neural mechanisms across different psychiatric disorders through large-scale neuroimaging analysis.",
    tags: ["Neuropsychopathology", "Comorbidity", "fMRI", "N factor"],
    featured: true,
  },
  {
    id: "nature-mental-health-2026",
    title:
      "Hierarchical Neurocognitive Model of Externalizing and Internalizing Comorbidity",
    authors: "Xie C, Xiang S, Zheng Y, et al.",
    authorNote: "First author",
    journal: "Nature Mental Health",
    journalShort: "Nat Ment Health",
    year: 2026,
    pages: "1–15",
    impactFactor: 8.8,
    abstract:
      "This study presents a hierarchical neurocognitive model explaining the comorbidity between externalizing and internalizing disorders, providing insights into shared and distinct neural mechanisms.",
    tags: [
      "Neurocognitive Model",
      "Externalizing",
      "Internalizing",
      "Comorbidity",
    ],
    featured: true,
  },
  {
    id: "science-advances-2021",
    title:
      "Neural Network Involving Medial Orbitofrontal Cortex and Dorsal Periaqueductal Gray Regulation in Human Alcohol Abuse",
    authors: "Jia T*, Xie C*, Banaschewski T, et al.",
    authorNote: "Co-first author (2nd)",
    journal: "Science Advances",
    journalShort: "Sci Adv",
    year: 2021,
    volume: "7(6)",
    pages: "eabd4074",
    impactFactor: 14.1,
    abstract:
      "This study reveals a neural network involving the medial orbitofrontal cortex and dorsal periaqueductal gray in the regulation of human alcohol abuse behaviors.",
    tags: [
      "Alcohol Abuse",
      "Orbitofrontal Cortex",
      "Periaqueductal Gray",
      "Neural Network",
    ],
    featured: true,
  },
  {
    id: "biological-psychiatry-2021",
    title:
      "Reward Versus Nonreward Sensitivity of the Medial Versus Lateral Orbitofrontal Cortex Relates to the Severity of Depressive Symptoms",
    authors: "Xie C*, Jia T*, Rolls ET, et al.",
    authorNote: "Co-first author (1st)",
    journal:
      "Biological Psychiatry: Cognitive Neuroscience and Neuroimaging",
    journalShort: "Biol Psychiatry CNNI",
    year: 2021,
    volume: "6(3)",
    pages: "259–269",
    impactFactor: 6.0,
    abstract:
      "This study examines how reward versus nonreward sensitivity of the medial versus lateral orbitofrontal cortex relates to the severity of depressive symptoms.",
    tags: ["Depression", "Orbitofrontal Cortex", "Reward Sensitivity", "fMRI"],
    featured: false,
  },
  {
    id: "neuroimage-2023",
    title:
      "Fractionation of Neural Reward Processing into Independent Components by Novel Decoding Principle",
    authors: "Xiang S*, Jia T*, Xie C*, et al.",
    authorNote: "Co-first author (3rd)",
    journal: "NeuroImage",
    journalShort: "NeuroImage",
    year: 2023,
    volume: "284",
    pages: "120463",
    impactFactor: 5.8,
    abstract:
      "This study fractionates neural reward processing into independent components using a novel decoding principle, advancing our understanding of reward circuitry.",
    tags: ["Reward Processing", "Decoding", "fMRI", "Neuroimaging"],
    featured: false,
  },
];
