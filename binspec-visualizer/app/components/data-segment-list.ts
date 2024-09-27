import Component from '@glimmer/component';
import type { DataSegment } from 'binspec-visualizer/lib/data-segment';

type Signature = {
  Args: {
    data: Uint8Array;
    segments: DataSegment[];
    highlightedSegment?: DataSegment;
    onSegmentSelect: (segment: DataSegment) => void;
    onSegmentMouseEnter: (
      segment: DataSegment,
      byteIndex?: number,
      event?: MouseEvent,
    ) => void;
    onSegmentMouseLeave: () => void;
  };
};

export default class DataSegmentList extends Component<Signature> {}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    DataSegmentList: typeof DataSegmentList;
  }
}
