import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Heading, Text } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

export function CTA() {
  return (
    <Section id="contact" className="border-t border-border">
      <Container className="flex flex-col items-center text-center">
        <FadeIn>
          <Heading level="h2" className="max-w-2xl">
            Let&apos;s figure out where your operations are holding you back.
          </Heading>
          <Text variant="muted" className="mt-4 max-w-md">
            30 minutes. No jargon, no pitch. Just your business, your
            bottlenecks, and some honest answers about what AI can — and
            can&apos;t — do for your operation.
          </Text>
          <div className="mt-8">
            <Button href="https://calendly.com/daviayllantoni/30min">
              Book a free call
            </Button>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
