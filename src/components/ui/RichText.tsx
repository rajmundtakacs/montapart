import { Fragment } from 'react';
import type { TextRun } from '../../data/richText';

export default function RichText({ runs }: { runs: TextRun[] }) {
  return runs.map((run, index) => {
    const content = run.bold
      ? <strong className="font-semibold text-midnight">{run.text}</strong>
      : run.text;

    return (
      <Fragment key={index}>
        {run.href ? (
          <a href={run.href} target="_blank" rel="noopener noreferrer"
            className="text-sea-700 underline decoration-sea-300 underline-offset-4 hover:text-sea-900">
            {content}
          </a>
        ) : content}
      </Fragment>
    );
  });
}
