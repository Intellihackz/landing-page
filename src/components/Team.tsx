"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: " Oluwatobiloba Ajiboye",
    designation: "Cofounder & CTO",
    image:
      "https://pbs.twimg.com/profile_images/1747974890710351872/UKGmGgEX_400x400.jpg",
  },
  {
    id: 2,
    name: "Oluyemi Sopade",
    designation: "Cofounder & COO ",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Azeez Samuel",
    designation: "Cofounder & CTO",
    image:
      "https://media.licdn.com/dms/image/D4E03AQHgbn-QB6O3IA/profile-displayphoto-shrink_800_800/0/1702209695489?e=2147483647&v=beta&t=jZ1N3GmjPeqFy-GwX9zb-aLX84egUF7DaMdB_OgKruk",
  },
  {
    id: 4,
    name: "Peace Robbert",
    designation: "Cofounder & CDO",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <>
      <h2 className="text-center p-2 text-2xl font-bold">Meet our Team</h2>
      <div className="flex flex-row items-center justify-center mb-6 w-full">
        <AnimatedTooltip items={people} />
      </div>
      <p className="text-center p-0 text-gray-500">hover on pic</p>
    </>
  );
}
