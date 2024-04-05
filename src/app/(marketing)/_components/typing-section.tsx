"use client";

import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";


export function TypingSection() {
  const words = [
    {
      text: "Playground for",
      className: "font-[200]"
    },
    {
      text: "AI enthusiast,",
      className: "font-[200]"
    },
    {
      text: "ModelVerse.",
      className: "font-semibold text-blue-500 dark:text-blue-500",
    },
  ];


  return (
    <div className="flex flex-col items-center justify-center md:py-10 lg:py-20">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
