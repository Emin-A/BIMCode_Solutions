export const products = [
  {
    name: "Revit Automation Starter",
    price: "$249",
    description:
      "Prebuilt Dynamo + Python scripts for daily production tasks, shipped with quick-start guides.",
    features: [
      "Sheet + view pack creation",
      "Naming + parameter checks",
      "Clean exports for BIM 360",
    ],
  },
  {
    name: "Clash & Compliance Engine",
    price: "$480",
    description:
      "Rule-driven model health and clash presets that run on schedule, with clear reports.",
    features: [
      "Custom rule authoring",
      "One-click publish workflows",
      "Teams-ready summaries",
    ],
    highlight: true,
  },
  {
    name: "AI Design Copilot",
    price: "$690",
    description:
      "Context-aware assistant that suggests layout options and annotates drawings using your standards.",
    features: [
      "Prompt-to-Dynamo actions",
      "Standards-aware annotations",
      "Secure tenant deployment",
    ],
  },
];

export const benefits = [
  {
    title: "Built for engineers",
    description:
      "Revit-native automation plus Python back-end services that match your templates and QA flows.",
  },
  {
    title: "Ship faster",
    description:
      "Reusable scripts and AI assists cut production time without sacrificing model health.",
  },
  {
    title: "Own your stack",
    description:
      "Documented, handed-off solutions—so your team keeps velocity without vendor lock-in.",
  },
];

export const services = [
  {
    title: "Customization sprints",
    description: "We tailor scripts to your standards and release in weekly increments.",
  },
  {
    title: "Integration support",
    description: "Wire automation into BIM 360, Teams, and your data pipelines.",
  },
  {
    title: "Training & enablement",
    description: "Focused sessions for project teams to adopt and extend the tools.",
  },
];

export const blogPosts = [
  {
    title: "How to ship reliable Dynamo packages across a studio",
    tag: "Playbook",
    time: "6 min read",
    hook: "Covers Dynamo packaging, versioning, and rollout pitfalls.",
    slug: "reliable-dynamo-packages",
    link: "/blog/reliable-dynamo-packages",
    body: [
      "Why packaging matters: consistent dependencies, predictable rollouts, and the ability to hotfix without breaking projects.",
      "Versioning approach: semantic versions, compatibility notes, and a changelog that lives next to the package.",
      "Distribution checklist: signed packages, smoke tests, and a rollback plan that project teams can trigger safely.",
    ],
    image: "/assets/Logo BIMCode Solutions 4 Final.png",
  },
  {
    title: "Model compliance: automating the crucial checks",
    tag: "Guide",
    time: "5 min read",
    hook: "Rule authoring, checklists, and scheduled QA without blocking delivery.",
    slug: "model-compliance-automating-checks",
    link: "/blog/model-compliance-automating-checks",
    body: [
      "Define rules in plain language, then translate to repeatable scripts—no hidden logic.",
      "Schedule checks during low-load windows; surface only actionable issues to reduce noise.",
      "Track compliance trends over time to prove model health improves with every sprint.",
    ],
    image: "/assets/Logo BIMCode Solutions 4 Final.png",
  },
  {
    title: "AI in Revit: where it fits today",
    tag: "Perspective",
    time: "7 min read",
    hook: "Practical guardrails for AI assists that stay within BIM governance.",
    slug: "ai-in-revit-where-it-fits",
    link: "/blog/ai-in-revit-where-it-fits",
    body: [
      "Use AI for suggestion and annotation, not authoritative geometry decisions.",
      "Keep prompts contextual: pass standards, sheets, and view metadata to avoid hallucinations.",
      "Log every AI action for auditability and easy rollback inside production environments.",
    ],
    image: "/assets/Logo BIMCode Solutions 4 Final.png",
  },
  {
    title: "Revit automation deployment checklist",
    tag: "Playbook",
    time: "5 min read",
    hook: "What to verify before pushing automation to production teams.",
    slug: "revit-automation-deployment-checklist",
    link: "/blog/revit-automation-deployment-checklist",
    body: [
      "Preflight: confirm template versions, shared parameter files, and add-in manifests.",
      "Security: signed add-ins, least-privilege service accounts, and scoped storage.",
      "Support: add a rollback script and a tiny in-app feedback form to catch issues quickly.",
    ],
    image: "/assets/Logo BIMCode Solutions 4 Final.png",
  },
  {
    title: "QA automation for sheet sets",
    tag: "Guide",
    time: "6 min read",
    hook: "Parameter validation, view naming, and publish-ready checks on autopilot.",
    slug: "qa-automation-sheet-sets",
    link: "/blog/qa-automation-sheet-sets",
    body: [
      "Validate sheet numbering, titleblock parameters, and view references before export.",
      "Auto-generate missing metadata and flag only the fields that need human judgment.",
      "Produce a concise QA report that links directly back to the sheet/view for fixes.",
    ],
    image: "/assets/Logo BIMCode Solutions 4 Final.png",
  },
  {
    title: "Parametric options with Dynamo + Python",
    tag: "Guide",
    time: "8 min read",
    hook: "Blend Dynamo graphs with Python nodes for flexible optioneering.",
    slug: "parametric-options-dynamo-python",
    link: "/blog/parametric-options-dynamo-python",
    body: [
      "Use Dynamo for UI and data orchestration; Python nodes handle reusable logic.",
      "Cache intermediate results to speed up iteration cycles for designers.",
      "Package the workflow so project teams can run it without touching scripts.",
    ],
    image: "/assets/Logo BIMCode Solutions 4 Final.png",
  },
  {
    title: "AI-assisted markups that respect standards",
    tag: "Perspective",
    time: "4 min read",
    hook: "Keep AI-generated markups aligned to your annotation styles and filters.",
    slug: "ai-assisted-markups-standards",
    link: "/blog/ai-assisted-markups-standards",
    body: [
      "Constrain AI suggestions to your annotation families and line styles.",
      "Require human approval on geometry changes; allow auto-approval on text-only notes.",
      "Log every markup source so compliance teams can audit and retrain prompts.",
    ],
    image: "/assets/Logo BIMCode Solutions 4 Final.png",
  },
  {
    title: "Coordinating Revit with Power Automate",
    tag: "Playbook",
    time: "6 min read",
    hook: "Trigger QA runs and report delivery using lightweight flows.",
    slug: "coordinating-revit-power-automate",
    link: "/blog/coordinating-revit-power-automate",
    body: [
      "Use Power Automate to orchestrate clash checks and export pipelines on a schedule.",
      "Send targeted Teams notifications with only the actionable items for each role.",
      "Store run logs centrally so you can trend failure rates and fix root causes.",
    ],
    image: "/assets/Logo BIMCode Solutions 4 Final.png",
  },
  {
    title: "Building resilient pyRevit toolbars",
    tag: "Guide",
    time: "5 min read",
    hook: "Make pyRevit tools robust across versions and templates.",
    slug: "resilient-pyrevit-toolbars",
    link: "/blog/resilient-pyrevit-toolbars",
    body: [
      "Version your tool bundles and test against multiple Revit releases in CI.",
      "Fail gracefully: clear error messaging and automatic log capture for support.",
      "Document behavior in-tool so designers know when and how to use each button.",
    ],
    image: "/assets/Logo BIMCode Solutions 4 Final.png",
  },
];
