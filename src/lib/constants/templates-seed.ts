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
    related_template_slugs: ["ip-agreement-template", "co-founder-agreement", "partnership-agreement"],
    faqs: [
      {
        question: "What is the difference between a mutual and unilateral NDA?",
        answer: "A unilateral NDA is used when only one party is sharing confidential information. A mutual NDA is used when both parties will be sharing confidential information with each other. This template is drafted as a mutual NDA, but can be adapted easily."
      },
      {
        question: "How long should the confidentiality obligation last?",
        answer: "Typically, NDA terms range between 2 to 5 years from the date of disclosure. Trade secrets can be protected indefinitely or until they enter the public domain through no fault of the receiving party."
      },
      {
        question: "Can I use this template outside of India?",
        answer: "This template is governed by Indian law by default (Indian Contract Act, 1872). However, the jurisdiction clause is fully customizable, and the core confidentiality clauses are based on international standard drafting principles."
      }
    ]
  },
  {
    title: "Service Contract Agreement",
    slug: "contract-template",
    category_slug: "business",
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
    version: "2.0",
    template_number: "T2L-SVC-001",
    revision_date: "June 2026",
    applicable_laws: ["Indian Contract Act, 1872", "Sale of Goods Act, 1930"],
    required_information: [
      "Names and addresses of the Service Provider and Client",
      "Detailed description of services and deliverables (Scope of Work)",
      "Payment schedules, milestones, and invoicing terms",
      "Ownership details of intellectual property created during the project",
      "Notice periods for termination"
    ],
    estimated_completion_time: "15 minutes",
    page_count: 10,
    related_template_slugs: ["nda-template", "ip-agreement-template", "partnership-agreement"],
    faqs: [
      {
        question: "Who owns the Intellectual Property created under this agreement?",
        answer: "By default, our template allocates ownership of all new deliverables and work product to the Client upon full payment of the applicable fees. Pre-existing intellectual property remains the property of the respective party."
      },
      {
        question: "How do I handle changes to the scope of work?",
        answer: "This agreement contains a strict 'Change Order' clause. Any alterations to the deliverables, timelines, or fees must be documented in writing and signed by both parties before the extra work begins."
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
    seo_description: "Democratize startup protection. Download our IP Assignment Agreement template to secure software, algorithms, and brand assets.",
    version: "2.0",
    template_number: "T2L-IP-001",
    revision_date: "June 2026",
    applicable_laws: ["Copyright Act, 1957", "Patents Act, 1970", "Designs Act, 2000"],
    required_information: [
      "Names and addresses of the Assignor and Assignee",
      "Detailed description of the intellectual property being assigned",
      "Details of any pre-existing intellectual property to be excluded",
      "Description of consideration (compensation) for the assignment"
    ],
    estimated_completion_time: "10 minutes",
    page_count: 7,
    related_template_slugs: ["nda-template", "co-founder-agreement", "offer-letter-template"],
    faqs: [
      {
        question: "What is a 'Moral Rights' waiver?",
        answer: "Moral rights include the right to be recognized as the author (attribution) and to protect the work from mutilation. A moral rights waiver ensures the company can modify the code, designs, or assets without legal objections from the original creator."
      },
      {
        question: "Do I need to register the assignment?",
        answer: "While registration is not strictly required to make the contract binding between the parties, registering the assignment with the Copyright Office or Patent Office provides strong public notice and is recommended for major IP assets."
      }
    ]
  },
  {
    title: "Memorandum of Understanding (MOU)",
    slug: "mou-template",
    category_slug: "legal",
    description: "A bilateral Memorandum of Understanding to document general cooperation agreements, partnership intent, and project parameters.",
    purpose: "To express interest in collaborative projects and establish mutual operational parameters before writing formal agreements.",
    who_should_use: "Strategic partners, co-marketing firms, or cross-company development initiatives.",
    when_to_use: "When initiating high-level discussions or joint ventures before drafting priced agreements.",
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
    version: "2.0",
    template_number: "T2L-LEG-002",
    revision_date: "June 2026",
    applicable_laws: ["Indian Contract Act, 1872"],
    required_information: [
      "Names and addresses of the collaborating parties",
      "Detailed statement of collaboration objectives",
      "Specific responsibilities allocated to each party",
      "Description of the Joint Steering Committee representation (if any)",
      "Initial duration (Term) of the MOU"
    ],
    estimated_completion_time: "10 minutes",
    page_count: 6,
    related_template_slugs: ["nda-template", "partnership-agreement", "contract-template"],
    faqs: [
      {
        question: "Is an MOU legally binding?",
        answer: "Generally, MOUs are intended to be non-binding statements of intent. However, specific clauses like Confidentiality, Intellectual Property ownership, and Dispute Resolution are explicitly written as legally binding in this template."
      },
      {
        question: "What happens if we decide not to proceed after signing an MOU?",
        answer: "Since the core project covenants are non-binding, either party can terminate the MOU with written notice without liability, except for breaches of the binding confidentiality or intellectual property clauses."
      }
    ]
  },
  {
    title: "Employment Offer Letter",
    slug: "offer-letter-template",
    category_slug: "employment",
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
    version: "2.0",
    template_number: "T2L-EMP-001",
    revision_date: "June 2026",
    applicable_laws: ["Industrial Disputes Act, 1947", "Shops and Establishments Act"],
    required_information: [
      "Candidate's full name and address",
      "Job title, department, and reporting manager",
      "Annual gross salary (CTC) and detailed breakdown of components",
      "Proposed start date and work location",
      "Probation period and notice period terms"
    ],
    estimated_completion_time: "8 minutes",
    page_count: 5,
    related_template_slugs: ["onboarding-template", "nda-template", "ip-agreement-template"],
    faqs: [
      {
        question: "Is an offer letter a binding employment contract?",
        answer: "An offer letter is an invitation to work under specified terms. Once signed by the candidate, it forms a binding agreement. It is usually followed by a detailed Employment Agreement on or before the joining date."
      },
      {
        question: "How do I handle salary breakdowns for compliance?",
        answer: "The offer letter includes Annexure B which provides standard breakdowns for basic salary, HRA, special allowances, and statutory employer contributions (e.g. EPF) to align with Indian tax structures."
      }
    ]
  },
  {
    title: "Official Onboarding Letter",
    slug: "onboarding-template",
    category_slug: "hr",
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
    version: "2.0",
    template_number: "T2L-HR-001",
    revision_date: "June 2026",
    applicable_laws: ["Shops and Establishments Act"],
    required_information: [
      "Employee Name and Employee ID",
      "Designation, Department, and Reporting Manager",
      "Official joining date and work location",
      "List of pending documents to be submitted by the employee"
    ],
    estimated_completion_time: "5 minutes",
    page_count: 4,
    related_template_slugs: ["offer-letter-template", "nda-template"],
    faqs: [
      {
        question: "What is the purpose of an onboarding letter compared to an offer letter?",
        answer: "The offer letter is sent during selection. The onboarding letter is handed out on the first day of work to confirm that the employee has officially joined, received their employee ID, and started their induction process."
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
    benefits: ["Prevents equity disputes", "Defines roles clearly", "Includes vesting schedules", "Covers IP assignment", "Handles departure scenarios"],
    key_clauses: ["Equity Split & Vesting", "Role Definitions", "Decision-Making Authority", "IP Assignment", "Non-Compete & Non-Solicitation", "Departure & Buyback", "Dispute Resolution"],
    tags: ["startup", "founders", "equity", "vesting"],
    download_count: 1847,
    estimated_reading_time: 15,
    is_featured: false,
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
    related_template_slugs: ["safe-note-agreement", "ip-agreement-template", "nda-template"],
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
    title: "SAFE Note Agreement",
    slug: "safe-note-agreement",
    category_slug: "startup",
    description: "A Simple Agreement for Future Equity (SAFE) document based on Y Combinator's standard, adapted for Indian startups with appropriate legal references.",
    purpose: "To provide a simple, fast mechanism for early-stage startups to raise capital without the complexity of a priced round.",
    who_should_use: "Early-stage startups raising pre-seed or seed funding from angel investors or micro-VCs.",
    when_to_use: "During early fundraising rounds when a full priced equity round would be premature or too costly.",
    benefits: ["Simple and fast", "No valuation needed upfront", "Investor-friendly terms", "Standard market document", "Reduces legal costs"],
    key_clauses: ["Investment Amount", "Valuation Cap", "Discount Rate", "Conversion Events", "Pro-Rata Rights", "Most Favored Nation"],
    tags: ["startup", "fundraising", "investment", "SAFE"],
    download_count: 1234,
    estimated_reading_time: 10,
    is_featured: false,
    is_published: true,
    seo_title: "SAFE Note Agreement Template | Startup Fundraising | Turn2Law",
    seo_description: "Download a Y Combinator-style SAFE Note Agreement template adapted for Indian startups. Simple, fast fundraising without priced rounds.",
    version: "2.0",
    template_number: "T2L-STR-002",
    revision_date: "June 2026",
    applicable_laws: ["Companies Act, 2013", "FEMA regulations (for foreign investors)"],
    required_information: [
      "Company legal name and registration details",
      "Investor's full name and address",
      "Purchase Amount (Investment size)",
      "Valuation Cap and Discount Rate",
      "Governing law and dispute resolution details"
    ],
    estimated_completion_time: "10 minutes",
    page_count: 6,
    related_template_slugs: ["co-founder-agreement", "nda-template"],
    faqs: [
      {
        question: "How does a SAFE Note convert to shares?",
        answer: "A SAFE Note converts into preferred stock when the company raises a priced round of funding (the 'Equity Financing'). The conversion price is based on the Valuation Cap or the Discount Rate, whichever is more favourable to the investor."
      },
      {
        question: "Is a SAFE Note a debt instrument?",
        answer: "No, a SAFE is not debt. There is no maturity date, and it does not accrue interest. It is a contractual right to future equity."
      }
    ]
  },
  {
    title: "Partnership Agreement",
    slug: "partnership-agreement",
    category_slug: "business",
    description: "A detailed partnership agreement establishing the terms of a business partnership including profit sharing, management responsibilities, and dissolution procedures.",
    purpose: "To create a formal framework for a business partnership that protects all partners and establishes clear operating procedures.",
    who_should_use: "Business partners starting or formalizing a partnership venture.",
    when_to_use: "When two or more parties decide to enter into a business partnership.",
    benefits: ["Clear profit sharing", "Defined responsibilities", "Dispute mechanisms", "Exit provisions", "Capital contribution terms"],
    key_clauses: ["Capital Contributions", "Profit & Loss Sharing", "Management Duties", "Decision Making", "New Partners", "Withdrawal", "Dissolution"],
    tags: ["business", "partnership", "agreement"],
    download_count: 1567,
    estimated_reading_time: 18,
    is_featured: false,
    is_published: true,
    seo_title: "Partnership Agreement Template | Free Download | Turn2Law",
    seo_description: "Download a comprehensive partnership agreement template covering profit sharing, responsibilities, and dissolution procedures.",
    version: "2.0",
    template_number: "T2L-BUS-002",
    revision_date: "June 2026",
    applicable_laws: ["Indian Partnership Act, 1932"],
    required_information: [
      "Names and addresses of all partners",
      "Proposed partnership name (Firm Name) and address",
      "Initial capital contribution of each partner",
      "Profit and loss sharing ratio",
      "Responsibilities and designations of partners",
      "Bank account operation rules"
    ],
    estimated_completion_time: "15 minutes",
    page_count: 10,
    related_template_slugs: ["contract-template", "nda-template", "mou-template"],
    faqs: [
      {
        question: "Do I need to register a partnership firm?",
        answer: "Under Indian law, registration of a partnership firm is optional but highly recommended. Unregistered firms face limitations, such as the inability to file a lawsuit in court against third parties to enforce partnership rights."
      },
      {
        question: "What is a partner's drawing limit?",
        answer: "A drawing limit is the maximum amount of money a partner can withdraw from the firm's account monthly for personal expenses. Withdrawals are deducted from the partner's capital account balance."
      }
    ]
  },
  {
    title: "Terms of Service",
    slug: "terms-of-service",
    category_slug: "website",
    description: "A comprehensive terms of service agreement for websites and web applications covering user rights, limitations of liability, and acceptable use policies.",
    purpose: "To establish the legal terms governing the use of a website or web application, protecting the business from liability.",
    who_should_use: "Website owners, SaaS companies, and digital businesses that need legal terms for their platforms.",
    when_to_use: "Before launching a website or web application that users will access.",
    benefits: ["Legal protection", "Clear user guidelines", "Liability limitation", "Dispute resolution", "Compliance ready"],
    key_clauses: ["Acceptance of Terms", "User Accounts", "Acceptable Use", "Intellectual Property", "Limitation of Liability", "Indemnification", "Termination", "Governing Law"],
    tags: ["website", "terms of service", "SaaS", "legal"],
    download_count: 3456,
    estimated_reading_time: 15,
    is_featured: false,
    is_published: true,
    seo_title: "Terms of Service Template | Website Legal | Turn2Law",
    seo_description: "Download a comprehensive terms of service template for websites and web applications. Covers user rights, liability, and acceptable use.",
    version: "2.0",
    template_number: "T2L-WEB-002",
    revision_date: "June 2026",
    applicable_laws: ["Information Technology Act, 2000", "Indian Contract Act, 1872"],
    required_information: [
      "Company name, website URL, and contact details",
      "Refund policy rules and timeline",
      "Governing law jurisdiction",
      "Minimum age limit for users"
    ],
    estimated_completion_time: "10 minutes",
    page_count: 10,
    related_template_slugs: ["privacy-policy", "nda-template"],
    faqs: [
      {
        question: "Why does my website need Terms of Service?",
        answer: "Terms of Service outline the rules users must follow to access your site, protect your intellectual property, limit your liability in case of service downtime, and establish the jurisdiction for resolving disputes."
      }
    ]
  },
  {
    title: "Privacy Policy",
    slug: "privacy-policy",
    category_slug: "website",
    description: "A detailed privacy policy compliant with GDPR, CCPA, and Indian data protection laws, covering data collection, usage, storage, and user rights.",
    purpose: "To inform users about how their personal data is collected, used, stored, and protected by your website or application.",
    who_should_use: "Any business with a website or app that collects user data, especially those handling personal information.",
    when_to_use: "Before launching any website or application that collects personal data from users.",
    benefits: ["GDPR compliant", "Multi-jurisdiction", "Clear data practices", "User rights defined", "Cookie disclosure"],
    key_clauses: ["Data Collection", "Data Usage", "Data Storage", "Data Sharing", "User Rights", "Cookie Policy", "Data Retention", "Contact Information"],
    tags: ["website", "privacy", "GDPR", "data protection"],
    download_count: 4123,
    estimated_reading_time: 12,
    is_featured: false,
    is_published: true,
    seo_title: "Privacy Policy Template | GDPR Compliant | Turn2Law",
    seo_description: "Download a GDPR-compliant privacy policy template. Covers data collection, usage, storage, user rights, and cookie disclosures.",
    version: "2.0",
    template_number: "T2L-WEB-001",
    revision_date: "June 2026",
    applicable_laws: ["Digital Personal Data Protection Act, 2023 (DPDP)", "GDPR (EU)", "CCPA (California)"],
    required_information: [
      "Company name, registered address, and email address",
      "Specific categories of personal data collected",
      "Contact details of the Data Protection Officer (DPO)"
    ],
    estimated_completion_time: "10 minutes",
    page_count: 8,
    related_template_slugs: ["terms-of-service", "nda-template"],
    faqs: [
      {
        question: "Is this Privacy Policy compliant with the new Indian DPDP Act?",
        answer: "Yes, this policy is updated to reflect key terms under the Digital Personal Data Protection Act, 2023 (DPDP) along with GDPR and CCPA requirements, covering user consent, DPO contacts, and data principal rights."
      }
    ]
  },
  {
    title: "Residential Rental Agreement",
    slug: "residential-rental-agreement",
    category_slug: "real-estate",
    description: "A standard residential rental agreement for landlords and tenants covering rent, security deposit, maintenance, and house rules.",
    purpose: "To formalize a residential tenancy with clear terms that protect both landlord and tenant.",
    who_should_use: "Landlords renting residential properties or tenants seeking formal lease documentation.",
    when_to_use: "When renting or leasing a residential property such as an apartment, house, or flat.",
    benefits: ["Clear rent terms", "Security deposit rules", "Maintenance clarity", "Legal protection"],
    key_clauses: ["Property Details", "Rent Amount", "Security Deposit", "Lease Duration", "Maintenance", "House Rules", "Termination Notice", "Renewal"],
    tags: ["real estate", "rental", "residential", "tenant"],
    download_count: 3234,
    estimated_reading_time: 12,
    is_featured: false,
    is_published: true,
    seo_title: "Residential Rental Agreement Template | Turn2Law",
    seo_description: "Download a standard residential rental agreement template covering rent, security deposit, maintenance, and house rules for landlords and tenants.",
    version: "2.0",
    template_number: "T2L-REA-001",
    revision_date: "June 2026",
    applicable_laws: ["Transfer of Property Act, 1882", "State Rent Control Acts"],
    required_information: [
      "Names, addresses, and identity proofs (PAN / Aadhaar) of Landlord and Tenant",
      "Detailed address and inventory details of the leased property",
      "Monthly rent, security deposit amount, and maintenance charges",
      "Lease duration and notice period for vacating"
    ],
    estimated_completion_time: "12 minutes",
    page_count: 8,
    related_template_slugs: ["mou-template", "nda-template"],
    faqs: [
      {
        question: "What is the standard lease term in India?",
        answer: "Residential rent agreements are commonly drafted for 11 months to avoid mandatory registration and stamp duty under various State Rent Control Acts. However, this template can be customized for longer periods if registered."
      },
      {
        question: "Who is responsible for major structural repairs?",
        answer: "By default, our template allocates major structural maintenance (plumbing lines, external walls, electrical mains) to the Landlord, and minor day-to-day repairs to the Tenant."
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
