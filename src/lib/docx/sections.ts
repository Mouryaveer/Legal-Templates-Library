// ============================================================
// Turn2Law — Reusable Legal Section Builders for DOCX
// ============================================================

import {
  Paragraph,
  TextRun,
  AlignmentType,
  HeadingLevel,
  TabStopType,
  TabStopPosition,
  BorderStyle,
  Table,
  TableRow,
  TableCell,
  WidthType,
  PageBreak,
  convertInchesToTwip,
  type IParagraphOptions,
} from "docx";
import { BRAND, FONTS, COLORS } from "./styles";

// ── Helper: Create a styled paragraph ──
export function styledParagraph(
  text: string,
  options?: Partial<IParagraphOptions> & { bold?: boolean; italic?: boolean; size?: number; color?: string; font?: string; allCaps?: boolean; underline?: boolean }
): Paragraph {
  const { bold, italic, size, color, font, allCaps, underline, ...paraOptions } = options || {};
  return new Paragraph({
    ...paraOptions,
    children: [
      new TextRun({
        text,
        bold: bold ?? false,
        italics: italic ?? false,
        size: size ?? 22,
        color: color ?? COLORS.body,
        font: font ?? FONTS.body,
        allCaps: allCaps ?? false,
        underline: underline ? { type: "single" as never } : undefined,
      }),
    ],
  });
}

// ── Helper: Create body paragraph with multiple text runs ──
export function bodyParagraph(
  runs: Array<{ text: string; bold?: boolean; italic?: boolean }>,
  alignment?: any
): Paragraph {
  return new Paragraph({
    alignment: alignment ?? AlignmentType.JUSTIFIED,
    spacing: { after: 120, line: 276 },
    children: runs.map(
      (r) =>
        new TextRun({
          text: r.text,
          bold: r.bold ?? false,
          italics: r.italic ?? false,
          size: 22,
          font: FONTS.body,
          color: COLORS.body,
        })
    ),
  });
}

// ── Helper: Numbered clause paragraph ──
export function numberedClause(
  text: string,
  level: number = 0,
  reference: string = "legal-numbering"
): Paragraph {
  return new Paragraph({
    numbering: { reference, level },
    spacing: { after: 120, line: 276 },
    alignment: AlignmentType.JUSTIFIED,
    children: [
      new TextRun({
        text,
        size: 22,
        font: FONTS.body,
        color: COLORS.body,
      }),
    ],
  });
}

// ── Helper: Bullet point ──
export function bulletPoint(text: string, level: number = 0): Paragraph {
  return new Paragraph({
    numbering: { reference: "bullet-list", level },
    spacing: { after: 80, line: 260 },
    children: [
      new TextRun({
        text,
        size: 22,
        font: FONTS.body,
        color: COLORS.body,
      }),
    ],
  });
}

// ── Helper: Section heading ──
export function sectionHeading(text: string, level: any = HeadingLevel.HEADING_1): Paragraph {
  return new Paragraph({
    heading: level,
    children: [
      new TextRun({
        text,
        bold: true,
        size: level === HeadingLevel.HEADING_1 ? 28 : level === HeadingLevel.HEADING_2 ? 24 : 22,
        font: FONTS.heading,
        color: COLORS.dark,
        allCaps: level === HeadingLevel.HEADING_1,
      }),
    ],
  });
}

// ── Helper: Horizontal rule ──
export function horizontalRule(): Paragraph {
  return new Paragraph({
    spacing: { before: 200, after: 200 },
    border: {
      bottom: {
        color: COLORS.border,
        space: 1,
        style: BorderStyle.SINGLE,
        size: 6,
      },
    },
    children: [],
  });
}

// ── Helper: Empty line spacer ──
export function spacer(lines: number = 1): Paragraph {
  return new Paragraph({
    spacing: { before: 240 * lines, after: 0 },
    children: [],
  });
}

