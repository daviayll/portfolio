import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Heading, Label } from "@/components/ui/typography";
import { FadeIn } from "@/components/ui/fade-in";
import { CaseStudyCard } from "@/components/sections/case-study-card";
import { caseStudies } from "@/content/case-studies";

export function CaseStudies() {
  return (
    <Section dark id="work">
      <Container>
        <FadeIn>
          <Label as="p" className="text-text-light/50">
            Real results
          </Label>
          <Heading level="h2" className="mt-4 text-text-light">
            Every business has a different mess. Same approach, different fix.
          </Heading>
        </FadeIn>

        <div className="mt-16 md:mt-20">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.number} {...study} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
