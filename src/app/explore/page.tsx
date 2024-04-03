import { ModelsContainer } from "./_components/models-container";


export default function ExplorePage() {
  return (
    <section className="space-y-24 pb-20 pt-16">
      <h1 className="text-6xl text-slate-700 font-bold leading-tight px-40 w-[90%]">
        Explore: A straight-forward and clear option that directly communicates the page's purpose.
      </h1>


      <div className="space-y-16">
        <h1 className="text-center text-2xl">
          Here are our AI-models
        </h1>

        <ModelsContainer />
      </div>
    </section>
  )
}
