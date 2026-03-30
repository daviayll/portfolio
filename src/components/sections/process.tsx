import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Heading, Text, Label } from "@/components/ui/typography";
import { FadeIn } from "@/components/ui/fade-in";
import { processSteps } from "@/content/process-steps";

export function Process() {
  return (
    <Section id="process">
      <Container>
        <FadeIn>
          <Label as="p">The 3-Step Bridge</Label>
          <Heading level="h2" className="mt-4 max-w-2xl">
            From chaos to control. Three steps, no mystery.
          </Heading>
        </FadeIn>

        <div className="relative mt-16 md:mt-20 max-w-2xl">
          {/* Vertical connecting line */}
          <div
            aria-hidden="true"
            className="absolute left-[0.6rem] top-2 bottom-2 w-px bg-border"
          />

          <ol className="space-y-16 md:space-y-20">
            {processSteps.map((step, i) => (
              <li key={step.number} className="relative pl-12">
                {/* Step number dot — outside FadeIn so positioning is stable */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent"
                >
                  <span className="block h-1.5 w-1.5 rounded-full bg-bg" />
                </span>

                <FadeIn delay={i * 0.1}>
                  <span className="font-mono text-sm text-text-muted">
                    {step.number}
                  </span>
                  <Heading level="h3" className="mt-2">
                    {step.title}
                  </Heading>
                  <Text variant="muted" className="mt-3">
                    {step.description}
                  </Text>
                </FadeIn>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
