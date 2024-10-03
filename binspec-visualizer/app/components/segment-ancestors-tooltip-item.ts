import Component from '@glimmer/component';
import type { DataSegment } from 'binspec-visualizer/lib/data-segment';

type Signature = {
  Args: {
    segment: DataSegment;
    indentationLevel: number;
  };

  Element: HTMLDivElement;
};

export default class SegmentAncestorsTooltipItemComponent extends Component<Signature> {
  get ancestorsAndSelf(): DataSegment[] {
    return [...this.args.segment.ancestorsReversed, this.args.segment];
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    SegmentAncestorsTooltipItem: typeof SegmentAncestorsTooltipItemComponent;
  }
}
