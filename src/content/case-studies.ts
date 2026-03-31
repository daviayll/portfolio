import type { CaseStudyData } from "@/components/sections/case-study-card";

export const caseStudies: CaseStudyData[] = [
  {
    number: "01",
    title: "They asked for a form. We built them a system.",
    narrative: [
      {
        label: "What they asked for",
        text: "\"We need a form where clients fill in their details, and a dashboard so we can see everything.\" A services company in Barcelona, growing fast, drowning in manual work.",
      },
      {
        label: "What we found",
        text: "The form wasn't the problem. They were copying data between WhatsApp, spreadsheets, and email. Every new client meant five manual steps across three tools. The real bottleneck was the workflow — the form was just the visible part.",
      },
      {
        label: "What we built",
        text: "A complete client management system. Intake form with validation, automated notifications, service tracking, and an internal dashboard with filters and status management. What started as \"a form and a dashboard\" turned into the operational core of the business.",
      },
      {
        label: "What changed",
        text: "Admin went from hours to minutes. New hires stopped needing a week of shadowing to get up to speed. The owner could finally see every client at a glance and spend time growing instead of managing.",
      },
    ],
  },
  {
    number: "02",
    title: "They wanted to search less. They ended up closing more.",
    narrative: [
      {
        label: "What they asked for",
        text: "\"We spend too much time looking for potential clients online. We need a way to do it faster.\" A service business that relied on manual research to fill their pipeline — good at closing, but losing hours before the conversation even started.",
      },
      {
        label: "What we found",
        text: "The searching was only part of it. Once they found someone, they had to check if they were the right fit, gather their contact details, and add them to their list by hand. Each lead took fifteen minutes before anyone had picked up the phone. The bottleneck wasn't effort — it was repetition.",
      },
      {
        label: "What we built",
        text: "An automated flow that finds and qualifies leads matching their target profile, then loads them directly into their pipeline, ready to contact. What used to take hours of manual research now runs on its own, on a schedule.",
      },
      {
        label: "What changed",
        text: "The team stopped spending mornings on research and started spending them on calls. The pipeline stayed full without anyone managing it. And they finally had data on what types of leads actually converted — which changed how they defined their target in the first place.",
      },
    ],
  },
];
