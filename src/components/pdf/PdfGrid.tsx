// src/components/pdf/PdfGrid.tsx
import { PdfCard, type PdfResource } from './PdfCard'

type Props = {
  items: PdfResource[]
  emptyText?: string
  className?: string
}

export function PdfGrid({ items, emptyText = 'No hay resultados.', className = '' }: Props) {
  if (!items.length) {
    return <div className="text-white/60">{emptyText}</div>
  }
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ${className}`}>
      {items.map(item => (
        <PdfCard key={item.id} item={item} />
      ))}
    </div>
  )
}
