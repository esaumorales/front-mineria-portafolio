// src/data/resources.tsx
// Si tienes tus tipos en src/types/index.d.ts, puedes descomentar la importación:
// import type { Resource } from '../types'

type Lang = 'es' | 'en';
type ResourceType = 'pdf' | 'book' | 'paper' | 'notebook' | 'dataset' | 'link';

export type Resource = {
  id: string;
  type: ResourceType;
  title: string;
  description?: string;
  authors?: string[];
  year?: number;
  tags?: string[];
  thumbnails?: string[];
  sourceUrl?: string;
  fileUrl?: string;
  pages?: number;
  lang?: Lang;
  addedAt?: string;
};

export const resources: Resource[] = [
  {
    id: 'clasificacion-md',
    type: 'pdf',
    title: 'Clasificación',
    authors: ['Esau Morales'],
    year: 2024,
    tags: ['clasificación', 'machine learning'],
    thumbnails: ['/thumbs/Clasificacion.png'], 
    sourceUrl: 'https://github.com/tu-usuario/mineria-datos',
    fileUrl: '/pdf/Clasificacion/Clasificación.pdf', 
    pages: 17,
    lang: 'es',
    addedAt: new Date('2024-09-01').toISOString(),
  },
  {
    id: 'clustering-basics',
    type: 'pdf',
    title: 'Clustering: Conceptos y Algoritmos',
    authors: ['J. Doe'],
    year: 2020,
    tags: ['clustering', 'kmeans', 'jerárquico'],
    thumbnails: ['/pdfs-demo/clustering-thumb.jpg'],
    sourceUrl: 'https://github.com/tu-usuario/clustering-notes',
    fileUrl: '/pdfs-demo/clustering.pdf',
    pages: 96,
    lang: 'es',
    addedAt: new Date('2024-10-15').toISOString(),
  },
  {
    id: 'feature-engineering',
    type: 'pdf',
    title: 'Feature Engineering para Minería de Datos',
    authors: ['A. Pérez', 'L. Smith'],
    year: 2021,
    tags: ['features', 'normalización', 'encoding'],
    thumbnails: ['/pdfs-demo/fe-thumb.jpg'],
    sourceUrl: 'https://github.com/tu-usuario/fe-mineria',
    fileUrl: '/pdfs-demo/fe.pdf',
    pages: 120,
    lang: 'es',
    addedAt: new Date('2025-01-05').toISOString(),
  },
  {
    id: 'kaggle-links',
    type: 'link',
    title: 'Colección de Datasets (Kaggle)',
    tags: ['datasets', 'exploración'],
    sourceUrl: 'https://www.kaggle.com/datasets',
    lang: 'en',
    addedAt: new Date('2025-02-10').toISOString(),
  },
];
