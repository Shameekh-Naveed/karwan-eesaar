import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { teamMembers } from "@/lib/content/about";

export function TeamSection() {
  if (teamMembers.length === 0) return null;

  return (
    <SectionWrapper variant="alt" id="team">
      <SectionHeading title="Our team" />
      {/* 2 × 2 on tablets, one row of four on desktop, so nobody sits alone on a row */}
      <ul className="mx-auto grid max-w-5xl grid-cols-2 gap-6 lg:grid-cols-4">
        {teamMembers.map((member) => (
          <li key={member.name} className="text-center">
            <p className="text-lg font-bold text-foreground">{member.name}</p>
            <p className="text-secondary">{member.role}</p>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
