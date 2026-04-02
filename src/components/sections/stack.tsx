import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Text, Label } from "@/components/ui/typography";
import { FadeIn } from "@/components/ui/fade-in";

const tools = [
  {
    name: "n8n",
    logo: "/logos/n8n.svg",
    role: "Workflow automation",
    description: "Building and running automated workflows.",
  },
  {
    name: "Claude & Claude Codework",
    logo: "/logos/anthropic.svg",
    role: "AI integration",
    description:
      "AI integration and knowledge transfer to upgrade team productivity.",
  },
  {
    name: "Apify",
    logo: "/logos/apify.svg",
    role: "Web scraping",
    description: "Scraping and collecting data from the web.",
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
