"use client"

import { useEffect } from "react";
import {  useFormStatus } from "react-dom"


export default function SubmitNewModelButton() {
  const { pending, data } = useFormStatus();

  useEffect(() => console.log(data), [data])

  return (
    <button
      type="submit"
      disabled={pending}
      className="py-2 rounded-lg text-lg text-white bg-gradient-to-r from-zinc-700 to-gray-500"
    >
      {pending? "Adding..." : "Submit new model"}
    </button>
  )
}
