"use server"

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import UuidGenerator from 'uuid-wand';

import { routes } from '@/config/routes.config';
import { env } from "@/env"


export async function addNewModelAction(state: any, formData: FormData) {
  // retriving data from form
  const name = formData.get("name");
  const placeholder = formData.get("placeholder");
  const description = formData.get("description");
  const demoType = formData.get("demo_type");
  const category = formData.get("category")

  // sending data to database
  await fetch(env.AI_MODEL_END_POINT, {
    method: "POST",
    body: JSON.stringify({
      id: UuidGenerator.v1(),
      name: name,
      description: description,
      demo_type: demoType,
      placeholder_text: placeholder,
      category: category,
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    }
  })
    .then(resp => resp.json())
    .then(data => {
      return { message: data }
    })
    .catch(error => {
      return { message: error }
    })

  // for revalidating cache in a particular route and redirecting users to any route
  // here, we are revalidating cache and redirecting to "/explore" route only.
  // Useful when interacting with real database, that returns data and we want to show it.
  revalidatePath(routes.exploreRoute())
  redirect(routes.exploreRoute())
}