// ============================================================
// Turn2Law — Terms of Service Template Content
// Template ID: T2L-WEB-002 | ~10 pages
// ============================================================

import { Paragraph, HeadingLevel, PageBreak } from "docx";
import { sectionHeading, bodyParagraph, bulletPoint, spacer } from "../sections";
import type { TemplateDocxContent } from "../generator";

export function buildTermsOfServiceTemplate(): TemplateDocxContent {
  const sections: Paragraph[] = [

    bodyParagraph([
      { text: "Last Updated: ", bold: true },
      { text: "{{Effective_Date}}" },
    ]),

    spacer(1),

    bodyParagraph([
      { text: "These Terms of Service (the \"Terms\") govern your access to and use of the website located at " },
      { text: "{{Website_URL}}", bold: true },
      { text: " (the \"Website\"), the mobile applications (the \"App\"), and all related products, services, features, content, and functionalities offered by " },
      { text: "{{Company_Name}}", bold: true },
      { text: " (\"we,\" \"us,\" \"our,\" or the \"Company\") (collectively, the \"Services\")." },
    ]),

    bodyParagraph([
      { text: "PLEASE READ THESE TERMS CAREFULLY BEFORE USING OUR SERVICES. BY ACCESSING OR USING ANY PART OF THE SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS AND OUR PRIVACY POLICY. IF YOU DO NOT AGREE TO THESE TERMS, YOU MUST NOT ACCESS OR USE THE SERVICES.", bold: true },
    ]),

    // ── ACCEPTANCE OF TERMS ──
    sectionHeading("Acceptance of Terms"),

    bodyParagraph([
      { text: "By creating an account, clicking an acceptance button, completing a registration process, or otherwise accessing or using the Services, you enter into a binding legal agreement with the Company. If you are using the Services on behalf of a business, organisation, or other legal entity, you represent and warrant that you have the authority to bind that entity to these Terms, in which case \"you\" and \"your\" shall refer to that entity." },
    ]),

    bodyParagraph([
      { text: "We reserve the right to modify, update, or revise these Terms at any time. When we make material changes, we will update the \"Last Updated\" date and may provide additional notice through the Services or via email. Your continued use of the Services after any such changes constitutes your acceptance of the revised Terms. If you do not agree to the revised Terms, you must discontinue use of the Services." },
    ]),

    // ── ELIGIBILITY ──
    sectionHeading("Eligibility"),

    bodyParagraph([
      { text: "You must meet the following eligibility requirements to use our Services:" },
    ]),

    bulletPoint("You must be at least {{Minimum_Age}} years of age, or the age of legal majority in your jurisdiction, whichever is greater;"),
    bulletPoint("You must have the legal capacity to enter into binding contracts;"),
    bulletPoint("You must not have been previously suspended, removed, or banned from using our Services;"),
    bulletPoint("Your use of the Services must not violate any applicable laws or regulations in your jurisdiction."),

    // ── USER ACCOUNTS ──
    sectionHeading("User Accounts"),

    bodyParagraph([
      { text: "Registration. ", bold: true },
      { text: "To access certain features of the Services, you may be required to create a user account. When registering, you agree to provide accurate, current, and complete information as prompted by the registration form, and to update such information to keep it accurate, current, and complete." },
    ]),

    bodyParagraph([
      { text: "Account Security. ", bold: true },
      { text: "You are solely responsible for maintaining the confidentiality and security of your account credentials, including your username and password. You agree to: (a) create a strong, unique password; (b) not share your account credentials with any other person; (c) immediately notify us of any unauthorised use of your account or any other breach of security; and (d) ensure that you log out of your account at the end of each session when accessing the Services on a shared device." },
    ]),

    bodyParagraph([
      { text: "Account Responsibility. ", bold: true },
      { text: "You are fully responsible for all activities that occur under your account, whether or not authorised by you. We shall not be liable for any loss, damage, or expense arising from your failure to comply with your account security obligations." },
    ]),

    // ── ACCEPTABLE USE ──
    sectionHeading("Acceptable Use Policy"),

    bodyParagraph([
      { text: "You agree to use the Services only for lawful purposes and in compliance with these Terms. You shall not:" },
    ]),

    bulletPoint("Use the Services in any manner that violates applicable local, state, national, or international laws, regulations, or ordinances;"),
    bulletPoint("Use the Services for any fraudulent, misleading, or deceptive purpose;"),
    bulletPoint("Upload, transmit, or distribute any content that is unlawful, harmful, threatening, abusive, harassing, tortious, defamatory, vulgar, obscene, invasive of another's privacy, hateful, or racially or ethnically objectionable;"),
    bulletPoint("Upload, transmit, or distribute any content that infringes any patent, trademark, copyright, trade secret, or other proprietary right of any party;"),
    bulletPoint("Impersonate any person or entity, or falsely state or otherwise misrepresent your affiliation with a person or entity;"),
    bulletPoint("Interfere with, disrupt, or attempt to gain unauthorised access to the Services, servers, networks, or systems connected to the Services;"),
    bulletPoint("Introduce viruses, trojans, worms, logic bombs, or other malicious or technologically harmful material;"),
    bulletPoint("Use any robot, spider, scraper, or other automated means to access the Services without our prior written consent;"),
    bulletPoint("Attempt to reverse engineer, decompile, disassemble, or otherwise discover the source code or underlying algorithms of the Services;"),
    bulletPoint("Remove, alter, or obscure any copyright, trademark, or other proprietary notices from the Services;"),
    bulletPoint("Use the Services to collect, harvest, or store personal data of other users without their consent;"),
    bulletPoint("Use the Services in a manner that could overburden, impair, or compromise the integrity or performance of the Services or interfere with other users' enjoyment of the Services."),

    // ── INTELLECTUAL PROPERTY ──
    sectionHeading("Intellectual Property Rights"),

    bodyParagraph([
      { text: "Company IP. ", bold: true },
      { text: "The Services and all content, features, functionality, software, text, displays, images, video, audio, design, and arrangement thereof (collectively, the \"Company Content\") are owned by the Company, its licensors, or other providers of such material and are protected by copyright, trademark, patent, trade secret, and other intellectual property and proprietary rights laws. You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the Company Content without the Company's prior written consent, except as permitted by these Terms." },
    ]),

    bodyParagraph([
      { text: "Trademarks. ", bold: true },
      { text: "The Company's name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of the Company or its affiliates or licensors. You must not use such marks without the prior written permission of the Company." },
    ]),

    bodyParagraph([
      { text: "User Content. ", bold: true },
      { text: "You retain ownership of any content you submit, post, or display on or through the Services (\"User Content\"). By submitting User Content, you grant us a worldwide, non-exclusive, royalty-free, sublicensable, and transferable licence to use, reproduce, modify, adapt, publish, translate, distribute, and display such User Content in connection with the Services and our business. You represent and warrant that you own or have the necessary rights and permissions to submit the User Content and to grant the licence described above." },
    ]),

    // ── PURCHASES AND PAYMENTS ──
    sectionHeading("Purchases, Payments, and Subscriptions"),

    bodyParagraph([
      { text: "If you purchase any product, subscription, or service through the Services (each, a \"Purchase\"), you agree to pay all applicable fees, charges, and taxes. All payments are processed through our third-party payment processor. We do not store your full payment card details on our servers." },
    ]),

    bodyParagraph([
      { text: "Pricing. ", bold: true },
      { text: "All prices are listed in " },
      { text: "{{Currency}}", bold: true },
      { text: " and are exclusive of applicable taxes unless stated otherwise. We reserve the right to change our prices at any time. Price changes will not affect existing, active subscriptions until the next renewal period." },
    ]),

    bodyParagraph([
      { text: "Refund Policy. ", bold: true },
      { text: "{{Refund_Policy_Description}}" },
    ]),

    bodyParagraph([
      { text: "Subscription Renewal. ", bold: true },
      { text: "If you subscribe to a recurring service, your subscription will automatically renew at the end of each billing period at the then-current rate unless you cancel before the renewal date. You may cancel your subscription at any time through your account settings or by contacting us at " },
      { text: "{{Support_Email}}", bold: true },
      { text: "." },
    ]),

    // ── DISCLAIMER ──
    sectionHeading("Disclaimers"),

    bodyParagraph([
      { text: "THE SERVICES AND ALL CONTENT, FEATURES, AND FUNCTIONALITY ARE PROVIDED ON AN \"AS IS\" AND \"AS AVAILABLE\" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND ACCURACY.", bold: true },
    ]),

    bodyParagraph([
      { text: "WE DO NOT WARRANT THAT: (A) THE SERVICES WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE; (B) THE RESULTS OBTAINED FROM THE USE OF THE SERVICES WILL BE ACCURATE OR RELIABLE; (C) ANY DEFECTS OR ERRORS IN THE SERVICES WILL BE CORRECTED; OR (D) THE SERVICES OR THE SERVERS THAT MAKE THE SERVICES AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.", bold: true },
    ]),

    // ── LIMITATION OF LIABILITY ──
    sectionHeading("Limitation of Liability"),

    bodyParagraph([
      { text: "TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL THE COMPANY, ITS AFFILIATES, DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF OR INABILITY TO USE THE SERVICES.", bold: true },
    ]),

    bodyParagraph([
      { text: "THE COMPANY'S TOTAL AGGREGATE LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR YOUR USE OF THE SERVICES SHALL NOT EXCEED THE GREATER OF: (A) THE AMOUNT YOU HAVE PAID TO THE COMPANY IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO THE CLAIM; OR (B) " },
      { text: "{{Liability_Cap_Amount}}", bold: true },
      { text: "." },
    ]),

    // ── INDEMNIFICATION ──
    sectionHeading("Indemnification"),

    bodyParagraph([
      { text: "You agree to indemnify, defend, and hold harmless the Company and its affiliates, directors, officers, employees, agents, licensors, and service providers from and against any and all claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising out of or related to: (a) your use of the Services; (b) your violation of these Terms; (c) your violation of any applicable law or regulation; (d) your infringement of any intellectual property or other rights of any third party; or (e) any User Content you submit, post, or transmit through the Services." },
    ]),

    // ── GOVERNING LAW ──
    sectionHeading("Governing Law and Dispute Resolution"),

    bodyParagraph([
      { text: "These Terms shall be governed by and construed in accordance with the laws of " },
      { text: "{{Jurisdiction}}", bold: true },
      { text: ", without regard to its conflict of laws principles. Any dispute, controversy, or claim arising out of or relating to these Terms or the Services shall be resolved as follows:" },
    ]),

    bulletPoint("Informal Resolution: You agree to first attempt to resolve any dispute informally by contacting us at {{Support_Email}}. We will attempt to resolve the dispute through good-faith negotiation within thirty (30) days."),
    bulletPoint("Arbitration: If the dispute is not resolved informally, it shall be submitted to binding arbitration in accordance with the rules of {{Arbitration_Body}}, with the seat of arbitration in {{Arbitration_Seat}}."),
    bulletPoint("Class Action Waiver: You agree that any proceedings to resolve disputes will be conducted only on an individual basis and not in a class, consolidated, or representative action."),

    // ── TERMINATION ──
    sectionHeading("Termination"),

    bodyParagraph([
      { text: "We may suspend or terminate your access to the Services at any time, with or without cause, and with or without notice, including if we believe you have violated these Terms. Upon termination: (a) your right to use the Services will immediately cease; (b) we may delete your account and all associated data; (c) all provisions of these Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability." },
    ]),

    bodyParagraph([
      { text: "You may terminate your account at any time by contacting us at " },
      { text: "{{Support_Email}}", bold: true },
      { text: " or through your account settings." },
    ]),

    // ── MISCELLANEOUS ──
    sectionHeading("General Provisions"),

    bodyParagraph([
      { text: "Entire Agreement. ", bold: true },
      { text: "These Terms, together with our Privacy Policy and any other agreements or policies referenced herein, constitute the entire agreement between you and the Company regarding the Services." },
    ]),

    bodyParagraph([
      { text: "Severability. ", bold: true },
      { text: "If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions shall continue in full force and effect." },
    ]),

    bodyParagraph([
      { text: "Waiver. ", bold: true },
      { text: "No waiver of any provision of these Terms shall be deemed a further or continuing waiver of such provision or any other provision." },
    ]),

    bodyParagraph([
      { text: "Assignment. ", bold: true },
      { text: "You may not assign or transfer these Terms without our prior written consent. We may assign these Terms without restriction." },
    ]),

    bodyParagraph([
      { text: "Force Majeure. ", bold: true },
      { text: "We shall not be liable for any failure or delay in performance resulting from causes beyond our reasonable control, including but not limited to acts of God, natural disasters, epidemics, war, terrorism, government actions, or failures of third-party services." },
    ]),

    // ── CONTACT ──
    sectionHeading("Contact Information"),

    bodyParagraph([
      { text: "If you have any questions or concerns about these Terms, please contact us at:" },
    ]),

    spacer(1),

    bodyParagraph([{ text: "{{Company_Name}}", bold: true }]),
    bodyParagraph([{ text: "Address: {{Registered_Address}}" }]),
    bodyParagraph([{ text: "Email: {{Support_Email}}" }]),
    bodyParagraph([{ text: "Phone: {{Contact_Phone}}" }]),
  ];

  return {
    documentTitle: "Terms of Service",
    documentType: "Website and Application Terms of Service",
    templateNumber: "T2L-WEB-002",
    version: "2.0",
    revisionDate: "June 2026",
    sections,
  };
}
