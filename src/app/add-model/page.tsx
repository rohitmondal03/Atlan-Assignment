import AddModelForm from "./_components/add-model-form";


export default function AddNewModelPage() {
  return (
    <section className="space-y-24 pb-20 pt-16">
      <h1 className="text-6xl text-slate-700 font-bold leading-tight px-40 w-[90%]">
        Expand Our Collection: Share Your AI Model! Contribute to the future of AI by adding your model to our platform.
      </h1>

      <AddModelForm />
    </section>
  )
}
