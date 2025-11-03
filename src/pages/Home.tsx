import { BlobBackground } from '../components/effects/BlobBackground';
import { Hero } from '../components/home/Hero';


export default function Home() {
  return (
    <section className="relative min-h-[86vh] flex items-center justify-center">
      <BlobBackground />
      <Hero />
      {/* Gradiente inferior para cerrar como en la referencia */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0c0e14] to-transparent" />
    </section>
  )
}
