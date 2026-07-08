import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: "buildbazaarx-seller",
    index: "01",
    title: "BuildBazaarX Seller",
    subtitle: "Flutter · Supabase · Razorpay",
    description:
      "Seller-side app for the BuildBazaarX construction marketplace. I built the authentication flow and the end-to-end Razorpay payment flow.",
    tags: ["Flutter", "Supabase", "Dart", "Razorpay"],
    category: ["Mobile", "Full-Stack"],
    features: [
      "Full authentication flow with Supabase Auth",
      "End-to-end Razorpay payment integration",
      "Seller dashboard and order management",
      "Profile and listing management",
    ],
    status: "live",
    links: {
      github: "https://github.com/Rishit0612/BuildBazaarX_app",
      apk: undefined, // TODO: Add APK download link
    },
    image: "/images/projects/BuildBazaarX-Seller.jpeg",
    imageAlt: "BuildBazaarX Seller mobile app home screen",
    imageType: "mobile",
  },
  {
    id: "optimus",
    index: "02",
    title: "Optimus",
    subtitle: "Next.js · Flutter · Gemini · Supabase",
    description:
      "An AI Chief of Staff that discovers commitments in your calendar and messages, predicts schedule risks before they happen, and generates execution plans so you never miss a deadline. Built under 48 hours at the Vibe2Ship hackathon — working end-to-end.",
    tags: ["Next.js", "Flutter", "Gemini", "Supabase", "AI"],
    category: ["AI", "Full-Stack"],
    features: [
      "AI-powered commitment extraction from natural language",
      "Deadline risk prediction with confidence scores",
      "Auto-generated execution plans",
      "Cross-platform: web + mobile",
    ],
    status: "wip",
    links: {
      github: undefined, // TODO: Add GitHub link
      demo: undefined, // TODO: Add live demo link
    },
    image: "/images/projects/optimus.png",
    imageAlt: "Optimus AI Chief of Staff command center dashboard",
    imageType: "desktop",
  },
  {
    id: "veritas",
    index: "03",
    title: "Veritas",
    subtitle: "Blockchain · AI · SHA-256",
    description:
      "A digital-content authenticity platform that SHA-256 hashes files, writes verification proofs on-chain, and uses AI to explain tampering anomalies in plain English. Built at Nexora'26. Users verify any document via QR code in under three seconds.",
    tags: ["Blockchain", "AI", "Next.js", "Web3", "Gemini"],
    category: ["AI", "Web3"],
    features: [
      "SHA-256 content fingerprinting",
      "On-chain immutable verification records on Monad testnet",
      "AI-powered tampering explanations",
      "QR code verification flow",
    ],
    status: "live",
    links: {
      github: undefined, // TODO: Add GitHub link
      demo: undefined, // TODO: Add live demo link
    },
    image: "/images/projects/veritas.png",
    imageAlt: "Veritas blockchain content verification platform upload screen",
    imageType: "desktop",
  },
  {
    id: "sortd",
    index: "04",
    title: "Sortd",
    subtitle: "Flutter · Supabase",
    description:
      "A campus utility app I co-built in one week: expense tracker, loan tracker with automated WhatsApp reminders on due dates, quiz tracker, and a semester materials hub. Designed for students who are tired of managing life in WhatsApp groups. Shipped in 7 days.",
    tags: ["Flutter", "Supabase", "Dart"],
    category: ["Mobile", "Full-Stack"],
    features: [
      "Expense tracking with category breakdown",
      "Loan tracker with WhatsApp due-date reminders",
      "Quiz and study material hub",
      "Semester resource organizer",
    ],
    status: "wip",
    links: {
      github: "https://github.com/Rishit0612/Sortd",
    },
    image: "/images/projects/sortd.jpeg",
    imageAlt: "Sortd campus utility app home dashboard",
    imageType: "mobile",
  },
];
