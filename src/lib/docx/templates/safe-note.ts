// ============================================================
// Turn2Law — SAFE Note Agreement Template Content
// Template ID: T2L-STR-002 | ~6 pages
// ============================================================

import { Paragraph, HeadingLevel, PageBreak } from "docx";
import {
  sectionHeading, bodyParagraph, bulletPoint, spacer,
  buildPartiesSection, buildRecitals, buildDefinitions,
  buildDisputeResolution, buildBoilerplate, buildSignatureBlocks,
} from "../sections";
import type { TemplateDocxContent } from "../generator";

export function buildSafeNoteTemplate(): TemplateDocxContent {
  const sections: Paragraph[] = [

    ...buildPartiesSection({
      partyALabel: "Company",
      partyADescription: "a private limited company incorporated under the laws of {{Jurisdiction}}, having its registered office at {{Company_Address}}",
      partyBLabel: "Investor",
      partyBDescription: "an individual/entity having their address at {{Investor_Address}}",
    }),

    ...buildRecitals([
      "the Company is an early-stage startup engaged in the business of {{Business_Description}} and is seeking capital to fund its operations, product development, and growth;",
      "the Investor desires to provide capital to the Company in exchange for the right to receive equity in the Company upon the occurrence of certain events as described herein;",
      "the Parties wish to enter into this Simple Agreement for Future Equity (\"SAFE\") to set forth the terms upon which the Investor is making an investment in the Company;",
      "this SAFE is intended to be a simple and efficient instrument for early-stage investment, avoiding the complexity and cost of a priced equity financing round.",
    ]),

    ...buildDefinitions([
      { term: "Purchase Amount", definition: "{{Purchase_Amount}}, being the amount of the Investor's investment in the Company under this SAFE." },
      { term: "Valuation Cap", definition: "{{Valuation_Cap}}, being the maximum company valuation at which the Purchase Amount will convert into equity." },
      { term: "Discount Rate", definition: "{{Discount_Rate}}, being the discount applied to the price per share in a subsequent Equity Financing." },
      { term: "Equity Financing", definition: "a bona fide transaction or series of transactions in which the Company issues and sells preferred equity securities to one or more investors for the primary purpose of raising capital, with aggregate gross proceeds of at least {{Equity_Financing_Threshold}} (excluding conversion of SAFEs and other convertible instruments)." },
      { term: "Liquidity Event", definition: "a Change of Control or an Initial Public Offering." },
      { term: "Change of Control", definition: "any transaction or series of related transactions in which: (a) more than fifty percent (50%) of the Company's voting power is transferred to a third party; (b) all or substantially all of the Company's assets are sold or transferred; or (c) the Company merges or consolidates with another entity where the Company's shareholders hold less than fifty percent (50%) of the resulting entity." },
      { term: "Dissolution Event", definition: "the voluntary termination of operations, a general assignment for the benefit of creditors, or any other liquidation, dissolution, or winding up of the Company (excluding a Liquidity Event)." },
      { term: "SAFE Price", definition: "the price per share equal to the Valuation Cap divided by the Company Capitalisation." },
      { term: "Discount Price", definition: "the price per share of the Standard Preferred Stock sold in the Equity Financing multiplied by the Discount Rate." },
      { term: "Conversion Price", definition: "the lower of the SAFE Price and the Discount Price (or if only one is applicable, such applicable price)." },
      { term: "Company Capitalisation", definition: "the sum of: (a) all shares of capital stock issued and outstanding; (b) all shares reserved for issuance under any equity incentive plan; (c) all shares issuable upon conversion of outstanding convertible instruments; calculated on a fully-diluted basis, but excluding the shares issuable under this SAFE." },
    ]),

    sectionHeading("Investment"),
    bodyParagraph([
      { text: "The Investor hereby agrees to invest the Purchase Amount of " },
      { text: "{{Purchase_Amount}}", bold: true },
      { text: " in the Company, and the Company agrees to accept such investment, on the terms and conditions set forth in this SAFE. The Purchase Amount shall be remitted to the Company within " },
      { text: "{{Payment_Period}}", bold: true },
      { text: " of the execution of this SAFE by wire transfer to the Company's designated bank account." },
    ]),

    sectionHeading("Conversion Events"),

    sectionHeading("Equity Financing Conversion", HeadingLevel.HEADING_2),
    bodyParagraph([
      { text: "Upon the closing of an Equity Financing, this SAFE shall automatically convert into shares of the series of preferred stock issued in the Equity Financing (the \"SAFE Preferred Stock\"). The number of shares of SAFE Preferred Stock issued shall be equal to the Purchase Amount divided by the Conversion Price. The SAFE Preferred Stock shall have the same rights, preferences, privileges, and restrictions as the preferred stock sold in the Equity Financing, subject to the following:" },
    ]),
    bulletPoint("The Conversion Price shall be the lower of: (a) the SAFE Price (Purchase Amount converted at the Valuation Cap); and (b) the Discount Price (the price per share in the Equity Financing multiplied by the Discount Rate);"),
    bulletPoint("The SAFE Preferred Stock shall be issued on the same terms and conditions as the preferred stock issued to the lead investor in the Equity Financing;"),
    bulletPoint("Conversion shall occur automatically without any further action by the Investor."),

    sectionHeading("Liquidity Event", HeadingLevel.HEADING_2),
    bodyParagraph([
      { text: "If a Liquidity Event occurs before the conversion of this SAFE pursuant to an Equity Financing, the Investor shall, at the Investor's option, either:" },
    ]),
    bulletPoint("Receive a cash payment equal to the Purchase Amount; or"),
    bulletPoint("Receive shares of the Company's common stock equal to the Purchase Amount divided by the SAFE Price, immediately prior to the closing of the Liquidity Event."),

    sectionHeading("Dissolution Event", HeadingLevel.HEADING_2),
    bodyParagraph([
      { text: "If a Dissolution Event occurs before the conversion of this SAFE, the Company shall pay the Investor an amount equal to the Purchase Amount from the Company's remaining assets, prior to any distribution to holders of the Company's common stock. The Investor's right to receive payment under this section is subordinate to the payment of the Company's outstanding debts and liabilities to third-party creditors." },
    ]),

    sectionHeading("Most Favored Nation"),
    bodyParagraph([
      { text: "If the Company issues any subsequent SAFEs or convertible instruments with terms more favourable to the holder than the terms of this SAFE (including a lower valuation cap or higher discount rate), the Investor shall have the right, upon written notice to the Company, to amend this SAFE to incorporate such more favourable terms. This right shall not apply to SAFEs or instruments issued to strategic investors where the terms are specifically negotiated based on a strategic relationship." },
    ]),

    sectionHeading("Pro-Rata Rights"),
    bodyParagraph([
      { text: "The Investor shall have the right to participate in any Equity Financing by purchasing additional shares at the same price per share as the other investors in such Equity Financing, up to an amount equal to the Investor's pro-rata share. The Investor's pro-rata share shall be calculated as the ratio of the number of shares issuable upon conversion of this SAFE to the total capitalisation of the Company on a fully-diluted basis." },
    ]),

    sectionHeading("Representations and Warranties of the Company"),
    bodyParagraph([{ text: "The Company represents and warrants to the Investor that:" }]),
    bulletPoint("The Company is duly organised, validly existing, and in good standing under the laws of its jurisdiction of incorporation;"),
    bulletPoint("The execution and performance of this SAFE has been duly authorised by all necessary corporate action;"),
    bulletPoint("This SAFE constitutes a valid and binding obligation of the Company, enforceable against the Company in accordance with its terms;"),
    bulletPoint("The Company has the requisite corporate power and authority to issue the SAFE Preferred Stock upon conversion;"),
    bulletPoint("The issuance of this SAFE does not conflict with any existing agreement to which the Company is a party."),

    sectionHeading("Representations and Warranties of the Investor"),
    bodyParagraph([{ text: "The Investor represents and warrants to the Company that:" }]),
    bulletPoint("The Investor has the legal capacity and authority to enter into this SAFE;"),
    bulletPoint("The Investor is an \"accredited investor\" as defined under applicable securities laws (if applicable);"),
    bulletPoint("The Investor is acquiring this SAFE for investment purposes only and not with a view to distribution or resale;"),
    bulletPoint("The Investor acknowledges that the investment involves a high degree of risk and is prepared to bear the economic risk of the investment for an indefinite period;"),
    bulletPoint("The Investor has had the opportunity to ask questions and receive answers from the Company regarding the terms and conditions of this investment."),

    sectionHeading("Miscellaneous"),
    bodyParagraph([
      { text: "Transferability. ", bold: true },
      { text: "This SAFE is not transferable without the prior written consent of the Company, except to affiliates or family members of the Investor for estate planning purposes." },
    ]),
    bodyParagraph([
      { text: "No Shareholder Rights. ", bold: true },
      { text: "Until conversion, the Investor shall not have any rights as a shareholder of the Company, including voting rights, dividend rights, or rights to participate in any distribution of the Company's assets." },
    ]),
    bodyParagraph([
      { text: "Tax Treatment. ", bold: true },
      { text: "Each Party shall be responsible for its own tax obligations arising from this SAFE and its conversion. The Company shall not be obligated to withhold any taxes on behalf of the Investor unless required by applicable law." },
    ]),

    ...buildDisputeResolution(),
    ...buildBoilerplate(),
    ...buildSignatureBlocks("Company", "Investor"),
  ];

  return {
    documentTitle: "Simple Agreement for Future Equity (SAFE)",
    documentType: "Early-Stage Investment Instrument",
    templateNumber: "T2L-STR-002",
    version: "2.0",
    revisionDate: "June 2026",
    sections,
  };
}
