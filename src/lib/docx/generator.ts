// ============================================================
// Turn2Law — Core DOCX Generator Engine
// Assembles template content into a professional DOCX document
// ============================================================

import {
  Document,
  Packer,
  Header,
  Footer,
  Paragraph,
  TextRun,
  AlignmentType,
  PageNumber,
  NumberFormat,
  PageBreak,
  convertInchesToTwip,
} from "docx";
import { DOCUMENT_STYLES, LEGAL_NUMBERING, BRAND, FONTS, COLORS, MARGINS } from "./styles";
import { buildTitlePage } from "./sections";

// ── Template Content Interface ──
export interface TemplateDocxContent {
  documentTitle: string;
  documentType: string;
  templateNumber: string;
  version: string;
  revisionDate: string;
  /** The main body sections of the document */
  sections: Paragraph[];
}

// ── Generate DOCX buffer from template content ──
export async function generateDocx(content: TemplateDocxContent): Promise<Buffer> {
  const titlePage = buildTitlePage({
    documentTitle: content.documentTitle,
    documentType: content.documentType,
    templateNumber: content.templateNumber,
    version: content.version,
    revisionDate: content.revisionDate,
  });

  const doc = new Document({
    styles: DOCUMENT_STYLES,
    numbering: LEGAL_NUMBERING,
    sections: [
      // Title Page Section (no header/footer)
      {
        properties: {
          page: {
            margin: MARGINS,
            pageNumbers: {
              start: 0,
            },
          },
          titlePage: true,
        },
        headers: {
          default: new Header({ children: [] }),
          first: new Header({ children: [] }),
        },
        footers: {
          default: new Footer({ children: [] }),
          first: new Footer({
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                spacing: { before: 100 },
                children: [
                  new TextRun({
                    text: BRAND.copyright,
                    size: 14,
                    font: FONTS.body,
                    color: COLORS.light,
                    italics: true,
                  }),
                ],
              }),
            ],
          }),
        },
        children: titlePage,
      },
      // Main Document Body
      {
        properties: {
          page: {
            margin: MARGINS,
            pageNumbers: {
              start: 1,
              formatType: NumberFormat.DECIMAL,
            },
          },
        },
        headers: {
          default: new Header({
            children: [
              new Paragraph({
                alignment: AlignmentType.RIGHT,
                spacing: { after: 0 },
                children: [
                  new TextRun({
                    text: `${BRAND.name}  |  `,
                    size: 16,
                    font: FONTS.body,
                    color: COLORS.gold,
                    bold: true,
                  }),
                  new TextRun({
                    text: content.documentTitle,
                    size: 16,
                    font: FONTS.body,
                    color: COLORS.muted,
                    italics: true,
                  }),
                ],
              }),
            ],
          }),
        },
        footers: {
          default: new Footer({
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                spacing: { before: 100, after: 0 },
                children: [
                  new TextRun({
                    text: `${content.templateNumber}  |  Version ${content.version}  |  `,
                    size: 14,
                    font: FONTS.body,
                    color: COLORS.light,
                  }),
                  new TextRun({
                    text: "Page ",
                    size: 14,
                    font: FONTS.body,
                    color: COLORS.light,
                  }),
                  new TextRun({
                    children: [PageNumber.CURRENT],
                    size: 14,
                    font: FONTS.body,
                    color: COLORS.light,
                  }),
                ],
              }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                spacing: { before: 40, after: 0 },
                children: [
                  new TextRun({
                    text: BRAND.confidentiality,
                    size: 12,
                    font: FONTS.body,
                    color: COLORS.light,
                    italics: true,
                  }),
                ],
              }),
            ],
          }),
        },
        children: content.sections,
      },
    ],
  });

  const buffer = await Packer.toBuffer(doc);
  return Buffer.from(buffer);
}
