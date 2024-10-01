import type { DataSegment } from './data-segment';

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
}
