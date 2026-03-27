import { Hero } from "@/components/sections/hero";
import { Process } from "@/components/sections/process";
import { CaseStudies } from "@/components/sections/case-studies";
import { About } from "@/components/sections/about";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Process />
      <CaseStudies />
      <About />
      <CTA />
    </>
  );
}
