// ============================================================
// Turn2Law — Employment Offer Letter Template Content
// Template ID: T2L-EMP-001 | ~5 pages
// ============================================================

import { Paragraph, HeadingLevel, PageBreak, AlignmentType } from "docx";
import {
  sectionHeading,
  bodyParagraph,
  bulletPoint,
  spacer,
  styledParagraph,
  horizontalRule,
  buildSignatureBlocks,
} from "../sections";
import { FONTS, COLORS } from "../styles";
import type { TemplateDocxContent } from "../generator";

export function buildEmploymentOfferTemplate(): TemplateDocxContent {
  const sections: Paragraph[] = [

    // ── DATE AND REFERENCE ──
    bodyParagraph([
      { text: "Date: ", bold: true },
      { text: "{{Offer_Date}}" },
    ], AlignmentType.LEFT),

    bodyParagraph([
      { text: "Ref: ", bold: true },
      { text: "{{Reference_Number}}" },
    ], AlignmentType.LEFT),

    spacer(1),

    // ── ADDRESSEE ──
    bodyParagraph([
      { text: "To," },
    ], AlignmentType.LEFT),
    bodyParagraph([
      { text: "{{Candidate_Name}}", bold: true },
    ], AlignmentType.LEFT),
    bodyParagraph([
      { text: "{{Candidate_Address}}" },
    ], AlignmentType.LEFT),

    spacer(1),

    // ── SUBJECT LINE ──
    bodyParagraph([
      { text: "Subject: Offer of Employment — ", bold: true },
      { text: "{{Position_Title}}", bold: true },
    ], AlignmentType.LEFT),

    spacer(1),

    // ── GREETING ──
    bodyParagraph([
      { text: "Dear " },
      { text: "{{Candidate_Name}}", bold: true },
      { text: "," },
    ]),

    // ── OPENING ──
    bodyParagraph([
      { text: "We are pleased to extend this offer of employment to you at " },
      { text: "{{Company_Name}}", bold: true },
      { text: " (the \"Company\"). After thorough evaluation of your qualifications, professional experience, and demonstrated competencies, we are confident that you will make a valuable contribution to our team and the Company's objectives." },
    ]),

    bodyParagraph([
      { text: "This offer letter sets out the principal terms and conditions of your employment with the Company. Please review the following details carefully before indicating your acceptance." },
    ]),

    // ── POSITION DETAILS ──
    sectionHeading("Position Details", HeadingLevel.HEADING_2),

    bulletPoint("Position / Designation: {{Position_Title}}"),
    bulletPoint("Department: {{Department}}"),
    bulletPoint("Reporting Manager: {{Reporting_Manager}}"),
    bulletPoint("Location: {{Work_Location}}"),
    bulletPoint("Employment Type: {{Employment_Type}} (Full-time / Part-time / Contract)"),
    bulletPoint("Date of Joining: {{Start_Date}}"),

    spacer(1),

    bodyParagraph([
      { text: "Your role and responsibilities are broadly described in the attached " },
      { text: "Annexure A — Job Description", bold: true },
      { text: ". The Company reserves the right to modify your role, responsibilities, reporting structure, or work location from time to time based on business requirements, with reasonable notice." },
    ]),

    // ── COMPENSATION ──
    sectionHeading("Compensation and Benefits", HeadingLevel.HEADING_2),

    bodyParagraph([
      { text: "Your compensation package shall consist of the following:" },
    ]),

    bulletPoint("Annual Gross Salary: {{Annual_Salary}} payable on a monthly basis;"),
    bulletPoint("Basic Salary: {{Basic_Salary}} per month;"),
    bulletPoint("House Rent Allowance (HRA): {{HRA_Amount}} per month;"),
    bulletPoint("Special Allowance: {{Special_Allowance}} per month;"),
    bulletPoint("Performance Bonus: {{Performance_Bonus}} per annum, subject to individual and Company performance, payable at the Company's discretion;"),
    bulletPoint("Provident Fund: Employer's contribution in accordance with the Employees' Provident Fund and Miscellaneous Provisions Act, 1952;"),
    bulletPoint("Professional Tax: As applicable under state legislation."),

    spacer(1),

    bodyParagraph([
      { text: "The detailed compensation breakdown is set out in " },
      { text: "Annexure B — Compensation Structure", bold: true },
      { text: ". All payments are subject to applicable tax deductions at source as required by law." },
    ]),

    // ── BENEFITS ──
    sectionHeading("Benefits and Perquisites", HeadingLevel.HEADING_2),

    bodyParagraph([
      { text: "During your employment, you shall be entitled to the following benefits, subject to the Company's policies in effect from time to time:" },
    ]),

    bulletPoint("Health Insurance: Group medical insurance coverage for self, spouse, and up to two dependent children, as per the Company's group health insurance policy;"),
    bulletPoint("Leave Entitlement: {{Paid_Leave_Days}} days of paid leave per annum, comprising earned leave, casual leave, and sick leave as per the Company's leave policy;"),
    bulletPoint("Holidays: Public holidays as declared by the Company for the applicable work location;"),
    bulletPoint("Learning and Development: Access to training programmes, certifications, and professional development resources as per the Company's L&D policy;"),
    bulletPoint("Travel Reimbursement: Reimbursement of reasonable travel expenses incurred in the course of official duties, in accordance with the Company's travel policy."),

    // ── PROBATION ──
    sectionHeading("Probation Period", HeadingLevel.HEADING_2),

    bodyParagraph([
      { text: "Your employment shall commence with a probation period of " },
      { text: "{{Probation_Period}}", bold: true },
      { text: " from the Date of Joining (the \"Probation Period\"). During the Probation Period:" },
    ]),

    bulletPoint("Your performance and conduct will be assessed against the expectations and standards communicated to you by your Reporting Manager;"),
    bulletPoint("Either party may terminate the employment by providing {{Probation_Notice_Period}} written notice or salary in lieu of notice;"),
    bulletPoint("Upon successful completion of the Probation Period, your employment shall be confirmed in writing by the Company. The Company reserves the right to extend the Probation Period by up to {{Probation_Extension}} if, in its reasonable assessment, further evaluation is required."),

    // ── WORKING HOURS ──
    sectionHeading("Working Hours and Attendance", HeadingLevel.HEADING_2),

    bodyParagraph([
      { text: "The standard working hours are " },
      { text: "{{Working_Hours}}", bold: true },
      { text: ", {{Working_Days}}. You may be required to work additional hours as necessitated by business requirements. The Company's policies on flexible working arrangements, remote work, and overtime shall apply as communicated from time to time." },
    ]),

    // ── CONFIDENTIALITY ──
    sectionHeading("Confidentiality and Non-Disclosure", HeadingLevel.HEADING_2),

    bodyParagraph([
      { text: "During and after your employment, you shall maintain strict confidentiality regarding all proprietary and confidential information of the Company, including but not limited to business strategies, financial data, customer information, trade secrets, technical information, employee data, and any other information that is not publicly available. You shall not disclose, publish, or use any Confidential Information for any purpose other than the performance of your duties without the prior written consent of the Company." },
    ]),

    spacer(1),

    bodyParagraph([
      { text: "You may be required to execute a separate Non-Disclosure Agreement and/or Intellectual Property Assignment Agreement as a condition of your employment." },
    ]),

    // ── NON-COMPETE ──
    sectionHeading("Non-Compete and Non-Solicitation", HeadingLevel.HEADING_2),

    bodyParagraph([
      { text: "During your employment and for a period of " },
      { text: "{{Non_Compete_Period}}", bold: true },
      { text: " following the termination of your employment (to the extent enforceable under applicable law), you agree that you shall not:" },
    ]),

    bulletPoint("Directly or indirectly engage in, own, manage, operate, or participate in any business that is in direct competition with the Company's business;"),
    bulletPoint("Solicit, recruit, or attempt to hire any employee, contractor, or consultant of the Company;"),
    bulletPoint("Solicit, divert, or attempt to divert any customer, client, vendor, or business relationship of the Company."),

    // ── TERMINATION ──
    sectionHeading("Termination of Employment", HeadingLevel.HEADING_2),

    bodyParagraph([
      { text: "After confirmation of employment, either party may terminate the employment by providing " },
      { text: "{{Notice_Period}}", bold: true },
      { text: " prior written notice or payment of salary in lieu of notice. The Company may terminate your employment immediately without notice or payment in lieu in the event of:" },
    ]),

    bulletPoint("Gross misconduct, dishonesty, or fraud;"),
    bulletPoint("Material breach of the terms of your employment or Company policies;"),
    bulletPoint("Conviction of a criminal offence involving moral turpitude;"),
    bulletPoint("Wilful insubordination or refusal to comply with lawful and reasonable instructions;"),
    bulletPoint("Persistent unsatisfactory performance after being given reasonable opportunity and support to improve."),

    spacer(1),

    bodyParagraph([
      { text: "Upon termination, you shall return all Company property, including but not limited to laptops, mobile devices, access cards, documents, and any materials containing Confidential Information." },
    ]),

    // ── CONDITIONS ──
    sectionHeading("Conditions Precedent", HeadingLevel.HEADING_2),

    bodyParagraph([
      { text: "This offer is contingent upon the satisfactory completion of the following:" },
    ]),

    bulletPoint("Verification of educational qualifications, employment history, and professional credentials;"),
    bulletPoint("Satisfactory background verification, including criminal record check and reference checks;"),
    bulletPoint("Satisfactory pre-employment medical examination (if applicable);"),
    bulletPoint("Submission of all required joining documents, including proof of identity, address, and eligibility to work in {{Jurisdiction}}."),

    // ── ACCEPTANCE ──
    sectionHeading("Acceptance of Offer", HeadingLevel.HEADING_2),

    bodyParagraph([
      { text: "If you wish to accept this offer, please sign and return a copy of this letter along with the attached documents on or before " },
      { text: "{{Acceptance_Deadline}}", bold: true },
      { text: ". Failure to accept by the specified date may result in the withdrawal of this offer at the Company's discretion." },
    ]),

    spacer(1),

    bodyParagraph([
      { text: "This offer letter, together with the annexures attached hereto, constitutes the entire understanding between you and the Company regarding the terms of your employment and supersedes all prior discussions, negotiations, and agreements. Any modifications to this offer shall be valid only if made in writing and signed by an authorised representative of the Company." },
    ]),

    spacer(1),

    bodyParagraph([
      { text: "We look forward to welcoming you to the team and working together towards mutual success." },
    ]),

    spacer(1),

    bodyParagraph([
      { text: "Warm regards," },
    ]),

    spacer(2),

    bodyParagraph([
      { text: "{{HR_Manager_Name}}", bold: true },
    ]),
    bodyParagraph([
      { text: "{{HR_Manager_Designation}}" },
    ]),
    bodyParagraph([
      { text: "{{Company_Name}}", bold: true },
    ]),

    horizontalRule(),

    // ── ACCEPTANCE SECTION ──
    sectionHeading("Candidate Acceptance", HeadingLevel.HEADING_2),

    bodyParagraph([
      { text: "I, " },
      { text: "{{Candidate_Name}}", bold: true },
      { text: ", hereby accept the offer of employment as described in this letter and agree to abide by the terms and conditions set forth herein." },
    ]),

    spacer(3),

    bodyParagraph([
      { text: "Signature: ________________________________________" },
    ]),
    bodyParagraph([
      { text: "Name: ", bold: true },
      { text: "{{Candidate_Name}}" },
    ]),
    bodyParagraph([
      { text: "Date: ", bold: true },
      { text: "____________________" },
    ]),

    // ── ANNEXURE A ──
    new Paragraph({ children: [new PageBreak()] }),
    sectionHeading("Annexure A — Job Description"),

    bodyParagraph([
      { text: "Position: ", bold: true },
      { text: "{{Position_Title}}" },
    ]),
    bodyParagraph([
      { text: "Department: ", bold: true },
      { text: "{{Department}}" },
    ]),

    spacer(1),

    bodyParagraph([
      { text: "Key Responsibilities:", bold: true },
    ]),
    bulletPoint("{{Responsibility_1}}"),
    bulletPoint("{{Responsibility_2}}"),
    bulletPoint("{{Responsibility_3}}"),
    bulletPoint("{{Responsibility_4}}"),
    bulletPoint("{{Responsibility_5}}"),

    spacer(1),

    bodyParagraph([
      { text: "Required Qualifications:", bold: true },
    ]),
    bulletPoint("{{Qualification_1}}"),
    bulletPoint("{{Qualification_2}}"),
    bulletPoint("{{Qualification_3}}"),
  ];

  return {
    documentTitle: "Employment Offer Letter",
    documentType: "Formal Employment Offer",
    templateNumber: "T2L-EMP-001",
    version: "2.0",
    revisionDate: "June 2026",
    sections,
  };
}
