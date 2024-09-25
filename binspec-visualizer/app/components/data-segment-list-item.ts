import Component from '@glimmer/component';
import type { DataSegment } from 'binspec-visualizer/lib/data-segment';

type Signature = {
  Args: {
    isExpanded: boolean;
    segment: DataSegment;
    highlightedSegment?: DataSegment;
    hoveredSegment?: DataSegment;
    onSegmentSelect: (segment: DataSegment) => void;
    onSegmentMouseEnter: (segment: DataSegment) => void;
    onSegmentMouseLeave: (segment: DataSegment) => void;
  };

  Element: HTMLDivElement;
};

export default class DataSegmentListItem extends Component<Signature> {
  get isHighlightedSegment(): boolean {
    return this.args.highlightedSegment?.equals(this.args.segment) ?? false;
  }

  get isHoveredSegment(): boolean {
    return this.args.hoveredSegment?.equals(this.args.segment) ?? false;
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    DataSegmentListItem: typeof DataSegmentListItem;
  }
}
