"use client"

import { useEffect, useState } from "react"

import type { TModelData } from "@/types/root.types"
import { Models } from "./models";


export function ModelsContainer() {
  const [modelsList, setModelsList] = useState<TModelData[]>([]);
  const [isDataFetching, setDataFetching] = useState(false);


  useEffect(() => {
    setDataFetching(true);

    fetch("/api/models/fetch-data")
      .then(resp => resp.json())
      .then(data => setModelsList(data))

    setDataFetching(false);
  }, [])


  return (
    <section>
      {isDataFetching ? (
        <p>
          Data fetching
        </p>
      ) : modelsList.map((data) => (
        <Models 
          key={data.id}
          {...data}
        />
      ))}
    </section>
  )
}
