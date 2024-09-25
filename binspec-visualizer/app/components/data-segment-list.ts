import Component from '@glimmer/component';
import type { DataSegment } from 'binspec-visualizer/lib/data-segment';

type Signature = {
  Args: {
    segments: DataSegment[];
    highlightedSegment?: DataSegment;
    onSelectSegment: (segment: DataSegment) => void;
  };
};

export default class DataSegmentList extends Component<Signature> {}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    DataSegmentList: typeof DataSegmentList;
  }
}
