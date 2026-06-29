// ============================================================
// Turn2Law — Partnership Agreement Template Content
// Template ID: T2L-BUS-002 | ~10 pages
// ============================================================

import { Paragraph, HeadingLevel, PageBreak } from "docx";
import {
  sectionHeading, bodyParagraph, bulletPoint, spacer,
  buildPartiesSection, buildRecitals, buildDefinitions,
  buildConfidentialitySection, buildIndemnification,
  buildLimitationOfLiability, buildForceMajeure,
  buildDisputeResolution, buildBoilerplate, buildSignatureBlocks,
} from "../sections";
import type { TemplateDocxContent } from "../generator";

export function buildPartnershipAgreementTemplate(): TemplateDocxContent {
  const sections: Paragraph[] = [

    ...buildPartiesSection({
      partyALabel: "Partner A",
      partyADescription: "an individual/entity with PAN {{First_Party_PAN}}, residing/registered at {{First_Party_Address}}",
      partyBLabel: "Partner B",
      partyBDescription: "an individual/entity with PAN {{Second_Party_PAN}}, residing/registered at {{Second_Party_Address}}",
    }),

    ...buildRecitals([
      "the Partners desire to establish a partnership under the name \"{{Partnership_Name}}\" (the \"Firm\") for the purpose of conducting business in the field of {{Business_Description}};",
      "the Partners wish to define their respective rights, duties, obligations, and contributions with respect to the formation, management, and operation of the Firm;",
      "the Partners intend this Agreement to govern the relationship between the Partners and to provide a framework for the orderly management and, if necessary, dissolution of the Firm.",
    ]),

    ...buildDefinitions([
      { term: "Firm", definition: "the partnership established under the name \"{{Partnership_Name}}\" pursuant to this Agreement." },
      { term: "Capital Account", definition: "the account maintained for each Partner reflecting their capital contributions, share of profits and losses, and withdrawals." },
      { term: "Partnership Interest", definition: "a Partner's share of the profits, losses, and capital of the Firm." },
      { term: "Net Profits", definition: "the gross revenue of the Firm less all operating expenses, overheads, taxes, and reserves for a given accounting period." },
      { term: "Fiscal Year", definition: "the financial year of the Firm, commencing on {{Fiscal_Year_Start}} and ending on {{Fiscal_Year_End}}." },
    ]),

    sectionHeading("Formation and Business"),
    bodyParagraph([
      { text: "The Partners hereby form a partnership under the Indian Partnership Act, 1932 (or applicable partnership law of " },
      { text: "{{Jurisdiction}}", bold: true },
      { text: ") under the name " },
      { text: "\"{{Partnership_Name}}\"", bold: true },
      { text: ". The principal place of business of the Firm shall be at " },
      { text: "{{Business_Address}}", bold: true },
      { text: ". The Firm shall engage in the business of " },
      { text: "{{Business_Description}}", bold: true },
      { text: " and such other related activities as the Partners may agree upon." },
    ]),

    sectionHeading("Capital Contributions"),
    bodyParagraph([{ text: "Each Partner shall contribute the following initial capital to the Firm:" }]),
    bulletPoint("Partner A: {{Partner_A_Capital}} in the form of {{Partner_A_Capital_Type}} (cash / assets / services);"),
    bulletPoint("Partner B: {{Partner_B_Capital}} in the form of {{Partner_B_Capital_Type}} (cash / assets / services)."),
    spacer(1),
    bodyParagraph([
      { text: "Additional capital contributions may be required from time to time as determined by mutual agreement of all Partners. No Partner shall be obligated to contribute additional capital without their written consent. If a Partner fails to make a required additional contribution, the other Partner may make such contribution, and the non-contributing Partner's Partnership Interest shall be diluted proportionately." },
    ]),
    bodyParagraph([
      { text: "Interest on Capital. ", bold: true },
      { text: "Each Partner shall receive interest on their capital contribution at the rate of " },
      { text: "{{Capital_Interest_Rate}}", bold: true },
      { text: " per annum, calculated on the closing balance of their Capital Account for each Fiscal Year, payable before distribution of Net Profits." },
    ]),

    sectionHeading("Profit and Loss Sharing"),
    bodyParagraph([
      { text: "The Net Profits and losses of the Firm shall be shared between the Partners in the following ratio:" },
    ]),
    bulletPoint("Partner A: {{Partner_A_Profit_Share}};"),
    bulletPoint("Partner B: {{Partner_B_Profit_Share}}."),
    spacer(1),
    bodyParagraph([
      { text: "Distribution of profits shall be made on a " },
      { text: "{{Distribution_Frequency}}", bold: true },
      { text: " basis, after setting aside adequate reserves for working capital, taxes, contingencies, and future investments as agreed by the Partners. Losses shall be borne in the same ratio as profits unless otherwise agreed in writing." },
    ]),

    sectionHeading("Management and Decision-Making"),
    bodyParagraph([{ text: "The management and daily operations of the Firm shall be conducted as follows:" }]),
    bodyParagraph([
      { text: "Partner A ", bold: true },
      { text: "shall be primarily responsible for " },
      { text: "{{Partner_A_Responsibilities}}", bold: true },
      { text: "." },
    ]),
    bodyParagraph([
      { text: "Partner B ", bold: true },
      { text: "shall be primarily responsible for " },
      { text: "{{Partner_B_Responsibilities}}", bold: true },
      { text: "." },
    ]),
    spacer(1),
    bodyParagraph([{ text: "Major Decisions. ", bold: true }, { text: "The following decisions shall require the unanimous consent of all Partners:" }]),
    bulletPoint("Admission of new partners or expulsion of existing partners;"),
    bulletPoint("Borrowing or lending money on behalf of the Firm exceeding {{Borrowing_Threshold}};"),
    bulletPoint("Entering into contracts exceeding {{Contract_Threshold}} in value;"),
    bulletPoint("Acquisition, sale, or encumbrance of real property or major assets;"),
    bulletPoint("Changes to the nature of the Firm's business;"),
    bulletPoint("Amendment of this Agreement;"),
    bulletPoint("Dissolution of the Firm."),

    sectionHeading("Drawings and Withdrawals"),
    bodyParagraph([
      { text: "Each Partner may draw from the Firm's account up to " },
      { text: "{{Monthly_Drawing_Limit}}", bold: true },
      { text: " per month for personal expenses (\"Drawings\"). Drawings in excess of this limit require the written consent of all Partners. All Drawings shall be debited against the respective Partner's Capital Account. Interest on excess Drawings shall be charged at " },
      { text: "{{Drawing_Interest_Rate}}", bold: true },
      { text: " per annum." },
    ]),

    sectionHeading("Banking and Accounts"),
    bodyParagraph([
      { text: "The Firm shall open and maintain a partnership bank account at " },
      { text: "{{Bank_Name}}", bold: true },
      { text: ". All business transactions shall be conducted through this account. The account shall be operated " },
      { text: "{{Account_Operation_Mode}}", bold: true },
      { text: " (jointly / singly by either Partner). The Firm shall maintain proper books of account, which shall be audited annually by a qualified chartered accountant." },
    ]),

    sectionHeading("Admission of New Partners"),
    bodyParagraph([
      { text: "No new partner shall be admitted to the Firm without the unanimous written consent of all existing Partners. Upon admission, the new partner shall contribute capital as agreed upon and the profit-sharing ratio shall be revised accordingly. The incoming partner shall execute a supplementary agreement or a revised Partnership Agreement." },
    ]),

    sectionHeading("Retirement and Expulsion"),
    bodyParagraph([
      { text: "Retirement. ", bold: true },
      { text: "A Partner may retire from the Firm by providing " },
      { text: "{{Retirement_Notice_Period}}", bold: true },
      { text: " prior written notice to the other Partners. Upon retirement, the retiring Partner's Capital Account balance, including their share of undistributed profits, goodwill, and any other amounts due, shall be settled within " },
      { text: "{{Settlement_Period}}", bold: true },
      { text: " of the effective date of retirement." },
    ]),
    bodyParagraph([
      { text: "Expulsion. ", bold: true },
      { text: "A Partner may be expelled from the Firm by the unanimous decision of the other Partners if such Partner: (a) commits fraud or acts dishonestly in matters of the Firm; (b) persistently breaches this Agreement; (c) is convicted of a criminal offence; (d) becomes bankrupt or insolvent; or (e) is unable to perform their duties due to incapacity for a continuous period exceeding " },
      { text: "{{Incapacity_Period}}", bold: true },
      { text: "." },
    ]),

    sectionHeading("Death of a Partner"),
    bodyParagraph([
      { text: "Upon the death of a Partner, the Firm shall not automatically dissolve. The surviving Partners shall have the option to: (a) continue the Firm by purchasing the deceased Partner's interest at Fair Market Value; (b) admit the deceased Partner's legal heirs as partners (subject to their consent); or (c) dissolve the Firm. The deceased Partner's Capital Account balance, share of profits, and goodwill shall be settled with their legal heirs within " },
      { text: "{{Death_Settlement_Period}}", bold: true },
      { text: "." },
    ]),

    sectionHeading("Non-Compete"),
    bodyParagraph([
      { text: "During the term of this Agreement and for a period of " },
      { text: "{{Non_Compete_Period}}", bold: true },
      { text: " following a Partner's departure from the Firm (to the extent enforceable under applicable law), no Partner shall directly or indirectly engage in, own, manage, operate, or participate in any business that competes with the Firm's business within " },
      { text: "{{Geographic_Scope}}", bold: true },
      { text: "." },
    ]),

    sectionHeading("Dissolution"),
    bodyParagraph([
      { text: "The Firm may be dissolved: (a) by mutual written agreement of all Partners; (b) by order of a court of competent jurisdiction; (c) upon the occurrence of an event making it unlawful to carry on the business; or (d) as otherwise provided by applicable law. Upon dissolution, the Firm's assets shall be liquidated and the proceeds applied in the following order: (i) payment of debts and liabilities to third-party creditors; (ii) repayment of loans by Partners; (iii) repayment of Capital Contributions; (iv) distribution of remaining surplus to Partners in their profit-sharing ratio." },
    ]),

    ...buildConfidentialitySection(),
    ...buildIndemnification(),
    ...buildForceMajeure(),
    ...buildDisputeResolution(),
    ...buildBoilerplate(),
    ...buildSignatureBlocks("Partner A", "Partner B"),
  ];

  return {
    documentTitle: "Partnership Agreement",
    documentType: "General Partnership Agreement",
    templateNumber: "T2L-BUS-002",
    version: "2.0",
    revisionDate: "June 2026",
    sections,
  };
}
