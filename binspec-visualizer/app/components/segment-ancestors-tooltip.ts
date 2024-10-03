import Component from '@glimmer/component';
import type { DataSegment } from 'binspec-visualizer/lib/data-segment';
import type HoverStateService from 'binspec-visualizer/services/hover-state';

type Signature = {
  Args: {
    segment: DataSegment;
    highlightedSegment?: DataSegment;
    onSegmentMouseEnter: (
      section: NonNullable<HoverStateService['initiatedFromSection']>,
      segment: DataSegment,
      byteIndex?: number,
      event?: MouseEvent,
    ) => void;
    onSegmentMouseLeave: () => void;
    onSegmentSelect: (segment: DataSegment) => void;
  };

  Element: HTMLDivElement;
};

export default class SegmentAncestorsTooltipComponent extends Component<Signature> {
  get ancestorsAndSelf(): DataSegment[] {
    return [...this.args.segment.ancestorsReversed, this.args.segment];
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    SegmentAncestorsTooltip: typeof SegmentAncestorsTooltipComponent;
  }
}
