"use client"

import { useState } from "react"
import { useFormState } from "react-dom"

import { addNewModelAction } from "@/actions/add-new-model"
import SubmitNewModelButton from "@/components/button/submit-new-model-button"


export default function AddNewModelPage() {
  const [newModelData, setModelData] = useState({
    demoType: "",
    category: "",
    name: "",
    description: "",
    placeholder: "",
  })

  // const [state, formAction]= useFormState(addNewModelAction, newModelData)


  const DEMO_TYPE_LIST = [
    "text",
    "image",
    "code",
    "combination",
    "audio",
  ]

  const CATEGORY_LIST = [
    "Text & Language",
    "Code-based",
    "Computer Vision",
    "Audio & Speech",
    "Generative Models",
  ]


  return (
    <section className="space-y-24 pb-20 pt-16">
      <h1 className="text-6xl text-slate-700 font-bold leading-tight px-40 w-[90%]">
        Expand Our Collection: Share Your AI Model! Contribute to the future of AI by adding your model to our platform.
      </h1>


      <form
        action={() => addNewModelAction(newModelData)}
        className='grid grid-cols-2 gap-10 w-3/5 p-5 mx-auto border-0 border-zinc-400 rounded-lg'
      >
        <div className='flex flex-col items-center justify-start gap-3'>
          <label htmlFor="name">
            Enter your model name
          </label>
          <input
            required
            id="name"
            value={newModelData.name}
            onChange={e => setModelData(prev => ({ ...prev, name: e.target.value }))}
            placeholder='Enter your model name'
            className='py-1 px-4 border-2 border-zinc-500 rounded-md focus:ring-zinc-700 focus:ring-2'
          />
        </div>
        <div className='flex flex-col items-center justify-start gap-3'>
          <label htmlFor="placeholder">
            Enter placeholder text
          </label>
          <input
            required
            id="placeholder"
            value={newModelData.placeholder}
            onChange={e => setModelData(prev => ({ ...prev, placeholder: e.target.value }))}
            placeholder='Enter placeholder for model'
            className='py-1 px-4 border-2 border-zinc-500 rounded-md focus:ring-zinc-700 focus:ring-2'
          />
        </div>
        <div className='flex flex-col col-span-2 items-center justify-start gap-3'>
          <label htmlFor="description">
            Enter description for your model
          </label>
          <textarea
            required
            id="description"
            value={newModelData.description}
            onChange={e => setModelData(prev => ({ ...prev, description: e.target.value }))}
            rows={10}
            cols={80}
            placeholder='Enter description for model'
            className='py-1 px-4 border-2 border-zinc-500 rounded-md focus:ring-zinc-700 focus:ring-2'
          />
        </div>
        <div className='flex flex-col items-center justify-start gap-3'>
          <label htmlFor="demo type">
            Select demo type of your model
          </label>
          <select
            required
            id="demo type"
            value={newModelData.demoType}
            onChange={e => setModelData(prev => ({ ...prev, demoType: e.target.value }))}
            className="py-1 px-4 border-2 border-zinc-500 rounded-md"
          >
            <option value="" disabled>Select</option>
            {DEMO_TYPE_LIST.map((detail) => (
              <option
                key={detail}
                value={detail}
              >
                {detail}
              </option>
            ))}
          </select>
        </div>
        <div className='flex flex-col items-center justify-start gap-3'>
          <label htmlFor="category">
            Select category of your model
          </label>
          <select
            required
            id="category"
            value={newModelData.category}
            onChange={e => setModelData(prev => ({ ...prev, category: e.target.value }))}
            className="py-1 px-4 border-2 border-zinc-500 rounded-md"
          >
            <option value="" disabled>Select</option>
            {CATEGORY_LIST.map((category) => (
              <option
                key={category}
                value={category}
              >
                {category}
              </option>
            ))}
          </select>
        </div>

        <SubmitNewModelButton />

        <button
          type="reset"
          className="py-2 rounded-lg text-lg text-white bg-red-600"
        >
          Reset form
        </button>
      </form>
    </section>
  )
}
