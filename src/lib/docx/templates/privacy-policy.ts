// ============================================================
// Turn2Law — Privacy Policy Template Content
// Template ID: T2L-WEB-001 | ~8 pages
// ============================================================

import { Paragraph, HeadingLevel, PageBreak } from "docx";
import {
  sectionHeading,
  bodyParagraph,
  bulletPoint,
  spacer,
  buildDisputeResolution,
  buildSignatureBlocks,
} from "../sections";
import type { TemplateDocxContent } from "../generator";

export function buildPrivacyPolicyTemplate(): TemplateDocxContent {
  const sections: Paragraph[] = [

    bodyParagraph([
      { text: "Last Updated: ", bold: true },
      { text: "{{Effective_Date}}" },
    ]),

    spacer(1),

    bodyParagraph([
      { text: "{{Company_Name}}", bold: true },
      { text: " (\"we,\" \"us,\" \"our,\" or the \"Company\") is committed to protecting and respecting the privacy of individuals who access and use our services. This Privacy Policy describes how we collect, use, store, share, and protect your personal data when you visit our website at " },
      { text: "{{Website_URL}}", bold: true },
      { text: " (the \"Website\"), use our mobile applications (the \"App\"), or interact with our products and services (collectively, the \"Services\")." },
    ]),

    spacer(1),

    bodyParagraph([
      { text: "By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree with the practices described herein, please discontinue use of our Services immediately." },
    ]),

    // ── INFORMATION WE COLLECT ──
    sectionHeading("Information We Collect"),

    bodyParagraph([
      { text: "We collect information about you in several ways, as described below:" },
    ]),

    sectionHeading("Information You Provide Directly", HeadingLevel.HEADING_2),

    bodyParagraph([
      { text: "We collect personal data that you voluntarily provide to us when you:" },
    ]),

    bulletPoint("Create an account or register for our Services;"),
    bulletPoint("Fill out forms, applications, or surveys on our Website or App;"),
    bulletPoint("Subscribe to our newsletters, email communications, or promotional materials;"),
    bulletPoint("Make a purchase, payment, or financial transaction through our Services;"),
    bulletPoint("Contact us through customer support, feedback forms, or other communication channels;"),
    bulletPoint("Participate in events, webinars, promotions, or competitions hosted by us;"),
    bulletPoint("Submit content, comments, or other user-generated material."),

    spacer(1),

    bodyParagraph([
      { text: "The types of personal data we may collect include:" },
    ]),

    bulletPoint("Full name, title, and salutation;"),
    bulletPoint("Email address, telephone number, and postal address;"),
    bulletPoint("Date of birth, gender, and nationality;"),
    bulletPoint("Company name, job title, and professional credentials;"),
    bulletPoint("Payment information, including credit/debit card numbers, billing address, and bank account details (processed securely through PCI-DSS compliant payment processors);"),
    bulletPoint("Government-issued identification numbers (where required by law for identity verification);"),
    bulletPoint("Username, password, and other authentication credentials;"),
    bulletPoint("Preferences, interests, and communication settings."),

    sectionHeading("Information Collected Automatically", HeadingLevel.HEADING_2),

    bodyParagraph([
      { text: "When you access or use our Services, we automatically collect certain technical and usage information, including:" },
    ]),

    bulletPoint("Device information: hardware model, operating system and version, unique device identifiers, browser type and version, screen resolution, and language settings;"),
    bulletPoint("Network information: IP address, internet service provider, mobile carrier, and connection type;"),
    bulletPoint("Usage data: pages visited, links clicked, features used, time spent on pages, search queries, referral URLs, access dates and times, and interaction patterns;"),
    bulletPoint("Location data: approximate geographic location based on IP address, and precise location data if you grant us permission through your device settings;"),
    bulletPoint("Cookies and tracking technologies: information collected through cookies, web beacons, pixel tags, and similar tracking technologies (see our Cookie Policy below)."),

    sectionHeading("Information from Third Parties", HeadingLevel.HEADING_2),

    bodyParagraph([
      { text: "We may receive personal data about you from third-party sources, including:" },
    ]),

    bulletPoint("Social media platforms, if you log in or interact with our Services through social media accounts;"),
    bulletPoint("Analytics providers, advertising networks, and data enrichment services;"),
    bulletPoint("Business partners, affiliates, and service providers;"),
    bulletPoint("Publicly available sources, directories, and databases."),

    // ── HOW WE USE INFORMATION ──
    sectionHeading("How We Use Your Information"),

    bodyParagraph([
      { text: "We use your personal data for the following purposes:" },
    ]),

    bulletPoint("To provide, operate, maintain, and improve our Services;"),
    bulletPoint("To process transactions, payments, and fulfil orders;"),
    bulletPoint("To create and manage your account and authenticate your identity;"),
    bulletPoint("To communicate with you, including sending service-related notices, updates, security alerts, and administrative messages;"),
    bulletPoint("To personalise your experience and deliver content, features, and advertisements relevant to your interests;"),
    bulletPoint("To conduct research, analysis, and reporting to understand usage patterns and improve our Services;"),
    bulletPoint("To enforce our terms of service, policies, and legal agreements;"),
    bulletPoint("To detect, prevent, and address fraud, security breaches, and other harmful activities;"),
    bulletPoint("To comply with legal obligations, regulatory requirements, and law enforcement requests;"),
    bulletPoint("To send promotional communications, marketing materials, and offers, where you have consented to receive such communications or where permitted by applicable law."),

    // ── LEGAL BASIS ──
    sectionHeading("Legal Basis for Processing"),

    bodyParagraph([
      { text: "We process your personal data on the following legal bases under applicable data protection laws:" },
    ]),

    bulletPoint("Consent: Where you have given clear, informed, and unambiguous consent for us to process your personal data for specific purposes;"),
    bulletPoint("Contractual Necessity: Where processing is necessary for the performance of a contract to which you are a party or to take steps at your request before entering into a contract;"),
    bulletPoint("Legal Obligation: Where processing is necessary for compliance with a legal obligation to which we are subject;"),
    bulletPoint("Legitimate Interests: Where processing is necessary for the purposes of our legitimate interests or those of a third party, provided that such interests are not overridden by your fundamental rights and freedoms."),

    // ── DATA SHARING ──
    sectionHeading("Data Sharing and Disclosure"),

    bodyParagraph([
      { text: "We do not sell your personal data to third parties. We may share your personal data in the following circumstances:" },
    ]),

    bulletPoint("Service Providers: We engage trusted third-party service providers to perform functions on our behalf, including hosting, analytics, payment processing, email delivery, and customer support. These providers are contractually bound to process your data only on our instructions and in accordance with applicable data protection laws;"),
    bulletPoint("Business Transfers: In the event of a merger, acquisition, reorganisation, sale of assets, or bankruptcy, your personal data may be transferred to the acquiring entity, subject to the same privacy protections described in this Policy;"),
    bulletPoint("Legal Requirements: We may disclose your personal data if required to do so by law, regulation, legal process, or governmental request, or if we believe such disclosure is necessary to protect our rights, your safety, or the safety of others;"),
    bulletPoint("With Your Consent: We may share your personal data with third parties when you have given us explicit consent to do so;"),
    bulletPoint("Affiliates: We may share personal data with our parent company, subsidiaries, and affiliates for the purposes described in this Privacy Policy."),

    // ── DATA RETENTION ──
    sectionHeading("Data Retention"),

    bodyParagraph([
      { text: "We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, including to satisfy legal, regulatory, accounting, or reporting requirements. The retention period is determined based on:" },
    ]),

    bulletPoint("The nature and sensitivity of the personal data;"),
    bulletPoint("The purposes for which the data is processed;"),
    bulletPoint("Applicable legal, regulatory, and contractual retention requirements;"),
    bulletPoint("Our legitimate business interests, including record-keeping and dispute resolution."),

    spacer(1),

    bodyParagraph([
      { text: "When personal data is no longer required, we shall securely delete or anonymise it in accordance with our data retention policies and applicable data protection laws." },
    ]),

    // ── DATA SECURITY ──
    sectionHeading("Data Security"),

    bodyParagraph([
      { text: "We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, destruction, or loss, including:" },
    ]),

    bulletPoint("Encryption of data in transit using TLS/SSL protocols and encryption of data at rest using industry-standard encryption algorithms;"),
    bulletPoint("Access controls, including multi-factor authentication and role-based access permissions;"),
    bulletPoint("Regular security assessments, vulnerability scanning, and penetration testing;"),
    bulletPoint("Employee training on data protection, privacy, and security best practices;"),
    bulletPoint("Incident response plans and procedures for timely detection and response to data breaches."),

    spacer(1),

    bodyParagraph([
      { text: "While we strive to protect your personal data, no method of transmission over the Internet or method of electronic storage is completely secure. We cannot guarantee absolute security of your data." },
    ]),

    // ── YOUR RIGHTS ──
    sectionHeading("Your Rights"),

    bodyParagraph([
      { text: "Depending on your location and applicable data protection laws, you may have the following rights regarding your personal data:" },
    ]),

    bulletPoint("Right of Access: You have the right to request a copy of the personal data we hold about you;"),
    bulletPoint("Right to Rectification: You have the right to request correction of any inaccurate or incomplete personal data;"),
    bulletPoint("Right to Erasure: You have the right to request deletion of your personal data, subject to certain legal exceptions;"),
    bulletPoint("Right to Restriction: You have the right to request that we restrict the processing of your personal data in certain circumstances;"),
    bulletPoint("Right to Data Portability: You have the right to receive your personal data in a structured, commonly used, and machine-readable format;"),
    bulletPoint("Right to Object: You have the right to object to the processing of your personal data for direct marketing purposes or where processing is based on legitimate interests;"),
    bulletPoint("Right to Withdraw Consent: Where processing is based on your consent, you have the right to withdraw your consent at any time without affecting the lawfulness of processing based on consent before its withdrawal;"),
    bulletPoint("Right to Lodge a Complaint: You have the right to lodge a complaint with the relevant data protection supervisory authority."),

    spacer(1),

    bodyParagraph([
      { text: "To exercise any of these rights, please contact us at " },
      { text: "{{Privacy_Contact_Email}}", bold: true },
      { text: ". We will respond to your request within the timeframe required by applicable law, typically within thirty (30) days." },
    ]),

    // ── COOKIES ──
    sectionHeading("Cookie Policy"),

    bodyParagraph([
      { text: "Our Website uses cookies and similar tracking technologies to enhance your browsing experience, analyse usage patterns, and deliver targeted content and advertisements. The types of cookies we use include:" },
    ]),

    bulletPoint("Essential Cookies: These cookies are strictly necessary for the operation of our Website. They enable core functionality such as page navigation, access to secure areas, and session management. These cookies cannot be disabled;"),
    bulletPoint("Performance Cookies: These cookies collect anonymous, aggregated information about how visitors use our Website, including pages visited, time spent on pages, and error messages encountered. We use this data to improve the performance and usability of our Website;"),
    bulletPoint("Functional Cookies: These cookies enable enhanced functionality and personalisation, such as remembering your preferences, language settings, and login details;"),
    bulletPoint("Targeting/Advertising Cookies: These cookies are used to deliver advertisements relevant to your interests and to measure the effectiveness of our advertising campaigns. They may be set by our advertising partners and used to build a profile of your interests."),

    spacer(1),

    bodyParagraph([
      { text: "You can manage your cookie preferences through your browser settings or through our cookie consent mechanism. Please note that disabling certain cookies may affect the functionality of our Website." },
    ]),

    // ── INTERNATIONAL TRANSFERS ──
    sectionHeading("International Data Transfers"),

    bodyParagraph([
      { text: "Your personal data may be transferred to, stored in, and processed in countries other than your country of residence, including countries that may not provide the same level of data protection. Where such transfers occur, we ensure that appropriate safeguards are in place, including:" },
    ]),

    bulletPoint("Standard Contractual Clauses approved by the relevant data protection authority;"),
    bulletPoint("Adequacy decisions by the relevant data protection authority;"),
    bulletPoint("Binding Corporate Rules;"),
    bulletPoint("Your explicit consent to the transfer."),

    // ── CHILDREN ──
    sectionHeading("Children's Privacy"),

    bodyParagraph([
      { text: "Our Services are not directed to individuals under the age of " },
      { text: "{{Minimum_Age}}", bold: true },
      { text: ". We do not knowingly collect personal data from children. If we become aware that we have collected personal data from a child without appropriate parental consent, we will take reasonable steps to delete such data promptly. If you believe that we may have collected personal data from a child, please contact us at " },
      { text: "{{Privacy_Contact_Email}}", bold: true },
      { text: "." },
    ]),

    // ── CHANGES ──
    sectionHeading("Changes to This Privacy Policy"),

    bodyParagraph([
      { text: "We reserve the right to update or modify this Privacy Policy at any time to reflect changes in our practices, legal requirements, or industry standards. When we make material changes, we will:" },
    ]),

    bulletPoint("Update the \"Last Updated\" date at the top of this Privacy Policy;"),
    bulletPoint("Provide prominent notice on our Website or through other appropriate communication channels;"),
    bulletPoint("Where required by applicable law, seek your consent to the updated terms."),

    spacer(1),

    bodyParagraph([
      { text: "We encourage you to review this Privacy Policy periodically to stay informed about how we protect your personal data." },
    ]),

    // ── CONTACT ──
    sectionHeading("Contact Us"),

    bodyParagraph([
      { text: "If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:" },
    ]),

    spacer(1),

    bodyParagraph([
      { text: "{{Company_Name}}", bold: true },
    ]),
    bodyParagraph([
      { text: "Address: {{Registered_Address}}" },
    ]),
    bodyParagraph([
      { text: "Email: {{Privacy_Contact_Email}}" },
    ]),
    bodyParagraph([
      { text: "Phone: {{Contact_Phone}}" },
    ]),

    spacer(1),

    bodyParagraph([
      { text: "Data Protection Officer: ", bold: true },
      { text: "{{DPO_Name}}" },
    ]),
    bodyParagraph([
      { text: "Email: ", bold: true },
      { text: "{{DPO_Email}}" },
    ]),
  ];

  return {
    documentTitle: "Privacy Policy",
    documentType: "Website Privacy Policy — GDPR and Data Protection Compliant",
    templateNumber: "T2L-WEB-001",
    version: "2.0",
    revisionDate: "June 2026",
    sections,
  };
}
