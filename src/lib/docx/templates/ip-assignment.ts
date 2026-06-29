// ============================================================
// Turn2Law — IP Assignment Agreement Template Content
// Template ID: T2L-IP-001 | ~7 pages
// ============================================================

import { Paragraph, HeadingLevel, PageBreak } from "docx";
import {
  sectionHeading, bodyParagraph, bulletPoint, spacer,
  buildPartiesSection, buildRecitals, buildDefinitions,
  buildConfidentialitySection, buildIndemnification,
  buildDisputeResolution, buildBoilerplate, buildSignatureBlocks,
} from "../sections";
import type { TemplateDocxContent } from "../generator";

export function buildIpAssignmentTemplate(): TemplateDocxContent {
  const sections: Paragraph[] = [

    ...buildPartiesSection({
      partyALabel: "Assignor",
      partyADescription: "an individual/entity who has created or contributed intellectual property for the Company",
      partyBLabel: "Assignee",
      partyBDescription: "a company incorporated under the laws of {{Jurisdiction}}, bearing registration number {{Company_Registration_Number}}",
    }),

    ...buildRecitals([
      "the Assignor has been engaged by the Assignee as {{Assignor_Role}} (employee / contractor / consultant / co-founder) to perform certain services and create certain works in connection with the Assignee's business;",
      "in the course of such engagement, the Assignor has created, developed, or contributed to certain intellectual property, works, inventions, and materials (the \"Assigned IP\") as described in Schedule A hereto;",
      "the Assignee desires to acquire full and exclusive ownership of all right, title, and interest in and to the Assigned IP, and the Assignor agrees to assign and transfer such rights to the Assignee;",
      "the Parties wish to formalise the assignment and transfer of intellectual property rights on the terms and conditions set forth herein.",
    ]),

    ...buildDefinitions([
      { term: "Assigned IP", definition: "all intellectual property described in Schedule A and any other intellectual property created by the Assignor during the course of their engagement with the Assignee, including all patents, copyrights, trademarks, trade secrets, designs, inventions, discoveries, algorithms, source code, object code, databases, documentation, specifications, drawings, and any other tangible or intangible works of authorship or invention." },
      { term: "Future IP", definition: "all intellectual property that the Assignor may create, develop, conceive, or reduce to practice during the term of their engagement with the Assignee, whether during working hours or otherwise, that relates to the Assignee's current or anticipated business activities." },
      { term: "Moral Rights", definition: "the rights of attribution and integrity in the Assigned IP, as recognised under applicable copyright laws and international conventions." },
      { term: "Prior Works", definition: "any intellectual property owned by the Assignor prior to the commencement of their engagement with the Assignee, as listed in Schedule B." },
    ]),

    sectionHeading("Assignment of Intellectual Property"),
    bodyParagraph([
      { text: "The Assignor hereby irrevocably assigns, transfers, and conveys to the Assignee, its successors, and assigns, the entire right, title, and interest in and to the Assigned IP and Future IP, including but not limited to:" },
    ]),
    bulletPoint("All copyrights, including the exclusive right to reproduce, distribute, display, perform, and create derivative works;"),
    bulletPoint("All patent rights, including the right to file patent applications in any jurisdiction worldwide;"),
    bulletPoint("All trade secret rights, including all confidential and proprietary information embodied in the Assigned IP;"),
    bulletPoint("All trademark and service mark rights associated with the Assigned IP;"),
    bulletPoint("All design rights, including industrial and registered designs;"),
    bulletPoint("All database rights;"),
    bulletPoint("All rights to sue for past, present, and future infringement of any of the foregoing rights;"),
    bulletPoint("All other intellectual property rights of any kind or nature, in any jurisdiction worldwide."),
    spacer(1),
    bodyParagraph([
      { text: "This assignment shall be effective as of the Effective Date and shall include all intellectual property created by the Assignor from the commencement of their engagement with the Assignee to the date of this Agreement. The assignment of Future IP shall be automatic and shall not require any further action or documentation by the Assignor." },
    ]),

    sectionHeading("Work for Hire"),
    bodyParagraph([
      { text: "To the maximum extent permitted by applicable law, the Parties agree that all Assigned IP and Future IP shall be considered \"work made for hire\" (or the equivalent under applicable law) and shall be the sole and exclusive property of the Assignee from the moment of creation. To the extent that any work does not qualify as \"work made for hire,\" the Assignor hereby assigns all right, title, and interest therein to the Assignee as set forth in the preceding section." },
    ]),

    sectionHeading("Moral Rights Waiver"),
    bodyParagraph([
      { text: "To the maximum extent permitted by applicable law, the Assignor hereby irrevocably waives and agrees not to assert any and all moral rights in and to the Assigned IP and Future IP, including the right of attribution (the right to be identified as the author) and the right of integrity (the right to object to derogatory treatment of the work). Where moral rights cannot be waived under applicable law, the Assignor agrees not to exercise such rights against the Assignee, its successors, assigns, or licensees." },
    ]),

    sectionHeading("Representations and Warranties"),
    bodyParagraph([{ text: "The Assignor represents and warrants that:" }]),
    bulletPoint("The Assignor is the sole creator, author, and owner of the Assigned IP and has the full right, power, and authority to make this assignment;"),
    bulletPoint("The Assigned IP is original and does not infringe, misappropriate, or violate the intellectual property rights, proprietary rights, or any other rights of any third party;"),
    bulletPoint("The Assigned IP has not been previously assigned, licensed, pledged, encumbered, or otherwise disposed of to any third party;"),
    bulletPoint("There are no claims, demands, liens, or encumbrances against the Assigned IP;"),
    bulletPoint("The Assignor has not entered into any agreement or undertaking that conflicts with the obligations under this Agreement;"),
    bulletPoint("To the best of the Assignor's knowledge, no third party has any claim to or interest in the Assigned IP."),

    sectionHeading("Further Assurances"),
    bodyParagraph([
      { text: "The Assignor agrees to execute and deliver all documents, instruments, and certificates, and to perform all acts and things that may be reasonably necessary or desirable to perfect, register, record, and enforce the Assignee's rights in and to the Assigned IP and Future IP in any jurisdiction worldwide, including:" },
    ]),
    bulletPoint("Filing and prosecuting patent, copyright, trademark, and design applications;"),
    bulletPoint("Executing assignment documents, declarations, and confirmatory instruments;"),
    bulletPoint("Cooperating with the Assignee in any proceedings related to the enforcement or defence of the Assigned IP;"),
    bulletPoint("Providing testimony and evidence as reasonably required."),
    spacer(1),
    bodyParagraph([
      { text: "Power of Attorney. ", bold: true },
      { text: "The Assignor hereby irrevocably appoints the Assignee as the Assignor's attorney-in-fact, with full power and authority to execute and file, in the Assignor's name and on the Assignor's behalf, any documents necessary to effectuate the purposes of this Agreement, including applications for intellectual property registration and assignment documents, in the event that the Assignor is unable or unwilling to do so." },
    ]),

    sectionHeading("Prior Works and Exclusions"),
    bodyParagraph([
      { text: "The Assignor has identified in " },
      { text: "Schedule B", bold: true },
      { text: " all Prior Works that the Assignor wishes to exclude from the scope of this Assignment. Any intellectual property not listed in Schedule B that relates to the Assignee's business shall be presumed to be Assigned IP." },
    ]),
    bodyParagraph([
      { text: "Where any Prior Works are incorporated into the Assigned IP, the Assignor hereby grants the Assignee an exclusive, perpetual, irrevocable, worldwide, royalty-free, fully paid-up licence to use, modify, adapt, sublicence, reproduce, distribute, and commercialise such Prior Works in connection with the Assignee's business." },
    ]),

    sectionHeading("Consideration"),
    bodyParagraph([
      { text: "In consideration for the assignment and transfer of the Assigned IP and Future IP, the Assignee shall: " },
      { text: "{{Consideration_Description}}", bold: true },
      { text: ". The Assignor acknowledges that the consideration set forth herein is adequate and sufficient consideration for the assignment and that no additional compensation is due." },
    ]),

    ...buildConfidentialitySection(),
    ...buildIndemnification(),
    ...buildDisputeResolution(),
    ...buildBoilerplate(),

    new Paragraph({ children: [new PageBreak()] }),
    sectionHeading("Schedule A — Description of Assigned IP"),
    bodyParagraph([{ text: "The following intellectual property is assigned under this Agreement:" }]),
    bulletPoint("{{Assigned_IP_Item_1}}"),
    bulletPoint("{{Assigned_IP_Item_2}}"),
    bulletPoint("{{Assigned_IP_Item_3}}"),
    bulletPoint("{{Assigned_IP_Item_4}}"),

    new Paragraph({ children: [new PageBreak()] }),
    sectionHeading("Schedule B — Excluded Prior Works"),
    bodyParagraph([{ text: "The following pre-existing intellectual property of the Assignor is excluded from this Assignment:" }]),
    bulletPoint("{{Prior_Work_1}}"),
    bulletPoint("{{Prior_Work_2}}"),

    ...buildSignatureBlocks("Assignor", "Assignee"),
  ];

  return {
    documentTitle: "Intellectual Property Assignment Agreement",
    documentType: "IP Rights Assignment and Transfer",
    templateNumber: "T2L-IP-001",
    version: "2.0",
    revisionDate: "June 2026",
    sections,
  };
}
