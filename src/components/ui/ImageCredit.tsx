import type { PhotoCredit } from '../../data/attractionDetails';

export default function ImageCredit({ credit }: { credit: PhotoCredit }) {
  return (
    <p className="mt-2 text-xs leading-relaxed text-midnight/60">
      Fotó: <a href={credit.sourceUrl} className="underline underline-offset-2 hover:text-sea-800">{credit.author}</a>
      {' · '}<a href={credit.licenseUrl} className="underline underline-offset-2 hover:text-sea-800">{credit.license}</a>
      {credit.changes && <> · {credit.changes}</>}
    </p>
  );
}