// ============================================================
// TITLE PAGE
// ============================================================
export function buildTitlePage(params: {
  documentTitle: string;
  documentType: string;
  templateNumber: string;
  version: string;
  revisionDate: string;
}): Paragraph[] {
  return [
    // Top spacing
    spacer(4),

    // Brand name
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 80 },
      children: [
        new TextRun({
          text: BRAND.name.toUpperCase(),
          bold: true,
          size: 48,
          font: FONTS.heading,
          color: COLORS.gold,
        }),
      ],
    }),

    // Tagline
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 400 },
      children: [
        new TextRun({
          text: BRAND.tagline,
          size: 20,
          font: FONTS.body,
          color: COLORS.muted,
          italics: true,
        }),
      ],
    }),

    // Decorative line
    horizontalRule(),

    spacer(2),

    // Document Title
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 160 },
      children: [
        new TextRun({
          text: params.documentTitle.toUpperCase(),
          bold: true,
          size: 36,
          font: FONTS.heading,
          color: COLORS.dark,
        }),
      ],
    }),

    // Document type subtitle
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 400 },
      children: [
        new TextRun({
          text: params.documentType,
          size: 22,
          font: FONTS.body,
          color: COLORS.muted,
        }),
      ],
    }),

    spacer(2),

    // Metadata table-like layout
    ...buildMetadataBlock([
      ["Template ID", params.templateNumber],
      ["Version", params.version],
      ["Revision Date", params.revisionDate],
      ["Prepared By", BRAND.name],
    ]),

    spacer(3),

    horizontalRule(),

    // Confidentiality notice
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 200, after: 120 },
      children: [
        new TextRun({
          text: "CONFIDENTIALITY NOTICE",
          bold: true,
          size: 16,
          font: FONTS.heading,
          color: COLORS.muted,
          allCaps: true,
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 0 },
      children: [
        new TextRun({
          text: BRAND.confidentiality,
          size: 14,
          font: FONTS.body,
          color: COLORS.light,
          italics: true,
        }),
      ],
    }),

    // Page break after title page
    new Paragraph({
      children: [new PageBreak()],
    }),
  ];
}

// ── Metadata key-value block (for title page) ──
function buildMetadataBlock(entries: [string, string][]): Paragraph[] {
  return entries.map(
    ([key, value]) =>
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 60 },
        children: [
          new TextRun({
            text: `${key}: `,
            bold: true,
            size: 20,
            font: FONTS.body,
            color: COLORS.muted,
          }),
          new TextRun({
            text: value,
            size: 20,
            font: FONTS.body,
            color: COLORS.body,
          }),
        ],
      })
  );
}

// ============================================================
// PARTIES SECTION
// ============================================================
export function buildPartiesSection(parties: {
  partyALabel: string;
  partyADescription: string;
  partyBLabel: string;
  partyBDescription: string;
}): Paragraph[] {
  return [
    sectionHeading("Parties"),

    bodyParagraph([
      { text: "This Agreement is entered into as of " },
      { text: "{{Effective_Date}}", bold: true },
      { text: " (the \"" },
      { text: "Effective Date", bold: true },
      { text: "\") by and between:" },
    ]),

    spacer(1),

    bodyParagraph([
      { text: `${parties.partyALabel}: `, bold: true },
      { text: "{{First_Party}}", bold: true },
      { text: `, ${parties.partyADescription}, having its registered office at ` },
      { text: "{{First_Party_Address}}", bold: true },
      { text: " (hereinafter referred to as the \"" },
      { text: parties.partyALabel, bold: true, italic: true },
      { text: "\");" },
    ]),

    spacer(1),

    bodyParagraph([
      { text: "AND" },
    ], AlignmentType.CENTER),

    spacer(1),

    bodyParagraph([
      { text: `${parties.partyBLabel}: `, bold: true },
      { text: "{{Second_Party}}", bold: true },
      { text: `, ${parties.partyBDescription}, having its registered office at ` },
      { text: "{{Second_Party_Address}}", bold: true },
      { text: " (hereinafter referred to as the \"" },
      { text: parties.partyBLabel, bold: true, italic: true },
      { text: "\")." },
    ]),

    spacer(1),

    bodyParagraph([
      { text: "The " },
      { text: parties.partyALabel, bold: true },
      { text: " and the " },
      { text: parties.partyBLabel, bold: true },
      { text: " are hereinafter individually referred to as a \"" },
      { text: "Party", bold: true },
      { text: "\" and collectively as the \"" },
      { text: "Parties", bold: true },
      { text: "\"." },
    ]),
  ];
}

