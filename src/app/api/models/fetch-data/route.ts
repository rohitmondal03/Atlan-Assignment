import { NextResponse } from "next/server"

import { env } from "@/env"


export async function GET() {
  const data = await fetch(env.AI_MODEL_END_POINT, {
    cache: "force-cache",
  })
    .then(resp => resp.json())
    .then(data => data)

  return NextResponse.json(data);
}