// ============================================================
// Turn2Law — Memorandum of Understanding (MOU) Template
// Template ID: T2L-LEG-002 | ~6 pages
// ============================================================

import { Paragraph, HeadingLevel, PageBreak } from "docx";
import {
  sectionHeading, bodyParagraph, bulletPoint, spacer,
  buildPartiesSection, buildRecitals, buildDefinitions,
  buildConfidentialitySection, buildDisputeResolution,
  buildBoilerplate, buildSignatureBlocks,
} from "../sections";
import type { TemplateDocxContent } from "../generator";

export function buildMouTemplate(): TemplateDocxContent {
  const sections: Paragraph[] = [

    ...buildPartiesSection({
      partyALabel: "First Party",
      partyADescription: "an entity duly organised and existing under the laws of {{Jurisdiction}}, with its principal place of business at {{First_Party_Address}}",
      partyBLabel: "Second Party",
      partyBDescription: "an entity duly organised and existing under the laws of {{Jurisdiction}}, with its principal place of business at {{Second_Party_Address}}",
    }),

    ...buildRecitals([
      "the First Party is engaged in the business of {{First_Party_Business_Description}} and possesses expertise, resources, and capabilities in {{First_Party_Domain}};",
      "the Second Party is engaged in the business of {{Second_Party_Business_Description}} and possesses expertise, resources, and capabilities in {{Second_Party_Domain}};",
      "the Parties recognise the mutual benefit of collaborating in the area of {{Collaboration_Area}} and wish to explore the possibility of working together on {{Project_Description}} (the \"Project\");",
      "this Memorandum of Understanding sets forth the general terms and conditions under which the Parties intend to cooperate and is intended to serve as a framework for future definitive agreements between the Parties.",
    ]),

    ...buildDefinitions([
      { term: "Collaboration", definition: "the cooperative activities undertaken by the Parties pursuant to this MOU, including joint research, development, marketing, or other activities related to the Project." },
      { term: "Project", definition: "{{Project_Description}}, as further described in this MOU and any subsequent definitive agreements." },
      { term: "Coordinator", definition: "the designated representative of each Party responsible for overseeing and managing the day-to-day aspects of the Collaboration." },
      { term: "Confidential Information", definition: "all non-public information exchanged between the Parties in connection with the Collaboration, whether disclosed orally, in writing, electronically, or by any other means." },
    ]),

    sectionHeading("Purpose and Scope"),
    bodyParagraph([
      { text: "The purpose of this Memorandum of Understanding is to establish a framework for cooperation and collaboration between the Parties in relation to the Project. The specific scope of the Collaboration shall include:" },
    ]),
    bulletPoint("{{Scope_Item_1}};"),
    bulletPoint("{{Scope_Item_2}};"),
    bulletPoint("{{Scope_Item_3}};"),
    bulletPoint("{{Scope_Item_4}}."),
    spacer(1),
    bodyParagraph([
      { text: "The Parties acknowledge that this MOU is intended to outline the general terms and framework for cooperation and is " },
      { text: "not intended to create legally binding obligations", bold: true },
      { text: " with respect to the implementation of the Project, except for the clauses relating to Confidentiality, Intellectual Property, Dispute Resolution, and Governing Law, which shall be legally binding on the Parties." },
    ]),

    sectionHeading("Roles and Responsibilities"),
    bodyParagraph([{ text: "First Party Responsibilities:", bold: true }]),
    bulletPoint("{{First_Party_Responsibility_1}};"),
    bulletPoint("{{First_Party_Responsibility_2}};"),
    bulletPoint("{{First_Party_Responsibility_3}}."),
    spacer(1),
    bodyParagraph([{ text: "Second Party Responsibilities:", bold: true }]),
    bulletPoint("{{Second_Party_Responsibility_1}};"),
    bulletPoint("{{Second_Party_Responsibility_2}};"),
    bulletPoint("{{Second_Party_Responsibility_3}}."),

    sectionHeading("Coordination and Governance"),
    bodyParagraph([
      { text: "Each Party shall designate a Coordinator who shall serve as the primary point of contact for all matters relating to the Collaboration. The Coordinators shall:" },
    ]),
    bulletPoint("Coordinate and oversee the implementation of the Collaboration activities;"),
    bulletPoint("Conduct regular meetings (no less frequently than {{Meeting_Frequency}}) to review progress, discuss issues, and plan future activities;"),
    bulletPoint("Prepare and circulate meeting minutes and progress reports;"),
    bulletPoint("Escalate any unresolved issues to the senior management of the respective Parties."),
    spacer(1),
    bodyParagraph([{ text: "Joint Steering Committee. ", bold: true }, { text: "The Parties may establish a Joint Steering Committee comprising senior representatives of each Party to provide strategic oversight and guidance on the Collaboration. The Joint Steering Committee shall meet at intervals agreed upon by the Parties and shall have the authority to approve material changes to the scope, timeline, or resource allocation of the Collaboration." }]),

    sectionHeading("Financial Arrangements"),
    bodyParagraph([
      { text: "Unless otherwise agreed in writing, each Party shall bear its own costs and expenses incurred in connection with the Collaboration. Any shared costs, joint funding, or financial contributions shall be agreed upon separately in writing between the Parties before being incurred." },
    ]),
    spacer(1),
    bodyParagraph([
      { text: "Revenue or Benefit Sharing. ", bold: true },
      { text: "Any revenue, profits, benefits, or savings arising from the Collaboration shall be shared between the Parties in accordance with a separate written agreement to be negotiated in good faith." },
    ]),

    sectionHeading("Intellectual Property"),
    bodyParagraph([
      { text: "Background IP. ", bold: true },
      { text: "Each Party shall retain all rights, title, and interest in and to its pre-existing intellectual property (\"Background IP\"). Neither Party grants the other any licence or rights to its Background IP except as expressly provided in this MOU or in a subsequent written agreement." },
    ]),
    bodyParagraph([
      { text: "Foreground IP. ", bold: true },
      { text: "Any intellectual property created jointly by the Parties in the course of the Collaboration (\"Foreground IP\") shall be jointly owned by the Parties in equal shares, unless otherwise agreed in writing. The Parties shall negotiate in good faith the terms of a separate IP agreement governing the ownership, use, and commercialisation of Foreground IP." },
    ]),
    bodyParagraph([
      { text: "Neither Party shall use the other Party's name, logo, trademarks, or other identifying marks without the prior written consent of that Party." },
    ]),

    ...buildConfidentialitySection(),

    sectionHeading("Duration and Termination"),
    bodyParagraph([
      { text: "This MOU shall become effective on the Effective Date and shall remain in force for a period of " },
      { text: "{{MOU_Duration}}", bold: true },
      { text: " (the \"Term\"), unless terminated earlier or extended by mutual written agreement of the Parties." },
    ]),
    bodyParagraph([
      { text: "Either Party may terminate this MOU at any time by providing " },
      { text: "{{Termination_Notice_Period}}", bold: true },
      { text: " prior written notice to the other Party. Termination shall not affect any rights or obligations accrued prior to the date of termination, including the confidentiality obligations which shall survive termination." },
    ]),

    sectionHeading("Non-Binding Nature"),
    bodyParagraph([
      { text: "Except for the clauses relating to Confidentiality, Intellectual Property, Dispute Resolution, and Governing Law, this MOU constitutes a statement of the Parties' intentions and does not create any legally binding obligations to proceed with the Project or to enter into any definitive agreement. Neither Party shall be liable for any failure to enter into a definitive agreement or to proceed with the Collaboration." },
    ]),

    sectionHeading("Exclusivity"),
    bodyParagraph([
      { text: "Unless otherwise agreed in writing, this MOU does not grant either Party exclusive rights with respect to the subject matter of the Collaboration. Each Party shall be free to enter into similar arrangements with third parties, provided that such arrangements do not conflict with the confidentiality obligations under this MOU." },
    ]),

    ...buildDisputeResolution(),
    ...buildBoilerplate(),
    ...buildSignatureBlocks("First Party", "Second Party"),
  ];

  return {
    documentTitle: "Memorandum of Understanding",
    documentType: "Bilateral Cooperation Agreement (MOU)",
    templateNumber: "T2L-LEG-002",
    version: "2.0",
    revisionDate: "June 2026",
    sections,
  };
}
