import Helper from '@ember/component/helper';
import type { DataSegment } from 'binspec-visualizer/lib/data-segment';

export interface Signature {
  Args: {
    Positional: [DataSegment?, DataSegment?];
  };
  Return: boolean;
}

export default class SegmentContains extends Helper<Signature> {
  public compute(positional: [DataSegment?, DataSegment?]): boolean {
    if (!positional[0] || !positional[1]) {
      return false;
    }

    return positional[0].contains(positional[1]);
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'segment-contains': typeof SegmentContains;
  }
}
