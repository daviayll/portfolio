import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Text, Label } from "@/components/ui/typography";
import { FadeIn } from "@/components/ui/fade-in";

const tools = [
  {
    name: "n8n",
    logo: "/logos/n8n.svg",
    role: "Workflow automation",
    description:
      "Every automation is a visible, editable flow. No black box. Your team can see what runs, change it, and understand it without needing me.",
  },
  {
    name: "Claude",
    logo: "/logos/anthropic.svg",
    role: "AI",
    description:
      "For the parts that need judgment — extracting data from documents, drafting content, classifying inputs. AI where it actually helps, not everywhere.",
  },
  {
    name: "Puppeteer",
    logo: "/logos/puppeteer.svg",
    role: "Web scraping",
    description:
      "Automated data collection from any website. When the data you need isn't available via API, we go get it directly.",
  },
];

export function Stack() {
  return (
    <Section className="border-t border-border">
      <Container>
        <FadeIn>
          <Label as="p">Built with</Label>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {tools.map((tool, i) => (
            <FadeIn key={tool.name} delay={i * 0.1}>
              <div className="flex flex-col gap-4">
                <img
                  src={tool.logo}
                  alt={tool.name}
                  width={36}
                  height={36}
                  className="h-9 w-9 object-contain"
                />
                <div>
                  <p className="font-medium text-text">{tool.name}</p>
                  <p className="mt-0.5 font-mono text-xs uppercase tracking-wider text-text-muted">
                    {tool.role}
                  </p>
                  <Text variant="muted" className="mt-3 text-sm">
                    {tool.description}
                  </Text>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
