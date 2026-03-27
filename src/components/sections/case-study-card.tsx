import { Heading, Text, Label } from "@/components/ui/typography";
import { FadeIn } from "@/components/ui/fade-in";

type NarrativeBlock = {
  label: string;
  text: string;
};

export type CaseStudyData = {
  number: string;
  title: string;
  narrative: NarrativeBlock[];
};

export function CaseStudyCard({ number, title, narrative }: CaseStudyData) {
  return (
    <article className="py-16 md:py-20 first:pt-0 last:pb-0 border-b border-border-dark last:border-b-0">
      <FadeIn>
        <Label className="text-text-light/50">Case study {number}</Label>
        <Heading level="h3" className="mt-3 text-text-light">
          {title}
        </Heading>
      </FadeIn>

      <div className="mt-10 space-y-10 max-w-2xl">
        {narrative.map((block, i) => (
          <FadeIn key={block.label} delay={i * 0.08}>
            <Label className="text-text-light/50">{block.label}</Label>
            <Text variant="light" className="mt-2 text-text-light/90">
              {block.text}
            </Text>
          </FadeIn>
        ))}
      </div>
    </article>
  );
}