// ============================================================
// RECITALS (WHEREAS CLAUSES)
// ============================================================
export function buildRecitals(recitals: string[]): Paragraph[] {
  return [
    sectionHeading("Recitals"),
    ...recitals.map(
      (recital) =>
        bodyParagraph([
          { text: "WHEREAS, ", bold: true },
          { text: recital },
        ])
    ),
    spacer(1),
    bodyParagraph([
      { text: "NOW, THEREFORE, ", bold: true },
      { text: "in consideration of the mutual covenants and agreements contained herein, and for other good and valuable consideration, the receipt and sufficiency of which are hereby acknowledged, the Parties agree as follows:" },
    ]),
  ];
}

// ============================================================
// DEFINITIONS SECTION
// ============================================================
export function buildDefinitions(definitions: { term: string; definition: string }[]): Paragraph[] {
  return [
    sectionHeading("Definitions and Interpretation"),

    bodyParagraph([
      { text: "In this Agreement, unless the context otherwise requires, the following terms shall have the meanings assigned to them below:" },
    ]),

    ...definitions.map((def) =>
      bodyParagraph([
        { text: `"${def.term}"`, bold: true },
        { text: ` means ${def.definition}` },
      ])
    ),

    spacer(1),

    bodyParagraph([
      { text: "Interpretation:", bold: true },
    ]),

    bulletPoint("Words importing the singular include the plural and vice versa."),
    bulletPoint("Words importing any gender include all genders."),
    bulletPoint("References to clauses, sections, and schedules are references to clauses, sections, and schedules of this Agreement."),
    bulletPoint("The headings in this Agreement are for convenience only and shall not affect the interpretation of this Agreement."),
    bulletPoint("References to \"include\" and \"including\" shall be construed without limitation."),
    bulletPoint("Any reference to a statute, statutory provision, or regulation includes any modification, re-enactment, or extension thereof."),
  ];
}

// ============================================================
// CONFIDENTIALITY SECTION
// ============================================================
export function buildConfidentialitySection(): Paragraph[] {
  return [
    sectionHeading("Confidentiality"),

    bodyParagraph([
      { text: "Each Party acknowledges that in the course of performing its obligations under this Agreement, it may receive or have access to Confidential Information of the other Party. Each Party agrees to:" },
    ]),

    bulletPoint("Hold all Confidential Information in strict confidence and not disclose it to any third party without the prior written consent of the Disclosing Party;"),
    bulletPoint("Use the Confidential Information solely for the purpose of performing its obligations under this Agreement;"),
    bulletPoint("Take all reasonable precautions to prevent unauthorised disclosure of the Confidential Information, using at least the same degree of care as it uses to protect its own confidential information of a similar nature;"),
    bulletPoint("Limit access to the Confidential Information to those employees, agents, or advisors who have a legitimate need to know and who are bound by obligations of confidentiality no less restrictive than those contained herein;"),
    bulletPoint("Promptly notify the Disclosing Party in writing upon becoming aware of any unauthorised use or disclosure of the Confidential Information."),

    spacer(1),

    bodyParagraph([
      { text: "Exceptions. ", bold: true },
      { text: "The obligations of confidentiality shall not apply to information that: (a) is or becomes publicly available through no fault of the Receiving Party; (b) was in the Receiving Party's possession prior to disclosure and was not subject to a confidentiality obligation; (c) is independently developed by the Receiving Party without use of or reference to the Disclosing Party's Confidential Information; or (d) is required to be disclosed by law, regulation, or court order, provided that the Receiving Party gives the Disclosing Party prompt written notice of such requirement prior to disclosure." },
    ]),

    spacer(1),

    bodyParagraph([
      { text: "Survival. ", bold: true },
      { text: "The obligations of confidentiality under this clause shall survive the termination or expiration of this Agreement for a period of " },
      { text: "{{Confidentiality_Survival_Period}}", bold: true },
      { text: " from the date of termination or expiration." },
    ]),
  ];
}

