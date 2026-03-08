export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  icon: string; // emoji icon
  tags: string[];
  highlights: string[];
  methods: string[];
}

export const projects: Project[] = [
  {
    id: "neuroimaging-psychiatry",
    title: "Neuroimaging in Psychiatric Disorders",
    summary:
      "Investigating neural correlates of psychiatric disorders using structural and functional MRI",
    description:
      "This project aims to understand the neural mechanisms underlying psychiatric disorders through advanced neuroimaging techniques, combining structural and functional data for comprehensive brain mapping.",
    icon: "🧠",
    tags: ["fMRI", "sMRI", "Cortical Thickness", "Functional Connectivity"],
    highlights: [
      "Cortical thickness patterns in major depressive disorder",
      "Default mode network connectivity in anxiety disorders",
      "Brain structural changes in early-stage schizophrenia",
    ],
    methods: ["FreeSurfer", "FSL", "SPM", "Machine Learning"],
  },
  {
    id: "computational-modeling",
    title: "Computational Modeling of Cognition",
    summary:
      "Developing mathematical and computational models to understand cognitive processes and decision-making",
    description:
      "This project develops computational models to understand how the brain supports cognition and how these processes are disrupted in psychiatric disorders.",
    icon: "📊",
    tags: [
      "Reinforcement Learning",
      "Bayesian Modeling",
      "Decision Making",
      "Cognitive Control",
    ],
    highlights: [
      "Computational phenotyping of depression using RL models",
      "Bayesian inference deficits in schizophrenia",
      "Cognitive control mechanisms in anxiety disorders",
    ],
    methods: [
      "Hierarchical Bayesian Modeling",
      "Drift-Diffusion Models",
      "Reinforcement Learning",
      "Model Comparison",
    ],
  },
  {
    id: "ai-clinical-tools",
    title: "AI-Powered Clinical Tools",
    summary:
      "Developing artificial intelligence tools for diagnosis, prognosis, and treatment planning in psychiatry",
    description:
      "This project develops AI-powered tools to enhance clinical decision-making and improve patient outcomes in psychiatric care, bridging the gap between neuroscience research and clinical practice.",
    icon: "⚕️",
    tags: [
      "Machine Learning",
      "Deep Learning",
      "Clinical Decision Support",
      "AI in Healthcare",
    ],
    highlights: [
      "Deep learning for depression detection from speech and facial expressions",
      "Predictive modeling of antidepressant response",
      "AI-assisted risk assessment for suicide prevention",
    ],
    methods: [
      "Deep Neural Networks",
      "Natural Language Processing",
      "Multimodal Data Fusion",
      "Explainable AI",
    ],
  },
  {
    id: "naturalistic-behavior",
    title: "Naturalistic Behavior Analysis",
    summary:
      "Understanding human behavior in real-world settings using wearable sensors and video analysis",
    description:
      "This project explores human behavior in naturalistic environments, moving beyond laboratory settings to capture real-world behavioral patterns and their relationship to mental health.",
    icon: "🌐",
    tags: [
      "Wearable Sensors",
      "Video Analysis",
      "Digital Phenotyping",
      "Machine Learning",
    ],
    highlights: [
      "Sensor-based detection of depressive episodes",
      "Video analysis of social withdrawal in anxiety disorders",
      "Digital phenotyping of cognitive decline",
    ],
    methods: [
      "Time-Series Analysis",
      "Deep Learning for Video",
      "Ecological Momentary Assessment",
      "Computer Vision",
    ],
  },
];
