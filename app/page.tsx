import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Engine } from "@/components/Vortex/Engine";

export default function Home() {
  return (
    <main className="min-h-screen bg-black-core animate-viscosity overflow-hidden">
      <Navbar />
      <div className="h-screen w-full relative">
        <Engine
          className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
        >
          <Hero />
        </Engine>
      </div>
    </main>
  );
}
