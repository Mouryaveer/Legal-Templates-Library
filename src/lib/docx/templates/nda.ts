// ============================================================
// Turn2Law — Non-Disclosure Agreement (NDA) Template Content
// Template ID: T2L-NDA-001 | ~8 pages
// ============================================================

import { Paragraph, HeadingLevel, PageBreak } from "docx";
import {
  sectionHeading,
  bodyParagraph,
  bulletPoint,
  numberedClause,
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

export function buildNdaTemplate(): TemplateDocxContent {
  const sections: Paragraph[] = [

    // ── PARTIES ──
    ...buildPartiesSection({
      partyALabel: "Disclosing Party",
      partyADescription: "a company incorporated under the laws of {{Jurisdiction}}, bearing registration number {{First_Party_Registration_Number}}",
      partyBLabel: "Receiving Party",
      partyBDescription: "a company incorporated under the laws of {{Jurisdiction}}, bearing registration number {{Second_Party_Registration_Number}}",
    }),

    // ── RECITALS ──
    ...buildRecitals([
      "the Disclosing Party possesses certain proprietary and confidential information relating to its business operations, technology, intellectual property, trade secrets, financial data, customer information, business strategies, and other sensitive information (collectively, the \"Confidential Information\");",
      "the Receiving Party desires to receive and evaluate such Confidential Information for the purpose of {{Purpose_of_Disclosure}} (the \"Permitted Purpose\");",
      "the Disclosing Party is willing to disclose such Confidential Information to the Receiving Party, subject to the terms and conditions set forth in this Agreement;",
      "the Parties acknowledge the importance of maintaining strict confidentiality with respect to the Confidential Information and agree to be bound by the obligations contained herein.",
    ]),

    // ── DEFINITIONS ──
    ...buildDefinitions([
      {
        term: "Confidential Information",
        definition: "all non-public, proprietary, or sensitive information disclosed by the Disclosing Party to the Receiving Party, whether in written, oral, electronic, visual, or any other form, including but not limited to: (a) business plans, strategies, forecasts, and projections; (b) financial records, statements, budgets, pricing, and revenue models; (c) customer lists, vendor agreements, supplier contracts, and partnership arrangements; (d) technical data, algorithms, source code, software architectures, system designs, and engineering specifications; (e) trade secrets, inventions, discoveries, know-how, formulae, processes, and methods; (f) marketing strategies, product roadmaps, research and development activities; (g) employee information, compensation data, and organisational structures; (h) any information that is marked as \"Confidential,\" \"Proprietary,\" or with similar designation; and (i) any information that, given the nature of the information or the circumstances of disclosure, a reasonable person would understand to be confidential.",
      },
      {
        term: "Disclosing Party",
        definition: "the Party that discloses Confidential Information to the other Party under this Agreement.",
      },
      {
        term: "Receiving Party",
        definition: "the Party that receives Confidential Information from the other Party under this Agreement.",
      },
      {
        term: "Permitted Purpose",
        definition: "the purpose for which the Confidential Information is disclosed, as described in the Recitals of this Agreement, being {{Purpose_of_Disclosure}}.",
      },
      {
        term: "Representatives",
        definition: "with respect to any Party, its officers, directors, employees, agents, advisors (including legal counsel, accountants, and financial advisors), affiliates, and contractors who have a need to know the Confidential Information for the Permitted Purpose and who are bound by obligations of confidentiality no less restrictive than those contained in this Agreement.",
      },
      {
        term: "Disclosing Materials",
        definition: "all tangible and intangible materials containing or embodying Confidential Information, including documents, files, data, samples, prototypes, models, and any copies, extracts, or summaries thereof.",
      },
    ]),

    // ── SCOPE OF CONFIDENTIAL INFORMATION ──
    sectionHeading("Scope of Confidential Information"),

    bodyParagraph([
      { text: "The term \"Confidential Information\" as used in this Agreement shall encompass all information, whether tangible or intangible, that is disclosed by the Disclosing Party to the Receiving Party, directly or indirectly, in any form or medium, including but not limited to information disclosed:" },
    ]),

    bulletPoint("In writing, whether printed, handwritten, or in electronic form, including emails, reports, memoranda, specifications, and drawings;"),
    bulletPoint("Orally, during meetings, presentations, telephone conversations, video conferences, or other verbal communications;"),
    bulletPoint("Visually, through demonstrations, inspections, tours of facilities, or viewing of equipment, processes, or systems;"),
    bulletPoint("Electronically, through access to databases, cloud storage, intranets, shared drives, or any other digital medium;"),
    bulletPoint("Through samples, prototypes, models, or any physical embodiment of information."),

    spacer(1),

    bodyParagraph([
      { text: "For the avoidance of doubt, Confidential Information includes information disclosed prior to the execution of this Agreement that relates to the Permitted Purpose, whether or not such information was disclosed under a prior confidentiality arrangement." },
    ]),

    // ── OBLIGATIONS OF RECEIVING PARTY ──
    sectionHeading("Obligations of the Receiving Party"),

    bodyParagraph([
      { text: "The Receiving Party hereby undertakes and agrees to:" },
    ]),

    bulletPoint("Treat all Confidential Information with the utmost secrecy and maintain it in strict confidence, using at least the same degree of care as it uses to protect its own confidential and proprietary information, but in no event less than a reasonable degree of care;"),
    bulletPoint("Use the Confidential Information solely and exclusively for the Permitted Purpose and for no other purpose whatsoever without the prior written consent of the Disclosing Party;"),
    bulletPoint("Restrict disclosure of the Confidential Information to its Representatives who have a legitimate need to know for the Permitted Purpose, and ensure that such Representatives are informed of the confidential nature of the information and are bound by obligations of confidentiality no less restrictive than those set forth in this Agreement;"),
    bulletPoint("Not disclose, publish, disseminate, or otherwise make available any Confidential Information to any third party, in whole or in part, without the prior written consent of the Disclosing Party;"),
    bulletPoint("Not copy, reproduce, reverse engineer, decompile, disassemble, or create derivative works from the Confidential Information, except as expressly authorised in writing by the Disclosing Party;"),
    bulletPoint("Implement and maintain appropriate technical and organisational measures to safeguard the Confidential Information against unauthorised access, disclosure, alteration, destruction, or loss;"),
    bulletPoint("Promptly notify the Disclosing Party in writing upon becoming aware of any actual or suspected unauthorised access, use, or disclosure of the Confidential Information, and cooperate with the Disclosing Party in investigating and remedying such breach;"),
    bulletPoint("Not use the Confidential Information for the purpose of competing with the Disclosing Party or for any purpose that may be detrimental to the interests of the Disclosing Party."),

    // ── EXCLUSIONS ──
    sectionHeading("Exclusions from Confidential Information"),

    bodyParagraph([
      { text: "The obligations of confidentiality set forth in this Agreement shall not apply to any information that the Receiving Party can demonstrate:" },
    ]),

    bulletPoint("Was publicly known and generally available in the public domain at the time of disclosure by the Disclosing Party, through no act or omission of the Receiving Party;"),
    bulletPoint("Becomes publicly known and generally available after disclosure to the Receiving Party through no act or omission of the Receiving Party;"),
    bulletPoint("Was already in the lawful possession of the Receiving Party at the time of disclosure by the Disclosing Party, as evidenced by the Receiving Party's contemporaneous written records, and was not subject to an obligation of confidentiality;"),
    bulletPoint("Is obtained by the Receiving Party from a third party who is lawfully in possession of such information and who is not bound by a confidentiality obligation to the Disclosing Party with respect to such information;"),
    bulletPoint("Is independently developed by the Receiving Party without use of or reference to the Disclosing Party's Confidential Information, as evidenced by the Receiving Party's contemporaneous written records."),

    // ── COMPELLED DISCLOSURE ──
    sectionHeading("Compelled Disclosure"),

    bodyParagraph([
      { text: "If the Receiving Party is required to disclose any Confidential Information by law, regulation, judicial order, governmental order, or other legal process, the Receiving Party shall:" },
    ]),

    bulletPoint("Provide the Disclosing Party with prompt written notice of such requirement prior to making any disclosure, to the extent legally permissible, so that the Disclosing Party may seek a protective order or other appropriate remedy;"),
    bulletPoint("Cooperate with the Disclosing Party, at the Disclosing Party's expense, in seeking such protective order or other remedy;"),
    bulletPoint("Disclose only that portion of the Confidential Information that is legally required to be disclosed;"),
    bulletPoint("Use reasonable efforts to obtain confidential treatment or a protective order for the Confidential Information so disclosed."),

    // ── RETURN OF MATERIALS ──
    sectionHeading("Return and Destruction of Confidential Information"),

    bodyParagraph([
      { text: "Upon the earlier of: (a) the termination or expiration of this Agreement; (b) the completion of the Permitted Purpose; or (c) the written request of the Disclosing Party, the Receiving Party shall, at the Disclosing Party's option and within " },
      { text: "{{Return_Period}}", bold: true },
      { text: " of receiving such request:" },
    ]),

    bulletPoint("Return to the Disclosing Party all original Disclosing Materials and all copies, extracts, and summaries thereof in its possession or under its control; or"),
    bulletPoint("Destroy all Confidential Information in its possession or under its control, including any copies, extracts, summaries, and notes derived from the Confidential Information, and certify such destruction in writing to the Disclosing Party through an authorised officer."),

    spacer(1),

    bodyParagraph([
      { text: "Notwithstanding the foregoing, the Receiving Party may retain one (1) archival copy of the Confidential Information solely for legal or regulatory compliance purposes, provided that such copy remains subject to the confidentiality obligations set forth in this Agreement." },
    ]),

    // ── INTELLECTUAL PROPERTY ──
    sectionHeading("Intellectual Property Rights"),

    bodyParagraph([
      { text: "Nothing in this Agreement shall be construed as granting to the Receiving Party any licence, right, title, or interest in or to the Confidential Information or any intellectual property rights of the Disclosing Party, whether by implication, estoppel, or otherwise. All Confidential Information shall remain the sole and exclusive property of the Disclosing Party." },
    ]),

    spacer(1),

    bodyParagraph([
      { text: "The Receiving Party acknowledges that the Disclosing Party makes no representation or warranty, express or implied, as to the accuracy, completeness, or fitness for a particular purpose of any Confidential Information disclosed under this Agreement. All Confidential Information is provided \"AS IS\" without any warranty of any kind." },
    ]),

    // ── REMEDIES ──
    sectionHeading("Remedies for Breach"),

    bodyParagraph([
      { text: "The Receiving Party acknowledges and agrees that the Confidential Information is of a special, unique, and extraordinary character, and that any breach or threatened breach of this Agreement may cause irreparable harm to the Disclosing Party for which monetary damages alone would be inadequate. Accordingly, in addition to any other remedies available at law or in equity, the Disclosing Party shall be entitled to seek:" },
    ]),

    bulletPoint("Specific performance and injunctive relief (both temporary and permanent) to prevent any actual or threatened breach of this Agreement, without the necessity of proving actual damages or posting any bond or other security;"),
    bulletPoint("Recovery of all damages, losses, costs, and expenses (including reasonable attorneys' fees and court costs) incurred as a result of the breach;"),
    bulletPoint("An accounting of all profits derived from the unauthorised use or disclosure of the Confidential Information."),

    // ── REPRESENTATIONS AND WARRANTIES ──
    sectionHeading("Representations and Warranties"),

    bodyParagraph([
      { text: "Each Party represents and warrants to the other Party that:" },
    ]),

    bulletPoint("It has the legal right and authority to enter into this Agreement and to perform its obligations hereunder;"),
    bulletPoint("The execution and performance of this Agreement does not conflict with any other agreement, obligation, or undertaking to which it is a party;"),
    bulletPoint("It shall comply with all applicable laws, rules, and regulations in the performance of its obligations under this Agreement;"),
    bulletPoint("Any Confidential Information disclosed by it under this Agreement is disclosed in good faith and, to the best of its knowledge, does not infringe the intellectual property rights of any third party."),

    // ── TERM ──
    sectionHeading("Term and Duration"),

    bodyParagraph([
      { text: "This Agreement shall become effective as of the Effective Date and shall remain in full force and effect for a period of " },
      { text: "{{Term_Duration}}", bold: true },
      { text: " from the Effective Date (the \"Term\"), unless terminated earlier in accordance with the provisions of this Agreement. Either Party may terminate this Agreement at any time by providing " },
      { text: "{{Termination_Notice_Period}}", bold: true },
      { text: " prior written notice to the other Party." },
    ]),

    spacer(1),

    bodyParagraph([
      { text: "Survival. ", bold: true },
      { text: "Notwithstanding the termination or expiration of this Agreement, the obligations of confidentiality and non-use set forth herein shall survive and remain binding on the Parties for a period of " },
      { text: "{{Survival_Period}}", bold: true },
      { text: " from the date of termination or expiration of this Agreement, or for so long as the Confidential Information remains confidential, whichever is longer." },
    ]),

    // ── NON-SOLICITATION ──
    sectionHeading("Non-Solicitation"),

    bodyParagraph([
      { text: "During the Term and for a period of " },
      { text: "{{Non_Solicitation_Period}}", bold: true },
      { text: " following the termination or expiration of this Agreement, neither Party shall, directly or indirectly, solicit, recruit, or attempt to hire any employee, contractor, or agent of the other Party who was involved in the performance of obligations under this Agreement, without the prior written consent of the other Party." },
    ]),

    // ── STANDARD CLAUSES ──
    ...buildIndemnification(),
    ...buildLimitationOfLiability(),
    ...buildDisputeResolution(),
    ...buildBoilerplate(),

    // ── SCHEDULE ──
    new Paragraph({ children: [new PageBreak()] }),
    sectionHeading("Schedule A — Description of Permitted Purpose"),

    bodyParagraph([
      { text: "The Permitted Purpose for which Confidential Information may be disclosed under this Agreement is:" },
    ]),

    spacer(1),

    bodyParagraph([
      { text: "{{Detailed_Purpose_Description}}", bold: true },
    ]),

    spacer(2),

    bodyParagraph([
      { text: "Scope of Information to be Disclosed:", bold: true },
    ]),

    bulletPoint("{{Scope_Item_1}}"),
    bulletPoint("{{Scope_Item_2}}"),
    bulletPoint("{{Scope_Item_3}}"),

    spacer(2),

    // ── SIGNATURE BLOCKS ──
    ...buildSignatureBlocks("Disclosing Party", "Receiving Party"),
  ];

  return {
    documentTitle: "Non-Disclosure Agreement",
    documentType: "Mutual Confidentiality Agreement",
    templateNumber: "T2L-NDA-001",
    version: "2.0",
    revisionDate: "June 2026",
    sections,
  };
}
