// Type-safe route

import { createNavigationConfig } from "next-safe-navigation";


export const { routes, useSafeParams, useSafeSearchParams } = createNavigationConfig(
  (defineRoute) => ({
    homeRoute: defineRoute("/"),
    exploreRoute: defineRoute("/explore"),
    careerRoute: defineRoute("/join-us"),
  }),
);