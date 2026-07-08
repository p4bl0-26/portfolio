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
      "The hardest part was the payment flow. Razorpay's checkout is straightforward until you handle the unhappy paths — dismissed checkouts, network drops mid-payment, and making sure the order state never says 'paid' unless the payment is verified server-side. I learned to never trust a client-side success callback for anything that matters.",
      "Testing that properly required two separate setups: test-mode credentials that simulate real failure cases (dropped connections, insufficient funds), and a staging order state machine that could be reset between runs. <!-- VERIFY: describe actual test/staging approach used --> Moving to live mode exposed two order-state bugs that test mode missed — both around partial network failures during the webhook delivery window.",
      "Auth was the other lesson: session persistence and route guarding in Flutter with Supabase sounds simple, but edge cases like expired tokens mid-session forced me to centralize auth state instead of checking it per-screen. One global auth listener, one redirect handler — everything else subscribes to that.",
    ],
    status: "live",
    links: {
      github: "https://github.com/Rishit0612/BuildBazaarX_app",
      apk: undefined,
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
      "An AI Chief of Staff that discovers commitments in your calendar and messages, predicts schedule risks before they happen, and generates execution plans so you never miss a deadline. Built in 7 days for the Vibe2Ship hackathon — working end-to-end.",
    tags: ["Next.js", "Flutter", "Gemini", "Supabase", "AI"],
    category: ["AI", "Full-Stack"],
    features: [
      "AI-powered commitment extraction from natural language",
      "Deadline risk prediction with confidence scores",
      "Auto-generated execution plans",
      "Cross-platform: web + mobile",
    ],
    challenges: [
      "Seven days sounds like a lot until you're building an AI product across web and mobile. We re-scoped daily to keep one end-to-end flow working: commitment discovery → risk prediction → execution plan. Anything that didn't serve that loop got cut. Biggest learning: a working demo of a narrow product beats a broken demo of an ambitious one.",
      "Prompting Gemini to return reliably structured output was harder than any UI work. Free-text responses break parsers silently — wrong field names, missing keys, values in the wrong type. The fix was strict JSON schemas in every prompt, explicit instructions to never deviate from the schema, and a fallback handler that retried with a simplified prompt when parsing failed. <!-- VERIFY: confirm the actual retry/fallback strategy used --> Three layers of schema enforcement before the data reached state.",
      "Keeping the Next.js web dashboard and Flutter mobile app consistent against a shared Supabase backend was the infrastructure problem. Both clients needed real-time updates when commitments changed or risk scores were recalculated. Supabase Realtime channels handled broadcast, but schema changes mid-week broke the Flutter client twice — the fix was versioning the payload shape and failing gracefully instead of crashing. <!-- VERIFY: confirm how schema versioning was handled -->",
    ],
    status: "wip",
    links: {
      github: "https://github.com/p4bl0-26/Optimus",
      demo: "https://optimus-gray.vercel.app/",
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
      "A digital-content authenticity platform that SHA-256 hashes files, writes verification proofs on-chain, and uses AI to explain tampering anomalies in plain English. Built in 48 hours at Nexora'26. Users verify any document via QR code in under three seconds.",
    tags: ["Blockchain", "AI", "Next.js", "Web3", "Gemini"],
    category: ["AI", "Web3"],
    features: [
      "SHA-256 content fingerprinting",
      "On-chain immutable verification records on Monad testnet",
      "AI-powered tampering explanations",
      "QR code verification flow",
    ],
    challenges: [
      "48 hours to make cryptographic verification feel simple. Getting the hash-anchor-verify loop trustworthy was the core challenge — a verification product is worthless if the verification itself can be doubted. Wiring wallet connection, on-chain writes, and QR-based lookup into a flow a non-crypto user can complete in seconds took most of the build.",
      "The wallet-connection UX was the biggest user-facing problem. Most judges and users at the pitch had never connected a wallet before. We had to abstract that away: detect if a wallet was present, guide the connection step-by-step, and handle rejection or network mismatch without showing a raw RPC error. <!-- VERIFY: describe the actual wallet UX / error handling approach --> The goal was zero crypto jargon on the verification side.",
      "Hashing determinism mattered more than I expected. SHA-256 is deterministic on identical bytes — but a file re-saved by a different app, re-encoded by a browser, or stripped of metadata produces a different hash and fails verification. We had to document that the hash is of the original file bytes exactly, and build the upload flow to prevent silent re-encoding. Also learned at the pitch: building a great product and presenting one are different skills — we cleared Round 1 among 200+ participants, and the judging taught me as much as the build.",
    ],
    status: "live",
    links: {
      github: "https://github.com/p4bl0-26/Veritas",
      demo: "https://veritas-beta-green.vercel.app/",
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
      "Shipping in 7 days meant boring technology and zero scope creep. The WhatsApp reminder automation was the interesting problem — triggering a message reliably on a user-set date. The scoping decision that made it possible: cut the social features (splitting expenses between friends, group loan tracking) entirely. They were the most-requested ideas but the hardest to build correctly. Shipping without them was the right call — the core loan-and-expense loop was tight and worked. <!-- VERIFY: confirm what was actually cut to hit the deadline -->",
      "What survived the cut was ruthlessly prioritized by daily use. Expense tracking: students open it after every canteen run. Loan reminders: the automation that actually fires a WhatsApp message on the due date is the feature that makes people recommend it. <!-- VERIFY: confirm the mechanism used for WhatsApp message triggering --> Material hub: passive value, rarely opened but trusted when needed.",
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
    subtitle: "TypeScript · Web",
    description:
      "A GPA calculator built specifically for LNMIIT students — encoding the actual curriculum: every branch, every semester, every credit weight, and all the exceptions. No generic calculator guesswork.",
    tags: ["TypeScript", "Web"],
    category: ["Full-Stack"],
    features: [
      "Full LNMIIT curriculum encoded per branch and semester",
      "Handles flexible semesters, S/F courses, and thesis credits",
      "Accurate CGPA and SGPA calculation",
      "Clean, distraction-free UI",
    ],
    challenges: [
      "The real work was data, not code. Before writing a line of UI, I had to collect and validate the actual LNMIIT curriculum: every branch (CSE, ECE, ME, CE...), every semester from first to final year, every subject with its exact credit weight. The source of truth was a mix of the official scheme PDFs, seniors cross-checking their transcripts, and a few edge cases that only showed up when someone's CGPA didn't match. <!-- VERIFY: confirm data sources and validation method used -->",
      "The exception cases were the real engineering problem. S/F graded courses (pass/fail, not counted in CGPA), flexible elective slots where the subject changes per batch year, thesis and project credits that have non-standard weights, and semester structures that differ between admission years. Each exception needed a rule in the data model, not a UI hack. Getting those wrong would give students incorrect numbers — worse than no tool at all.",
      "'Simple' tools are mostly domain-knowledge problems wearing a UI. The TypeScript was maybe 20% of the effort; encoding LNMIIT's curriculum correctly and handling every edge case was the other 80%.",
    ],
    status: "live",
    links: {
      github: "https://github.com/p4bl0-26/gradegravity-lnmiit",
      demo: "https://gradegravity-lnmiit.vercel.app/",
    },
    image: "/images/projects/gradegravity.png",
    imageAlt: "GradeGravity LNMIIT GPA calculator web app",
    imageType: "desktop",
  },
];