// ============================================================
// TERM AND TERMINATION
// ============================================================
export function buildTermAndTermination(): Paragraph[] {
  return [
    sectionHeading("Term"),
    bodyParagraph([
      { text: "This Agreement shall commence on the Effective Date and shall remain in force for a period of " },
      { text: "{{Term_Duration}}", bold: true },
      { text: " (the \"" },
      { text: "Initial Term", bold: true },
      { text: "\"), unless terminated earlier in accordance with the provisions of this Agreement. Upon expiration of the Initial Term, this Agreement shall automatically renew for successive periods of equal duration unless either Party provides written notice of non-renewal at least " },
      { text: "{{Renewal_Notice_Period}}", bold: true },
      { text: " prior to the expiration of the then-current term." },
    ]),

    sectionHeading("Termination", HeadingLevel.HEADING_2),

    bodyParagraph([
      { text: "Termination for Convenience. ", bold: true },
      { text: "Either Party may terminate this Agreement at any time by providing " },
      { text: "{{Termination_Notice_Period}}", bold: true },
      { text: " prior written notice to the other Party." },
    ]),

    bodyParagraph([
      { text: "Termination for Cause. ", bold: true },
      { text: "Either Party may terminate this Agreement immediately upon written notice if the other Party: (a) commits a material breach of any provision of this Agreement and fails to cure such breach within " },
      { text: "{{Cure_Period}}", bold: true },
      { text: " of receiving written notice specifying the breach; (b) becomes insolvent, files for bankruptcy, or makes an assignment for the benefit of creditors; or (c) ceases to carry on business." },
    ]),

    bodyParagraph([
      { text: "Effect of Termination. ", bold: true },
      { text: "Upon termination or expiration of this Agreement: (a) all rights and licences granted hereunder shall immediately cease; (b) each Party shall return or destroy all Confidential Information of the other Party in its possession; (c) all accrued rights and obligations of the Parties as of the date of termination shall survive, including payment obligations for services rendered prior to termination; and (d) the provisions which by their nature are intended to survive termination shall continue in full force and effect." },
    ]),
  ];
}

// ============================================================
// INDEMNIFICATION
// ============================================================
export function buildIndemnification(): Paragraph[] {
  return [
    sectionHeading("Indemnification"),

    bodyParagraph([
      { text: "Each Party (the \"" },
      { text: "Indemnifying Party", bold: true },
      { text: "\") shall indemnify, defend, and hold harmless the other Party and its directors, officers, employees, agents, and successors (the \"" },
      { text: "Indemnified Party", bold: true },
      { text: "\") from and against any and all claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising out of or in connection with:" },
    ]),

    bulletPoint("Any material breach of any representation, warranty, covenant, or obligation of the Indemnifying Party under this Agreement;"),
    bulletPoint("Any negligent or wrongful act or omission of the Indemnifying Party in connection with its performance under this Agreement;"),
    bulletPoint("Any infringement or alleged infringement of any intellectual property rights of a third party by the Indemnifying Party;"),
    bulletPoint("Any violation of applicable laws, rules, or regulations by the Indemnifying Party."),

    spacer(1),

    bodyParagraph([
      { text: "Indemnification Procedure. ", bold: true },
      { text: "The Indemnified Party shall: (a) promptly notify the Indemnifying Party in writing of any claim for which indemnification is sought; (b) grant the Indemnifying Party sole control over the defence and settlement of such claim; and (c) provide reasonable cooperation to the Indemnifying Party at the Indemnifying Party's expense. The failure of the Indemnified Party to provide prompt notice shall not relieve the Indemnifying Party of its obligations except to the extent that such failure materially prejudices the defence of the claim." },
    ]),
  ];
}

