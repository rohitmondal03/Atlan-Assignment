"use client"

import dynamic from "next/dynamic"
import { useFormState } from "react-dom"

import { CATEGORY_LIST, DEMO_TYPE_LIST } from "@/data/models"
import { addNewModelAction } from "@/actions/add-new-model"

const SubmitNewModelButton= dynamic(() => import("@/components/button/submit-new-model-button"))


export default function AddModelForm() {
  const [state, formAction] = useFormState(addNewModelAction, null);


  return (
    <form
      action={formAction}
      className='grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-10 w-[95%] sm:w-[90%] md:w-5/6 lg:w-3/5 p-3 sm:p-5 mx-auto border-4 border-dotted border-zinc-300 rounded-lg'
    >
      <div className='flex flex-col gap-1'>
        <label htmlFor="name" className="form_label">
          Enter your model name
        </label>
        <input
          required
          id="name"
          name="name"
          placeholder='Enter your model name'
          className='form_input'
        />
      </div>

      <div className='flex flex-col gap-1'>
        <label htmlFor="placeholder" className="form_label">
          Enter placeholder text
        </label>
        <input
          required
          id="placeholder"
          name="placeholder"
          placeholder='Enter placeholder for model'
          className='form_input'
        />
      </div>

      <div className='flex flex-col gap-1 sm:col-span-2'>
        <label htmlFor="description" className="form_label">
          Enter description for your model
        </label>
        <textarea
          required
          name="description"
          id="description"
          rows={10}
          cols={80}
          placeholder='Enter description for model'
          className='form_input'
        />
      </div>

      <div className='flex flex-col gap-1'>
        <label htmlFor="demo type" className="form_label">
          Select demo type of your model
        </label>
        <select
          required
          name="demo_type"
          id="demo type"
          className="form_select"
        >
          <option value="" disabled selected>Select</option>
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

      <div className='flex flex-col gap-1'>
        <label htmlFor="category" className="form_label">
          Select category of your model
        </label>
        <select
          required
          name="category"
          id="category"
          className="form_select"
        >
          <option value="" disabled selected>Select</option>
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
  )
}
