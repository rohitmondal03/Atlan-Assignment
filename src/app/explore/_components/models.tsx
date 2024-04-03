"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

import type { TModelData } from "@/types/root.types"
import { routes } from "@/config/routes.config"


export function Models({
  id,
  name,
  placeholder_text,
  category,
  rating,
}: TModelData) {
  const { push } = useRouter();

  return (
    <Link
      href={routes.exploreRoute() + `/${id}`}
      className="flex flex-col items-stretch justify-center gap-8 border-2 border-zinc-400 rounded-lg p-4 transition ease-out duration-200 hover:scale-105 hover:border-black active:scale-100"
    >
      <div className="text-center space-y-3">
        <h1 className="text-3xl font-bold">
          {name}
        </h1>
        <p className="text-zinc-600">
          {placeholder_text}
        </p>
      </div>

      <div className="flex justify-between items-center">
        <p>
          <span className="">Rating:</span> {" "}
          <span className="text-red-500 font-bold">{rating}</span>
        </p>
        <p>
          <span className="">Category:</span> {" "} 
          <span className="text-red-500 font-bold">{category}</span>
        </p>
      </div>
    </Link>
  )
}
