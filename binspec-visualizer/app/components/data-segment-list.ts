import Component from '@glimmer/component';
import type { DataSegment } from 'binspec-visualizer/lib/data-segment';
import type HoverStateService from 'binspec-visualizer/services/hover-state';

type Signature = {
  Args: {
    data: Uint8Array;
    segments: DataSegment[];
    highlightedSegment?: DataSegment;
    onSegmentSelect: (segment: DataSegment) => void;
    onSegmentMouseEnter: (
      section: NonNullable<HoverStateService['initiatedFromSection']>,
      segment: DataSegment,
      byteIndex?: number,
      event?: MouseEvent,
    ) => void;
    onSegmentMouseLeave: () => void;
  };

  Element: HTMLDivElement;
};

export default class DataSegmentList extends Component<Signature> {}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    DataSegmentList: typeof DataSegmentList;
  }
}
