// src/pages/Acerca.tsx
export default function Acerca() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold">Acerca</h1>

      <div className="card p-6 space-y-4">
        <p className="text-white/80">
          Este portafolio reúne materiales del curso{' '}
          <strong>Minería de Datos</strong>: libros, apuntes en PDF, enlaces a
          repos de GitHub y proyectos prácticos.
        </p>

        <ul className="list-disc pl-6 text-white/70 space-y-1">
          <li>Visor de PDF con zoom, búsqueda y descarga.</li>
          <li>Marcadores locales y opción para guardar recursos.</li>
          <li>Interfaz bilingüe (ES/EN) y tema oscuro por defecto.</li>
        </ul>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <div className="card p-4 text-center">
            <div className="text-2xl font-bold">4</div>
            <div className="text-xs text-white/60">Recursos demo</div>
          </div>
          <div className="card p-4 text-center">
            <div className="text-2xl font-bold">3</div>
            <div className="text-xs text-white/60">Proyectos</div>
          </div>
          <div className="card p-4 text-center">
            <div className="text-2xl font-bold">PDF</div>
            <div className="text-xs text-white/60">Soporte completo</div>
          </div>
          <div className="card p-4 text-center">
            <div className="text-2xl font-bold">ES/EN</div>
            <div className="text-xs text-white/60">Internacionalización</div>
          </div>
        </div>
      </div>
    </section>
  );
}
