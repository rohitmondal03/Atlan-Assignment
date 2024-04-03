// Type-safe route

import { createNavigationConfig } from "next-safe-navigation";
import { z } from "zod"


export const { routes, useSafeParams, useSafeSearchParams } = createNavigationConfig(
  (defineRoute) => ({
    homeRoute: defineRoute("/"),
    exploreRoute: defineRoute("/explore"),
    careerRoute: defineRoute("/join-us"),
    addNewModelRoute: defineRoute("/add-model"),
  }),
);