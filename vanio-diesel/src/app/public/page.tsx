export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-900 text-zinc-100">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-red-500">
          AutoFix Pro
        </h1>

        <p className="mt-4 text-lg text-zinc-300">
          Especialistas em manutenção automotiva com tecnologia e transparência.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="bg-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-700">
            Agendar Serviço
          </button>

          <button className="border border-zinc-700 px-6 py-3 rounded-lg hover:bg-zinc-800">
            Ver Serviços
          </button>
        </div>
      </section>
    </main>
  );
}
