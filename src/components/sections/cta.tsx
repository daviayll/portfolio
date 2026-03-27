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
            Let&apos;s figure out what you actually need.
          </Heading>
          <Text variant="muted" className="mt-4 max-w-md">
            A 30-minute conversation. No pitch, no pressure. Just your situation
            and some good questions.
          </Text>
          <div className="mt-8">
            <Button href="https://calendly.com/daviayllantoni/30min">
              Book a conversation
            </Button>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
