import type { TModelData } from "@/types/root.types"
import { env } from "@/env"


type TProps = {
  params: {
    slug: string
  }
}


export default async function page({ params }: TProps) {
  const { slug } = params;

  const modelsList: TModelData[] = await fetch(env.AI_MODEL_END_POINT, {
    cache: "force-cache"
  })
    .then(resp => resp.json())

  const modelData = modelsList.find((data) => String(data.id) === slug)


  return (
    <section className='px-20 pb-20 space-y-20'>
      <h1 className="text-5xl text-center font-bold underline underline-offset-8 decoration-slate-300 decoration-wavy">
        {modelData?.name}
      </h1>


      <div className="flex items-center justify-around text-lg">
        <p>
          <span className="text-slate-600 font-bold">Model Type:</span> {" "}
          <span>{modelData?.demo_type}</span>
        </p>

        <p>
          <span className="text-slate-600 font-bold">Category:</span> {" "}
          <span>{modelData?.category}</span>
        </p>
      </div>


      <p className="text-center text-xl">
        <span className="font-bold">Summary:</span> {" "}
        <span className="text-slate-600">{modelData?.placeholder_text}</span>
      </p>


      <p className="text-xl text-center w-[70%] mx-auto leading-relaxed">
        <span className="text-2xl text-slate-700 font-bold">About the model: </span> {" "}
        <span>{modelData?.description}</span>
      </p>
    </section>
  )
}


export async function generateStaticParams() {
  const dataFetched: TModelData[] = await fetch(env.AI_MODEL_END_POINT)
    .then(resp => resp.json())

  return dataFetched.map((data) => ({
    slug: String(data.id),
  }))
}