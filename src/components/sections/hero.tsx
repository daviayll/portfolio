import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Heading, Text, Label } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

export function Hero() {
  return (
    <Section className="flex min-h-screen items-center pt-20">
      <Container className="flex flex-col items-center text-center">
        <FadeIn>
          <Label>Portfolio / Toni</Label>
        </FadeIn>
        <FadeIn delay={0.1}>
          <Heading level="display" className="mt-6 max-w-3xl">
            Most AI projects fail because no one diagnosed the real problem.
          </Heading>
        </FadeIn>
        <FadeIn delay={0.2}>
          <Text variant="muted" className="mt-6 max-w-xl">
            I help business owners figure out what they actually need from
            technology — then I build it.
          </Text>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="mt-10">
            <Button href="/#process" arrow>
              See how I work
            </Button>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
