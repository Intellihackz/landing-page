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
      "https://media.licdn.com/dms/image/D4D03AQHX8a5zmP_zjQ/profile-displayphoto-shrink_800_800/0/1702210345965?e=1713398400&v=beta&t=6NJVpsy0qI2MbVbNBUs0F7y65gRuSVwI53jZvwFsPrM",
  },
  {
    id: 3,
    name: "Azeez Samuel",
    designation: "Cofounder & CFO",
    image:
      "https://media.licdn.com/dms/image/D4E03AQHgbn-QB6O3IA/profile-displayphoto-shrink_800_800/0/1702209695489?e=2147483647&v=beta&t=jZ1N3GmjPeqFy-GwX9zb-aLX84egUF7DaMdB_OgKruk",
  },
  {
    id: 4,
    name: "Peace Robbert",
    designation: "Cofounder & CDO",
    image:
      "https://media.licdn.com/dms/image/D4D35AQFZSuazwjbgzQ/profile-framedphoto-shrink_200_200/0/1705912314632?e=1708689600&v=beta&t=ALC0pikB-NHIIZ3nLZFCUbbHKyfu84wn7V87MQnCH58",
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