// ============================================================
// LIMITATION OF LIABILITY
// ============================================================
export function buildLimitationOfLiability(): Paragraph[] {
  return [
    sectionHeading("Limitation of Liability"),

    bodyParagraph([
      { text: "TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL EITHER PARTY BE LIABLE TO THE OTHER PARTY FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT, REGARDLESS OF WHETHER SUCH DAMAGES ARE BASED ON CONTRACT, TORT, STRICT LIABILITY, OR ANY OTHER THEORY, AND EVEN IF SUCH PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES." },
    ]),

    spacer(1),

    bodyParagraph([
      { text: "THE AGGREGATE LIABILITY OF EITHER PARTY UNDER THIS AGREEMENT SHALL NOT EXCEED THE TOTAL FEES PAID OR PAYABLE BY THE RECEIVING PARTY TO THE PROVIDING PARTY UNDER THIS AGREEMENT DURING THE " },
      { text: "{{Liability_Cap_Period}}", bold: true },
      { text: " IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO THE CLAIM." },
    ]),

    spacer(1),

    bodyParagraph([
      { text: "The limitations set forth in this clause shall not apply to: (a) a Party's indemnification obligations; (b) a Party's breach of its confidentiality obligations; (c) a Party's wilful misconduct or gross negligence; or (d) any liability that cannot be limited or excluded under applicable law." },
    ]),
  ];
}

// ============================================================
// FORCE MAJEURE
// ============================================================
export function buildForceMajeure(): Paragraph[] {
  return [
    sectionHeading("Force Majeure"),

    bodyParagraph([
      { text: "Neither Party shall be liable for any failure or delay in performing its obligations under this Agreement if such failure or delay results from circumstances beyond the reasonable control of that Party, including but not limited to acts of God, natural disasters, epidemics or pandemics, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, earthquakes, nuclear accidents, strikes, shortages of transportation, facilities, fuel, energy, labour, or materials, failure of telecommunications or information systems, or any other circumstances of a similar nature (each, a \"" },
      { text: "Force Majeure Event", bold: true },
      { text: "\")." },
    ]),

    spacer(1),

    bodyParagraph([
      { text: "The affected Party shall: (a) promptly notify the other Party in writing of the occurrence and expected duration of the Force Majeure Event; (b) use reasonable efforts to mitigate the effects of the Force Majeure Event; and (c) resume performance of its obligations as soon as reasonably practicable after the cessation of the Force Majeure Event." },
    ]),

    spacer(1),

    bodyParagraph([
      { text: "If a Force Majeure Event continues for a period exceeding " },
      { text: "{{Force_Majeure_Period}}", bold: true },
      { text: ", either Party may terminate this Agreement upon written notice to the other Party without further liability, except for obligations that accrued prior to the termination." },
    ]),
  ];
}

