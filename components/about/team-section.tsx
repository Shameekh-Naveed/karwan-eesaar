import { Card, CardContent } from "@/components/ui/card";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { teamMembers } from "@/lib/content/about";

export function TeamSection() {
  return (
    <SectionWrapper variant="alt" id="team">
      <SectionHeading
        title="Our Team"
        subtitle="Meet the dedicated individuals driving our mission forward."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => (
          <Card
            key={member.name}
            className="border-0 shadow-sm text-center"
          >
            <CardContent className="p-6">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 text-2xl font-bold text-primary">
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {member.name}
              </h3>
              <p className="text-sm font-medium text-secondary">
                {member.role}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
