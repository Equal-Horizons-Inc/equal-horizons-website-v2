import {
  BookOpenText,
  HeartStraight,
  RocketLaunch,
} from "@phosphor-icons/react/ssr";
import type { ComponentType } from "react";

export type Project = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  details: string;
  tone: "violet" | "green" | "yellow";
  icon: ComponentType<{ "aria-hidden"?: boolean; weight?: "bold" }>;
  focus: string[];
};

export const projects: Project[] = [
  {
    slug: "tools",
    number: "01",
    title: "Tools that welcome everyone",
    shortTitle: "Tools",
    description:
      "Open source foundations designed with clarity, accessibility, and the next contributor in mind.",
    details:
      "We make the first step into a codebase feel possible. Our tools prioritize thoughtful defaults, plain-language documentation, and accessible interfaces so more people can build, learn, and contribute with confidence.",
    tone: "violet",
    icon: RocketLaunch,
    focus: ["Accessible by default", "Clear documentation", "Friendly contribution paths"],
  },
  {
    slug: "knowledge",
    number: "02",
    title: "Knowledge in the open",
    shortTitle: "Knowledge",
    description:
      "Practical guides and learning paths that turn curiosity into confidence for developers everywhere.",
    details:
      "Learning should not depend on who happens to be in the room. We publish practical guides, examples, and learning paths that help people turn curiosity into useful skills—and useful skills into shared momentum.",
    tone: "green",
    icon: BookOpenText,
    focus: ["Practical learning paths", "Open educational resources", "Knowledge that travels"],
  },
  {
    slug: "commons",
    number: "03",
    title: "A healthier commons",
    shortTitle: "Commons",
    description:
      "Stewardship, maintenance, and support for the projects people rely on every day.",
    details:
      "Open source lasts when someone cares for the space between releases. We support maintenance, stewardship, and sustainable collaboration so important projects can remain healthy and dependable over time.",
    tone: "yellow",
    icon: HeartStraight,
    focus: ["Sustainable maintenance", "Responsible stewardship", "Stronger communities"],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
