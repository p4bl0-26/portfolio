export interface Project {
  id: string;
  index: string; // "01", "02", etc.
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  category: ("Mobile" | "AI" | "Web3" | "Full-Stack")[];
  features: string[];
  status: "live" | "pre-release" | "wip";
  links: {
    github?: string;
    demo?: string;
    apk?: string;
  };
  imageAlt: string;
}

export interface ExperienceEntry {
  id: string;
  role: string;
  org: string;
  orgUrl?: string;
  period: string;
  type: "work" | "hackathon" | "open-source" | "club";
  description: string;
  highlights: string[];
}

export interface StackCategory {
  label: string;
  items: string[];
}

export interface Social {
  label: string;
  href: string;
  handle?: string;
  external?: boolean;
}

export interface Achievement {
  id: string;
  date: string;
  title: string;
  org: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
  paletteHint?: string;
}
