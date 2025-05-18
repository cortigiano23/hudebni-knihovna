import TracksTable from "@/components/TracksTable";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <header className="flex flex-col justify-center px-8 pt-6 pb-4">
        <h1 className="text-3xl font-bold">simon dvorsky | music catalog</h1>
      </header>
      <hr className="border-t border-white opacity-40 w-full" />

      <section className="p-8 max-w-5xl mx-auto">
        <TracksTable />
      </section>
    </main>
  );
}