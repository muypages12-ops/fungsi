import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FunctionMachine from "./components/FunctionMachine";
import RelationPlayground from "./components/RelationPlayground";
import FunctionTypes from "./components/FunctionTypes";
import GraphPlotter from "./components/GraphPlotter";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />

        {/* pembatas lembut */}
        <div className="relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent" />
        </div>

        <section id="definisi" className="scroll-mt-24 py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <FunctionMachine />
          </div>
        </section>

        <section id="relasi" className="scroll-mt-24 py-16 sm:py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/70 to-white/0 pointer-events-none" />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <RelationPlayground />
          </div>
        </section>

        <section id="jenis" className="scroll-mt-24 py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <FunctionTypes />
          </div>
        </section>

        <section id="grafik" className="scroll-mt-24 py-16 sm:py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-brand-50/40 to-white/0 pointer-events-none" />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <GraphPlotter />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
