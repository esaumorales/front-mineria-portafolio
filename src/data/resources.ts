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
    year: 2025,
    tags: ['clasificación', 'machine learning'],
    thumbnails: ['/thumbs/Clasificacion.png'],
    sourceUrl:
      'https://github.com/esaumorales/Repositorio-Mineria/blob/master/MD-6%20ML%20Clasificaci%C3%B3n/Clasificacion/Clasificaci%C3%B3n.pdf',
    fileUrl: '/pdf/Clasificacion/Clasificación.pdf',
    pages: 17,
    lang: 'es',
    addedAt: new Date('2024-09-01').toISOString(),
  },
  {
    id: 'regresion-md',
    type: 'pdf',
    title: 'Regresion',
    authors: ['Esau Morales'],
    year: 2025,
    tags: ['regresion', 'kmeans', 'machine learning'],
    thumbnails: ['/thumbs/Regresion.png'],
    sourceUrl:
      'https://github.com/esaumorales/Repositorio-Mineria/blob/master/MD-7%20ML%20Regresi%C3%B3n/Regresion/Regresion.pdf',
    fileUrl: '/pdf/Regresion/Regresion.pdf',
    pages: 19,
    lang: 'es',
    addedAt: new Date('2024-10-15').toISOString(),
  },
  {
    id: 'series-tiempo',
    type: 'pdf',
    title: 'Series de Tiempo',
    authors: ['Esau Morales'],
    year: 2025,
    tags: ['series', 'series_de_tiempo', 'python'],
    thumbnails: ['/thumbs/Series_Tiempo.png'],
    sourceUrl:
      'https://github.com/esaumorales/Repositorio-Mineria/blob/master/MD-8%20%20ST/Series_Tiempo/SeriesTiempo.pdf',
    fileUrl: '/pdf/Series_Tiempo/SeriesTiempo.pdf',
    pages: 10,
    lang: 'es',
    addedAt: new Date('2025-01-05').toISOString(),
  },
  {
    id: 'cluster',
    type: 'pdf',
    title: 'Cluster',
    authors: ['Esau Morales'],
    year: 2025,
    tags: ['cluster'],
    thumbnails: ['/thumbs/Cluster.png'],
    sourceUrl: 'https://github.com/esaumorales/Repositorio-Mineria/blob/master/MD-8%20%20ST/Series_Tiempo/SeriesTiempo.pdf',
    fileUrl: '/pdf/Cluster/Cluster.pdf',
    pages: 10,
    lang: 'es',
    addedAt: new Date('2025-01-05').toISOString(),
  },
  {
    id: 'rna',
    type: 'pdf',
    title: 'RNA',
    authors: ['Esau Morales'],
    year: 2025,
    tags: ['cluster'],
    thumbnails: ['/thumbs/RNA.png'],
    sourceUrl: 'https://github.com/esaumorales/Repositorio-Mineria/blob/master/MD-10%20RNA/RNA/RNA.pdf',
    fileUrl: '/pdf/RNA/RNA.pdf',
    pages: 10,
    lang: 'es',
    addedAt: new Date('2025-01-05').toISOString(),
  },
  {
    id: 'nlp',
    type: 'pdf',
    title: 'NLP',
    authors: ['Esau Morales'],
    year: 2025,
    tags: ['series', 'series_de_tiempo', 'python'],
    thumbnails: ['/thumbs/NLP.png'],
    sourceUrl: 'https://github.com/esaumorales/Repositorio-Mineria/blob/master/MD-11%20NLP/NLP/NLP.pdf',
    fileUrl: '/pdf/NLP/NLP.pdf',
    pages: 10,
    lang: 'es',
    addedAt: new Date('2025-01-05').toISOString(),
  },
  {
    id: 'redes_sociales',
    type: 'pdf',
    title: 'Redes Sociales',
    authors: ['Esau Morales'],
    year: 2025,
    tags: ['series', 'series_de_tiempo', 'python'],
    thumbnails: ['/thumbs/RedesSociales.png'],
    sourceUrl: 'https://github.com/esaumorales/Repositorio-Mineria/blob/master/MD-12%20Redes%20sociales/RedesSociales/RedesSociales.pdf',
    fileUrl: '/pdf/Redes_Sociales/RedesSociales.pdf',
    pages: 10,
    lang: 'es',
    addedAt: new Date('2025-01-05').toISOString(),
  },
 {
    id: 'cris-proyecto',
    type: 'pdf',
    title: 'CRIS PROYECTO MINERIA',
    authors: ['Esau Morales', 'Joshua Alfonzo', 'Roxwell Ramos'],
    year: 2025,
    tags: ['proyecto', 'crisdm', 'python'],
    thumbnails: ['/thumbs/Proyecto.png'],
    sourceUrl: 'https://github.com/esaumorales/Repositorio-Mineria/blob/master/MD-12%20Redes%20sociales/RedesSociales/RedesSociales.pdf',
    fileUrl: '/pdf/Proyecto_Grupal/CRISP-DM-PROYECTO.pdf',
    pages: 10,
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
