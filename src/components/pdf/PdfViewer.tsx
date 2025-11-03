// src/components/pdf/PdfViewer.tsx
import { useEffect, useMemo, useRef, useState } from 'react'
import { Document, Page } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'
import { PdfToolbar } from './PdfToolbar'

export function PdfViewer({ fileUrl }: { fileUrl: string }) {
  const [page, setPage] = useState(1)
  const [pages, setPages] = useState(0)
  const [scale, setScale] = useState(1)
  const containerRef = useRef<HTMLDivElement>(null)

  const onDocumentLoad = ({ numPages }: { numPages: number }) => setPages(numPages)

  const onZoomIn = () => setScale(s => Math.min(s + 0.1, 3))
  const onZoomOut = () => setScale(s => Math.max(s - 0.1, 0.5))
  const onFit = () => setScale(1)
  const onPrev = () => setPage(p => Math.max(p - 1, 1))
  const onNext = () => setPage(p => Math.min(p + 1, pages))

  const onToggleFull = () => {
    const el = containerRef.current
    if (!el) return
    if (!document.fullscreenElement) el.requestFullscreen()
    else document.exitFullscreen()
  }

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
      if (e.key === '+') onZoomIn()
      if (e.key === '-') onZoomOut()
      if (e.key === 'f') onToggleFull()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pages])

  const width = useMemo(() => {
    const w = containerRef.current?.clientWidth || 800
    return Math.min(w - 24, 1200)
  }, [containerRef.current?.clientWidth])

  return (
    <div ref={containerRef} className="card overflow-hidden">
      <PdfToolbar
        fileUrl={fileUrl}
        page={page}
        pages={pages}
        onPrev={onPrev}
        onNext={onNext}
        onZoomIn={onZoomIn}
        onZoomOut={onZoomOut}
        onFit={onFit}
        onToggleFull={onToggleFull}
      />
      <div className="flex justify-center bg-black">
        <Document
          file={fileUrl}
          onLoadSuccess={onDocumentLoad}
          loading={<div className="p-6">Cargando PDF…</div>}
        >
          <Page
            pageNumber={page}
            width={Math.floor(width * scale)}
            renderAnnotationLayer
            renderTextLayer
          />
        </Document>
      </div>
    </div>
  )
}
