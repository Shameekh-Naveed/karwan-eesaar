import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { PhotoFrame } from "@/components/shared/photo-frame";
import { teamMembers } from "@/lib/content/about";

export function TeamSection() {
  if (teamMembers.length === 0) return null;

  return (
    <SectionWrapper variant="alt" id="team">
      <SectionHeading title="Our team" subtitle="Volunteers from Mansehra who run every drive themselves." />
      {/* Centered wrap: an odd member sits in the middle of the last row instead of alone on the left */}
      <ul className="mx-auto flex max-w-5xl flex-wrap justify-center gap-x-6 gap-y-10 md:gap-x-10">
        {teamMembers.map((member) => (
          <li key={member.name} className="w-[calc(50%-0.75rem)] text-center sm:w-44 md:w-48">
            <PhotoFrame
              slot={member.photo}
              alt={`${member.name}, ${member.role}`}
              sizes="(min-width: 768px) 192px, 45vw"
              className="mx-auto aspect-square w-full max-w-44 rounded-full ring-4 ring-background"
            />
            <p className="mt-4 text-lg font-bold leading-tight text-foreground">{member.name}</p>
            <p className="mt-1 text-secondary">{member.role}</p>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
