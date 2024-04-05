"use client"

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";


export function AboutSection() {
  return (
    <section className="flex items-center justify-center bg-slate-800 h-fit lg:h-screen px-2 2xs:px-6 sm:px-12 lg:px-32 py-5 sm:py-10">
      <TextGenerateEffect
        words="Unleash the power of AI! Explore a universe of models in ModelVerse. Text and image - experiment with them all. Generate creative content, translate languages, and see the future of AI firsthand. It's your playground to learn, create, and be amazed. Dive in!"
        className="text-xl 2xs:text-2xl sm:text-4xl lg:text-6xl text-slate-200 leading-[1.5] 2xs:leading-[1.5] sm:leading-[1.5] lg:leading-[1.5] font-bold"
      />
    </section>
  );
}
