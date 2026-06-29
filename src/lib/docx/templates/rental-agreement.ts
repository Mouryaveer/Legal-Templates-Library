// ============================================================
// Turn2Law — Residential Rental Agreement Template Content
// Template ID: T2L-REA-001 | ~8 pages
// ============================================================

import { Paragraph, HeadingLevel, PageBreak } from "docx";
import {
  sectionHeading, bodyParagraph, bulletPoint, spacer,
  buildPartiesSection, buildRecitals, buildDefinitions,
  buildForceMajeure, buildDisputeResolution, buildBoilerplate,
  buildSignatureBlocks,
} from "../sections";
import type { TemplateDocxContent } from "../generator";

export function buildRentalAgreementTemplate(): TemplateDocxContent {
  const sections: Paragraph[] = [

    ...buildPartiesSection({
      partyALabel: "Landlord",
      partyADescription: "the lawful owner of the premises described herein, having PAN {{First_Party_PAN}} and Aadhaar {{First_Party_Aadhaar}}",
      partyBLabel: "Tenant",
      partyBDescription: "an individual/entity desirous of taking the premises on rent, having PAN {{Second_Party_PAN}} and Aadhaar {{Second_Party_Aadhaar}}",
    }),

    ...buildRecitals([
      "the Landlord is the lawful owner and is in possession of the residential property described in Schedule A hereto (the \"Premises\") and has the right to lease the Premises;",
      "the Tenant desires to lease the Premises from the Landlord for use as a residential dwelling on the terms and conditions set forth in this Agreement;",
      "the Landlord agrees to let and the Tenant agrees to take on lease the Premises, subject to the terms and conditions contained herein;",
      "the Parties wish to record their agreement in writing to avoid any future disputes.",
    ]),

    ...buildDefinitions([
      { term: "Premises", definition: "the residential property described in Schedule A of this Agreement, including all fixtures, fittings, and appurtenances thereto." },
      { term: "Rent", definition: "the monthly rental amount payable by the Tenant to the Landlord as specified in this Agreement." },
      { term: "Security Deposit", definition: "the refundable deposit paid by the Tenant to the Landlord as security for the performance of the Tenant's obligations under this Agreement." },
      { term: "Lease Term", definition: "the period during which the Tenant is entitled to occupy the Premises, as specified in this Agreement." },
      { term: "Common Areas", definition: "those areas of the building or complex that are shared by multiple occupants, including lobbies, staircases, elevators, parking areas, gardens, and other communal facilities." },
    ]),

    sectionHeading("Property Description"),
    bodyParagraph([
      { text: "The Landlord hereby leases to the Tenant, and the Tenant hereby takes on lease from the Landlord, the Premises described as follows:" },
    ]),
    bulletPoint("Property Address: {{Property_Address}}"),
    bulletPoint("Type of Property: {{Property_Type}} (Apartment / House / Flat / Villa)"),
    bulletPoint("Built-Up Area: {{Built_Up_Area}} square feet (approximately)"),
    bulletPoint("Configuration: {{Configuration}} (e.g., 2BHK, 3BHK)"),
    bulletPoint("Floor: {{Floor_Number}}"),
    bulletPoint("Furnishing Status: {{Furnishing_Status}} (Furnished / Semi-Furnished / Unfurnished)"),
    bulletPoint("Parking: {{Parking_Details}}"),

    sectionHeading("Lease Term and Renewal"),
    bodyParagraph([
      { text: "The lease shall commence on " },
      { text: "{{Lease_Start_Date}}", bold: true },
      { text: " and shall continue for a period of " },
      { text: "{{Lease_Duration}}", bold: true },
      { text: " (the \"Initial Term\"), expiring on " },
      { text: "{{Lease_End_Date}}", bold: true },
      { text: ", unless terminated earlier or renewed in accordance with the provisions of this Agreement." },
    ]),
    spacer(1),
    bodyParagraph([
      { text: "The lease may be renewed for successive periods of " },
      { text: "{{Renewal_Period}}", bold: true },
      { text: " upon mutual written agreement of the Parties. The Landlord reserves the right to revise the Rent upon renewal, with an increase not exceeding " },
      { text: "{{Annual_Rent_Increase_Cap}}", bold: true },
      { text: " per annum, unless otherwise agreed. Either Party wishing to renew shall provide written notice at least " },
      { text: "{{Renewal_Notice_Period}}", bold: true },
      { text: " prior to the expiration of the then-current term." },
    ]),

    sectionHeading("Rent and Payment Terms"),
    bodyParagraph([
      { text: "Monthly Rent. ", bold: true },
      { text: "The Tenant shall pay the Landlord a monthly rent of " },
      { text: "{{Monthly_Rent}}", bold: true },
      { text: " (the \"Rent\"). The Rent shall be payable on or before the " },
      { text: "{{Rent_Due_Date}}", bold: true },
      { text: " of each calendar month, in advance, by " },
      { text: "{{Payment_Method}}", bold: true },
      { text: " (bank transfer / cheque / UPI / cash)." },
    ]),
    bodyParagraph([
      { text: "Late Payment. ", bold: true },
      { text: "If the Rent is not received by the Landlord within " },
      { text: "{{Grace_Period}}", bold: true },
      { text: " of the due date, the Tenant shall pay a late fee of " },
      { text: "{{Late_Fee}}", bold: true },
      { text: " for each day of delay, without prejudice to the Landlord's other rights under this Agreement." },
    ]),
    bodyParagraph([
      { text: "Rent Escalation. ", bold: true },
      { text: "The Rent shall be subject to an annual escalation of " },
      { text: "{{Annual_Rent_Increase}}", bold: true },
      { text: " at each renewal." },
    ]),

    sectionHeading("Security Deposit"),
    bodyParagraph([
      { text: "The Tenant shall pay the Landlord a refundable security deposit of " },
      { text: "{{Security_Deposit_Amount}}", bold: true },
      { text: " (the \"Security Deposit\") upon execution of this Agreement. The Security Deposit shall be held by the Landlord as security for the faithful performance of the Tenant's obligations under this Agreement and shall be refunded to the Tenant within " },
      { text: "{{Deposit_Refund_Period}}", bold: true },
      { text: " of the termination of this Agreement, subject to the following deductions:" },
    ]),
    bulletPoint("Unpaid Rent or other amounts due under this Agreement;"),
    bulletPoint("Cost of repairing any damage to the Premises beyond normal wear and tear;"),
    bulletPoint("Unpaid utility bills, maintenance charges, or other charges attributable to the Tenant;"),
    bulletPoint("Any other amounts for which the Tenant is liable under this Agreement."),
    spacer(1),
    bodyParagraph([
      { text: "The Security Deposit shall not bear interest unless otherwise required by applicable law." },
    ]),

    sectionHeading("Utilities and Maintenance Charges"),
    bodyParagraph([
      { text: "The Tenant shall be responsible for the payment of all utility charges incurred during the Lease Term, including:" },
    ]),
    bulletPoint("Electricity charges as per actual meter consumption;"),
    bulletPoint("Water charges as per actual consumption or as levied by the local authority;"),
    bulletPoint("Gas connection charges (if applicable);"),
    bulletPoint("Internet and cable television charges (if applicable);"),
    bulletPoint("Society/association maintenance charges of {{Maintenance_Charges}} per month."),

    sectionHeading("Use of Premises"),
    bodyParagraph([
      { text: "The Tenant shall use the Premises solely for residential purposes and shall not use the Premises or any part thereof for any commercial, industrial, or illegal activity without the prior written consent of the Landlord. The Tenant shall:" },
    ]),
    bulletPoint("Maintain the Premises in a clean, sanitary, and habitable condition;"),
    bulletPoint("Not make any structural alterations, additions, or modifications to the Premises without the prior written consent of the Landlord;"),
    bulletPoint("Not affix any fixtures, fittings, or installations that may cause damage to the Premises;"),
    bulletPoint("Not sublet, assign, or transfer the lease or any part thereof to any third party without the Landlord's prior written consent;"),
    bulletPoint("Comply with all applicable laws, rules, regulations, and by-laws of the housing society, local authority, and government;"),
    bulletPoint("Not keep pets on the Premises unless expressly permitted in writing by the Landlord;"),
    bulletPoint("Not engage in any activity that causes nuisance, annoyance, or disturbance to neighbouring occupants."),

    sectionHeading("Maintenance and Repairs"),
    bodyParagraph([
      { text: "Landlord's Responsibility. ", bold: true },
      { text: "The Landlord shall be responsible for all major structural repairs, including repairs to the roof, external walls, plumbing (main lines), electrical wiring (main lines), and any defects arising from normal wear and tear that affect the habitability of the Premises." },
    ]),
    bodyParagraph([
      { text: "Tenant's Responsibility. ", bold: true },
      { text: "The Tenant shall be responsible for minor repairs and day-to-day maintenance of the Premises, including repairs to taps, faucets, light fixtures, switches, door handles, window fittings, and any damage caused by the Tenant's negligence or misuse." },
    ]),

    sectionHeading("Termination"),
    bodyParagraph([
      { text: "Notice of Termination. ", bold: true },
      { text: "Either Party may terminate this Agreement by providing " },
      { text: "{{Termination_Notice_Period}}", bold: true },
      { text: " prior written notice to the other Party." },
    ]),
    bodyParagraph([
      { text: "Immediate Termination by Landlord. ", bold: true },
      { text: "The Landlord may terminate this Agreement immediately if the Tenant: (a) fails to pay Rent for two consecutive months; (b) commits a material breach of this Agreement; (c) uses the Premises for illegal purposes; (d) causes substantial damage to the Premises; or (e) sublets the Premises without the Landlord's consent." },
    ]),
    bodyParagraph([
      { text: "Surrender of Premises. ", bold: true },
      { text: "Upon termination, the Tenant shall peacefully vacate and surrender the Premises to the Landlord in the same condition as received, subject to normal wear and tear, and return all keys, access cards, and remote controls." },
    ]),

    sectionHeading("Inventory and Condition Report"),
    bodyParagraph([
      { text: "The Parties shall jointly prepare a detailed inventory and condition report (the \"Inventory Report\") at the commencement of the Lease Term, listing all fixtures, fittings, furniture, appliances, and their condition. A copy of the Inventory Report shall be signed by both Parties and attached as " },
      { text: "Schedule B", bold: true },
      { text: ". Upon termination, the Premises shall be inspected against the Inventory Report to determine any damage beyond normal wear and tear." },
    ]),

    ...buildForceMajeure(),
    ...buildDisputeResolution(),
    ...buildBoilerplate(),

    new Paragraph({ children: [new PageBreak()] }),
    sectionHeading("Schedule A — Property Details"),
    bodyParagraph([{ text: "Full Address: {{Property_Full_Address}}" }]),
    bodyParagraph([{ text: "Survey/Plot Number: {{Survey_Number}}" }]),
    bodyParagraph([{ text: "Municipal Ward: {{Municipal_Ward}}" }]),
    bodyParagraph([{ text: "Registration Details: {{Property_Registration}}" }]),

    new Paragraph({ children: [new PageBreak()] }),
    sectionHeading("Schedule B — Inventory Report"),
    bodyParagraph([{ text: "(To be completed jointly by Landlord and Tenant at the commencement of the Lease Term)" }]),
    spacer(1),
    bulletPoint("Living Room: {{Living_Room_Items}}"),
    bulletPoint("Bedroom(s): {{Bedroom_Items}}"),
    bulletPoint("Kitchen: {{Kitchen_Items}}"),
    bulletPoint("Bathroom(s): {{Bathroom_Items}}"),
    bulletPoint("Appliances: {{Appliances_List}}"),
    bulletPoint("Other: {{Other_Items}}"),

    ...buildSignatureBlocks("Landlord", "Tenant"),
  ];

  return {
    documentTitle: "Residential Rental Agreement",
    documentType: "Residential Lease Agreement",
    templateNumber: "T2L-REA-001",
    version: "2.0",
    revisionDate: "June 2026",
    sections,
  };
}
