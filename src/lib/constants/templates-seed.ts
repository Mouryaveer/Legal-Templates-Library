// ============================================================
// Turn2Law Legal Templates — Enriched Seed Data
// ============================================================

import type { Template } from "@/lib/types";

type SeedTemplate = Omit<Template, "id" | "created_at" | "updated_at" | "category" | "file_url" | "preview_image_url" | "category_id"> & {
  category_slug: string;
  category_id?: string;
};

export const SEED_TEMPLATES: SeedTemplate[] = [
  {
    title: "Non-Disclosure Agreement (NDA)",
    slug: "nda-template",
    category_slug: "legal",
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
    version: "2.0",
    template_number: "T2L-NDA-001",
    revision_date: "June 2026",
    applicable_laws: ["Indian Contract Act, 1872", "Information Technology Act, 2000"],
    required_information: [
      "Full legal names and addresses of both Disclosing and Receiving Parties",
      "Registration numbers of both companies (if corporate entities)",
      "Detailed description of the Permitted Purpose of disclosure",
      "The duration of the confidentiality obligations (Term)",
      "Choice of governing law and jurisdiction"
    ],
    estimated_completion_time: "10 minutes",
    page_count: 8,
    related_template_slugs: ["ip-agreement-template", "co-founder-agreement"],
    faqs: [
      {
        question: "What is the difference between a mutual and unilateral NDA?",
        answer: "A unilateral NDA is used when only one party is sharing confidential information. A mutual NDA is used when both parties will be sharing confidential information with each other. This template is drafted as a mutual NDA, but can be adapted easily."
      },
      {
        question: "How long should the confidentiality obligation last?",
        answer: "Typically, NDA terms range between 2 to 5 years from the date of disclosure. Trade secrets can be protected indefinitely or until they enter the public domain through no fault of the receiving party."
      }
    ]
  },
  {
    title: "Intellectual Property Assignment",
    slug: "ip-agreement-template",
    category_slug: "intellectual-property",
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
    seo_description: "Consolidate all code, design assets, and patents inside your company. Download our professional IP assignment template.",
    version: "2.0",
    template_number: "T2L-IP-001",
    revision_date: "June 2026",
    applicable_laws: ["Copyright Act, 1957", "Patents Act, 1970"],
    required_information: [
      "Names and addresses of the Assignor (Creator) and Assignee (Company)",
      "Clear description of the software or technology being assigned",
      "Effective date of the assignment",
      "Details of compensation or consideration paid for the assignment"
    ],
    estimated_completion_time: "10 minutes",
    page_count: 6,
    related_template_slugs: ["nda-template", "co-founder-agreement", "employment-agreement-equity-vesting"],
    faqs: [
      {
        question: "Why does a startup need IP assignment agreements?",
        answer: "By default, the copyright in a creative work (like code or design) belongs to the creator. To ensure the startup owns its codebase and product, all founders, employees, and contractors must assign their IP rights to the company."
      }
    ]
  },
  {
    title: "Internship Offer Letter",
    slug: "offer-letter-template",
    category_slug: "employment",
    description: "A standard legal offer letter for onboarding law interns, outlining remote work parameters, duration, and key responsibilities.",
    purpose: "To formally offer an internship to a prospective candidate, clarifying roles, responsibilities, stipends, and confidentiality requirements.",
    who_should_use: "Law firms, legal startups, or corporate legal departments hiring legal interns.",
    when_to_use: "Upon selecting an internship candidate and before they begin their official internship period.",
    benefits: [
      "Clear role and location terms",
      "Outlines internship duration and type",
      "Includes non-solicitation rules",
      "Protects confidential information"
    ],
    key_clauses: [
      "Position details & location",
      "Duration & type (Unpaid)",
      "Key responsibilities & research work",
      "Confidentiality obligations",
      "Termination of internship",
      "Ownership of work product"
    ],
    tags: ["Internship", "Offer Letter", "Employment", "HR"],
    download_count: 1450,
    estimated_reading_time: 5,
    is_featured: false,
    is_published: true,
    seo_title: "Internship Offer Letter Template | Turn2Law",
    seo_description: "Get a professional Internship Offer Letter template. Clear terms for roles, remote location, duration, and IP protection.",
    version: "1.0",
    template_number: "T2L-HR-002",
    revision_date: "June 2026",
    applicable_laws: ["Indian Contract Act, 1872"],
    required_information: [
      "Candidate name and contact details",
      "Internship start date and duration",
      "Specific role and location details",
      "Key tasks and reporting managers"
    ],
    estimated_completion_time: "5 minutes",
    page_count: 4,
    related_template_slugs: ["nda-template", "employment-agreement-equity-vesting"],
    faqs: [
      {
        question: "Can an unpaid internship be legally binding?",
        answer: "Yes, an internship offer letter sets out the terms of engagement (including learning objectives, work hours, and confidentiality). While unpaid, it binds the intern to respect the company's IP and confidentiality."
      }
    ]
  },
  {
    title: "Co-Founder Agreement",
    slug: "co-founder-agreement",
    category_slug: "startup",
    description: "A comprehensive co-founder agreement that establishes equity splits, roles, responsibilities, vesting schedules, and dispute resolution mechanisms between startup co-founders.",
    purpose: "To formalize the relationship between co-founders of a startup, preventing future disputes by clearly defining each founder's contributions, equity ownership, and responsibilities from day one.",
    who_should_use: "Startup co-founders who are beginning a new venture together and want to establish clear terms before building their company.",
    when_to_use: "At the inception of a startup, ideally before any significant work, investment, or intellectual property is created.",
    benefits: [
      "Prevents equity disputes",
      "Defines roles clearly",
      "Includes vesting schedules",
      "Covers IP assignment",
      "Handles departure scenarios"
    ],
    key_clauses: [
      "Equity Split & Vesting",
      "Role Definitions",
      "Decision-Making Authority",
      "IP Assignment",
      "Non-Compete & Non-Solicitation",
      "Departure & Buyback",
      "Dispute Resolution"
    ],
    tags: ["startup", "founders", "equity", "vesting"],
    download_count: 1847,
    estimated_reading_time: 15,
    is_featured: true,
    is_published: true,
    seo_title: "Co-Founder Agreement Template | Free Download | Turn2Law",
    seo_description: "Download a professionally drafted Co-Founder Agreement template. Covers equity splits, vesting schedules, roles, and IP assignment for startup founders.",
    version: "2.0",
    template_number: "T2L-STR-001",
    revision_date: "June 2026",
    applicable_laws: ["Indian Contract Act, 1872", "Companies Act, 2013"],
    required_information: [
      "Names and addresses of all co-founders",
      "Proposed name and type of company to be formed",
      "Initial equity split percentages",
      "Vesting period, cliff duration, and acceleration details",
      "Capital contributions of each founder",
      "Roles, titles, and key responsibilities"
    ],
    estimated_completion_time: "20 minutes",
    page_count: 12,
    related_template_slugs: ["co-founder-exit-agreement", "ip-agreement-template", "nda-template"],
    faqs: [
      {
        question: "Why do co-founders need a vesting schedule?",
        answer: "Vesting protects the company. If a founder leaves early, they only retain the portion of equity they 'earned' during their stay. Unvested equity is forfeited back to the company, ensuring active co-founders aren't left working for someone who departed early."
      },
      {
        question: "What is a 'Cliff' in vesting?",
        answer: "A cliff is a delay period (typically 1 year) before any vesting actually occurs. If a founder leaves before the cliff ends, they walk away with 0% equity."
      }
    ]
  },
  {
    title: "Employment Agreement with Equity Vesting",
    slug: "employment-agreement-equity-vesting",
    category_slug: "employment",
    description: "A comprehensive employment contract combining base remuneration with equity compensation (ESOPs), vesting schedules, non-solicitation, and standard service rules.",
    purpose: "To formalize the employment relationship while aligning the employee's incentives with the company's long-term growth through structured stock options.",
    who_should_use: "Startups and scale-ups hiring key team members, managers, or senior executives where equity is part of the compensation package.",
    when_to_use: "Prior to onboarding any employee who will receive stock options or equity grants as part of their remuneration.",
    benefits: [
      "Secures IP rights and assignment",
      "Clear vesting and cliff schedules",
      "Aligns founder/employee incentives",
      "Includes non-solicitation terms"
    ],
    key_clauses: [
      "Cost to Company (CTC) & fixed pay",
      "Employee Stock Option Plan (ESOP)",
      "Probation & working hours",
      "Confidentiality & non-solicitation",
      "Transfer & location rules",
      "Tag-along rights & ROFR"
    ],
    tags: ["Employment", "Equity", "Vesting", "ESOP", "HR"],
    download_count: 1240,
    estimated_reading_time: 12,
    is_featured: true,
    is_published: true,
    seo_title: "Employment Agreement with Equity Vesting Template | Turn2Law",
    seo_description: "Download our Employment Agreement with Equity Vesting. Protect your startup with standard terms for base salary, ESOP vesting, cliffs, and IP protection.",
    version: "1.0",
    template_number: "T2L-EMP-002",
    revision_date: "June 2026",
    applicable_laws: ["Indian Contract Act, 1872", "Companies Act, 2013", "Shops and Establishments Act"],
    required_information: [
      "Names and addresses of the Company and the Employee",
      "Job title, department, and probation duration",
      "Remuneration details (fixed base salary and variable incentives)",
      "ESOP percentage grant, vesting duration, and cliff details",
      "Notice periods for termination by either party"
    ],
    estimated_completion_time: "15 minutes",
    page_count: 8,
    related_template_slugs: ["offer-letter-template", "nda-template", "co-founder-agreement"],
    faqs: [
      {
        question: "What is the standard vesting schedule for employee equity?",
        answer: "The standard vesting schedule is 4 years with a 1-year cliff. This means no options vest during the first year, and 25% vest on the first anniversary of joining, followed by monthly or quarterly vesting for the remaining 3 years."
      },
      {
        question: "What happens to vested options if an employee resigns?",
        answer: "Generally, unvested options are forfeited immediately. Vested options must be exercised within a limited window (typically 30 to 90 days) after the termination date, or they will lapse."
      }
    ]
  },
  {
    title: "Co-Founder Exit Agreement",
    slug: "co-founder-exit-agreement",
    category_slug: "startup",
    description: "A legally binding settlement agreement for the voluntary exit of a co-founder, detailing share transfer, relinquishment of rights, confidentiality, and release of claims.",
    purpose: "To formalize a co-founder's departure from the company, ensuring an orderly transition, relinquishment of shareholding, and avoiding future disputes.",
    who_should_use: "Startup founders when one of the co-founders is leaving the venture.",
    when_to_use: "When a co-founder decides to exit the company and all parties agree to settle outstanding rights, liabilities, and share transfers.",
    benefits: [
      "Clear share transfer ratios",
      "Protects company IP and assets",
      "Mutual release of past claims",
      "Non-solicitation and non-disparagement"
    ],
    key_clauses: [
      "Resignation from positions",
      "Share transfer & price",
      "Full & final settlement",
      "Confidentiality & IP assignment",
      "Non-solicitation & non-disparagement",
      "Liquidated damages for breach"
    ],
    tags: ["Exit", "Departure", "Share Transfer", "Settlement", "Co-Founder"],
    download_count: 840,
    estimated_reading_time: 10,
    is_featured: false,
    is_published: true,
    seo_title: "Co-Founder Exit Agreement Template | Turn2Law",
    seo_description: "Download a professionally drafted Co-Founder Exit Agreement template. Covers resignation, share transfer, confidentiality, IP assignment, and mutual release.",
    version: "1.0",
    template_number: "T2L-STR-003",
    revision_date: "June 2026",
    applicable_laws: ["Companies Act, 2013", "Indian Contract Act, 1872"],
    required_information: [
      "Company details and names of exiting and continuing co-founders",
      "Date of exit and cessation of association",
      "Details of share transfer (number of shares, transfer price, new allocation)",
      "Handover of assets and access credentials",
      "Governing law and dispute resolution details"
    ],
    estimated_completion_time: "15 minutes",
    page_count: 6,
    related_template_slugs: ["co-founder-agreement", "nda-template"],
    faqs: [
      {
        question: "How are shares redistributed upon a co-founder's exit?",
        answer: "Typically, the exiting founder transfers their shares to the continuing founders in an agreed-upon ratio, or the company buys back the shares (subject to regulatory limits). This agreement details transfer of shares to continuing founders."
      },
      {
        question: "What is the purpose of non-disparagement clauses in exit agreements?",
        answer: "A non-disparagement clause prevents both the exiting founder and the company from making negative comments about each other, protecting the company's brand/goodwill and the individual's professional reputation."
      }
    ]
  }
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
