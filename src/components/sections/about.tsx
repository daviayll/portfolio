import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Heading, Text, Label } from "@/components/ui/typography";
import { FadeIn } from "@/components/ui/fade-in";
import { about } from "@/content/about";

export function About() {
  const paragraphs = about.body.split("\n\n");

  return (
    <Section id="about">
      <Container wide>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-12 md:gap-16">
          {/* Left column — label + heading */}
          <FadeIn>
            <Label as="p">{about.label}</Label>
            <Heading level="h2" className="mt-4">
              {about.heading}
            </Heading>
          </FadeIn>

          {/* Right column — prose */}
          <FadeIn delay={0.1}>
            <div className="space-y-6 md:pt-2">
              {paragraphs.map((paragraph, i) => (
                <Text key={i} variant="muted">
                  {paragraph}
                </Text>
              ))}
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
