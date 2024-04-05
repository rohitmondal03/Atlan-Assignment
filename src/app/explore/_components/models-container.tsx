"use client"

import dynamic from "next/dynamic";
import { useEffect, useState } from "react"

import type { TModelData } from "@/types/root.types"

const Models = dynamic(() => import("./models").then(m => m.Models))


export function ModelsContainer() {
  const [modelsList, setModelsList] = useState<TModelData[]>([]);
  const [isDataFetching, setDataFetching] = useState(false);


  useEffect(() => {
    setDataFetching(true);

    fetch("/api/models/fetch-data" as string, {
      cache: "no-cache"
    })
      .then(resp => resp.json())
      .then(data => setModelsList(data))

    setDataFetching(false);
  }, [])


  return isDataFetching ? (
    <p className="text-red-600 text-center text-2xl">
      Fetching data...
    </p>
  ) : (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-7 px-2 sm:px-4 md:px-10 lg:px-20">
      {modelsList.map((data) => (
        <Models
          key={data.id}
          {...data}
        />
      ))}
    </section>
  )
}
