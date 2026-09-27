import { LeadForm } from "@/components/forms/lead-form";

export function ContactForm() {
  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold text-foreground">
        Send us a message
      </h2>
      <LeadForm formId="contact" />
    </div>
  );
}
