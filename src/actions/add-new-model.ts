"use server"

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import UuidGenerator from 'uuid-wand';

import { env } from "@/env"
import { routes } from '@/config/routes.config';


type TParams = {
  name: string;
  description: string;
  placeholder: string;
  demoType: string;
  category: string;
}


export async function addNewModelAction(data: TParams) {
  await fetch(env.AI_MODEL_END_POINT, {
    method: "POST",
    body: JSON.stringify({
      id: UuidGenerator.v1(),
      name: data.name,
      description: data.description,
      demo_type: data.demoType,
      placeholder_text: data.placeholder,
      category: data.category,
      rating: 4.5,
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    }
  })
    .then(resp => resp.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))


  // revalidatePath(routes.exploreRoute());
  // redirect(routes.exploreRoute());
}