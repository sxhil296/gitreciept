import Form from "@/components/form";

export default function Home() {
  return (
    <main className="flex flex-col mx-auto  min-h-screen overflow-hidden max-w-[500px]">
      <div className="text-center p-2">
        <h1 className="text-2xl font-bold ">GitHub Reciept</h1>
        <p className="text-zinc-500">
          Generate a reciept-style summary of any GitHub profile
        </p>
      </div>
      <Form />
    </main>
  );
}
