// src/components/library/ResourceFilters.tsx
import { useMemo } from 'react'

export type SortKey = 'recent' | 'year-desc' | 'title-asc'

type Props = {
  q: string
  onQ: (v: string) => void
  sort: SortKey
  onSort: (s: SortKey) => void
  activeTag: string | null
  onTag: (t: string | null) => void
  allTags: string[]
}

export function ResourceFilters({ q, onQ, sort, onSort, activeTag, onTag, allTags }: Props) {
  const hasTags = useMemo(() => allTags.length > 0, [allTags])

  return (
    <div className="space-y-3">
      <div className="flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
        <input
          value={q}
          onChange={e => onQ(e.target.value)}
          placeholder="Buscar por título, autor o tag…"
          className="px-3 py-2 rounded-xl bg-white/10 placeholder-white/40 outline-none focus:ring-2 ring-white/20 w-full sm:w-72"
        />
        <select
          value={sort}
          onChange={e => onSort(e.target.value as SortKey)}
          className="px-3 py-2 rounded-xl bg-white/10 outline-none focus:ring-2 ring-white/20"
        >
          <option value="recent">Más recientes</option>
          <option value="year-desc">Año (desc)</option>
          <option value="title-asc">Título (A-Z)</option>
        </select>
      </div>

      {hasTags && (
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onTag(null)}
            className={`px-3 py-1.5 rounded-xl text-sm ${
              !activeTag ? 'bg-white/20' : 'bg-white/10 hover:bg-white/15'
            }`}
          >
            Todas
          </button>
          {allTags.map(t => (
            <button
              key={t}
              onClick={() => onTag(activeTag === t ? null : t)}
              className={`px-3 py-1.5 rounded-xl text-sm ${
                activeTag === t ? 'bg-white/20' : 'bg-white/10 hover:bg-white/15'
              }`}
            >
              #{t}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
