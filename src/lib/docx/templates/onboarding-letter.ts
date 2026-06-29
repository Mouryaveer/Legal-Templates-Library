// ============================================================
// Turn2Law — Official Onboarding Letter Template Content
// Template ID: T2L-HR-001 | ~4 pages
// ============================================================

import { Paragraph, HeadingLevel, PageBreak, AlignmentType } from "docx";
import {
  sectionHeading, bodyParagraph, bulletPoint, spacer,
  styledParagraph, horizontalRule,
} from "../sections";
import type { TemplateDocxContent } from "../generator";

export function buildOnboardingLetterTemplate(): TemplateDocxContent {
  const sections: Paragraph[] = [

    // ── DATE AND REFERENCE ──
    bodyParagraph([
      { text: "Date: ", bold: true },
      { text: "{{Document_Date}}" },
    ], AlignmentType.LEFT),
    bodyParagraph([
      { text: "Ref: ", bold: true },
      { text: "{{Reference_Number}}" },
    ], AlignmentType.LEFT),

    spacer(1),

    bodyParagraph([
      { text: "To," },
    ], AlignmentType.LEFT),
    bodyParagraph([
      { text: "{{Employee_Name}}", bold: true },
    ], AlignmentType.LEFT),
    bodyParagraph([
      { text: "Employee ID: {{Employee_ID}}" },
    ], AlignmentType.LEFT),

    spacer(1),

    bodyParagraph([
      { text: "Subject: Official Onboarding Confirmation and Welcome", bold: true },
    ], AlignmentType.LEFT),

    spacer(1),

    bodyParagraph([
      { text: "Dear " },
      { text: "{{Employee_Name}}", bold: true },
      { text: "," },
    ]),

    bodyParagraph([
      { text: "We are delighted to officially welcome you to " },
      { text: "{{Company_Name}}", bold: true },
      { text: ". This letter confirms your successful onboarding and serves as an official record of your employment details, organisational placement, and the Company's expectations during your initial period." },
    ]),

    bodyParagraph([
      { text: "Your joining represents an important milestone for both you and the Company, and we are confident that your skills, experience, and dedication will contribute significantly to our shared objectives." },
    ]),

    // ── EMPLOYMENT DETAILS ──
    sectionHeading("Employment Details", HeadingLevel.HEADING_2),

    bulletPoint("Employee Name: {{Employee_Name}}"),
    bulletPoint("Employee ID: {{Employee_ID}}"),
    bulletPoint("Designation: {{Designation}}"),
    bulletPoint("Department: {{Department}}"),
    bulletPoint("Reporting Manager: {{Reporting_Manager}}"),
    bulletPoint("Date of Joining: {{Joining_Date}}"),
    bulletPoint("Work Location: {{Work_Location}}"),
    bulletPoint("Employment Type: {{Employment_Type}} (Full-time / Part-time / Contract)"),

    // ── ORGANISATIONAL POLICIES ──
    sectionHeading("Organisational Policies and Compliance", HeadingLevel.HEADING_2),

    bodyParagraph([
      { text: "As an employee of " },
      { text: "{{Company_Name}}", bold: true },
      { text: ", you are expected to familiarise yourself with and adhere to the Company's policies, procedures, and codes of conduct. Key policies that apply to your employment include:" },
    ]),

    bulletPoint("Code of Conduct and Ethics: You are expected to maintain the highest standards of professional conduct, integrity, and ethical behaviour in all business dealings and interactions;"),
    bulletPoint("Anti-Harassment Policy: The Company maintains a zero-tolerance policy towards all forms of harassment, discrimination, and bullying. Any incidents should be reported immediately to the HR department or through the designated grievance mechanism;"),
    bulletPoint("Information Security Policy: You are responsible for safeguarding the Company's information assets, including electronic data, documents, and physical assets. Unauthorised access, sharing, or misuse of information is strictly prohibited;"),
    bulletPoint("Data Privacy Policy: You must comply with all applicable data protection laws and the Company's data privacy policies in handling personal data of employees, customers, and business partners;"),
    bulletPoint("Leave Policy: Please refer to the Company's leave policy for details on earned leave, casual leave, sick leave, maternity/paternity leave, and other leave entitlements;"),
    bulletPoint("Dress Code: {{Dress_Code_Policy}};"),
    bulletPoint("Attendance and Timekeeping: Regular and punctual attendance is expected. Please follow the Company's attendance tracking system and notify your manager in advance of any planned absence."),

    // ── FIRST-WEEK SCHEDULE ──
    sectionHeading("Onboarding Schedule — First Week", HeadingLevel.HEADING_2),

    bodyParagraph([
      { text: "To ensure a smooth transition into your new role, the following onboarding activities have been scheduled for your first week:" },
    ]),

    bulletPoint("Day 1: Welcome orientation, ID card issuance, IT setup (laptop, email, access credentials), and introduction to your team;"),
    bulletPoint("Day 1-2: Review and acknowledgement of Company policies, code of conduct, and compliance documents;"),
    bulletPoint("Day 2-3: Department-specific orientation, role-specific training, and introduction to key stakeholders;"),
    bulletPoint("Day 3-4: Training on tools, systems, and processes relevant to your role;"),
    bulletPoint("Day 5: One-on-one meeting with your Reporting Manager to discuss initial goals, expectations, and a 30-60-90 day plan."),

    // ── DOCUMENTS ──
    sectionHeading("Documents Submitted", HeadingLevel.HEADING_2),

    bodyParagraph([
      { text: "Please ensure that the following documents have been submitted to the HR department on or before your date of joining. Any outstanding documents should be submitted within " },
      { text: "{{Document_Submission_Deadline}}", bold: true },
      { text: " of your joining date:" },
    ]),

    bulletPoint("Signed offer letter and employment agreement;"),
    bulletPoint("Copies of educational certificates and transcripts;"),
    bulletPoint("Previous employment experience letters and relieving letters;"),
    bulletPoint("Government-issued photo identification (Aadhaar / PAN / Passport);"),
    bulletPoint("Proof of address;"),
    bulletPoint("Passport-size photographs ({{Number_of_Photos}} copies);"),
    bulletPoint("Bank account details for salary processing;"),
    bulletPoint("PF nomination form and UAN details (if applicable);"),
    bulletPoint("Medical fitness certificate (if applicable);"),
    bulletPoint("Signed Non-Disclosure Agreement and IP Assignment Agreement (if applicable)."),

    // ── PROBATION ──
    sectionHeading("Probation and Confirmation", HeadingLevel.HEADING_2),

    bodyParagraph([
      { text: "As mentioned in your offer letter, your employment is subject to a probation period of " },
      { text: "{{Probation_Period}}", bold: true },
      { text: ". During this period, your performance, conduct, and suitability for the role will be assessed. Upon successful completion of the probation period, you will receive a written confirmation of your employment. The Company reserves the right to extend the probation period if further evaluation is deemed necessary." },
    ]),

    // ── KEY CONTACTS ──
    sectionHeading("Key Contacts", HeadingLevel.HEADING_2),

    bulletPoint("HR Contact: {{HR_Contact_Name}} — {{HR_Contact_Email}}"),
    bulletPoint("IT Helpdesk: {{IT_Contact_Email}}"),
    bulletPoint("Reporting Manager: {{Reporting_Manager}} — {{Manager_Email}}"),
    bulletPoint("Admin/Facilities: {{Admin_Contact_Email}}"),

    // ── ACKNOWLEDGEMENT ──
    sectionHeading("Employee Acknowledgement", HeadingLevel.HEADING_2),

    bodyParagraph([
      { text: "I, " },
      { text: "{{Employee_Name}}", bold: true },
      { text: ", hereby acknowledge receipt of this Onboarding Letter and confirm the following:" },
    ]),

    bulletPoint("I have read and understood the contents of this letter;"),
    bulletPoint("I have received copies of the Company's policies and code of conduct;"),
    bulletPoint("I agree to comply with all applicable Company policies, procedures, and guidelines;"),
    bulletPoint("I have submitted or will submit all required joining documents within the specified timeframe."),

    spacer(3),

    bodyParagraph([
      { text: "Employee Signature: ________________________________________" },
    ]),
    bodyParagraph([
      { text: "Name: ", bold: true },
      { text: "{{Employee_Name}}" },
    ]),
    bodyParagraph([
      { text: "Employee ID: ", bold: true },
      { text: "{{Employee_ID}}" },
    ]),
    bodyParagraph([
      { text: "Date: ", bold: true },
      { text: "____________________" },
    ]),

    horizontalRule(),

    spacer(2),

    bodyParagraph([
      { text: "For and on behalf of " },
      { text: "{{Company_Name}}", bold: true },
      { text: ":" },
    ]),

    spacer(3),

    bodyParagraph([
      { text: "HR Manager Signature: ________________________________________" },
    ]),
    bodyParagraph([
      { text: "Name: ", bold: true },
      { text: "{{HR_Manager_Name}}" },
    ]),
    bodyParagraph([
      { text: "Designation: ", bold: true },
      { text: "{{HR_Manager_Designation}}" },
    ]),
    bodyParagraph([
      { text: "Date: ", bold: true },
      { text: "____________________" },
    ]),
  ];

  return {
    documentTitle: "Official Onboarding Letter",
    documentType: "Employee Welcome and Onboarding Confirmation",
    templateNumber: "T2L-HR-001",
    version: "2.0",
    revisionDate: "June 2026",
    sections,
  };
}
