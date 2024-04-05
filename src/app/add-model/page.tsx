import AddModelForm from "./_components/add-model-form";


export default function AddNewModelPage() {
  return (
    <section className="space-y-10 sm:space-y-12 md:space-y-16 lg:space-y-24 pb-20 pt-10 sm:pt-16">
      <h1 className="text-2xl 2xs:text-3xl sm:text-4xl md:text-6xl text-slate-700 text-center md:text-left font-bold leading-relaxed px-3 2xs:px-6 sm:px-10 md:px-20 lg:px-40 w-full lg:w-[90%]">
        Expand Our Collection: Share Your AI Model! Contribute to the future of AI by adding your model to our platform.
      </h1>

      <AddModelForm />
    </section>
  )
}
