import { DataSegment } from './data-segment';

interface GeneratedDataSegment {
  title: string;
  length_in_bytes?: number;
  explanation_markdown: string;
  children?: GeneratedDataSegment[];
}

export interface GeneratedData {
  name: string;
  slug: string;
  data: number[];
  segments: GeneratedDataSegment[];
}

function dataSegmentsFromGeneratedDataSegment(
  generatedSegments: GeneratedDataSegment[],
  currentBitIndex: number,
): DataSegment[] {
  const segments = [];

  for (const generatedSegment of generatedSegments) {
    const children = generatedSegment.children
      ? dataSegmentsFromGeneratedDataSegment(
          generatedSegment.children,
          currentBitIndex,
        )
      : [];

    const lengthInBits = generatedSegment.length_in_bytes
      ? generatedSegment.length_in_bytes * 8
      : children.reduce((acc, child) => acc + child.lengthInBits, 0);

    segments.push(
      new DataSegment({
        title: generatedSegment.title,
        startBitIndex: currentBitIndex,
        endBitIndex: currentBitIndex + lengthInBits - 1,
        explanationMarkdown: generatedSegment.explanation_markdown,
        children: children,
      }),
    );

    currentBitIndex += lengthInBits;
  }

  return segments;
}
export default class Format {
  name: string;
  slug: string;
  data: Uint8Array;
  segments: DataSegment[];

  constructor(
    name: string,
    slug: string,
    data: Uint8Array,
    segments: DataSegment[],
  ) {
    this.name = name;
    this.slug = slug;
    this.data = data;
    this.segments = segments;
  }

  static fromGeneratedData(generatedData: GeneratedData): Format {
    return new Format(
      generatedData.name,
      generatedData.slug,
      new Uint8Array(generatedData.data),
      dataSegmentsFromGeneratedDataSegment(generatedData.segments, 0),
    );
  }
}
