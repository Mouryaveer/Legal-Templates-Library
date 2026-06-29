// ============================================================
// Turn2Law — Co-Founder Agreement Template Content
// Template ID: T2L-STR-001 | ~12 pages
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
  buildIndemnification,
  buildDisputeResolution,
  buildBoilerplate,
  buildSignatureBlocks,
} from "../sections";
import type { TemplateDocxContent } from "../generator";

export function buildCoFounderAgreementTemplate(): TemplateDocxContent {
  const sections: Paragraph[] = [

    // ── PARTIES ──
    ...buildPartiesSection({
      partyALabel: "Founder A",
      partyADescription: "an individual residing at {{First_Party_Address}}",
      partyBLabel: "Founder B",
      partyBDescription: "an individual residing at {{Second_Party_Address}}",
    }),

    // ── RECITALS ──
    ...buildRecitals([
      "the Founders wish to establish and operate a business venture under the name \"{{Company_Name}}\" (the \"Company\") in the field of {{Business_Domain}};",
      "the Founders desire to set forth their respective rights, obligations, contributions, and responsibilities with respect to the formation, management, and operation of the Company;",
      "the Founders recognise the importance of defining the terms of their co-founding relationship at the outset to prevent future disputes and to ensure the orderly governance of the Company;",
      "the Founders wish to protect the intellectual property, trade secrets, and proprietary information developed for the Company.",
    ]),

    // ── DEFINITIONS ──
    ...buildDefinitions([
      {
        term: "Company",
        definition: "{{Company_Name}}, the business entity to be formed and operated by the Founders, or if already formed, the entity bearing registration number {{Company_Registration_Number}}.",
      },
      {
        term: "Equity",
        definition: "the ownership interest of each Founder in the Company, expressed as a percentage of the total issued share capital.",
      },
      {
        term: "Vesting Period",
        definition: "the period over which a Founder's Equity gradually becomes non-forfeitable, as set out in Clause {{Vesting_Clause_Number}} of this Agreement.",
      },
      {
        term: "Cliff Period",
        definition: "the initial period during the Vesting Period before which no Equity vests, as specified in this Agreement.",
      },
      {
        term: "Intellectual Property",
        definition: "all patents, copyrights, trademarks, trade secrets, domain names, know-how, inventions, designs, algorithms, source code, databases, and any other intellectual property rights created by or on behalf of the Company or in connection with the Company's business.",
      },
      {
        term: "Deadlock",
        definition: "a situation where the Founders are unable to reach agreement on a matter requiring their mutual consent after good-faith efforts to resolve the disagreement.",
      },
    ]),

    // ── FORMATION OF COMPANY ──
    sectionHeading("Formation of the Company"),

    bodyParagraph([
      { text: "The Founders agree to form the Company as a " },
      { text: "{{Company_Type}}", bold: true },
      { text: " under the laws of " },
      { text: "{{Jurisdiction}}", bold: true },
      { text: ". The Company shall be formed on or before " },
      { text: "{{Formation_Date}}", bold: true },
      { text: " or as soon as practicable thereafter." },
    ]),

    spacer(1),

    bodyParagraph([
      { text: "The registered office of the Company shall be located at " },
      { text: "{{Registered_Address}}", bold: true },
      { text: ", or at such other address as the Founders may agree from time to time." },
    ]),

    spacer(1),

    bodyParagraph([
      { text: "The Company shall engage in the business of " },
      { text: "{{Business_Description}}", bold: true },
      { text: ", and such other related activities as the Founders may agree upon." },
    ]),

    // ── EQUITY SPLIT ──
    sectionHeading("Equity Allocation"),

    bodyParagraph([
      { text: "The initial equity allocation between the Founders shall be as follows:" },
    ]),

    bulletPoint("Founder A ({{First_Party}}): {{Founder_A_Equity_Percentage}} of the total issued share capital;"),
    bulletPoint("Founder B ({{Second_Party}}): {{Founder_B_Equity_Percentage}} of the total issued share capital."),

    spacer(1),

    bodyParagraph([
      { text: "The above equity allocation reflects the Founders' respective contributions, including but not limited to the concept and intellectual property contributed, capital invested, expertise provided, and the anticipated time commitment of each Founder." },
    ]),

    spacer(1),

    bodyParagraph([
      { text: "Employee Stock Option Pool. ", bold: true },
      { text: "The Founders agree to reserve " },
      { text: "{{ESOP_Pool_Percentage}}", bold: true },
      { text: " of the total share capital for an Employee Stock Option Pool (\"ESOP\"), which shall be created within " },
      { text: "{{ESOP_Creation_Period}}", bold: true },
      { text: " of the formation of the Company. The ESOP shall be governed by a separate ESOP policy adopted by the Board of Directors." },
    ]),

    // ── VESTING ──
    sectionHeading("Vesting Schedule"),

    bodyParagraph([
      { text: "Each Founder's Equity shall vest over a period of " },
      { text: "{{Vesting_Period}}", bold: true },
      { text: " from the Effective Date, subject to the following vesting schedule:" },
    ]),

    bulletPoint("Cliff Period: No Equity shall vest during the first {{Cliff_Period}} (the \"Cliff Period\"). If a Founder departs the Company before the end of the Cliff Period, no Equity shall vest and the unvested Equity shall be forfeited."),
    bulletPoint("Post-Cliff Vesting: After the Cliff Period, the Founder's Equity shall vest on a monthly basis in equal instalments over the remaining Vesting Period."),
    bulletPoint("Acceleration on Change of Control: In the event of a sale, merger, or acquisition of the Company (a \"Change of Control Event\"), {{Acceleration_Percentage}} of each Founder's unvested Equity shall immediately vest."),

    spacer(1),

    bodyParagraph([
      { text: "Forfeiture. ", bold: true },
      { text: "If a Founder voluntarily resigns from the Company or is removed for Cause (as defined below) before the end of the Vesting Period, all unvested Equity shall be automatically forfeited and returned to the Company's authorised but unissued share capital." },
    ]),

    // ── CAPITAL CONTRIBUTIONS ──
    sectionHeading("Capital Contributions"),

    bodyParagraph([
      { text: "Each Founder shall make the following initial capital contributions to the Company:" },
    ]),

    bulletPoint("Founder A: {{Founder_A_Capital_Contribution}} in the form of {{Founder_A_Contribution_Type}};"),
    bulletPoint("Founder B: {{Founder_B_Capital_Contribution}} in the form of {{Founder_B_Contribution_Type}}."),

    spacer(1),

    bodyParagraph([
      { text: "No Founder shall be required to make additional capital contributions without their written consent. In the event that additional capital is required for the Company's operations, the Founders shall first explore external funding options before requesting additional contributions from the Founders. If additional contributions are made by one Founder and not the other, the equity allocation shall be adjusted proportionately, unless the Founders agree otherwise in writing." },
    ]),

    // ── ROLES AND RESPONSIBILITIES ──
    sectionHeading("Roles, Responsibilities, and Time Commitment"),

    bodyParagraph([
      { text: "Founder A ", bold: true },
      { text: "shall serve as " },
      { text: "{{Founder_A_Role}}", bold: true },
      { text: " and shall be primarily responsible for " },
      { text: "{{Founder_A_Responsibilities}}", bold: true },
      { text: "." },
    ]),

    spacer(1),

    bodyParagraph([
      { text: "Founder B ", bold: true },
      { text: "shall serve as " },
      { text: "{{Founder_B_Role}}", bold: true },
      { text: " and shall be primarily responsible for " },
      { text: "{{Founder_B_Responsibilities}}", bold: true },
      { text: "." },
    ]),

    spacer(1),

    bodyParagraph([
      { text: "Time Commitment. ", bold: true },
      { text: "Each Founder shall dedicate a minimum of " },
      { text: "{{Minimum_Time_Commitment}}", bold: true },
      { text: " per week to the Company's business during the first " },
      { text: "{{Full_Time_Period}}", bold: true },
      { text: " of the Company's operations. The Founders acknowledge that building a successful venture requires substantial time commitment and agree to prioritise the Company's interests." },
    ]),

    bodyParagraph([
      { text: "Exclusivity. ", bold: true },
      { text: "During the term of this Agreement, each Founder agrees to devote their best efforts to the Company and shall not, without the prior written consent of the other Founder, engage in any other business activity that competes with or is detrimental to the Company's business." },
    ]),

    // ── DECISION MAKING ──
    sectionHeading("Decision-Making and Governance"),

    bodyParagraph([
      { text: "Ordinary Decisions. ", bold: true },
      { text: "Day-to-day operational decisions within a Founder's designated area of responsibility may be made by that Founder independently, without requiring the consent of the other Founder." },
    ]),

    bodyParagraph([
      { text: "Major Decisions. ", bold: true },
      { text: "The following decisions shall require the unanimous written consent of all Founders:" },
    ]),

    bulletPoint("Issuance of new shares, equity, or convertible instruments;"),
    bulletPoint("Taking on debt or financial obligations exceeding {{Major_Decision_Threshold}};"),
    bulletPoint("Entering into contracts or commitments exceeding {{Contract_Threshold}} in value;"),
    bulletPoint("Hiring or termination of key personnel (C-level or equivalent);"),
    bulletPoint("Amendments to the Company's constitutional documents;"),
    bulletPoint("Sale, merger, acquisition, or dissolution of the Company;"),
    bulletPoint("Material changes to the Company's business strategy or direction;"),
    bulletPoint("Related-party transactions or agreements with affiliates of any Founder."),

    bodyParagraph([
      { text: "Deadlock Resolution. ", bold: true },
      { text: "In the event of a Deadlock on any Major Decision, the Founders shall: (a) attempt to resolve the matter through good-faith negotiations for a period of thirty (30) days; (b) if unresolved, engage a mutually agreed-upon independent advisor or mediator to facilitate resolution; and (c) if still unresolved, submit the matter to binding arbitration in accordance with the dispute resolution provisions of this Agreement." },
    ]),

    // ── COMPENSATION ──
    sectionHeading("Founder Compensation"),

    bodyParagraph([
      { text: "During the initial phase of the Company's operations, each Founder's compensation shall be as follows:" },
    ]),

    bulletPoint("Founder A: {{Founder_A_Salary}} per month;"),
    bulletPoint("Founder B: {{Founder_B_Salary}} per month."),

    spacer(1),

    bodyParagraph([
      { text: "Founder compensation shall be reviewed and adjusted by mutual agreement on an annual basis or upon the achievement of significant funding milestones. No Founder shall receive compensation exceeding " },
      { text: "{{Max_Compensation_Threshold}}", bold: true },
      { text: " without the written consent of all Founders." },
    ]),

    // ── IP ASSIGNMENT ──
    sectionHeading("Intellectual Property"),

    bodyParagraph([
      { text: "Assignment. ", bold: true },
      { text: "Each Founder hereby irrevocably assigns and transfers to the Company all right, title, and interest in and to any and all Intellectual Property that is created, developed, conceived, or reduced to practice by such Founder, solely or jointly with others, during the term of this Agreement and in connection with the Company's business. This assignment includes all moral rights to the extent permitted by applicable law." },
    ]),

    spacer(1),

    bodyParagraph([
      { text: "Pre-Existing IP. ", bold: true },
      { text: "Any intellectual property owned by a Founder prior to the Effective Date that is contributed to the Company shall be identified in Schedule A attached hereto. The contributing Founder hereby grants to the Company an exclusive, perpetual, irrevocable, worldwide, royalty-free licence to use, modify, sublicence, and commercialise such pre-existing IP for the Company's business purposes." },
    ]),

    spacer(1),

    bodyParagraph([
      { text: "Work for Hire. ", bold: true },
      { text: "To the extent permitted by applicable law, all work product created by the Founders in the course of the Company's business shall be deemed \"work for hire\" and shall be the sole property of the Company." },
    ]),

    // ── NON-COMPETE ──
    sectionHeading("Non-Compete and Non-Solicitation"),

    bodyParagraph([
      { text: "During the term of this Agreement and for a period of " },
      { text: "{{Non_Compete_Period}}", bold: true },
      { text: " following the departure of a Founder from the Company (to the extent enforceable under applicable law), each Founder agrees that they shall not:" },
    ]),

    bulletPoint("Directly or indirectly engage in, own, manage, operate, consult for, or participate in any business that competes with the Company's business within {{Geographic_Scope}};"),
    bulletPoint("Solicit, recruit, or attempt to hire any employee, contractor, or advisor of the Company;"),
    bulletPoint("Solicit, divert, or attempt to divert any customer, client, supplier, or business relationship of the Company."),

    // ── DEPARTURE AND BUYBACK ──
    sectionHeading("Founder Departure and Equity Buyback"),

    bodyParagraph([
      { text: "Voluntary Departure. ", bold: true },
      { text: "If a Founder voluntarily resigns from the Company, all unvested Equity shall be forfeited. The Company and/or the remaining Founder(s) shall have the right, but not the obligation, to purchase the departing Founder's vested Equity at the Fair Market Value (as determined by a mutually agreed-upon independent valuation), exercisable within " },
      { text: "{{Buyback_Exercise_Period}}", bold: true },
      { text: " of the departure." },
    ]),

    spacer(1),

    bodyParagraph([
      { text: "Removal for Cause. ", bold: true },
      { text: "A Founder may be removed from their role (but not from ownership of vested Equity) if such Founder: (a) commits fraud, dishonesty, or gross misconduct; (b) is convicted of a criminal offence involving moral turpitude; (c) materially breaches this Agreement and fails to cure such breach within thirty (30) days of written notice; or (d) becomes incapacitated and unable to perform their duties for a continuous period exceeding " },
      { text: "{{Incapacity_Period}}", bold: true },
      { text: ". In the event of removal for Cause, all unvested Equity shall be forfeited, and the Company shall have the right to repurchase vested Equity at a discount of " },
      { text: "{{Cause_Buyback_Discount}}", bold: true },
      { text: " from Fair Market Value." },
    ]),

    spacer(1),

    bodyParagraph([
      { text: "Death or Disability. ", bold: true },
      { text: "In the event of a Founder's death or permanent disability, all unvested Equity shall immediately vest in full. The deceased or disabled Founder's legal heirs or representatives shall have the option to: (a) retain the Equity and designate a representative to exercise voting rights; or (b) sell the Equity to the Company or remaining Founders at Fair Market Value." },
    ]),

    // ── RIGHT OF FIRST REFUSAL ──
    sectionHeading("Right of First Refusal and Transfer Restrictions"),

    bodyParagraph([
      { text: "No Founder shall sell, transfer, assign, pledge, or otherwise dispose of any Equity in the Company without first offering such Equity to the other Founder(s) and the Company on the same terms and conditions (the \"Right of First Refusal\"). The offering Founder shall provide written notice specifying the number of shares, the proposed price, and the identity of the proposed transferee. The other Founder(s) and the Company shall have " },
      { text: "{{ROFR_Period}}", bold: true },
      { text: " to exercise their Right of First Refusal." },
    ]),

    // ── STANDARD CLAUSES ──
    ...buildConfidentialitySection(),
    ...buildIndemnification(),
    ...buildDisputeResolution(),
    ...buildBoilerplate(),

    // ── SCHEDULE A ──
    new Paragraph({ children: [new PageBreak()] }),
    sectionHeading("Schedule A — Pre-Existing Intellectual Property"),

    bodyParagraph([
      { text: "The following pre-existing intellectual property is contributed to the Company:" },
    ]),

    spacer(1),

    bodyParagraph([
      { text: "Founder A:", bold: true },
    ]),
    bulletPoint("{{Founder_A_PreExisting_IP_1}}"),
    bulletPoint("{{Founder_A_PreExisting_IP_2}}"),

    spacer(1),

    bodyParagraph([
      { text: "Founder B:", bold: true },
    ]),
    bulletPoint("{{Founder_B_PreExisting_IP_1}}"),
    bulletPoint("{{Founder_B_PreExisting_IP_2}}"),

    // ── SIGNATURE BLOCKS ──
    ...buildSignatureBlocks("Founder A", "Founder B"),
  ];

  return {
    documentTitle: "Co-Founder Agreement",
    documentType: "Startup Founders Agreement",
    templateNumber: "T2L-STR-001",
    version: "2.0",
    revisionDate: "June 2026",
    sections,
  };
}
