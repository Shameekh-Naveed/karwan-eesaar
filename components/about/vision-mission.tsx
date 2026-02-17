import { Card, CardContent } from "@/components/ui/card";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { visionMission } from "@/lib/content/about";
import { Eye, Target } from "lucide-react";

export function VisionMission() {
  return (
    <SectionWrapper id="vision-mission">
      <div className="grid gap-8 md:grid-cols-2">
        <Card className="border-0 bg-primary/5 shadow-sm">
          <CardContent className="p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Eye className="size-6" />
            </div>
            <h2 className="mb-4 text-2xl font-bold text-foreground">
              Our Vision
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {visionMission.vision}
            </p>
          </CardContent>
        </Card>
        <Card className="border-0 bg-secondary/5 shadow-sm">
          <CardContent className="p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 text-secondary">
              <Target className="size-6" />
            </div>
            <h2 className="mb-4 text-2xl font-bold text-foreground">
              Our Mission
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {visionMission.mission}
            </p>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
}
