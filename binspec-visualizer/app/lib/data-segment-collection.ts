import type { DataSegment } from './data-segment';

export class DataSegmentCollection {
  segments: DataSegment[] = [];

  constructor(segments: DataSegment[]) {
    this.segments = segments;
  }

  rootSegments(): DataSegment[] {
    return this.segments.filter((segment) => !segment.parent);
  }
}
