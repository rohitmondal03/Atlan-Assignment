"use client"

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";


export function AboutSection() {
  return (
    <section className="text-6xl text-slate-200 leading-[1.5] font-bold flex items-center justify-center bg-slate-800 h-screen px-32">
      <TextGenerateEffect
        words="Unleash the power of AI! Explore a universe of models in ModelVerse. Text and image - experiment with them all. Generate creative content, translate languages, and see the future of AI firsthand. It's your playground to learn, create, and be amazed. Dive in!"
      />
    </section>
  );
}
