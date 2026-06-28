// ============================================================
// Turn2Law Legal Templates — Seed Data (Including documentGeneration-master)
// ============================================================

import type { Template } from "@/lib/types";

type SeedTemplate = Omit<Template, "id" | "created_at" | "updated_at" | "category" | "file_url" | "preview_image_url" | "category_id"> & {
  category_slug: string;
  category_id?: string;
  tex_file?: string; // Optional mapping to local latex template
};

export const SEED_TEMPLATES: SeedTemplate[] = [
  // ── documentGeneration-master Templates ──
  {
    title: "Non-Disclosure Agreement (NDA)",
    slug: "nda-template",
    category_slug: "legal",
    tex_file: "nda_template.tex",
    description: "A professional mutual non-disclosure agreement to protect proprietary information, trade secrets, and business details shared during transactions.",
    purpose: "To legally bind parties to confidentiality, ensuring that proprietary tech, business strategies, and client data are not shared publicly or with competitors.",
    who_should_use: "Startups, founders, contractors, and corporate managers before entering strategic discussions.",
    when_to_use: "Before sharing pitch decks, financials, codebase details, or business model mockups with potential partners or contractors.",
    benefits: [
      "Protects proprietary codebase and secrets",
      "Drafted specifically with Turn2Law standard terms",
      "Defines terms for disclosure duration",
      "Includes breach remedies and dispute pathways"
    ],
    key_clauses: [
      "Definition of Confidential Information",
      "Obligations of Receiving Party",
      "Permitted Use Guidelines",
      "Exceptions to Confidentiality",
      "Term and Survival clauses",
      "Governing Law and Jurisdiction"
    ],
    tags: ["NDA", "Confidentiality", "Legal", "General"],
    download_count: 5312,
    estimated_reading_time: 8,
    is_featured: true,
    is_published: true,
    seo_title: "Non-Disclosure Agreement (NDA) Template | Turn2Law",
    seo_description: "Download our official Non-Disclosure Agreement template. Protect your trade secrets, financial models, and codebase with expert terms.",
  },
  {
    title: "Service Contract Agreement",
    slug: "contract-template",
    category_slug: "business",
    tex_file: "contract_template.tex",
    description: "A comprehensive service contract detailing the scope of deliverables, payment milestones, and standard commercial provisions.",
    purpose: "To formalize service-based engagements, establishing clear expectations for deliverables and payment terms.",
    who_should_use: "Freelancers, independent agencies, consulting service providers, and business clients.",
    when_to_use: "Prior to launching a paid project or contracting vendor services.",
    benefits: [
      "Secures payment terms and milestones",
      "Mitigates scope creep with strict scopes",
      "Clearly defines termination options",
      "Fully editable LaTeX/DOCX format"
    ],
    key_clauses: [
      "Scope of Services & Deliverables",
      "Payment & Retainer Schedules",
      "Independent Contractor Status",
      "Intellectual Property rights",
      "Limitation of Liability",
      "Termination & Exit conditions"
    ],
    tags: ["Service Contract", "Business", "Vendor", "Agreement"],
    download_count: 3824,
    estimated_reading_time: 12,
    is_featured: true,
    is_published: true,
    seo_title: "Service Contract Agreement Template | Turn2Law",
    seo_description: "Get a legally-compliant Service Contract Agreement template. Customize scope of work, payment schedules, and liability caps.",
  },
  {
    title: "Intellectual Property Assignment",
    slug: "ip-agreement-template",
    category_slug: "intellectual-property",
    tex_file: "ip_agreement_template.tex",
    description: "A binding IP assignment agreement transferring all software, designs, algorithms, and patents to the company.",
    purpose: "To consolidate intellectual property rights inside the company, preventing individual ownership claims by developers or designers.",
    who_should_use: "Founders onboarding remote freelancers, contractors, or founding teammates.",
    when_to_use: "Upon hiring or contracting any individual who writes code, designs assets, or creates proprietary algorithms.",
    benefits: [
      "Full ownership transfer guarantee",
      "Avoids legal claim risks down the line",
      "Covers future inventions and works",
      "Provides warranty against plagiarism"
    ],
    key_clauses: [
      "Intellectual Property Assignment",
      "Scope of Covered Works",
      "Representations & Originality Warranties",
      "Moral Rights waiver",
      "Survival & Post-termination terms",
      "Governing Law"
    ],
    tags: ["IP", "Assignment", "Copyright", "Software"],
    download_count: 2741,
    estimated_reading_time: 10,
    is_featured: true,
    is_published: true,
    seo_title: "Intellectual Property (IP) Assignment Agreement | Turn2Law",
    seo_description: "Democratize startup protection. Download our IP Assignment Agreement template to secure software, algorithms, and brand assets.",
  },
  {
    title: "Memorandum of Understanding (MOU)",
    slug: "mou-template",
    category_slug: "legal",
    tex_file: "mou_template.tex",
    description: "A bilateral Memorandum of Understanding to document general cooperation agreements, partnership intent, and project parameters.",
    purpose: "To express interest in collaborative projects and establish mutual operational parameters before writing formal agreements.",
    who_should_use: "Strategic partners, co-marketing firms, or cross-company development initiatives.",
    when_to_use: "When initiating high-level discussions or joint ventures before draftingpriced agreements.",
    benefits: [
      "Drafts non-binding intent clearly",
      "Easy framework for cross-team coordination",
      "Establishes confidentiality benchmarks",
      "Saves cost of pre-deal drafting"
    ],
    key_clauses: [
      "Purpose and Intent of Collaboration",
      "Scope of Work Sharing",
      "Joint Coordination Committee",
      "Confidentiality & Information Flow",
      "Non-binding Nature of agreement",
      "Governing Law & Dispute pathways"
    ],
    tags: ["MOU", "Partnership", "Collaboration", "Legal"],
    download_count: 4120,
    estimated_reading_time: 9,
    is_featured: true,
    is_published: true,
    seo_title: "Memorandum of Understanding (MOU) Template | Turn2Law",
    seo_description: "Download a professional Memorandum of Understanding template to outline mutual cooperation and partnership frameworks.",
  },
  {
    title: "Employment Offer Letter",
    slug: "offer-letter-template",
    category_slug: "employment",
    tex_file: "offer_letter_template.tex",
    description: "A formal employment offer letter detailing salaries, benefits, joining parameters, and basic compliance rules.",
    purpose: "To communicate employment offers to selected candidates in a professional, structured manner.",
    who_should_use: "HR managers, startup recruiters, and hiring managers.",
    when_to_use: "Once a candidate passes interview evaluations and terms have been verbally aligned.",
    benefits: [
      "Professional candidates presentation",
      "Outlines salary and reporting structures",
      "Minimizes misunderstandings on onboarding",
      "Fully adaptable company brand parameters"
    ],
    key_clauses: [
      "Position and Core Responsibilities",
      "Start Date & Onboarding schedule",
      "Compensation, Salary & Bonus structures",
      "Background verification contingencies",
      "Acceptance Deadline & Response method"
    ],
    tags: ["Offer Letter", "Employment", "Hiring", "HR"],
    download_count: 6184,
    estimated_reading_time: 6,
    is_featured: true,
    is_published: true,
    seo_title: "Employment Offer Letter Template | Turn2Law",
    seo_description: "Onboard candidates with authority. Download our official Turn2Law Offer Letter template. Customizable compensation and reporting parameters.",
  },
  {
    title: "Official Onboarding Letter",
    slug: "onboarding-template",
    category_slug: "hr",
    tex_file: "onboarding_template.tex",
    description: "An official joining and welcome confirmation letter given to employees upon their formal entry to the company.",
    purpose: "To legally verify the employee's onboarding status, role, and entry date for compliance records.",
    who_should_use: "HR operations teams, company secretaries, and startup operations managers.",
    when_to_use: "On the employee's first official working day during induction.",
    benefits: [
      "Confirms official employment status",
      "Simplifies onboarding administration",
      "Establishes role compliance baselines",
      "Features Turn2Law standard welcome design"
    ],
    key_clauses: [
      "Emp ID and Welcome confirmation",
      "Role & Department definition",
      "Joining Date & Location parameters",
      "Compliance policies acknowledgment"
    ],
    tags: ["Onboarding", "HR", "Joining Letter", "Welcome"],
    download_count: 2450,
    estimated_reading_time: 5,
    is_featured: true,
    is_published: true,
    seo_title: "Official Employee Onboarding Letter Template | Turn2Law",
    seo_description: "Get a professional Employee Onboarding Letter template. Document Employee ID, official start dates, and role descriptions.",
  },

  // ── Additional templates ──
  {
    title: "Co-Founder Agreement",
    slug: "co-founder-agreement",
    description: "A comprehensive co-founder agreement that establishes equity splits, roles, responsibilities, vesting schedules, and dispute resolution mechanisms between startup co-founders.",
    purpose: "To formalize the relationship between co-founders of a startup, preventing future disputes by clearly defining each founder's contributions, equity ownership, and responsibilities from day one.",
    who_should_use: "Startup co-founders who are beginning a new venture together and want to establish clear terms before building their company.",
    when_to_use: "At the inception of a startup, ideally before any significant work, investment, or intellectual property is created.",
    benefits: ["Prevents equity disputes", "Defines roles clearly", "Includes vesting schedules", "Covers IP assignment", "Handles departure scenarios"],
    key_clauses: ["Equity Split & Vesting", "Role Definitions", "Decision-Making Authority", "IP Assignment", "Non-Compete & Non-Solicitation", "Departure & Buyback", "Dispute Resolution"],
    category_id: "",
    category_slug: "startup",
    tags: ["startup", "founders", "equity", "vesting"],
    download_count: 1847,
    estimated_reading_time: 15,
    is_featured: false,
    is_published: true,
    seo_title: "Co-Founder Agreement Template | Free Download | Turn2Law",
    seo_description: "Download a professionally drafted Co-Founder Agreement template. Covers equity splits, vesting schedules, roles, and IP assignment for startup founders.",
  },
  {
    title: "SAFE Note Agreement",
    slug: "safe-note-agreement",
    description: "A Simple Agreement for Future Equity (SAFE) document based on Y Combinator's standard, adapted for Indian startups with appropriate legal references.",
    purpose: "To provide a simple, fast mechanism for early-stage startups to raise capital without the complexity of a priced round.",
    who_should_use: "Early-stage startups raising pre-seed or seed funding from angel investors or micro-VCs.",
    when_to_use: "During early fundraising rounds when a full priced equity round would be premature or too costly.",
    benefits: ["Simple and fast", "No valuation needed upfront", "Investor-friendly terms", "Standard market document", "Reduces legal costs"],
    key_clauses: ["Investment Amount", "Valuation Cap", "Discount Rate", "Conversion Events", "Pro-Rata Rights", "Most Favored Nation"],
    category_id: "",
    category_slug: "startup",
    tags: ["startup", "fundraising", "investment", "SAFE"],
    download_count: 1234,
    estimated_reading_time: 10,
    is_featured: false,
    is_published: true,
    seo_title: "SAFE Note Agreement Template | Startup Fundraising | Turn2Law",
    seo_description: "Download a Y Combinator-style SAFE Note Agreement template adapted for Indian startups. Simple, fast fundraising without priced rounds.",
  },
  {
    title: "Partnership Agreement",
    slug: "partnership-agreement",
    description: "A detailed partnership agreement establishing the terms of a business partnership including profit sharing, management responsibilities, and dissolution procedures.",
    purpose: "To create a formal framework for a business partnership that protects all partners and establishes clear operating procedures.",
    who_should_use: "Business partners starting or formalizing a partnership venture.",
    when_to_use: "When two or more parties decide to enter into a business partnership.",
    benefits: ["Clear profit sharing", "Defined responsibilities", "Dispute mechanisms", "Exit provisions", "Capital contribution terms"],
    key_clauses: ["Capital Contributions", "Profit & Loss Sharing", "Management Duties", "Decision Making", "New Partners", "Withdrawal", "Dissolution"],
    category_id: "",
    category_slug: "business",
    tags: ["business", "partnership", "agreement"],
    download_count: 1567,
    estimated_reading_time: 18,
    is_featured: false,
    is_published: true,
    seo_title: "Partnership Agreement Template | Free Download | Turn2Law",
    seo_description: "Download a comprehensive partnership agreement template covering profit sharing, responsibilities, and dissolution procedures.",
  },
  {
    title: "Terms of Service",
    slug: "terms-of-service",
    description: "A comprehensive terms of service agreement for websites and web applications covering user rights, limitations of liability, and acceptable use policies.",
    purpose: "To establish the legal terms governing the use of a website or web application, protecting the business from liability.",
    who_should_use: "Website owners, SaaS companies, and digital businesses that need legal terms for their platforms.",
    when_to_use: "Before launching a website or web application that users will access.",
    benefits: ["Legal protection", "Clear user guidelines", "Liability limitation", "Dispute resolution", "Compliance ready"],
    key_clauses: ["Acceptance of Terms", "User Accounts", "Acceptable Use", "Intellectual Property", "Limitation of Liability", "Indemnification", "Termination", "Governing Law"],
    category_id: "",
    category_slug: "website",
    tags: ["website", "terms of service", "SaaS", "legal"],
    download_count: 3456,
    estimated_reading_time: 15,
    is_featured: false,
    is_published: true,
    seo_title: "Terms of Service Template | Website Legal | Turn2Law",
    seo_description: "Download a comprehensive terms of service template for websites and web applications. Covers user rights, liability, and acceptable use.",
  },
  {
    title: "Privacy Policy",
    slug: "privacy-policy",
    description: "A detailed privacy policy compliant with GDPR, CCPA, and Indian data protection laws, covering data collection, usage, storage, and user rights.",
    purpose: "To inform users about how their personal data is collected, used, stored, and protected by your website or application.",
    who_should_use: "Any business with a website or app that collects user data, especially those handling personal information.",
    when_to_use: "Before launching any website or application that collects personal data from users.",
    benefits: ["GDPR compliant", "Multi-jurisdiction", "Clear data practices", "User rights defined", "Cookie disclosure"],
    key_clauses: ["Data Collection", "Data Usage", "Data Storage", "Data Sharing", "User Rights", "Cookie Policy", "Data Retention", "Contact Information"],
    category_id: "",
    category_slug: "website",
    tags: ["website", "privacy", "GDPR", "data protection"],
    download_count: 4123,
    estimated_reading_time: 12,
    is_featured: false,
    is_published: true,
    seo_title: "Privacy Policy Template | GDPR Compliant | Turn2Law",
    seo_description: "Download a GDPR-compliant privacy policy template. Covers data collection, usage, storage, user rights, and cookie disclosures.",
  },
  {
    title: "Residential Rental Agreement",
    slug: "residential-rental-agreement",
    description: "A standard residential rental agreement for landlords and tenants covering rent, security deposit, maintenance, and house rules.",
    purpose: "To formalize a residential tenancy with clear terms that protect both landlord and tenant.",
    who_should_use: "Landlords renting residential properties or tenants seeking formal lease documentation.",
    when_to_use: "When renting or leasing a residential property such as an apartment, house, or flat.",
    benefits: ["Clear rent terms", "Security deposit rules", "Maintenance clarity", "Legal protection"],
    key_clauses: ["Property Details", "Rent Amount", "Security Deposit", "Lease Duration", "Maintenance", "House Rules", "Termination Notice", "Renewal"],
    category_id: "",
    category_slug: "real-estate",
    tags: ["real estate", "rental", "residential", "tenant"],
    download_count: 3234,
    estimated_reading_time: 12,
    is_featured: false,
    is_published: true,
    seo_title: "Residential Rental Agreement Template | Turn2Law",
    seo_description: "Download a standard residential rental agreement template covering rent, security deposit, maintenance, and house rules for landlords and tenants.",
  },
];

export function getTemplatesByCategory(categorySlug: string): SeedTemplate[] {
  return SEED_TEMPLATES.filter((t) => t.category_slug === categorySlug);
}

export function getFeaturedTemplates(): SeedTemplate[] {
  return SEED_TEMPLATES.filter((t) => t.is_featured);
}

export function getPopularTemplates(limit: number = 8): SeedTemplate[] {
  return [...SEED_TEMPLATES]
    .sort((a, b) => b.download_count - a.download_count)
    .slice(0, limit);
}
