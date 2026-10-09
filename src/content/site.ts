export const site = {
  name: "Zprime Digital",
  founder: "Azim Patel",
  year: 2026,
  location: "Pune, Maharashtra, India",
  positioning: "We run the funnel, so you can run the growth.",
  inbox: "team.zprimedigital@gmail.com",
  phone: "+91 99606 19125",
  phoneHref: "tel:+919960619125",
  studio: "NIBM, Pune – 411048, Maharashtra, India",
  responseTime: "Within 1 business day",
} as const;

export const nav = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#why", label: "Why Us" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
] as const;

export const footerNav = [
  { href: "#services", label: "Services" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
] as const;

export const channels = [
  "Google Ads",
  "Meta",
  "YouTube",
  "LinkedIn",
  "Shopping",
  "SEO",
] as const;

export const pipeline = [
  "Audit",
  "Strategy",
  "Execute",
  "Optimise",
  "Report",
] as const;

export const brief = {
  label: "The brief",
  heading: "Most businesses buy channels. Few people run the system.",
  body: "Search in one inbox. Social in another. Content somewhere else. The operational layer — setup, QA, pacing and reporting — is what actually turns spend into leads.",
  close: "We cover that layer, end to end, as one desk.",
} as const;

export const statement = {
  label: "The studio line",
  quote: "Full-stack campaign ops — from the first keyword to the weekly report.",
} as const;

export const industries = {
  label: "Who we sit with",
  heading: "Growing businesses. One account each.",
  items: [
    { name: "D2C & retail", note: "Traffic that should convert" },
    { name: "Local services", note: "Calls and booked jobs" },
    { name: "B2B teams", note: "Pipeline, not vanity" },
    { name: "First campaigns", note: "A plan before a spend" },
  ],
} as const;

export const platforms = {
  label: "Media mix",
  heading: "The platforms we actually run",
  lede: "One connected mix across the platforms your audience already uses.",
  items: [
    { name: "Search", note: "Google & shopping" },
    { name: "Paid social", note: "Meta & short video" },
    { name: "YouTube", note: "Demand & remarketing" },
    { name: "LinkedIn", note: "B2B conversations" },
    { name: "Organic", note: "SEO & content" },
    { name: "Landing", note: "Lead capture" },
  ],
} as const;

export const hero = {
  label: "Pune, India — Performance marketing studio",
  headline: ["We run the funnel,", "so you can run the growth."],
  lede: "SEO, paid media, social and content — planned and tuned by a desk in Pune.",
  primaryCta: { href: "#contact", label: "Start a conversation" },
  secondaryCta: { href: "#services", label: "What we do" },
  platforms: ["Google Ads", "Meta", "YouTube", "LinkedIn", "SEO", "Shopping"],
  status: {
    prefix: "Currently running",
    value: "Search · Social · Video",
  },
  stats: [
    { value: "6+", label: "Platforms we run" },
    { value: "Audit → Report", label: "Service coverage" },
    { value: "Pune", label: "Studio desk" },
    { value: "Project / monthly", label: "Engagement" },
  ],
} as const;

export const services = {
  id: "services",
  label: "What we do",
  heading: "Full-funnel marketing, end to end",
  lede: "From the first keyword to the weekly report — we cover the operational layer growing businesses do not have time to run well.",
  items: [
    {
      index: "01",
      tag: "Organic",
      title: "SEO",
      span: "wide",
      icon: "search",
      body: "Technical audits, on-page structure and content that moves you up the rankings people actually search on.",
      chips: ["Technical audit", "On-page", "Content"],
    },
    {
      index: "02",
      tag: "Paid media",
      title: "Pay-Per-Click Advertising",
      span: "half",
      icon: "target",
      body: "Search, display and shopping campaigns tuned weekly against cost-per-lead, not just clicks.",
      chips: ["Google Ads", "Shopping", "Display"],
    },
    {
      index: "03",
      tag: "Conversion",
      title: "Sales & Lead Generation",
      span: "half",
      icon: "funnel",
      body: "Funnels and landing experiences built to turn traffic into qualified conversations for your sales team.",
      chips: ["Landing pages", "Funnels", "Lead QA"],
    },
    {
      index: "04",
      tag: "Social",
      title: "Social Media Marketing",
      span: "half",
      icon: "share",
      body: "Always-on content plus paid social across the platforms your audience actually spends time on.",
      chips: ["Meta", "YouTube", "LinkedIn"],
    },
    {
      index: "05",
      tag: "Content",
      title: "Content Marketing",
      span: "half",
      icon: "doc",
      body: "Blogs, video and creative assets that build authority and give every other channel something to run on.",
      chips: ["Blogs", "Video", "Creative"],
    },
  ],
  cta: {
    heading: "Need a single project — or a desk on the account?",
    body: "Tell us the goal. We will map the mix, whether it is one campaign or the full funnel.",
    label: "Start a conversation",
    href: "#contact",
  },
} as const;

export const process = {
  id: "process",
  label: "How we work",
  heading: "Setup to report, then back again",
  lede: "The same loop every month — so campaigns get tighter instead of just running longer.",
  loopCaption: "Returns to audit. Every month.",
  steps: [
    {
      index: "01",
      title: "Audit",
      body: "Full review of your site, funnel and ad accounts.",
    },
    {
      index: "02",
      title: "Strategy",
      body: "Channel mix and targets set against your budget.",
    },
    {
      index: "03",
      title: "Execute",
      body: "Campaigns, content and pages go live.",
    },
    {
      index: "04",
      title: "Optimise",
      body: "Weekly tuning based on real performance data.",
    },
    {
      index: "05",
      title: "Report",
      body: "Clear numbers, delivered in plain language.",
    },
  ],
} as const;

export const why = {
  id: "why",
  label: "Why Zprime",
  heading: "A lean desk. Real platform work.",
  lede: "We plug into your accounts and run the work — so campaigns launch cleaner, get tuned weekly, and report on leads, not vanity.",
  coverage: [
    { value: "6+", label: "Platforms run" },
    { value: "Audit → Report", label: "Coverage" },
    { value: "Pune", label: "Studio" },
    { value: "Project / monthly", label: "Engagement" },
  ],
  items: [
    {
      emphasis: "Ops",
      title: "One desk on the account",
      body: "You work with the people trafficking and tuning the campaigns — not a handoff chain.",
    },
    {
      emphasis: "Leads",
      title: "Reporting that owns the number",
      body: "Cost-per-lead and pipeline, written in plain language. Screenshots and weekly notes, on time.",
    },
    {
      emphasis: "QA",
      title: "Checked before it spends",
      body: "Pixels, landing URLs, audiences and specs reviewed before launch — so errors do not go live.",
    },
    {
      emphasis: "Scale",
      title: "Project or monthly retainer",
      body: "A single campaign, or a desk embedded on the account. The loop stays the same.",
    },
  ],
} as const;

export const team = {
  id: "team",
  label: "The team",
  heading: "The desk behind Zprime",
  lede: "A small team. Named founder. Role-titled specialists on SEO, paid and social.",
  members: [
    {
      name: "Azim Patel",
      role: "Founder",
      specialty: "Performance marketing",
      initials: "AP",
      featured: true,
      bio: "Founder of Zprime Digital. Plans and runs result-driven campaigns so businesses reach the right audience — visibility, engagement, and customers, not vanity.",
      close: "Tell us the goal. We will turn the budget into a plan you can run.",
      chips: ["Google Ads", "Meta", "SEO", "Strategy"],
    },
    {
      name: "SEO & Content",
      role: "SEO & Content",
      specialty: "Organic search",
      initials: "SE",
      featured: false,
      bio: "Technical SEO and content that turns search into a steady stream of qualified traffic. Always testing what actually moves rankings.",
      close: "",
      chips: ["Technical SEO", "On-page", "Content"],
    },
    {
      name: "Paid Media",
      role: "Paid Media",
      specialty: "Google · Meta · YouTube",
      initials: "PM",
      featured: false,
      bio: "Traffics and tunes paid campaigns — lowering cost-per-lead without cutting quality. Data-first, budget-conscious, weekly iteration.",
      close: "",
      chips: ["Google Ads", "Meta", "YouTube"],
    },
    {
      name: "Social & Creative",
      role: "Social & Creative",
      specialty: "Always-on social",
      initials: "SO",
      featured: false,
      bio: "Creative and paid social that keeps audiences engaged. Design instinct, checked against performance.",
      close: "",
      chips: ["Meta", "Creative", "Short video"],
    },
  ],
} as const;

export const contact = {
  id: "contact",
  label: "Get in touch",
  heading: "Let's talk about your campaigns",
  lede: "SEO, paid media, social, or the full funnel — reach out and we will come back with a channel plan, not a pitch.",
  details: [
    { label: "Email", value: site.inbox, href: `mailto:${site.inbox}` },
    { label: "Phone", value: site.phone, href: site.phoneHref },
    { label: "Studio", value: site.studio, href: "" },
    { label: "Response time", value: site.responseTime, href: "" },
  ],
  form: {
    title: "Request a free audit",
    description: "Fill this in and we'll follow up by email or phone.",
    submit: "Send message",
    success:
      "Your mail app should be open with the request drafted. If nothing appeared, copy the studio email and send it directly.",
    copyEmail: "Copy email",
    copied: "Email copied",
  },
} as const;

export const requirements = [
  { value: "seo", label: "SEO" },
  { value: "paid", label: "Paid advertising" },
  { value: "social", label: "Social & content" },
  { value: "funnel", label: "Full-funnel" },
  { value: "unsure", label: "Not sure" },
] as const;

export type RequirementValue = (typeof requirements)[number]["value"];
