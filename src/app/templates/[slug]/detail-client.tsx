"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Download, FileText, CheckCircle, Clock, Eye, AlertCircle, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EmailModal } from "@/components/shared/email-modal";
import { TemplateCard } from "@/components/templates/template-card";
import type { Template } from "@/lib/types";

interface TemplateDetailClientProps {
  template: Template;
  relatedTemplates: Template[];
}

export function TemplateDetailClient({ template, relatedTemplates }: TemplateDetailClientProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownloadClick = () => {
    // Check if email already captured in localStorage
    const savedEmail = localStorage.getItem("t2l_email");
    if (savedEmail) {
      // Direct download starting
      triggerDownload();
    } else {
      setIsModalOpen(true);
    }
  };

  const triggerDownload = () => {
    // Navigate to download API endpoint to log analytics and deliver file redirect
    window.location.href = `/api/download?slug=${template.slug}`;
  };

  return (
    <div className="bg-[#FAFAF8] min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link / Breadcrumb */}
        <div className="flex items-center gap-2 mb-8">
          <Link
            href="/templates"
            className="inline-flex items-center gap-1.5 text-sm text-[#666] hover:text-[#111] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Templates
          </Link>
          <span className="text-[#CCC] text-sm">/</span>
          <span className="text-sm text-[#888] truncate max-w-[200px]">{template.title}</span>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          
          {/* Left Columns (Content details) */}
          <div className="lg:col-span-2 space-y-8 bg-white p-6 sm:p-10 rounded-2xl border border-[#E8E4DC]">
            {/* Header info */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                {template.category && (
                  <Badge variant="secondary" className="bg-[#FBF7F0] text-[#A67D3D] border-[#E8D5B0] font-semibold">
                    {template.category.name}
                  </Badge>
                )}
                <div className="flex items-center gap-1 text-xs text-[#888]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{template.estimated_reading_time} min read</span>
                </div>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111] mb-4 leading-tight">
                {template.title}
              </h1>
              <p className="text-base text-[#555] leading-relaxed mb-6">
                {template.description}
              </p>
            </div>

            {/* Purpose Section */}
            <div className="pt-6 border-t border-[#F0EBE1]">
              <h2 className="text-lg font-bold text-[#111] mb-3">Purpose of Document</h2>
              <p className="text-sm text-[#666] leading-relaxed">
                {template.purpose}
              </p>
            </div>

            {/* Who / When Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-[#F0EBE1]">
              <div>
                <h3 className="text-base font-bold text-[#111] mb-2.5">Who Should Use This?</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  {template.who_should_use}
                </p>
              </div>
              <div>
                <h3 className="text-base font-bold text-[#111] mb-2.5">When to Use This?</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  {template.when_to_use}
                </p>
              </div>
            </div>

            {/* Key Clauses */}
            <div className="pt-6 border-t border-[#F0EBE1]">
              <h2 className="text-lg font-bold text-[#111] mb-4">Critical Clauses Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {template.key_clauses.map((clause, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FAFAF8] border border-[#F0EBE1]">
                    <span className="text-xs font-bold bg-[#C89A4B] text-white w-5 h-5 rounded-full flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-sm text-[#333] font-medium">{clause}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="pt-6 border-t border-[#F0EBE1]">
              <h2 className="text-lg font-bold text-[#111] mb-4">Key Benefits & Protections</h2>
              <ul className="space-y-3">
                {template.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#555]">
                    <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column (Sticky Download / Preview Panel) */}
          <div className="space-y-6 lg:sticky lg:top-24">
            
            {/* Quick Actions Panel */}
            <div className="bg-white border border-[#E8E4DC] p-6 rounded-2xl shadow-sm text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-[#FBF7F0] to-[#F0EBE1] rounded-2xl flex items-center justify-center mx-auto mb-4 border border-[#E8D5B0]">
                <FileText className="w-7 h-7 text-[#C89A4B]" />
              </div>
              <h3 className="text-lg font-bold text-[#111] mb-1">Download Template</h3>
              <p className="text-xs text-[#888] mb-6">
                {template.tex_file ? "Official Branded PDF Template" : "Fully editable DOCX format"}
              </p>
              
              <Button
                onClick={handleDownloadClick}
                className="w-full h-12 bg-[#111] hover:bg-[#C89A4B] text-white rounded-xl text-base font-semibold transition-all duration-300 flex items-center justify-center gap-2 mb-3 shadow-md"
              >
                <Download className="w-5 h-5" />
                {template.tex_file ? "Free Download (PDF)" : "Free Download (DOCX)"}
              </Button>

              <div className="flex items-center justify-center gap-4 text-xs text-[#888]">
                <span>Downloads: <strong>{template.download_count.toLocaleString()}</strong></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8E4DC]" />
                <span>Format: <strong>{template.tex_file ? "PDF Document" : "DOCX Word"}</strong></span>
              </div>
            </div>

            {/* Try DocEngine Premium CTA */}
            <div className="bg-[#111] text-white p-6 rounded-2xl border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C89A4B] rounded-full blur-[80px] opacity-10" />
              <div className="relative z-10">
                <Badge className="bg-[#C89A4B] text-white border-none font-semibold mb-3">
                  PREMIUM
                </Badge>
                <h4 className="text-base font-bold mb-2">Need a custom contract?</h4>
                <p className="text-xs text-[#888] leading-relaxed mb-6">
                  Get custom parameters, automated variables, and lawyer-approved configurations using Turn2Law DocEngine.
                </p>
                <a
                  href="https://turn2law.com/docengine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-1 w-full py-2.5 bg-white/5 hover:bg-white/10 text-white rounded-xl border border-white/15 text-xs font-semibold transition-all"
                >
                  Create Custom Contract
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>

            {/* Document Preview Mockup card */}
            <div className="bg-white border border-[#E8E4DC] rounded-2xl overflow-hidden">
              <div className="bg-[#FAFAF8] border-b border-[#E8E4DC] px-4 py-3 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#555] flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-[#C89A4B]" />
                  Document Preview
                </span>
                <span className="text-[10px] text-[#888] uppercase tracking-wider font-medium">
                  Draft View
                </span>
              </div>
              <div className="p-5 font-sans text-[10px] text-[#555] leading-relaxed h-60 overflow-hidden relative select-none">
                <div className="text-center font-bold text-[#111] text-xs mb-4 uppercase">
                  {template.title}
                </div>
                
                {template.slug === "nda-template" ? (
                  <>
                    <p className="mb-2"><strong>Date:</strong> [Date Placeholder]</p>
                    <p className="mb-3">This Non-Disclosure Agreement is entered into by and between:</p>
                    <ul className="list-disc pl-5 mb-4 space-y-1">
                      <li><strong>Disclosing Party:</strong> [Company Name]</li>
                      <li><strong>Receiving Party:</strong> [Individual Name]</li>
                    </ul>
                    <p className="font-semibold text-[#111] mb-1">1. CONFIDENTIAL INFORMATION</p>
                    <p className="mb-3">"Confidential Information" means all non-public information disclosed by either party to the other, whether orally, in writing, or by any other means...</p>
                  </>
                ) : template.slug === "contract-template" ? (
                  <>
                    <p className="mb-2"><strong>Date:</strong> [Contract Creation Date]</p>
                    <p className="mb-3">This Service Contract is entered into by and between:</p>
                    <ul className="list-disc pl-5 mb-4 space-y-1">
                      <li><strong>Service Provider:</strong> [Company Name]</li>
                      <li><strong>Client:</strong> [Client Name]</li>
                    </ul>
                    <p className="font-semibold text-[#111] mb-1">1. SCOPE OF SERVICES</p>
                    <p className="mb-3">The Service Provider agrees to deliver the following services to the Client: [Service Description]...</p>
                  </>
                ) : template.slug === "offer-letter-template" ? (
                  <>
                    <p className="mb-2"><strong>Date:</strong> [Start Date Placeholder]</p>
                    <p className="mb-3">Dear [Candidate Name],</p>
                    <p className="mb-3">We are pleased to extend an offer of employment to you at [Company Name]. After careful consideration, we believe your skills and experience will be a valuable addition...</p>
                    <p className="font-semibold text-[#111] mb-1">POSITION DETAILS</p>
                    <ul className="list-disc pl-5 mb-3 space-y-0.5">
                      <li><strong>Position:</strong> [Job Title]</li>
                      <li><strong>Start Date:</strong> [Joining Date]</li>
                      <li><strong>Reporting To:</strong> [Manager Name]</li>
                    </ul>
                  </>
                ) : (
                  <>
                    <p className="mb-3">
                      THIS AGREEMENT is entered into on this ____ day of __________, 2026, by and between the parties specified herein.
                    </p>
                    <p className="mb-3">
                      <strong>WHEREAS</strong>, the parties desire to establish mutual covenants and conditions as described below...
                    </p>
                    <p className="mb-3 font-semibold text-[#111]">
                      1. DEFINITIONS AND KEY TERMS
                    </p>
                    <p className="mb-3 pl-4">
                      For the purposes of this Agreement, the following terms shall have the meanings defined below:
                    </p>
                    <p className="pl-4">
                      (a) "Confidential Information" means any proprietary data, designs, materials, secrets...
                    </p>
                  </>
                )}
                {/* Fade-out overlay */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/90 to-transparent flex items-end justify-center pb-4">
                  <span className="text-xs text-[#C89A4B] font-semibold bg-[#FBF7F0] border border-[#E8D5B0] px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5" />
                    Download to view full template
                  </span>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        {/* Related Templates Grid */}
        {relatedTemplates.length > 0 && (
          <div className="mt-16 pt-12 border-t border-[#E8E4DC]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#111] mb-8">
              Related Templates
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedTemplates.map((relTemplate, i) => (
                <TemplateCard key={relTemplate.id} template={relTemplate} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Subscription/Email Capture Modal */}
      <EmailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        templateTitle={template.title}
        onSuccess={triggerDownload}
      />
    </div>
  );
}
