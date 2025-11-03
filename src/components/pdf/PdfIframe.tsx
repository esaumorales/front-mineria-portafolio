// src/components/pdf/PdfIframe.tsx
type Props = { url?: string; fileUrl?: string };

export default function PdfIframe({ url, fileUrl }: Props) {
  const src = (fileUrl ?? url)!;
  return (
    <iframe
      src={`${src}#view=FitH`}
      title="Visor PDF"
      className="w-full h-[80vh] rounded-lg border border-white/10"
    />
  );
}
