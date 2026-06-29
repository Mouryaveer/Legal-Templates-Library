// ============================================================
// Turn2Law — Service Contract Agreement Template Content
// Template ID: T2L-SVC-001 | ~10 pages
// ============================================================

import { Paragraph, HeadingLevel, PageBreak } from "docx";
import {
  sectionHeading,
  bodyParagraph,
  bulletPoint,
  spacer,
  buildPartiesSection,
  buildRecitals,
  buildDefinitions,
  buildConfidentialitySection,
  buildTermAndTermination,
  buildIndemnification,
  buildLimitationOfLiability,
  buildForceMajeure,
  buildDisputeResolution,
  buildBoilerplate,
  buildSignatureBlocks,
} from "../sections";
import type { TemplateDocxContent } from "../generator";

export function buildServiceAgreementTemplate(): TemplateDocxContent {
  const sections: Paragraph[] = [

    // ── PARTIES ──
    ...buildPartiesSection({
      partyALabel: "Service Provider",
      partyADescription: "a company duly incorporated and existing under the laws of {{Jurisdiction}}, bearing registration number {{First_Party_Registration_Number}}",
      partyBLabel: "Client",
      partyBDescription: "a company duly incorporated and existing under the laws of {{Jurisdiction}}, bearing registration number {{Second_Party_Registration_Number}}",
    }),

    // ── RECITALS ──
    ...buildRecitals([
      "the Service Provider is engaged in the business of providing professional services in the field of {{Service_Domain}} and possesses the necessary expertise, qualifications, and resources to perform such services;",
      "the Client wishes to engage the Service Provider to perform certain services as more particularly described in this Agreement and the schedules attached hereto;",
      "the Service Provider agrees to perform such services for the Client in accordance with the terms and conditions set forth in this Agreement;",
      "the Parties wish to formalise their arrangement and set out their respective rights and obligations in this Agreement.",
    ]),

    // ── DEFINITIONS ──
    ...buildDefinitions([
      {
        term: "Services",
        definition: "the professional services to be provided by the Service Provider to the Client as described in Schedule A of this Agreement, including any additional services agreed upon in writing by the Parties from time to time.",
      },
      {
        term: "Deliverables",
        definition: "all work product, reports, documents, software, designs, materials, data, and other tangible or intangible outputs produced by the Service Provider in the course of performing the Services, as specified in Schedule A.",
      },
      {
        term: "Fees",
        definition: "the compensation payable by the Client to the Service Provider for the performance of the Services, as set out in Schedule B of this Agreement.",
      },
      {
        term: "Project Plan",
        definition: "the detailed plan setting out the scope, milestones, timelines, and resource allocation for the Services, as agreed upon by the Parties and attached as Schedule A.",
      },
      {
        term: "Acceptance Criteria",
        definition: "the standards, specifications, and requirements that the Deliverables must meet in order to be accepted by the Client, as set out in the Project Plan or as otherwise agreed in writing by the Parties.",
      },
      {
        term: "Change Order",
        definition: "a written document signed by both Parties that amends the scope of Services, Deliverables, timelines, or Fees under this Agreement.",
      },
    ]),

    // ── SCOPE OF SERVICES ──
    sectionHeading("Scope of Services"),

    bodyParagraph([
      { text: "The Service Provider shall provide the Services to the Client as described in " },
      { text: "Schedule A", bold: true },
      { text: " attached hereto. The Service Provider shall perform the Services:" },
    ]),

    bulletPoint("In a professional and workmanlike manner, consistent with generally accepted industry standards and best practices;"),
    bulletPoint("In accordance with the Project Plan, milestones, and timelines agreed upon by the Parties;"),
    bulletPoint("Using qualified personnel who possess the necessary skills, expertise, and experience to perform the Services;"),
    bulletPoint("In compliance with all applicable laws, regulations, codes, and industry standards;"),
    bulletPoint("With due diligence, care, and attention to the Client's requirements and specifications."),

    spacer(1),

    bodyParagraph([
      { text: "Change Orders. ", bold: true },
      { text: "Any changes to the scope of Services, Deliverables, timelines, or Fees shall be documented in a Change Order signed by both Parties. The Service Provider shall not be obligated to perform any work outside the scope of this Agreement without an executed Change Order. Each Change Order shall specify: (a) the nature of the change; (b) the impact on timelines and milestones; (c) any additional Fees or cost adjustments; and (d) any other relevant terms." },
    ]),

    // ── SERVICE PROVIDER OBLIGATIONS ──
    sectionHeading("Obligations of the Service Provider"),

    bodyParagraph([
      { text: "The Service Provider shall:" },
    ]),

    bulletPoint("Assign qualified and competent personnel to perform the Services, and ensure that such personnel are adequately trained and supervised;"),
    bulletPoint("Designate a project manager (the \"Service Provider Project Manager\") who shall serve as the primary point of contact for the Client and shall be responsible for coordinating the delivery of the Services;"),
    bulletPoint("Provide the Client with regular progress reports at intervals agreed upon in the Project Plan, including status updates on milestones, deliverables, and any issues or risks identified;"),
    bulletPoint("Promptly notify the Client of any circumstances that may materially affect the quality, cost, or timeline of the Services;"),
    bulletPoint("Maintain accurate and complete records of all work performed under this Agreement and make such records available to the Client upon reasonable request;"),
    bulletPoint("Obtain and maintain all licences, permits, and authorisations required for the performance of the Services;"),
    bulletPoint("Comply with the Client's reasonable policies, procedures, and guidelines applicable to the performance of the Services at the Client's premises."),

    // ── CLIENT OBLIGATIONS ──
    sectionHeading("Obligations of the Client"),

    bodyParagraph([
      { text: "The Client shall:" },
    ]),

    bulletPoint("Provide the Service Provider with timely access to all information, data, systems, and resources reasonably necessary for the performance of the Services;"),
    bulletPoint("Designate a project manager (the \"Client Project Manager\") who shall serve as the primary point of contact for the Service Provider and shall have authority to make decisions on behalf of the Client regarding the Services;"),
    bulletPoint("Review and provide feedback on Deliverables within the timelines specified in the Project Plan;"),
    bulletPoint("Make timely payment of Fees in accordance with the payment terms set out in Schedule B;"),
    bulletPoint("Provide the Service Provider with reasonable access to the Client's premises, facilities, and systems as necessary for the performance of the Services;"),
    bulletPoint("Cooperate with the Service Provider in good faith and provide all reasonable assistance to facilitate the efficient performance of the Services."),

    // ── PAYMENT ──
    sectionHeading("Payment Terms"),

    bodyParagraph([
      { text: "Fees. ", bold: true },
      { text: "The Client shall pay the Service Provider the Fees as set out in " },
      { text: "Schedule B", bold: true },
      { text: " of this Agreement. Unless otherwise specified in Schedule B, the total Fee for the Services shall be " },
      { text: "{{Total_Fee}}", bold: true },
      { text: " (exclusive of applicable taxes)." },
    ]),

    spacer(1),

    bodyParagraph([
      { text: "Payment Schedule. ", bold: true },
      { text: "Payment shall be made in accordance with the following schedule:" },
    ]),

    bulletPoint("{{Payment_Milestone_1}}: {{Payment_Amount_1}} due upon execution of this Agreement;"),
    bulletPoint("{{Payment_Milestone_2}}: {{Payment_Amount_2}} due upon completion of {{Milestone_Description_2}};"),
    bulletPoint("{{Payment_Milestone_3}}: {{Payment_Amount_3}} due upon final delivery and acceptance of all Deliverables."),

    spacer(1),

    bodyParagraph([
      { text: "Invoicing. ", bold: true },
      { text: "The Service Provider shall submit invoices to the Client in accordance with the payment schedule. Each invoice shall include a detailed description of the Services performed, the applicable Fees, and any reimbursable expenses. The Client shall process each invoice and make payment within " },
      { text: "{{Payment_Terms}}", bold: true },
      { text: " of receipt of a valid invoice." },
    ]),

    bodyParagraph([
      { text: "Late Payment. ", bold: true },
      { text: "If the Client fails to make any payment when due, the Service Provider shall be entitled to charge interest on the overdue amount at the rate of " },
      { text: "{{Late_Payment_Interest_Rate}}", bold: true },
      { text: " per annum from the due date until the date of actual payment, without prejudice to any other rights or remedies available to the Service Provider under this Agreement or at law." },
    ]),

    bodyParagraph([
      { text: "Taxes. ", bold: true },
      { text: "All Fees are exclusive of applicable taxes, duties, and levies (including Goods and Services Tax, where applicable). The Client shall be responsible for the payment of all such taxes in addition to the Fees, unless otherwise agreed in writing." },
    ]),

    bodyParagraph([
      { text: "Expenses. ", bold: true },
      { text: "The Client shall reimburse the Service Provider for all pre-approved, reasonable, and documented out-of-pocket expenses incurred in connection with the performance of the Services, provided that such expenses are submitted with supporting documentation within " },
      { text: "{{Expense_Submission_Period}}", bold: true },
      { text: " of being incurred." },
    ]),

    // ── ACCEPTANCE ──
    sectionHeading("Acceptance and Rejection"),

    bodyParagraph([
      { text: "Upon delivery of each Deliverable, the Client shall review and test the Deliverable against the Acceptance Criteria within " },
      { text: "{{Acceptance_Period}}", bold: true },
      { text: " (the \"Acceptance Period\"). If the Client does not provide written notice of rejection within the Acceptance Period, the Deliverable shall be deemed accepted." },
    ]),

    spacer(1),

    bodyParagraph([
      { text: "If the Client reasonably determines that a Deliverable does not meet the Acceptance Criteria, the Client shall provide the Service Provider with written notice specifying the deficiencies in reasonable detail. The Service Provider shall, at no additional cost to the Client, use commercially reasonable efforts to correct the deficiencies within " },
      { text: "{{Correction_Period}}", bold: true },
      { text: " and resubmit the Deliverable for acceptance." },
    ]),

    // ── INDEPENDENT CONTRACTOR ──
    sectionHeading("Independent Contractor Status"),

    bodyParagraph([
      { text: "The Service Provider shall perform the Services as an independent contractor and not as an employee, agent, partner, or joint venturer of the Client. Nothing in this Agreement shall be construed to create an employment relationship, partnership, joint venture, or agency relationship between the Parties. The Service Provider shall:" },
    ]),

    bulletPoint("Have sole control over the manner and means of performing the Services, subject to the requirements and specifications set out in this Agreement;"),
    bulletPoint("Be solely responsible for the payment of all taxes, social security contributions, insurance premiums, and other statutory obligations relating to its personnel;"),
    bulletPoint("Not be entitled to any employee benefits, compensation, or perquisites from the Client;"),
    bulletPoint("Have no authority to bind the Client or make commitments on the Client's behalf without prior written authorisation."),

    // ── INTELLECTUAL PROPERTY ──
    sectionHeading("Intellectual Property"),

    bodyParagraph([
      { text: "Work Product. ", bold: true },
      { text: "All Deliverables and work product created by the Service Provider specifically for the Client in the course of performing the Services (the \"Work Product\") shall be the sole and exclusive property of the Client upon full payment of all applicable Fees. The Service Provider hereby assigns and transfers to the Client all right, title, and interest in and to the Work Product, including all intellectual property rights therein." },
    ]),

    spacer(1),

    bodyParagraph([
      { text: "Pre-Existing IP. ", bold: true },
      { text: "Each Party shall retain all right, title, and interest in and to its pre-existing intellectual property. To the extent that any Deliverable incorporates or is dependent upon any pre-existing intellectual property of the Service Provider, the Service Provider hereby grants to the Client a non-exclusive, perpetual, irrevocable, worldwide, royalty-free licence to use, modify, and sublicence such pre-existing intellectual property solely as part of or in connection with the Deliverables." },
    ]),

    spacer(1),

    bodyParagraph([
      { text: "Moral Rights. ", bold: true },
      { text: "To the extent permitted by applicable law, the Service Provider waives and agrees not to assert any moral rights in the Work Product, including rights of attribution and integrity." },
    ]),

    // ── WARRANTIES ──
    sectionHeading("Representations and Warranties"),

    bodyParagraph([
      { text: "The Service Provider represents and warrants that:" },
    ]),

    bulletPoint("It has the necessary expertise, qualifications, resources, and authority to perform the Services in accordance with this Agreement;"),
    bulletPoint("The Services will be performed in a professional and workmanlike manner, consistent with generally accepted industry standards;"),
    bulletPoint("The Deliverables will materially conform to the Acceptance Criteria and specifications set out in the Project Plan;"),
    bulletPoint("The Deliverables will be original works of the Service Provider and will not infringe, misappropriate, or violate the intellectual property rights of any third party;"),
    bulletPoint("It is not a party to any agreement or obligation that would prevent it from performing its obligations under this Agreement;"),
    bulletPoint("It shall comply with all applicable laws, regulations, and industry standards in the performance of the Services."),

    spacer(1),

    bodyParagraph([
      { text: "Warranty Period. ", bold: true },
      { text: "The Service Provider shall provide a warranty period of " },
      { text: "{{Warranty_Period}}", bold: true },
      { text: " from the date of acceptance of each Deliverable (the \"Warranty Period\"). During the Warranty Period, the Service Provider shall, at no additional cost to the Client, correct any defects or non-conformities in the Deliverables that are reported by the Client." },
    ]),

    // ── STANDARD SECTIONS ──
    ...buildConfidentialitySection(),
    ...buildTermAndTermination(),
    ...buildIndemnification(),
    ...buildLimitationOfLiability(),
    ...buildForceMajeure(),
    ...buildDisputeResolution(),
    ...buildBoilerplate(),

    // ── SCHEDULES ──
    new Paragraph({ children: [new PageBreak()] }),
    sectionHeading("Schedule A — Scope of Services and Project Plan"),

    bodyParagraph([
      { text: "1. Description of Services:", bold: true },
    ]),
    bodyParagraph([{ text: "{{Service_Description}}" }]),

    spacer(1),

    bodyParagraph([
      { text: "2. Deliverables:", bold: true },
    ]),
    bulletPoint("{{Deliverable_1}}"),
    bulletPoint("{{Deliverable_2}}"),
    bulletPoint("{{Deliverable_3}}"),

    spacer(1),

    bodyParagraph([
      { text: "3. Milestones and Timelines:", bold: true },
    ]),
    bulletPoint("Milestone 1: {{Milestone_1_Description}} — Due: {{Milestone_1_Date}}"),
    bulletPoint("Milestone 2: {{Milestone_2_Description}} — Due: {{Milestone_2_Date}}"),
    bulletPoint("Milestone 3: {{Milestone_3_Description}} — Due: {{Milestone_3_Date}}"),

    spacer(1),

    bodyParagraph([
      { text: "4. Acceptance Criteria:", bold: true },
    ]),
    bodyParagraph([{ text: "{{Acceptance_Criteria_Description}}" }]),

    new Paragraph({ children: [new PageBreak()] }),
    sectionHeading("Schedule B — Fee Structure and Payment Schedule"),

    bodyParagraph([
      { text: "1. Total Fees: ", bold: true },
      { text: "{{Total_Fee}} (exclusive of applicable taxes)" },
    ]),

    spacer(1),

    bodyParagraph([
      { text: "2. Payment Schedule:", bold: true },
    ]),
    bulletPoint("{{Payment_Schedule_Detail_1}}"),
    bulletPoint("{{Payment_Schedule_Detail_2}}"),
    bulletPoint("{{Payment_Schedule_Detail_3}}"),

    spacer(1),

    bodyParagraph([
      { text: "3. Reimbursable Expenses:", bold: true },
    ]),
    bodyParagraph([{ text: "{{Reimbursable_Expenses_Description}}" }]),

    // ── SIGNATURE BLOCKS ──
    ...buildSignatureBlocks("Service Provider", "Client"),
  ];

  return {
    documentTitle: "Service Contract Agreement",
    documentType: "Professional Services Agreement",
    templateNumber: "T2L-SVC-001",
    version: "2.0",
    revisionDate: "June 2026",
    sections,
  };
}
