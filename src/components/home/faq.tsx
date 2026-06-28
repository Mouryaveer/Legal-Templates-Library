"use client";

import { ScrollReveal } from "@/components/shared/scroll-reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
}

export function FAQSection({ faqs }: FAQSectionProps) {
  return (
    <section className="section-padding bg-[#FAFAF8]" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12">
          <span className="text-sm font-medium text-[#C89A4B] uppercase tracking-wider mb-3 block">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#666] max-w-2xl mx-auto">
            Everything you need to know about our legal templates and how to use them.
          </p>
        </ScrollReveal>

        <ScrollReveal duration={0.8} delay={0.15}>
          <div className="bg-white rounded-2xl border border-[#E8E4DC] p-6 sm:p-8 shadow-sm">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-[#F0EBE1] last:border-b-0 py-1"
                >
                  <AccordionTrigger className="text-left font-semibold text-[#111] hover:text-[#C89A4B] py-4 text-base focus-visible:outline-none transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#666] leading-relaxed text-sm pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
