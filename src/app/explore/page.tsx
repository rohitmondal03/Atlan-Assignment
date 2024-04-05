import { ModelsContainer } from "./_components/models-container";


export default function ExplorePage() {
  return (
    <section className="space-y-10 sm:space-y-12 md:space-y-16 lg:space-y-24 pb-20 pt-10 sm:pt-16">
      <h1 className="text-2xl 2xs:text-3xl sm:text-4xl md:text-6xl text-slate-700 text-center md:text-left font-bold leading-tight px-3 2xs:px-6 sm:px-10 md:px-20 lg:px-40 w-full lg:w-[90%]">
        Explore: A straight-forward and clear option that directly communicates the page's purpose.
      </h1>


      <div className="space-y-6 sm:space-y-10 md:space-y-16">
        <h1 className="text-center text-xl sm:text-2xl">
          Here are our AI-models
        </h1>

        <ModelsContainer />
      </div>
    </section>
  )
}
