"use client"

import { useEffect, useState } from "react"

import type { TModelData } from "@/types/root.types"
import { Models } from "./models";


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
    <section className="grid grid-cols-3 gap-7 px-20">
      {modelsList.map((data) => (
        <Models
          key={data.id}
          {...data}
        />
      ))}
    </section>
  )
}