// ============================================================
// DISPUTE RESOLUTION
// ============================================================
export function buildDisputeResolution(): Paragraph[] {
  return [
    sectionHeading("Dispute Resolution"),

    bodyParagraph([
      { text: "Negotiation. ", bold: true },
      { text: "The Parties agree that any dispute, controversy, or claim arising out of or in connection with this Agreement, including any question regarding its existence, validity, interpretation, performance, breach, or termination (a \"" },
      { text: "Dispute", bold: true },
      { text: "\"), shall first be attempted to be resolved through good-faith negotiations between the Parties. Either Party may initiate such negotiations by providing written notice to the other Party describing the nature of the Dispute." },
    ]),

    bodyParagraph([
      { text: "Mediation. ", bold: true },
      { text: "If the Dispute is not resolved through negotiation within thirty (30) days of the notice, the Parties agree to attempt to resolve the Dispute through mediation before a mutually agreed-upon mediator. The costs of mediation shall be shared equally between the Parties." },
    ]),

    bodyParagraph([
      { text: "Arbitration. ", bold: true },
      { text: "If the Dispute is not resolved through mediation within sixty (60) days, the Dispute shall be finally resolved by binding arbitration in accordance with the rules of the " },
      { text: "{{Arbitration_Body}}", bold: true },
      { text: ". The arbitration shall be conducted by a sole arbitrator appointed by mutual agreement of the Parties, or failing such agreement, in accordance with the applicable rules. The seat of arbitration shall be " },
      { text: "{{Arbitration_Seat}}", bold: true },
      { text: ". The language of the arbitration shall be English. The arbitral award shall be final and binding on the Parties and may be enforced in any court of competent jurisdiction." },
    ]),

    bodyParagraph([
      { text: "Governing Law. ", bold: true },
      { text: "This Agreement shall be governed by and construed in accordance with the laws of " },
      { text: "{{Jurisdiction}}", bold: true },
      { text: ", without regard to its conflict of laws principles." },
    ]),

    bodyParagraph([
      { text: "Jurisdiction. ", bold: true },
      { text: "Subject to the arbitration clause above, the courts of " },
      { text: "{{Court_Jurisdiction}}", bold: true },
      { text: " shall have exclusive jurisdiction over any matters not subject to arbitration under this Agreement." },
    ]),
  ];
}

// ============================================================
// BOILERPLATE CLAUSES
// ============================================================
export function buildBoilerplate(): Paragraph[] {
  return [
    sectionHeading("Notices"),
    bodyParagraph([
      { text: "All notices, requests, demands, and other communications under this Agreement shall be in writing and shall be deemed to have been duly given: (a) when delivered personally; (b) when sent by confirmed electronic mail; (c) one (1) business day after being sent by nationally recognised overnight courier; or (d) three (3) business days after being mailed by registered or certified mail, return receipt requested, postage prepaid. Notices shall be sent to the addresses set forth below or to such other address as either Party may specify by notice given in accordance with this clause:" },
    ]),

    spacer(1),

    bodyParagraph([
      { text: "If to {{First_Party}}: ", bold: true },
      { text: "{{First_Party_Notice_Address}}" },
    ]),
    bodyParagraph([
      { text: "Email: ", bold: true },
      { text: "{{First_Party_Email}}" },
    ]),

    spacer(1),

    bodyParagraph([
      { text: "If to {{Second_Party}}: ", bold: true },
      { text: "{{Second_Party_Notice_Address}}" },
    ]),
    bodyParagraph([
      { text: "Email: ", bold: true },
      { text: "{{Second_Party_Email}}" },
    ]),

    sectionHeading("Amendments"),
    bodyParagraph([
      { text: "No amendment, modification, or waiver of any provision of this Agreement shall be valid or binding unless made in writing and signed by both Parties. No oral modification or waiver shall be effective under any circumstances." },
    ]),

    sectionHeading("Entire Agreement"),
    bodyParagraph([
      { text: "This Agreement, together with all schedules, annexures, and exhibits attached hereto, constitutes the entire agreement between the Parties with respect to the subject matter hereof and supersedes all prior and contemporaneous agreements, representations, warranties, and understandings, whether oral or written, relating to such subject matter. Each Party acknowledges that it has not relied on any representation, warranty, or undertaking that is not expressly set forth in this Agreement." },
    ]),

    sectionHeading("Severability"),
    bodyParagraph([
      { text: "If any provision of this Agreement is held to be invalid, illegal, or unenforceable by a court of competent jurisdiction, such provision shall be modified to the minimum extent necessary to make it valid, legal, and enforceable, or if such modification is not possible, it shall be severed from this Agreement, and the remaining provisions shall continue in full force and effect. The invalidity of any provision in a particular jurisdiction shall not invalidate that provision in any other jurisdiction." },
    ]),

    sectionHeading("Waiver"),
    bodyParagraph([
      { text: "No failure or delay by either Party in exercising any right, power, or remedy under this Agreement shall operate as a waiver thereof, nor shall any single or partial exercise of any such right, power, or remedy preclude any other or further exercise thereof or the exercise of any other right, power, or remedy. The rights and remedies provided in this Agreement are cumulative and not exclusive of any rights or remedies provided by law." },
    ]),

    sectionHeading("Assignment"),
    bodyParagraph([
      { text: "Neither Party may assign or transfer any of its rights or obligations under this Agreement without the prior written consent of the other Party, except that either Party may assign this Agreement to an affiliate or in connection with a merger, acquisition, corporate reorganisation, or sale of all or substantially all of its assets, provided that the assignee assumes all obligations of the assigning Party under this Agreement." },
    ]),

    sectionHeading("Counterparts"),
    bodyParagraph([
      { text: "This Agreement may be executed in any number of counterparts, each of which shall be deemed an original, and all of which together shall constitute one and the same instrument. Electronic signatures and scanned copies of executed signature pages shall be deemed equivalent to original signatures for all purposes." },
    ]),

    sectionHeading("Relationship of Parties"),
    bodyParagraph([
      { text: "Nothing in this Agreement shall be construed to create a partnership, joint venture, agency, or employment relationship between the Parties. Each Party is an independent contractor and shall not have the authority to bind or make commitments on behalf of the other Party without prior written consent." },
    ]),

    sectionHeading("Third-Party Rights"),
    bodyParagraph([
      { text: "This Agreement is intended solely for the benefit of the Parties hereto and their respective permitted successors and assigns. Nothing in this Agreement shall confer any rights or remedies on any third party, except as expressly provided herein." },
    ]),
  ];
}

