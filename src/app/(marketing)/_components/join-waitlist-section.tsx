"use client";

import { motion } from "framer-motion";

import { AuroraBackground } from "@/components/ui/aurora-background";


export function JoinWaitlistSection() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-32"
      >
        <div className="font-bold text-center space-y-3">
          <p className="text-2xl md:text-4xl text-zinc-500">
            Be Among the First!
          </p>
          <p className="text-3xl md:text-5xl">
            Join the Waitlist for Early Access
          </p>
        </div>

        <p className="font-[200] text-slate-600 text-base md:text-4xl py-4 w-[70%] mx-auto">
          Simply enter your email address (and optionally your name) to be notified when we open our doors.
        </p>

        <form className="flex flex-col items-center justify-center gap-4">
          <input
            placeholder="Enter your E-Mail"
            className="py-2 px-6 rounded-lg border-2 border-zinc-400 focus:ring-zinc-700 focus:ring-2"
          />
          <input
            placeholder="Enter your Name"
            className="py-2 px-6 rounded-lg border-2 border-zinc-400 focus:ring-zinc-700 focus:ring-2"
          />
          <button className="bg-black dark:bg-white rounded-lg text-white dark:text-black px-4 py-2 w-full">
            Join !
          </button>
        </form>
      </motion.div>
    </AuroraBackground>
  );
}
