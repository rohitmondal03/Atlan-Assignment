"use client";

import { TracingBeam } from "@/components/ui/tracing-beam";
import { FEATURES_LIST } from "@/data/marketing";


export function FeaturesSection() {
  return (
    <section className="space-y-8 sm:space-y-12 md:space-y-20 py-4 sm:py-12 md:py-20">
      <div className="space-y-3 sm:space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-zinc-600 font-bold">
          Features
        </h1>
        <p className="sm:text-xl">
          AI at Your Fingertips: Highlights the user-friendly and accessible nature of the features.
        </p>
      </div>


      <TracingBeam className="px-6">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          {FEATURES_LIST.map((item, index) => (
            <div
              key={`content-${index}`}
              className="mb-10"
            >
              <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                {item.badge}
              </h2>

              <p className="text-xl sm:text-2xl text-slate-600 font-bold mb-4">
                {item.title}
              </p>

              <p className="text-slate-500 text-sm sm:text-base prose prose-sm dark:prose-invert">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </TracingBeam>
    </section>
  );
}