// ============================================================
// SIGNATURE BLOCKS
// ============================================================
export function buildSignatureBlocks(
  partyALabel: string = "First Party",
  partyBLabel: string = "Second Party"
): Paragraph[] {
  const signatureBlock = (partyLabel: string): Paragraph[] => [
    spacer(1),

    styledParagraph(`FOR AND ON BEHALF OF ${partyLabel.toUpperCase()}`, {
      bold: true,
      size: 22,
      color: COLORS.dark,
      spacing: { before: 360, after: 200 },
    }),

    // Signature line
    new Paragraph({
      spacing: { before: 480, after: 40 },
      children: [
        new TextRun({
          text: "________________________________________",
          size: 22,
          font: FONTS.body,
          color: COLORS.border,
        }),
      ],
    }),

    bodyParagraph([
      { text: "Signature", italic: true },
    ]),

    spacer(1),

    bodyParagraph([
      { text: "Name: ", bold: true },
      { text: "____________________________________" },
    ]),

    bodyParagraph([
      { text: "Designation: ", bold: true },
      { text: "________________________________" },
    ]),

    bodyParagraph([
      { text: "Company: ", bold: true },
      { text: "___________________________________" },
    ]),

    bodyParagraph([
      { text: "Date: ", bold: true },
      { text: "______________________________________" },
    ]),

    bodyParagraph([
      { text: "Place: ", bold: true },
      { text: "_____________________________________" },
    ]),

    spacer(2),

    // Witness section
    styledParagraph("WITNESS:", {
      bold: true,
      size: 20,
      color: COLORS.muted,
      spacing: { before: 200, after: 120 },
    }),

    new Paragraph({
      spacing: { before: 360, after: 40 },
      children: [
        new TextRun({
          text: "________________________________________",
          size: 22,
          font: FONTS.body,
          color: COLORS.border,
        }),
      ],
    }),

    bodyParagraph([
      { text: "Witness Name: ", bold: true },
      { text: "______________________________" },
    ]),

    bodyParagraph([
      { text: "Address: ", bold: true },
      { text: "___________________________________" },
    ]),
  ];

  return [
    sectionHeading("Execution"),
    bodyParagraph([
      { text: "IN WITNESS WHEREOF, the Parties have executed this Agreement as of the date first written above, by their duly authorised representatives." },
    ]),

    ...signatureBlock(partyALabel),

    // Page break between signature blocks
    new Paragraph({ children: [new PageBreak()] }),

    ...signatureBlock(partyBLabel),
  ];
}
