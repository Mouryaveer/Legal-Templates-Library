import { HeroSection } from "@/components/home/hero";
import { FeaturedTemplates } from "@/components/home/featured-templates";
import { CategoriesGrid } from "@/components/home/categories-grid";
import { StatsSection } from "@/components/home/stats-section";
import { BenefitsSection } from "@/components/home/benefits";
import { HowItWorks } from "@/components/home/how-it-works";
import { FAQSection } from "@/components/home/faq";
import { CTASection } from "@/components/home/cta-section";
import { generateFAQSchema } from "@/lib/constants/seo";

const faqs = [
  { question: "Are these legal templates free to download?", answer: "Yes, all templates are free to download. We only ask for your email address so we can notify you of updates and new templates." },
  { question: "Can I customize these templates for my business?", answer: "Absolutely. All templates are designed to be customized. However, we recommend having a legal professional review any modified documents before use." },
  { question: "Are these templates legally valid in India?", answer: "Our templates are drafted by legal professionals and follow Indian legal standards. However, legal requirements vary by jurisdiction and situation, so we recommend professional review." },
  { question: "What file formats are available?", answer: "Templates are available in DOCX (Microsoft Word) format for easy editing, and PDF format for reference." },
  { question: "How often are templates updated?", answer: "We regularly review and update our templates to reflect changes in law and best practices. Subscribers are notified of updates automatically." },
  { question: "Can I use these templates for commercial purposes?", answer: "Yes, you can use our templates for your business operations. However, redistribution or reselling of the templates is not permitted." },
  { question: "What is Turn2Law DocEngine?", answer: "DocEngine is our premium AI-powered document automation platform that lets you generate customized legal documents tailored to your specific requirements." },
  { question: "Do you offer custom template drafting?", answer: "Yes, through our DocEngine platform and legal team, we can create custom templates tailored to your specific business needs. Contact us for more information." },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(faqs)),
        }}
      />
      <HeroSection />
      <FeaturedTemplates />
      <CategoriesGrid />
      <StatsSection />
      <BenefitsSection />
      <HowItWorks />
      <FAQSection faqs={faqs} />
      <CTASection />
    </>
  );
}
