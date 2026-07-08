import type { ExperienceEntry } from "@/types";

export const EXPERIENCE: ExperienceEntry[] = [
  {
    id: "buildbazaarx-dev",
    role: "Flutter Developer — Professional App",
    org: "BuildBazaarX",
    orgUrl: "https://github.com/Rishit0612/BuildBazaarX_app",
    period: "2025 — Present",
    type: "work",
    description:
      "Sole developer of the BuildBazaarX Professional mobile app. Architected the entire Flutter codebase from scratch: Supabase auth, real-time data sync, dashboard screens, profile management, and a reusable component library.",
    highlights: [
      "Built complete auth flow with Supabase (email, OTP, session management)",
      "Designed and implemented Riverpod-style state architecture",
      "Delivered responsive UI matching existing React web platform",
      "Also contributed to Seller app: payments integration, auth screens",
    ],
  },
  {
    id: "vibe2ship-optimus",
    role: "Fullstack Developer (Hackathon)",
    org: "Vibe2Ship — Optimus",
    period: "2025",
    type: "hackathon",
    description:
      "Built Optimus — an AI Chief of Staff — at the Vibe2Ship hackathon. Shipped a working cross-platform product (Next.js web + Flutter mobile) in 48 hours using Gemini and Supabase.",
    highlights: [
      "AI commitment extraction from calendar and messages",
      "Real-time deadline risk prediction",
      "Cross-platform: web dashboard + Flutter companion app",
    ],
  },
  {
    id: "nexora26-veritas",
    role: "Fullstack Developer (Hackathon)",
    org: "Nexora'26 — Veritas",
    period: "2026",
    type: "hackathon",
    description:
      "Built Veritas at Nexora'26: a blockchain + AI digital content authenticity platform. SHA-256 hashing, on-chain proofs, and AI-generated tamper explanations.",
    highlights: [
      "On-chain content verification with QR-code flow",
      "AI explanations for detected tampering",
      "Sub-3-second verification pipeline",
    ],
  },
  {
    id: "lnmhacks",
    role: "Developer (Hackathon)",
    org: "LNMHacks",
    period: "2025",
    type: "hackathon",
    description:
      "Built a decentralized workflow engine at LNMHacks, experimenting with on-chain task routing and state management.",
    highlights: [
      "Decentralized workflow state machine",
      "On-chain task routing and delegation",
    ],
  },
  // TODO: Add club roles (coding club, tech society, etc.)
  // TODO: Add open source contributions
];
