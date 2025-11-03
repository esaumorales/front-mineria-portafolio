// src/pages/Proyectos.tsx
import { motion } from 'framer-motion';

type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
};

const projects: Project[] = [
  {
    id: 'md-etl',
    title: 'Pipeline ETL (CSV → Parquet)',
    description:
      'Limpieza, normalización y carga a formato columnar para minería de datos.',
    tags: ['etl', 'python', 'pandas'],
    href: 'https://github.com/tu-usuario/md-etl',
  },
  {
    id: 'clustering-lab',
    title: 'Laboratorio de Clustering',
    description: 'Comparativa de KMeans, DBSCAN y GMM con métricas de silueta.',
    tags: ['clustering', 'sklearn'],
    href: 'https://github.com/tu-usuario/clustering-lab',
  },
  {
    id: 'feature-engineering-notes',
    title: 'Notas de Feature Engineering',
    description:
      'Codificación, escalado y selección de variables para modelos.',
    tags: ['features', 'ml', 'notas'],
    href: 'https://github.com/tu-usuario/fe-notes',
  },
];

export default function Proyectos() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold">Proyectos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <motion.a
            key={p.id}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="card p-5 block hover:bg-white/10 transition"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}>
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm text-white/70 mt-1">{p.description}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-[11px] px-2 py-1 rounded-lg bg-white/10">
                  #{t}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
