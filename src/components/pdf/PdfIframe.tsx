// src/components/pdf/PdfIframe.tsx
type Props = { url: string };

export default function PdfIframe({ url }: Props) {
  return (
    <iframe
      src={`${url}#view=FitH`}
      title="Visor PDF"
      className="w-full h-[80vh] rounded-lg border border-white/10"
    />
  );
}
