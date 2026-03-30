import type { CaseStudyData } from "@/components/sections/case-study-card";

export const caseStudies: CaseStudyData[] = [
  {
    number: "01",
    title: "They wanted a product form. I built them an order machine.",
    narrative: [
      {
        label: "What they came saying",
        text: "\"We need a form where customers can customize their orders, and a dashboard so we can track everything.\" A growing e-commerce brand, processing hundreds of orders a week, still managing everything between WhatsApp, spreadsheets, and email.",
      },
      {
        label: "What I discovered",
        text: "The form wasn't the problem. Every new order meant five manual steps across three tools — copy the address here, update the stock there, send the confirmation by hand. The real cost wasn't the form. It was the operational drag that was capping their growth.",
      },
      {
        label: "What I built",
        text: "A complete order management system: customizable order forms, automated confirmations, real-time inventory sync, and a dashboard showing every order's status at a glance. What started as \"a form and a dashboard\" became the operational backbone of the business.",
      },
      {
        label: "What it unlocked",
        text: "Admin hours collapsed. New team members onboarded in days, not weeks. And the founder finally had the headspace to focus on scaling — not firefighting.",
      },
    ],
  },
  {
    number: "02",
    title: "They wanted to sync their inventory. They got a business that runs itself.",
    narrative: [
      {
        label: "What they came saying",
        text: "\"Our online store and physical shop never show the same stock.\" A fashion retailer selling across their website and a flagship store, constantly overselling products that were already gone.",
      },
      {
        label: "What I discovered",
        text: "Inventory was just the surface. They were losing track of returns, had no visibility into which channel was actually profitable, and someone spent every Sunday night manually reconciling numbers. The stockouts weren't the problem — the lack of a single source of truth was.",
      },
      {
        label: "What I built",
        text: "An automated inventory sync between their online store and POS, a returns workflow that updated stock in real time, and a simple dashboard showing live sales and margins per channel. Simple on the surface, connected underneath.",
      },
      {
        label: "What it unlocked",
        text: "No more overselling. No more weekend reconciliation shifts. And for the first time, they could see that their online channel had 3x the margin of in-store — a data point that reshaped their entire growth strategy.",
      },
    ],
  },
];
