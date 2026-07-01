"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Download,
  FileText,
  CheckCircle,
  Clock,
  Eye,
  AlertCircle,
  ArrowRight,
  Shield,
  Briefcase,
  HelpCircle,
  FileSpreadsheet,
  Layers,
  ChevronRight,
  FileDown
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EmailModal } from "@/components/shared/email-modal";
import { TemplateCard } from "@/components/templates/template-card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "@/components/ui/accordion";
import type { Template } from "@/lib/types";
import { TEMPLATE_PREVIEWS } from "@/lib/data/template-previews";

interface TemplateDetailClientProps {
  template: Template;
  relatedTemplates: Template[];
}

export function TemplateDetailClient({ template, relatedTemplates }: TemplateDetailClientProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activePreviewPage, setActivePreviewPage] = useState(1);
  const previewContainerRef = useRef<HTMLDivElement>(null);
  const previewData = TEMPLATE_PREVIEWS[template.slug] || TEMPLATE_PREVIEWS["nda-template"];

  const handleDownloadClick = () => {
    // Check if email already captured in localStorage
    const savedEmail = localStorage.getItem("t2l_email");
    if (savedEmail) {
      triggerDownload();
    } else {
      setIsModalOpen(true);
    }
  };

  const triggerDownload = () => {
    window.location.href = `/api/download?slug=${template.slug}`;
  };

  // Scroll to page helper
  const scrollToPage = (pageNum: number) => {
    setActivePreviewPage(pageNum);
    const pageElement = document.getElementById(`preview-page-${pageNum}`);
    if (pageElement && previewContainerRef.current) {
      previewContainerRef.current.scrollTo({
        top: pageElement.offsetTop - 20,
        behavior: "smooth"
      });
    }
  };

  // Handle scroll spy for preview pages
  const handlePreviewScroll = () => {
    if (!previewContainerRef.current) return;
    const container = previewContainerRef.current;
    const pages = [1, 2, 3, 4];
    
    for (const pageNum of pages) {
      const pageEl = document.getElementById(`preview-page-${pageNum}`);
      if (pageEl) {
        const top = pageEl.offsetTop - container.offsetTop;
        const height = pageEl.offsetHeight;
        if (container.scrollTop >= top - 100 && container.scrollTop < top + height - 100) {
          setActivePreviewPage(pageNum);
          break;
        }
      }
    }
  };

  // Get current date string for preview
  const currentDateStr = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  return (
    <div className="bg-[#FAFAF8] min-h-screen py-10 lg:py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link / Breadcrumbs */}
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
          <div className="lg:col-span-2 space-y-8">
            
            {/* Header Block */}
            <div className="bg-white p-6 sm:p-10 rounded-2xl border border-[#E8E4DC] shadow-sm">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                {template.category && (
                  <Badge variant="secondary" className="bg-[#FBF7F0] text-[#A67D3D] border-[#E8D5B0] font-semibold text-xs px-3 py-1">
                    {template.category.name}
                  </Badge>
                )}
                <div className="flex items-center gap-1.5 text-xs text-[#666] bg-[#FAFAF8] px-2.5 py-1 rounded-md border border-[#F0EBE1]">
                  <Clock className="w-3.5 h-3.5 text-[#C89A4B]" />
                  <span>Est. Completion: <strong>{template.estimated_completion_time}</strong></span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#666] bg-[#FAFAF8] px-2.5 py-1 rounded-md border border-[#F0EBE1]">
                  <Layers className="w-3.5 h-3.5 text-[#C89A4B]" />
                  <span>Size: <strong>{template.page_count} Pages</strong></span>
                </div>
              </div>
              
              <h1 className="text-3xl sm:text-4xl font-bold text-[#111] mb-4 leading-tight tracking-tight">
                {template.title}
              </h1>
              
              <p className="text-base sm:text-lg text-[#555] leading-relaxed mb-6">
                {template.description}
              </p>

              {/* Quick Info Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-[#FAFAF8] border border-[#F0EBE1] text-xs">
                <div>
                  <span className="text-[#888] block mb-1">Document ID</span>
                  <span className="font-semibold text-[#111]">{template.template_number}</span>
                </div>
                <div>
                  <span className="text-[#888] block mb-1">Version</span>
                  <span className="font-semibold text-[#111]">{template.version}</span>
                </div>
                <div>
                  <span className="text-[#888] block mb-1">Last Updated</span>
                  <span className="font-semibold text-[#111]">{template.revision_date}</span>
                </div>
                <div>
                  <span className="text-[#888] block mb-1">Total Downloads</span>
                  <span className="font-semibold text-[#111]">{template.download_count.toLocaleString()}+</span>
                </div>
              </div>
            </div>

            {/* Purpose & Application Section */}
            <div className="bg-white p-6 sm:p-10 rounded-2xl border border-[#E8E4DC] shadow-sm space-y-6">
              <div>
                <h2 className="text-lg font-bold text-[#111] mb-2.5 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#C89A4B]" />
                  Purpose of Document
                </h2>
                <p className="text-sm sm:text-base text-[#555] leading-relaxed">
                  {template.purpose}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-[#F0EBE1]">
                <div>
                  <h3 className="text-base font-bold text-[#111] mb-2">Who Should Use This?</h3>
                  <p className="text-sm text-[#666] leading-relaxed">
                    {template.who_should_use}
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#111] mb-2">When to Use This?</h3>
                  <p className="text-sm text-[#666] leading-relaxed">
                    {template.when_to_use}
                  </p>
                </div>
              </div>
            </div>

            {/* Required Information & Applicable Laws */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Required Info */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E8E4DC] shadow-sm">
                <h3 className="text-base font-bold text-[#111] mb-4 flex items-center gap-2">
                  <FileSpreadsheet className="w-5 h-5 text-[#C89A4B]" />
                  Required Information
                </h3>
                <ul className="space-y-3">
                  {template.required_information.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[#555]">
                      <div className="w-5 h-5 rounded-full bg-green-50 border border-green-200 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle className="w-3.5 h-3.5 text-green-600" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Applicable Laws */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E8E4DC] shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#111] mb-4 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-[#C89A4B]" />
                    Applicable Legislation
                  </h3>
                  <p className="text-sm text-[#666] mb-4 leading-relaxed">
                    This document is drafted in accordance with standard legal principles and complies with the following statutes:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {template.applicable_laws.map((law, i) => (
                      <span key={i} className="px-3 py-1.5 text-xs bg-[#FAFAF8] text-[#555] rounded-lg border border-[#F0EBE1] font-medium">
                        {law}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="pt-6 border-t border-[#F0EBE1] mt-6 text-xs text-[#888] flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-[#C89A4B] shrink-0 mt-0.5" />
                  <span>
                    Valid across all states in India. Custom local stamp duty regulations may apply depending on execution location.
                  </span>
                </div>
              </div>
            </div>

            {/* Critical Clauses */}
            <div className="bg-white p-6 sm:p-10 rounded-2xl border border-[#E8E4DC] shadow-sm">
              <h2 className="text-lg font-bold text-[#111] mb-4">Critical Clauses Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {template.key_clauses.map((clause, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#FAFAF8] border border-[#F0EBE1]">
                    <span className="text-xs font-bold bg-[#C89A4B] text-white w-5.5 h-5.5 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <div>
                      <span className="text-sm text-[#333] font-semibold block">{clause}</span>
                      <span className="text-[11px] text-[#888]">Fully drafted, corporate law firm standard</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Benefits */}
            <div className="bg-white p-6 sm:p-10 rounded-2xl border border-[#E8E4DC] shadow-sm">
              <h2 className="text-lg font-bold text-[#111] mb-4">Key Benefits & Protections</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {template.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-[#555]">
                    <div className="w-5.5 h-5.5 rounded-full bg-green-50 flex items-center justify-center shrink-0 mt-0.5 border border-green-100">
                      <CheckCircle className="w-3.5 h-3.5 text-green-600" />
                    </div>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Frequently Asked Questions */}
            {template.faqs && template.faqs.length > 0 && (
              <div className="bg-white p-6 sm:p-10 rounded-2xl border border-[#E8E4DC] shadow-sm">
                <h2 className="text-lg font-bold text-[#111] mb-6 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#C89A4B]" />
                  Frequently Asked Questions
                </h2>
                
                <Accordion type="single" collapsible className="w-full">
                  {template.faqs.map((faq, i) => (
                    <AccordionItem key={i} value={`faq-${i}`} className="border-[#F0EBE1]">
                      <AccordionTrigger className="text-sm font-semibold text-[#111] hover:text-[#C89A4B] hover:no-underline py-4">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-[#666] leading-relaxed pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            )}

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
                Fully editable corporate format (Microsoft Word)
              </p>
              
              <Button
                onClick={handleDownloadClick}
                className="w-full h-12 bg-[#111] hover:bg-[#C89A4B] text-white rounded-xl text-base font-semibold transition-all duration-300 flex items-center justify-center gap-2 mb-3 shadow-md border-none cursor-pointer"
              >
                <Download className="w-5 h-5" />
                Free Download (DOCX)
              </Button>

              <div className="flex items-center justify-center gap-4 text-xs text-[#888] mt-4">
                <span>Downloads: <strong>{template.download_count.toLocaleString()}+</strong></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8E4DC]" />
                <span>Format: <strong>DOCX Word</strong></span>
              </div>
            </div>

            {/* Premium CTA */}
            <div className="bg-[#111] text-white p-6 rounded-2xl border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C89A4B] rounded-full blur-[80px] opacity-10" />
              <div className="relative z-10">
                <Badge className="bg-[#C89A4B] text-white border-none font-semibold mb-3 text-[10px] tracking-wide">
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
                  className="group inline-flex items-center justify-center gap-1.5 w-full py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl border border-white/15 text-xs font-semibold transition-all"
                >
                  Create Custom Contract
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>

            {/* Premium Document Preview System */}
            <div className="bg-white border border-[#E8E4DC] rounded-2xl overflow-hidden shadow-sm flex flex-col h-[520px]">
              {/* Preview Header */}
              <div className="bg-[#FAFAF8] border-b border-[#E8E4DC] px-4 py-3 flex items-center justify-between shrink-0">
                <span className="text-xs font-semibold text-[#555] flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-[#C89A4B]" />
                  Document Preview (Page {activePreviewPage} of 4)
                </span>
                <span className="text-[10px] text-[#888] uppercase tracking-wider font-semibold bg-white border border-[#E8E4DC] px-1.5 py-0.5 rounded">
                  DOCX View
                </span>
              </div>
              
              {/* Preview Content Area */}
              <div className="flex flex-1 overflow-hidden relative">
                
                {/* Left Mini Thumbnails Navigation */}
                <div className="w-14 bg-[#FAFAF8] border-r border-[#E8E4DC] flex flex-col items-center py-4 gap-3 shrink-0 overflow-y-auto select-none">
                  {[1, 2, 3, 4].map((pageNum) => (
                    <button
                      key={pageNum}
                      onClick={() => scrollToPage(pageNum)}
                      className={`w-9 h-12 rounded border flex flex-col items-center justify-center text-[10px] transition-all relative ${
                        activePreviewPage === pageNum
                          ? "border-[#C89A4B] bg-white shadow-sm ring-2 ring-[#C89A4B]/10 font-bold text-[#A67D3D]"
                          : "border-[#E8E4DC] bg-white text-[#888] hover:border-[#C89A4B]/50"
                      }`}
                    >
                      <span>P.{pageNum}</span>
                      <div className={`absolute bottom-0 inset-x-0 h-1 rounded-b ${activePreviewPage === pageNum ? "bg-[#C89A4B]" : "bg-transparent"}`} />
                    </button>
                  ))}
                </div>

                {/* Main Paper Sheet Mockup Container */}
                <div
                  ref={previewContainerRef}
                  onScroll={handlePreviewScroll}
                  className="flex-1 bg-[#F5F3EF] overflow-y-auto p-4 space-y-4 relative scroll-smooth"
                >
                  
                  {/* PAGE 1: Dynamic Content Page 1 */}
                  <div
                    id="preview-page-1"
                    className="aspect-[1/1.4] w-full bg-white shadow-md border border-[#E8E4DC] p-6 text-left flex flex-col justify-between select-none text-[7px] text-[#333] leading-relaxed"
                  >
                    <div className="flex justify-between border-b border-[#F0EBE1] pb-1.5 text-[6px] text-[#888] font-semibold shrink-0">
                      <span>{template.title}</span>
                      <span>{template.template_number}</span>
                    </div>

                    <div className="flex-1 py-2 overflow-y-auto space-y-1.5 scrollbar-none">
                      {previewData.page1.map((para, idx) => {
                        const trimmed = para.trim();
                        // Header detection
                        if (trimmed.length < 80 && (
                          trimmed === trimmed.toUpperCase() || 
                          /^\d+\.\s+[A-Z]/.test(trimmed) || 
                          /^[A-Z\s&,\-\(\):]+$/.test(trimmed) && trimmed.length > 3
                        )) {
                          return (
                            <div key={idx} className="font-bold text-[#111] mt-2 mb-0.5 text-[7.5px] uppercase tracking-wide">
                              {trimmed}
                            </div>
                          );
                        }
                        // List item detection
                        if (/^\([a-z\d]\)\s+/.test(trimmed) || /^-\s+/.test(trimmed) || /^\d+\.\d+\s+/.test(trimmed) || /^[a-z]\.\s+/.test(trimmed)) {
                          return (
                            <p key={idx} className="pl-3 mt-0.5 text-[6.5px] text-[#444] leading-normal">
                              {trimmed}
                            </p>
                          );
                        }
                        return (
                          <p key={idx} className="mt-1 text-[6.5px] leading-relaxed text-[#444]">
                            {trimmed}
                          </p>
                        );
                      })}
                    </div>

                    <div className="border-t border-[#F0EBE1] pt-1.5 text-center text-[6px] text-[#888] shrink-0">
                      Page 1 of 4
                    </div>
                  </div>

                  {/* PAGE 2: Dynamic Content Page 2 */}
                  <div
                    id="preview-page-2"
                    className="aspect-[1/1.4] w-full bg-white shadow-md border border-[#E8E4DC] p-6 text-left flex flex-col justify-between select-none text-[7px] text-[#333] leading-relaxed"
                  >
                    <div className="flex justify-between border-b border-[#F0EBE1] pb-1.5 text-[6px] text-[#888] font-semibold shrink-0">
                      <span>{template.title}</span>
                      <span>{template.template_number}</span>
                    </div>

                    <div className="flex-1 py-2 overflow-y-auto space-y-1.5 scrollbar-none">
                      {previewData.page2.map((para, idx) => {
                        const trimmed = para.trim();
                        // Header detection
                        if (trimmed.length < 80 && (
                          trimmed === trimmed.toUpperCase() || 
                          /^\d+\.\s+[A-Z]/.test(trimmed) || 
                          /^[A-Z\s&,\-\(\):]+$/.test(trimmed) && trimmed.length > 3
                        )) {
                          return (
                            <div key={idx} className="font-bold text-[#111] mt-2 mb-0.5 text-[7.5px] uppercase tracking-wide">
                              {trimmed}
                            </div>
                          );
                        }
                        // List item detection
                        if (/^\([a-z\d]\)\s+/.test(trimmed) || /^-\s+/.test(trimmed) || /^\d+\.\d+\s+/.test(trimmed) || /^[a-z]\.\s+/.test(trimmed)) {
                          return (
                            <p key={idx} className="pl-3 mt-0.5 text-[6.5px] text-[#444] leading-normal">
                              {trimmed}
                            </p>
                          );
                        }
                        return (
                          <p key={idx} className="mt-1 text-[6.5px] leading-relaxed text-[#444]">
                            {trimmed}
                          </p>
                        );
                      })}
                    </div>

                    <div className="border-t border-[#F0EBE1] pt-1.5 text-center text-[6px] text-[#888] shrink-0">
                      Page 2 of 4
                    </div>
                  </div>

                  {/* PAGE 3: Dynamic Content Page 3 */}
                  <div
                    id="preview-page-3"
                    className="aspect-[1/1.4] w-full bg-white shadow-md border border-[#E8E4DC] p-6 text-left flex flex-col justify-between select-none text-[7px] text-[#333] leading-relaxed"
                  >
                    <div className="flex justify-between border-b border-[#F0EBE1] pb-1.5 text-[6px] text-[#888] font-semibold shrink-0">
                      <span>{template.title}</span>
                      <span>{template.template_number}</span>
                    </div>

                    <div className="flex-1 py-2 overflow-y-auto space-y-1.5 scrollbar-none">
                      {previewData.page3.map((para, idx) => {
                        const trimmed = para.trim();
                        // Header detection
                        if (trimmed.length < 80 && (
                          trimmed === trimmed.toUpperCase() || 
                          /^\d+\.\s+[A-Z]/.test(trimmed) || 
                          /^[A-Z\s&,\-\(\):]+$/.test(trimmed) && trimmed.length > 3
                        )) {
                          return (
                            <div key={idx} className="font-bold text-[#111] mt-2 mb-0.5 text-[7.5px] uppercase tracking-wide">
                              {trimmed}
                            </div>
                          );
                        }
                        // List item detection
                        if (/^\([a-z\d]\)\s+/.test(trimmed) || /^-\s+/.test(trimmed) || /^\d+\.\d+\s+/.test(trimmed) || /^[a-z]\.\s+/.test(trimmed)) {
                          return (
                            <p key={idx} className="pl-3 mt-0.5 text-[6.5px] text-[#444] leading-normal">
                              {trimmed}
                            </p>
                          );
                        }
                        return (
                          <p key={idx} className="mt-1 text-[6.5px] leading-relaxed text-[#444]">
                            {trimmed}
                          </p>
                        );
                      })}
                    </div>

                    <div className="border-t border-[#F0EBE1] pt-1.5 text-center text-[6px] text-[#888] shrink-0">
                      Page 3 of 4
                    </div>
                  </div>

                  {/* PAGE 4: Dynamic Content Page 4 */}
                  <div
                    id="preview-page-4"
                    className="aspect-[1/1.4] w-full bg-white shadow-md border border-[#E8E4DC] p-6 text-left flex flex-col justify-between select-none text-[7px] text-[#333] leading-relaxed"
                  >
                    <div className="flex justify-between border-b border-[#F0EBE1] pb-1.5 text-[6px] text-[#888] font-semibold shrink-0">
                      <span>{template.title}</span>
                      <span>{template.template_number}</span>
                    </div>

                    <div className="flex-1 py-2 overflow-y-auto space-y-1.5 scrollbar-none">
                      {previewData.page4.map((para, idx) => {
                        const trimmed = para.trim();
                        // Header detection
                        if (trimmed.length < 80 && (
                          trimmed === trimmed.toUpperCase() || 
                          /^\d+\.\s+[A-Z]/.test(trimmed) || 
                          /^[A-Z\s&,\-\(\):]+$/.test(trimmed) && trimmed.length > 3
                        )) {
                          return (
                            <div key={idx} className="font-bold text-[#111] mt-2 mb-0.5 text-[7.5px] uppercase tracking-wide">
                              {trimmed}
                            </div>
                          );
                        }
                        
                        // Signature lines or empty sign boxes
                        if (trimmed.includes("_____") || trimmed.includes("Name:") || trimmed.includes("Title:") || trimmed.includes("Date:")) {
                          return (
                            <p key={idx} className="text-[6px] text-[#555] font-mono leading-tight my-1">
                              {trimmed}
                            </p>
                          );
                        }

                        // List item detection
                        if (/^\([a-z\d]\)\s+/.test(trimmed) || /^-\s+/.test(trimmed) || /^\d+\.\d+\s+/.test(trimmed) || /^[a-z]\.\s+/.test(trimmed)) {
                          return (
                            <p key={idx} className="pl-3 mt-0.5 text-[6.5px] text-[#444] leading-normal">
                              {trimmed}
                            </p>
                          );
                        }
                        return (
                          <p key={idx} className="mt-1 text-[6.5px] leading-relaxed text-[#444]">
                            {trimmed}
                          </p>
                        );
                      })}
                    </div>

                    <div className="border-t border-[#F0EBE1] pt-1.5 text-center text-[6px] text-[#888] shrink-0">
                      Page 4 of 4
                    </div>
                  </div>

                </div>

                {/* Fade-out Overlay on last pages with CTA */}
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/95 to-transparent flex flex-col items-center justify-end pb-6 px-4 z-20">
                  <div className="text-center space-y-2 max-w-xs">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#FBF7F0] text-[#A67D3D] border border-[#E8D5B0] mx-auto">
                      <Shield className="w-3 h-3" />
                      Law Firm Draft Standard
                    </span>
                    <h5 className="text-xs font-bold text-[#111]">
                      Ready to customize?
                    </h5>
                    <p className="text-[10px] text-[#666] leading-normal">
                      Download the high-fidelity editable Word Document template including all schedules and annexures.
                    </p>
                    <button
                      onClick={handleDownloadClick}
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#111] hover:bg-[#C89A4B] text-white rounded-lg text-xs font-semibold transition-all border-none cursor-pointer mt-1"
                    >
                      <FileDown className="w-3.5 h-3.5" />
                      Get Editable Template
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Related Templates Grid */}
        {relatedTemplates.length > 0 && (
          <div className="mt-16 pt-12 border-t border-[#E8E4DC]">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-[#111]">
                Related Templates
              </h2>
              <Link href="/templates" className="text-xs font-semibold text-[#A67D3D] hover:text-[#111] flex items-center gap-1 transition-colors">
                View All Templates
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            
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
