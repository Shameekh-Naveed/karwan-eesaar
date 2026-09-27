import { SectionWrapper } from "@/components/shared/section-wrapper";
import { visionMission } from "@/lib/content/about";

export function VisionMission() {
  const items = [
    { title: "Our vision", text: visionMission.vision },
    { title: "Our mission", text: visionMission.mission },
  ];

  return (
    <SectionWrapper id="vision-mission" className="py-12 md:py-16">
      <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2 md:gap-6">
        {items.map((item) => (
          <div key={item.title} className="rounded-2xl bg-muted p-6 md:p-8">
            <h2 className="text-2xl font-bold text-foreground">{item.title}</h2>
            <p className="mt-3 text-lg leading-relaxed text-foreground/80">{item.text}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
