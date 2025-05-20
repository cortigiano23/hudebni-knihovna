import TracksTable from "@/components/TracksTable";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <header className="site-header">
        <h1>simon dvorsky | music catalog</h1>
        <hr className="header-line" />
      </header>

      <section className="p-8 max-w-5xl mx-auto">
        <TracksTable />
      </section>
    </main>
  );
}