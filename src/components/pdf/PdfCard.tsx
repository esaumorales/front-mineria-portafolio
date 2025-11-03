// src/components/pdf/PdfCard.tsx
import { Link } from 'react-router-dom'
import { PdfActions } from './PdfActions'
import { useState } from 'react'

export type PdfResource = {
  id: string
  title: string
  authors?: string[]
  year?: number
  tags?: string[]
  thumbnails?: string[]
  sourceUrl?: string
  fileUrl: string
  pages?: number
}

type Props = { item: PdfResource }

export function PdfCard({ item }: Props) {
  const [imgErr, setImgErr] = useState(false)

  return (
    <article className="card p-4 flex flex-col gap-3">
      <div className="aspect-[3/4] w-full overflow-hidden rounded-xl bg-white/5 flex items-center justify-center">
        {item.thumbnails?.[0] && !imgErr ? (
          <img
            src={item.thumbnails[0]}
            alt={item.title}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={() => setImgErr(true)}
          />
        ) : (
          <div className="text-white/40 text-sm">Sin portada</div>
        )}
      </div>

      <div className="space-y-1">
        <h3 className="font-semibold leading-snug">
          <Link to={`/recurso/${item.id}`} className="hover:underline">
            {item.title}
          </Link>
        </h3>
        <p className="text-xs text-white/60">
          {(item.authors && item.authors.join(', ')) || 'Autor desconocido'}
          {item.year ? ` · ${item.year}` : ''}
          {item.pages ? ` · ${item.pages} págs.` : ''}
        </p>
      </div>

      {item.tags?.length ? (
        <div className="flex flex-wrap gap-1">
          {item.tags.slice(0, 5).map(t => (
            <span key={t} className="text-[11px] px-2 py-1 rounded-lg bg-white/10">#{t}</span>
          ))}
        </div>
      ) : null}

      <PdfActions
        id={item.id}
        title={item.title}
        fileUrl={item.fileUrl}
        sourceUrl={item.sourceUrl}
        viewHref={`/recurso/${item.id}`}
      />
    </article>
  )
}
