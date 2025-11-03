import { useMemo, useState } from 'react'
import { saveAs } from 'file-saver'

type Props = {
  id?: string
  title?: string
  fileUrl?: string      // URL directa al PDF (ej: /pdfs/doc.pdf)
  sourceUrl?: string    // GitHub u origen
  viewHref?: string     // URL alternativa para visualizar el PDF
}

export function PdfActions({ id, title = 'document', fileUrl, sourceUrl, viewHref }: Props) {
  const [saved, setSaved] = useState<boolean>(() => {
    if (!id) return false
    const raw = localStorage.getItem('saved-pdfs') || '[]'
    return JSON.parse(raw).includes(id)
  })

  const canView = Boolean(fileUrl || viewHref)
  const canDownload = Boolean(fileUrl)
  const canGithub = Boolean(sourceUrl)
  const saveLabel = useMemo(() => (saved ? 'Guardado ✔' : 'Guardar'), [saved])

  const onSaveLocal = () => {
    if (!id) return
    const raw = localStorage.getItem('saved-pdfs') || '[]'
    const arr: string[] = JSON.parse(raw)
    if (!arr.includes(id)) {
      arr.push(id)
      localStorage.setItem('saved-pdfs', JSON.stringify(arr))
      setSaved(true)
    }
  }

  const onDownload = async () => {
    if (!fileUrl) return
    const res = await fetch(fileUrl)
    const blob = await res.blob()
    saveAs(blob, `${title}.pdf`)
  }

  return (
    <div className="grid grid-cols-2 gap-2">
      {canView ? (
        <a
          href={viewHref || fileUrl!}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-center text-sm"
        >
          Ver
        </a>
      ) : (
        <button disabled className="px-3 py-2 rounded-xl bg-white/5 text-white/40 text-sm">
          Ver
        </button>
      )}

      <button
        onClick={onDownload}
        disabled={!canDownload}
        className={`px-3 py-2 rounded-xl text-sm ${
          canDownload ? 'bg-white/10 hover:bg-white/20' : 'bg-white/5 text-white/40'
        }`}
      >
        Descargar
      </button>

      <button
        onClick={onSaveLocal}
        disabled={saved || !id}
        className={`px-3 py-2 rounded-xl text-sm col-span-2 ${
          saved ? 'bg-emerald-600/30' : 'bg-white/10 hover:bg-white/20'
        }`}
      >
        {saveLabel}
      </button>

      {canGithub ? (
        <a
          href={sourceUrl!}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-center text-sm col-span-2"
        >
          GitHub
        </a>
      ) : (
        <button disabled className="px-3 py-2 rounded-xl bg-white/5 text-white/40 text-sm col-span-2">
          Sin GitHub
        </button>
      )}
    </div>
  )
}
