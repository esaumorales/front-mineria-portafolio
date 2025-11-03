import { useMemo, useState } from 'react'
import { PdfGrid } from '../components/pdf/PdfGrid'
import { resources } from '../data/resources'
import { ResourceFilters, type SortKey } from '../components/library/ResourceFilters'
import type { PdfResource } from '../components/pdf/PdfCard'

type FilterState = {
  q: string
  tag: string | null
  sort: SortKey
}

export default function Biblioteca() {
  const [filters, setFilters] = useState<FilterState>({
    q: '',
    tag: null,
    sort: 'recent',
  })

  // Tags únicos
  const tags = useMemo(() => {
    const all = new Set<string>()
    resources.forEach(r => r.tags?.forEach(t => all.add(t)))
    return Array.from(all).sort((a, b) => a.localeCompare(b))
  }, [])

  // Normalizar a PdfResource
  const items = useMemo<PdfResource[]>(() => {
    return resources
      .filter(r => r.type === 'pdf' && r.fileUrl)
      .map(r => ({
        id: r.id,
        title: r.title,
        authors: r.authors,
        year: r.year,
        tags: r.tags,
        thumbnails: r.thumbnails,
        sourceUrl: r.sourceUrl,
        fileUrl: r.fileUrl!,
        pages: r.pages,
      }))
  }, [])

  // Filtrado + Orden
  const filtered = useMemo(() => {
    const q = filters.q.trim().toLowerCase()
    let list = items.filter(it => {
      const hitQ =
        !q ||
        it.title.toLowerCase().includes(q) ||
        (it.authors || []).join(',').toLowerCase().includes(q) ||
        (it.tags || []).join(',').toLowerCase().includes(q)
      const hitTag = !filters.tag || it.tags?.includes(filters.tag)
      return hitQ && hitTag
    })

    switch (filters.sort) {
      case 'year-desc':
        list = list.slice().sort((a, b) => (b.year || 0) - (a.year || 0))
        break
      case 'title-asc':
        list = list.slice().sort((a, b) => a.title.localeCompare(b.title))
        break
      default:
        // recent: si luego agregas createdAt/addedAt en PdfResource podrías usarlo aquí
        list = list.slice().sort(() => 0)
    }
    return list
  }, [items, filters])

  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold">Biblioteca</h1>

      <ResourceFilters
        q={filters.q}
        onQ={v => setFilters(f => ({ ...f, q: v }))}
        sort={filters.sort}
        onSort={s => setFilters(f => ({ ...f, sort: s }))}
        activeTag={filters.tag}
        onTag={t => setFilters(f => ({ ...f, tag: t }))}
        allTags={tags}
      />

      <PdfGrid items={filtered} />
    </section>
  )
}
