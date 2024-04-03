import type { TFooterLinks, TNavLinks } from "@/types/marketing.types";
import { routes } from "@/config/routes.config";


export const NAV_LINKS_LIST: TNavLinks[] = [
  {
    label: "Explore",
    href: routes.exploreRoute(),
  },
  {
    label: "Add model",
    href: routes.addNewModelRoute(),
  }
]


export const FEATURES_LIST = [
  {
    badge: "1.",
    title: "Unleash the Potential of Any Task",
    description: "Dive into our curated Model Zoo, a treasure trove of AI models categorized by their function.Whether you're a writer seeking creative inspiration, a traveler wanting real-time language translation, or a coder looking to boost your productivity, you'll find the perfect tool to tackle your challenge"
  },
  {
    badge: "2.",
    title: "Hands-on Learning Through Play",
    description: " Forget dry technical manuals! Our Interactive Demos put the power of AI directly at your fingertips.Experiment with user - friendly interfaces to generate creative text formats like poems or code, translate languages in real - time for seamless communication, or modify code with AI assistance, accelerating your development process."
  },
  {
    badge: "3.",
    title: "Coming Soon: A Collaborative AI Playground",
    description: "The future of AI is collaborative.Our upcoming Community Hub will be a vibrant space to share your experiences with AI models, learn from others' creations, and discover innovative ways to leverage this powerful technology. Stay tuned for exciting updates! (This text stays informative while keeping the word count under 3 for the future feature)."
  },
];


export const FOOTER_LINKS_LIST: TFooterLinks[]= [
  {
    href: routes.homeRoute(),
    label: "Email",
  },
  {
    href: routes.homeRoute(),
    label: "Phone no."
  },
  {
    href: routes.homeRoute(),
    label: "LinkedIn"
  },
  {
    href: routes.homeRoute(),
    label: "Twitter"
  },
]