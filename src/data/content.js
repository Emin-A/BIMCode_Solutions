export const processSteps = [
  {
    title: "Discovery & Vision Mapping",
    description:
      "Workshops with stakeholders to understand goals, workflows, and constraints. We document the current state and define success metrics for automation.",
    icon: "Search",
  },
  {
    title: "Solution Architecture",
    description:
      "Design modular pipelines, AI touchpoints, and BIM integrations that respect your standards. We align technical approach, timeline, and ROI with your team.",
    icon: "Puzzle",
  },
  {
    title: "Build & Iterate",
    description:
      "Develop scalable scripts, Revit add-ins, and orchestration layers. Feedback cycles keep subject-matter experts in the loop so delivery stays accurate.",
    icon: "Hammer",
  },
  {
    title: "Deployment & Enablement",
    description:
      "Roll out the solution with documentation, training, and monitoring. We stay engaged post-launch to analyze performance and identify new automation wins.",
    icon: "Rocket",
  },
];

export const projects = [
  {
    id: "parametric-design-pipeline",
    title: "Parametric Design Pipeline",
    tagline: "AI-assist design loops for rapid healthcare planning.",
    summary:
      "Custom generative pipeline that merges Dynamo scripts, Grasshopper intelligence, and bespoke Revit automation to deliver validated options in hours, not weeks.",
    description:
      "We rebuilt the client’s concept design workflow around reusable automation blocks. Architects can now generate, evaluate, and document iterations inside a single, traceable environment that synchronizes with BIM 360.",
    metrics: [
      { label: "Iterations per week", value: "45 → 320" },
      { label: "Manual drafting time", value: "-68%" },
      { label: "Model health issues", value: "-72%" },
    ],
    deliverables: [
      "Modular Dynamo + Python nodes",
      "AI-assisted option ranking dashboard",
      "Automated Revit family generator",
    ],
    technologies: [
      "Revit API",
      "Dynamo",
      "Python",
      "Azure Functions",
      "Power BI",
    ],
    theme: "from-brand-500 via-indigo-500 to-slate-900",
  },
  {
    id: "model-compliance-engine",
    title: "BIM Model Compliance Engine",
    tagline: "Continuous quality guardrails for complex infrastructure projects.",
    summary:
      "Always-on validation that enforces naming, data schemas, and geometry tolerances before issues reach coordination models.",
    description:
      "We automated clash detection presets, data health checks, and publish-ready exports. AI-driven reporting now pinpoints root causes and suggests fixes before coordination meetings.",
    metrics: [
      { label: "Clash review meetings", value: "-40%" },
      { label: "Compliance coverage", value: "100%" },
      { label: "Rework hours", value: "-55%" },
    ],
    deliverables: [
      "Custom Revit & Navisworks add-ins",
      "Adaptive rule authoring toolkit",
      "Dashboard with predictive insights",
    ],
    technologies: [
      "Revit API",
      "Navisworks",
      "C#",
      "Azure Cognitive Services",
      "Power Automate",
    ],
    theme: "from-brand-600 via-slate-800 to-slate-950",
  },
  {
    id: "digital-twin-ops-console",
    title: "Digital Twin Ops Console",
    tagline: "Linking BIM, IoT, and analytics for operational decision making.",
    summary:
      "Unified command center that synchronizes BIM models with live building telemetry and machine learning insights.",
    description:
      "We orchestrated data pipelines from Revit, facility systems, and sensors into a cohesive experience. Operators now receive proactive maintenance recommendations surfaced inside the BIM context.",
    metrics: [
      { label: "Issue detection speed", value: "4× faster" },
      { label: "Paper-based workflows", value: "-90%" },
      { label: "Energy savings", value: "18%" },
    ],
    deliverables: [
      "Bespoke automation services & APIs",
      "Twin visualization layer",
      "ML-driven anomaly detection",
    ],
    technologies: [
      "Revit",
      "Forge Viewer",
      "Node.js",
      "TensorFlow",
      "Power Apps",
    ],
    theme: "from-brand-400 via-sky-500 to-slate-900",
  },
];

export const testimonials = {
  clients: [
    {
      name: "Alicia Morgan",
      role: "Director of Digital Practice, Skyline Healthcare Architects",
      quote:
        "BIMCode built a future-proof automation stack around our standards. Their team translated our design DNA into scripts that save us dozens of hours every week.",
    },
    {
      name: "David Renshaw",
      role: "Vice President, Urban Nexus Engineering",
      quote:
        "Their BIM compliance engine changed how we coordinate infrastructure projects. We catch issues before coordination, and our designers feel empowered, not policed.",
    },
  ],
  team: [
    {
      name: "Priya K.",
      role: "Lead Computational Designer",
      quote:
        "We prototype fast, gather real feedback from project teams, and iterate. That culture lets us ship thoughtful automation that sticks.",
    },
    {
      name: "Gabriel L.",
      role: "BIM Automation Engineer",
      quote:
        "Every project blends engineering rigor with user experience. Seeing clients light up when their workflow becomes seamless is the best reward.",
    },
  ],
};

export const partnerLogos = [
  "Arclight Studio",
  "Skyline Healthcare",
  "Urban Nexus",
  "Northwave Builders",
  "Parallel Structures",
  "Elevate Engineering",
  "Vertex Collective",
  "Modulor Labs",
  "Forma Atelier",
  "Blueprint Union",
];
