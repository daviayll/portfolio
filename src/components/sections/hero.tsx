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
          <Label>E-commerce automation</Label>
        </FadeIn>
        <FadeIn delay={0.1}>
          <Heading level="display" className="mt-6 max-w-3xl">
            Your e-commerce is growing. Your operations aren&apos;t keeping up.
          </Heading>
        </FadeIn>
        <FadeIn delay={0.2}>
          <Text variant="muted" className="mt-6 max-w-xl">
            I help e-commerce businesses replace the chaos with AI automation —
            built by someone who&apos;s done it inside one of Europe&apos;s
            largest fashion retailers.
          </Text>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="mt-10">
            <Button href="/#process" arrow>
              See how it works
            </Button>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
