export interface NewsItem {
  id: string;
  date: string;
  type: "paper" | "talk" | "award" | "media" | "other";
  title: string;
  description: string;
  link?: string;
}

export interface FieldNewsItem {
  id: string;
  date: string;
  category: "ai" | "brain" | "cognition" | "mental-health";
  title: string;
  description: string;
  link?: string;
}

export const labNews: NewsItem[] = [
  {
    id: "nature-mental-health-2026",
    date: "2026-01",
    type: "paper",
    title: "New paper in Nature Mental Health",
    description:
      'Our paper "Hierarchical Neurocognitive Model of Externalizing and Internalizing Comorbidity" is now published in Nature Mental Health (IF = 8.8).',
  },
  {
    id: "talk-cambridge-2025",
    date: "2025-09",
    type: "talk",
    title: "Invited Talk at University of Cambridge",
    description:
      "Presented research on the neuropsychopathological N factor at the Department of Psychiatry, University of Cambridge.",
  },
  {
    id: "neuroimage-2023",
    date: "2023-11",
    type: "paper",
    title: "Paper published in NeuroImage",
    description:
      '"Fractionation of Neural Reward Processing into Independent Components by Novel Decoding Principle" published in NeuroImage (IF = 5.8).',
  },
  {
    id: "nature-medicine-2023",
    date: "2023-06",
    type: "paper",
    title: "First-author paper in Nature Medicine",
    description:
      '"Shared Neural Basis Underlying Comorbid Psychopathology" published in Nature Medicine (IF = 87.3). Featured as a highlighted paper.',
  },
  {
    id: "sfn-2022",
    date: "2022-11",
    type: "talk",
    title: "Poster at Society for Neuroscience (SfN) 2022",
    description:
      "Presented work on neuropsychopathological comorbidity at the annual SfN meeting in San Diego.",
  },
  {
    id: "science-advances-2021",
    date: "2021-02",
    type: "paper",
    title: "Co-first author paper in Science Advances",
    description:
      '"Neural Network Involving Medial Orbitofrontal Cortex and Dorsal Periaqueductal Gray Regulation in Human Alcohol Abuse" published in Science Advances (IF = 14.1).',
  },
];

export const fieldNews: FieldNewsItem[] = [
  {
    id: "ai-brain-2026",
    date: "2026-01",
    category: "ai",
    title: "Large Language Models for Brain Imaging Analysis",
    description:
      "Recent advances in LLMs show promise in analyzing neuroimaging data and generating clinical reports. This could revolutionize diagnostic workflows in psychiatry.",
  },
  {
    id: "brain-cognition-2025",
    date: "2025-12",
    category: "brain",
    title: "Neural Mechanisms of Decision Making",
    description:
      "New fMRI studies reveal how the prefrontal cortex and striatum interact during value-based decision making, with implications for addiction research.",
  },
  {
    id: "mental-health-2025",
    date: "2025-11",
    category: "mental-health",
    title: "Digital Phenotyping in Depression",
    description:
      "Smartphone-based digital phenotyping shows potential for early detection of depressive episodes through passive monitoring of behavior patterns.",
  },
  {
    id: "cognition-2025",
    date: "2025-10",
    category: "cognition",
    title: "Working Memory Training Effects",
    description:
      "Meta-analysis suggests that working memory training has limited transfer effects, challenging the promise of brain training apps.",
  },
];

export const news = labNews;
