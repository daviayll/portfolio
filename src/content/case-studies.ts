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
    title: "They wanted to sync their inventory. They got a business that runs itself.",
    narrative: [
      {
        label: "What they asked for",
        text: "\"Our online store and physical shop never show the same stock.\" A fashion retailer selling across their website and a flagship store, constantly overselling products that were already gone.",
      },
      {
        label: "What we found",
        text: "Inventory was the surface. Returns were slipping through the cracks, nobody could tell which channel was actually profitable, and someone spent every Sunday night reconciling numbers by hand. The stockouts weren't the core issue — having no single source of truth was.",
      },
      {
        label: "What we built",
        text: "Automated inventory sync between their online store and POS. A returns workflow that updates stock in real time. A dashboard showing live sales and margins per channel. Simple on the surface, connected underneath.",
      },
      {
        label: "What changed",
        text: "No more overselling. No more Sunday reconciliation. And for the first time, they could see their online channel had 3x the margin of in-store — which changed how they thought about growth entirely.",
      },
    ],
  },
];
