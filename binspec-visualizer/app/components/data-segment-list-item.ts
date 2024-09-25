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
    console.log(
      'isHoveredSegment',
      this.args.hoveredSegment?.equals(this.args.segment),
    );

    return this.args.hoveredSegment?.equals(this.args.segment) || false;
  }

  get titleTextColorClasses(): string {
    if (this.isHighlightedSegment) {
      return 'text-yellow-300';
    } else {
      return 'text-white';
    }
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    DataSegmentListItem: typeof DataSegmentListItem;
  }
}
