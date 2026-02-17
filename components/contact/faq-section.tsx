import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { faqItems } from "@/lib/content/contact";

export function FaqSection() {
  return (
    <SectionWrapper variant="alt">
      <SectionHeading
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about Eesaar Foundation."
      />
      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible>
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionWrapper>
  );
}
