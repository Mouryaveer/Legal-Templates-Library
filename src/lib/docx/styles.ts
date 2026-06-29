// ============================================================
// Turn2Law — DOCX Style Definitions
// Professional legal document styling
// ============================================================

import {
  AlignmentType,
  HeadingLevel,
  TabStopPosition,
  TabStopType,
  UnderlineType,
  convertInchesToTwip,
  LevelFormat,
  type IStylesOptions,
  type INumberingOptions,
} from "docx";

// ── Brand Constants ──
export const BRAND = {
  name: "Turn2Law",
  tagline: "Professional Legal Templates",
  website: "https://templates.turn2law.com",
  email: "hello@turn2law.com",
  copyright: `© ${new Date().getFullYear()} Turn2Law. All rights reserved.`,
  confidentiality: "CONFIDENTIAL — This document is a template provided by Turn2Law for informational purposes. Consult qualified legal counsel before use.",
};

// ── Font & Colour Constants ──
export const FONTS = {
  heading: "Calibri",
  body: "Calibri",
  mono: "Consolas",
};

export const COLORS = {
  gold: "C89A4B",
  dark: "111111",
  body: "333333",
  muted: "666666",
  light: "999999",
  border: "D4CFC3",
  accent: "1F3864",
};

// ── Margin & Spacing ──
export const MARGINS = {
  top: convertInchesToTwip(1),
  right: convertInchesToTwip(1),
  bottom: convertInchesToTwip(1),
  left: convertInchesToTwip(1.25),
};

// ── Legal Numbering Definition ──
export const LEGAL_NUMBERING: INumberingOptions = {
  config: [
    {
      reference: "legal-numbering",
      levels: [
        {
          level: 0,
          format: LevelFormat.DECIMAL,
          text: "%1.",
          alignment: AlignmentType.START,
          style: {
            paragraph: {
              indent: {
                left: convertInchesToTwip(0),
                hanging: convertInchesToTwip(0.5),
              },
            },
            run: {
              bold: true,
              size: 24,
              font: FONTS.heading,
            },
          },
        },
        {
          level: 1,
          format: LevelFormat.DECIMAL,
          text: "%1.%2",
          alignment: AlignmentType.START,
          style: {
            paragraph: {
              indent: {
                left: convertInchesToTwip(0.5),
                hanging: convertInchesToTwip(0.5),
              },
            },
            run: {
              bold: false,
              size: 22,
              font: FONTS.body,
            },
          },
        },
        {
          level: 2,
          format: LevelFormat.LOWER_LETTER,
          text: "(%3)",
          alignment: AlignmentType.START,
          style: {
            paragraph: {
              indent: {
                left: convertInchesToTwip(1),
                hanging: convertInchesToTwip(0.4),
              },
            },
            run: {
              size: 22,
              font: FONTS.body,
            },
          },
        },
        {
          level: 3,
          format: LevelFormat.LOWER_ROMAN,
          text: "(%4)",
          alignment: AlignmentType.START,
          style: {
            paragraph: {
              indent: {
                left: convertInchesToTwip(1.5),
                hanging: convertInchesToTwip(0.4),
              },
            },
            run: {
              size: 22,
              font: FONTS.body,
            },
          },
        },
      ],
    },
    {
      reference: "bullet-list",
      levels: [
        {
          level: 0,
          format: LevelFormat.BULLET,
          text: "\u2022",
          alignment: AlignmentType.START,
          style: {
            paragraph: {
              indent: {
                left: convertInchesToTwip(0.5),
                hanging: convertInchesToTwip(0.25),
              },
            },
          },
        },
        {
          level: 1,
          format: LevelFormat.BULLET,
          text: "\u25E6",
          alignment: AlignmentType.START,
          style: {
            paragraph: {
              indent: {
                left: convertInchesToTwip(1),
                hanging: convertInchesToTwip(0.25),
              },
            },
          },
        },
      ],
    },
  ],
};

// ── Document Styles ──
export const DOCUMENT_STYLES: IStylesOptions = {
  default: {
    document: {
      run: {
        font: FONTS.body,
        size: 22,
        color: COLORS.body,
      },
      paragraph: {
        spacing: {
          after: 120,
          line: 276,
        },
        alignment: AlignmentType.JUSTIFIED,
      },
    },
    heading1: {
      run: {
        font: FONTS.heading,
        size: 28,
        bold: true,
        color: COLORS.dark,
        allCaps: true,
      },
      paragraph: {
        spacing: {
          before: 360,
          after: 200,
        },
        alignment: AlignmentType.LEFT,
      },
    },
    heading2: {
      run: {
        font: FONTS.heading,
        size: 24,
        bold: true,
        color: COLORS.dark,
      },
      paragraph: {
        spacing: {
          before: 240,
          after: 120,
        },
        alignment: AlignmentType.LEFT,
      },
    },
    heading3: {
      run: {
        font: FONTS.heading,
        size: 22,
        bold: true,
        color: COLORS.body,
      },
      paragraph: {
        spacing: {
          before: 200,
          after: 100,
        },
        alignment: AlignmentType.LEFT,
      },
    },
    heading4: {
      run: {
        font: FONTS.heading,
        size: 22,
        bold: false,
        italics: true,
        color: COLORS.body,
      },
      paragraph: {
        spacing: {
          before: 160,
          after: 80,
        },
        alignment: AlignmentType.LEFT,
      },
    },
  },
  paragraphStyles: [
    {
      id: "centered",
      name: "Centered",
      basedOn: "Normal",
      paragraph: {
        alignment: AlignmentType.CENTER,
      },
    },
    {
      id: "rightAligned",
      name: "Right Aligned",
      basedOn: "Normal",
      paragraph: {
        alignment: AlignmentType.RIGHT,
      },
    },
    {
      id: "recital",
      name: "Recital",
      basedOn: "Normal",
      paragraph: {
        spacing: {
          after: 160,
        },
        indent: {
          left: convertInchesToTwip(0),
        },
      },
      run: {
        size: 22,
        color: COLORS.body,
      },
    },
    {
      id: "signatureLine",
      name: "Signature Line",
      basedOn: "Normal",
      paragraph: {
        spacing: {
          before: 480,
          after: 60,
        },
      },
    },
    {
      id: "footer",
      name: "Footer Text",
      basedOn: "Normal",
      run: {
        size: 16,
        color: COLORS.light,
        font: FONTS.body,
      },
      paragraph: {
        alignment: AlignmentType.CENTER,
      },
    },
    {
      id: "titlePage",
      name: "Title Page",
      basedOn: "Normal",
      paragraph: {
        alignment: AlignmentType.CENTER,
        spacing: {
          after: 0,
        },
      },
    },
  ],
};
