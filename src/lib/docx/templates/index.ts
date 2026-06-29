// ============================================================
// Turn2Law — Template Registry
// Maps template slugs to their DOCX content builders
// ============================================================

import type { TemplateDocxContent } from "../generator";
import { buildNdaTemplate } from "./nda";
import { buildServiceAgreementTemplate } from "./service-agreement";
import { buildEmploymentOfferTemplate } from "./employment-offer";
import { buildCoFounderAgreementTemplate } from "./co-founder-agreement";
import { buildPrivacyPolicyTemplate } from "./privacy-policy";
import { buildTermsOfServiceTemplate } from "./terms-of-service";
import { buildRentalAgreementTemplate } from "./rental-agreement";
import { buildMouTemplate } from "./mou";
import { buildIpAssignmentTemplate } from "./ip-assignment";
import { buildPartnershipAgreementTemplate } from "./partnership-agreement";
import { buildSafeNoteTemplate } from "./safe-note";
import { buildOnboardingLetterTemplate } from "./onboarding-letter";

// ── Registry map: slug → content builder ──
const TEMPLATE_BUILDERS: Record<string, () => TemplateDocxContent> = {
  "nda-template": buildNdaTemplate,
  "contract-template": buildServiceAgreementTemplate,
  "offer-letter-template": buildEmploymentOfferTemplate,
  "co-founder-agreement": buildCoFounderAgreementTemplate,
  "privacy-policy": buildPrivacyPolicyTemplate,
  "terms-of-service": buildTermsOfServiceTemplate,
  "residential-rental-agreement": buildRentalAgreementTemplate,
  "mou-template": buildMouTemplate,
  "ip-agreement-template": buildIpAssignmentTemplate,
  "partnership-agreement": buildPartnershipAgreementTemplate,
  "safe-note-agreement": buildSafeNoteTemplate,
  "onboarding-template": buildOnboardingLetterTemplate,
};

/**
 * Get the DOCX content builder for a template by slug.
 * Returns null if no builder exists for the given slug.
 */
export function getTemplateBuilder(slug: string): (() => TemplateDocxContent) | null {
  return TEMPLATE_BUILDERS[slug] ?? null;
}

/**
 * Check if a DOCX builder exists for the given slug.
 */
export function hasTemplateBuilder(slug: string): boolean {
  return slug in TEMPLATE_BUILDERS;
}

/**
 * Get all template slugs that have DOCX builders.
 */
export function getAllBuilderSlugs(): string[] {
  return Object.keys(TEMPLATE_BUILDERS);
}
