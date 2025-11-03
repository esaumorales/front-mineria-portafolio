// src/components/pdf/PdfToolbar.tsx
import { useEffect } from 'react'
import { saveAs } from 'file-saver'

type Props = {
  fileUrl: string
  page: number
  pages: number
  onPrev: () => void
  onNext: () => void
  onZoomIn: () => void
  onZoomOut: () => void
  onFit: () => void
  onToggleFull?: () => void
}

export function PdfToolbar({
  fileUrl,
  page,
  pages,
  onPrev,
  onNext,
  onZoomIn,
  onZoomOut,
  onFit,
  onToggleFull,
}: Props) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'd') download()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const download = async () => {
    const res = await fetch(fileUrl)
    const blob = await res.blob()
    const name = fileUrl.split('/').pop() || 'document.pdf'
    saveAs(blob, name)
  }

  const nextDisabled = pages > 0 && page >= pages // ✅ evita el 0

  return (
    <div className="flex items-center gap-2 p-2 border-b border-white/10">
      <button className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20" onClick={onZoomOut}>−</button>
      <button className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20" onClick={onFit}>100%</button>
      <button className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20" onClick={onZoomIn}>＋</button>

      <div className="mx-3 text-sm text-white/80">Página {page} / {pages || '—'}</div>
      <button
        className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20"
        onClick={onPrev}
        disabled={page <= 1}
      >
        ◀
      </button>
      <button
        className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20"
        onClick={onNext}
        disabled={nextDisabled}   // ✅
      >
        ▶
      </button>

      <div className="flex-1" />
      <button className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20" onClick={download} title="Descargar (D)">⬇️</button>
      {onToggleFull && (
        <button className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20" onClick={onToggleFull} title="Pantalla completa">⛶</button>
      )}
    </div>
  )
}
