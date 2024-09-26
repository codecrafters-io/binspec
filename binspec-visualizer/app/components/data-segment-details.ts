import Component from '@glimmer/component';
import type { DataSegment } from 'binspec-visualizer/lib/data-segment';

type Signature = {
  Args: {
    data: Uint8Array;
    segment: DataSegment;
    onSegmentSelect: (segment: DataSegment) => void;
    onSegmentMouseEnter: (segment: DataSegment) => void;
    onSegmentMouseLeave: (segment: DataSegment) => void;
  };
};

export default class DataSegmentDetails extends Component<Signature> {
  get titleTextColorClasses(): string {
    return 'text-yellow-300';
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    DataSegmentDetails: typeof DataSegmentDetails;
  }
}
