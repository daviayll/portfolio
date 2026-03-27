import type { CaseStudyData } from "@/components/sections/case-study-card";

export const caseStudies: CaseStudyData[] = [
  {
    number: "01",
    title: "They asked for a form. I built them a system.",
    narrative: [
      {
        label: "What they came saying",
        text: "\"We need a form where clients fill in their details, and a dashboard so we can see everything.\" A neighborhood services company in Barcelona, growing fast, drowning in manual work.",
      },
      {
        label: "What I discovered",
        text: "The form wasn't the problem. They were copying data between WhatsApp, spreadsheets, and email. Every new client meant five manual steps across three tools. The real problem was the workflow — the form was just the visible symptom.",
      },
      {
        label: "What I built",
        text: "A complete client management system: intake form with validation, automated notifications, service tracking, internal dashboard with filters and status management. What started as \"a form and a dashboard\" became the operational backbone of the business.",
      },
      {
        label: "What it unlocked",
        text: "They went from spending hours on admin to minutes. New team members could onboard without shadowing anyone for a week. The owner could finally see the state of every client at a glance — and focus on growing instead of managing.",
      },
    ],
  },
  {
    number: "02",
    title: "A restaurant that wanted bookings — and got operations.",
    narrative: [
      {
        label: "What they came saying",
        text: "\"We need an online booking system.\" A small restaurant getting more calls than they could handle during peak hours.",
      },
      {
        label: "What I discovered",
        text: "Bookings were just the entry point. They were also losing track of cancellations, double-booking tables, and had no way to communicate changes to the kitchen. The phone wasn't the bottleneck — the lack of a single source of truth was.",
      },
      {
        label: "What I built",
        text: "An automated reservation flow with real-time availability, confirmation messages, cancellation handling, and an internal view that synced front-of-house with the kitchen. Simple on the surface, connected underneath.",
      },
      {
        label: "What it unlocked",
        text: "Fewer missed reservations, fewer no-shows, and a team that stopped arguing about who said what to which customer. The phone still rings — but now it's for questions, not logistics.",
      },
    ],
  },
];
