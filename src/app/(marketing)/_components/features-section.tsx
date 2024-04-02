"use client";

import { TracingBeam } from "@/components/ui/tracing-beam";
import { FEATURES_LIST } from "@/data/marketing";


export function FeaturesSection() {
  return (
    <section className="space-y-20 py-20">
      <div className="space-y-4">
        <h1 className="text-5xl text-zinc-600 font-bold">
          Features
        </h1>
        <p className="text-xl">
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

              <p className="text-2xl text-slate-600 font-bold mb-4">
                {item.title}
              </p>

              <p className="text-slate-500 prose prose-sm dark:prose-invert">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </TracingBeam>
    </section>
  );
}