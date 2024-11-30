import Form from "@/components/form";

export default function Home() {
  return (
    <main className="max-w-[720px] mx-auto flex justify-center flex-col min-h-screen overflow-hidden mt-10">
      <div className="text-center mb-4">
        <h1 className="text-3xl font-bold ">GitHub Receipt</h1>
        <p className="text-[16px] text-zinc-500">
          Generate a receipt-style summary of your GitHub profile
        </p>
        <p className="text-[14px] text-zinc-500">
          made by sahil | buy sahil a coffee
        </p>
      </div>
      <Form />
    </main>
  );
}
