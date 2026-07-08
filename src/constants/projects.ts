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
    challenges: [
      // [VERIFY: adjust to what Himank actually hit]
      "The hardest part was the payment flow. Razorpay's checkout is straightforward until you handle the unhappy paths — dismissed checkouts, network drops mid-payment, and making sure the order state never says 'paid' unless the payment is actually verified server-side. I learned to never trust a client-side success callback for anything that matters.",
      "Auth was the other lesson: session persistence and route guarding in Flutter with Supabase sounds simple, but edge cases like expired tokens mid-session forced me to centralize auth state instead of checking it per-screen.",
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
    challenges: [
      // [VERIFY]
      "48 hours forces brutal prioritization. We cut features every few hours to keep one end-to-end flow actually working: commitment discovery → risk prediction → execution plan. Prompting Gemini to return reliably structured output was harder than any UI work — free-text responses break parsers, so everything became strict JSON with fallback handling.",
      "Biggest learning: a working demo of a narrow product beats a broken demo of an ambitious one.",
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
    challenges: [
      // [VERIFY]
      "Getting the hash-anchor-verify loop trustworthy was the core challenge — a verification product is worthless if the verification can be doubted. SHA-256 fingerprinting is deterministic, but wiring wallet connection, on-chain writes, and QR-based lookup into a flow a non-crypto user can complete in seconds took most of the build.",
      "Also learned at the pitch: building a great product and presenting one are different skills — we cleared Round 1 among 200+ participants, and the judging taught me as much as the build.",
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
    challenges: [
      // [VERIFY: describe the actual mechanism used]
      "Shipping in 7 days meant choosing boring technology and zero scope creep. The WhatsApp reminder automation was the interesting problem — triggering a message reliably on a user-set date without a dedicated server.",
      "Learned that a small app people actually open daily beats a feature-rich one they abandon.",
    ],
    status: "wip",
    links: {
      github: "https://github.com/Rishit0612/Sortd",
    },
    image: "/images/projects/sortd.jpeg",
    imageAlt: "Sortd campus utility app home dashboard",
    imageType: "mobile",
  },
  {
    id: "gradegravity",
    index: "05",
    title: "GradeGravity",
    subtitle: "Flutter · Dart",
    description:
      "A GPA calculator built specifically for LNMIIT students — encoding the actual curriculum: every branch, every semester, every credit weight, and all the exceptions. No generic calculator guesswork.",
    tags: ["Flutter", "Dart"],
    category: ["Mobile"],
    features: [
      "Full LNMIIT curriculum encoded per branch and semester",
      "Handles flexible semesters, S/F courses, and thesis credits",
      "Accurate CGPA and SGPA calculation",
      "Clean, distraction-free UI",
    ],
    challenges: [
      "The real work was data, not code: encoding LNMIIT's actual curriculum — every branch, every semester, every credit weight — and handling the exceptions (flexible semesters, S/F courses, thesis credits). Learned that 'simple' tools are mostly domain-knowledge problems wearing a UI.",
    ],
    status: "wip",
    links: {},
    image: null,
    imageAlt: "GradeGravity LNMIIT GPA calculator",
    imageType: "mobile",
  },
];
