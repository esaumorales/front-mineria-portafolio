
export type Lang = 'es' | 'en';


export type ResourceType = 'pdf' | 'book' | 'paper' | 'notebook' | 'dataset' | 'link';


export interface Resource {
id: string; // uuid
type: ResourceType;
title: string;
description?: string;
authors?: string[];
year?: number;
tags?: string[]; // ej. ["clustering", "aprendizaje no supervisado"]
thumbnails?: string[]; // portada o previews
sourceUrl?: string; // GitHub del PDF o repo origen
fileUrl?: string; // URL directa al PDF (si aplica)
pages?: number; // para PDF
lang?: Lang; // idioma del recurso
addedAt: string; // ISO date
meta?: Record<string, any>;
}


export interface Bookmark {
resourceId: string;
page?: number; // última página leída
notes?: string; // notas rápidas
createdAt: string;
updatedAt: string;
}