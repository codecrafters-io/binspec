import { service } from '@ember/service';
import Component from '@glimmer/component';
import type { DataSegment } from 'binspec-visualizer/lib/data-segment';
import type HoverStateService from 'binspec-visualizer/services/hover-state';

type Signature = {
  Args: {
    data: Uint8Array;
    isExpanded: boolean;
    segment: DataSegment;
    highlightedSegment?: DataSegment;
    onSegmentSelect: (segment: DataSegment) => void;
    onSegmentMouseEnter: (segment: DataSegment) => void;
    onSegmentMouseLeave: (segment: DataSegment) => void;
  };

  Element: HTMLDivElement;
};

export default class DataSegmentListItem extends Component<Signature> {
  @service declare hoverState: HoverStateService;

  get isHighlightedSegment(): boolean {
    return this.args.highlightedSegment?.equals(this.args.segment) ?? false;
  }

  get isHoveredSegment(): boolean {
    return this.hoverState.segment?.equals(this.args.segment) ?? false;
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
