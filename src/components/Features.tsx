"use client";
import { HoverEffect } from "./ui/card-hover-effect";
export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8 fe">
      <h2 className="text-center text-2xl font-bold">
        What We&apos;re Solving
      </h2>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Accessibility Barrier Breakdown",
    description:
      "We're breaking down accessibility barriers by creating technology that is inclusive and accessible to everyone, regardless of ability or background.",
    link: "#",
  },
  {
    title: "Language and Cultural Inclusivity",
    description:
      "Our platform embraces language and cultural diversity, ensuring that our technology is relevant and accessible to users worldwide.",
    link: "#",
  },
  {
    title: "Customizable Solutions",
    description:
      "We offer customizable solutions to meet the unique needs of diverse users, empowering individuals to tailor their experiences according to their preferences and requirements.",
    link: "#",
  },
];
