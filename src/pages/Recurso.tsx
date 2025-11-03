import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { resources } from '../data/resources'
import { PdfActions } from '../components/pdf/PdfActions'
import PdfIframe from '../components/pdf/PdfIframe'

export default function Recurso() {
  const { id } = useParams<{ id: string }>()

  const res = useMemo(() => resources.find(r => r.id === id), [id])

  if (!res) {
    return (
      <section className="space-y-4">
        <h1 className="text-2xl font-semibold">Recurso no encontrado</h1>
        <p className="text-white/60">
          No existe un recurso con id: <span className="font-mono">{id}</span>
        </p>
      </section>
    )
  }

  const fileUrl = res.fileUrl
    ? res.fileUrl.startsWith('/') ? res.fileUrl : `/${res.fileUrl}`
    : undefined

  return (
    <section className="space-y-6">
      <header className="flex flex-col gap-3">
        <div>
          <h1 className="text-2xl font-semibold">{res.title}</h1>
          <p className="text-sm text-white/70">
            {(res.authors && res.authors.join(', ')) || 'Autor desconocido'}
            {res.year ? ` · ${res.year}` : ''}
            {res.pages ? ` · ${res.pages} págs.` : ''}
          </p>

          {res.tags?.length ? (
            <div className="flex flex-wrap gap-2 mt-2">
              {res.tags.map((t: string) => (
                <span key={t} className="text-[11px] px-2 py-1 rounded-lg bg-white/10">#{t}</span>
              ))}
            </div>
          ) : null}
        </div>

        <div className="max-w-md">
          <PdfActions
            id={res.id}
            title={res.title}
            fileUrl={fileUrl}
            sourceUrl={res.sourceUrl}
          />
        </div>
      </header>

      {res.type === 'pdf' && fileUrl ? (
        <PdfIframe fileUrl={fileUrl} />
      ) : (
        <div className="rounded-xl border border-white/10 p-6">
          <p className="text-white/70">Este recurso no es un PDF o no tiene archivo asociado.</p>
          {res.sourceUrl && (
            <p className="mt-2 text-white/60">Puedes revisar más detalles en el repositorio.</p>
          )}
        </div>
      )}
    </section>
  )
}
