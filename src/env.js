import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";


export const env = createEnv({
  // client: {
  //   NEXT_PUBLIC_AI_MODEL_END_POINT: z.string(),
  // },
  server: {
    AI_MODEL_END_POINT: z.string(),
  },
  runtimeEnv: {
    // NEXT_PUBLIC_AI_MODEL_END_POINT: process.env.NEXT_PUBLIC_AI_MODEL_END_POINT,
    AI_MODEL_END_POINT: process.env.AI_MODEL_END_POINT,
  },
});