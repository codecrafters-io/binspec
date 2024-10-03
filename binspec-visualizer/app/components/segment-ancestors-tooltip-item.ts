import { service } from '@ember/service';
import Component from '@glimmer/component';
import type { DataSegment } from 'binspec-visualizer/lib/data-segment';
import type HoverStateService from 'binspec-visualizer/services/hover-state';

type Signature = {
  Args: {
    segment: DataSegment;
    highlightedSegment?: DataSegment;
    indentationLevel: number;
  };

  Element: HTMLDivElement;
};

export default class SegmentAncestorsTooltipItemComponent extends Component<Signature> {
  @service declare hoverState: HoverStateService;

  get ancestorsAndSelf(): DataSegment[] {
    return [...this.args.segment.ancestorsReversed, this.args.segment];
  }

  get isHighlightedSegment(): boolean {
    return this.args.highlightedSegment?.equals(this.args.segment) ?? false;
  }

  get isHoveredSegment(): boolean {
    return this.hoverState.segment?.equals(this.args.segment) ?? false;
  }

  get arrowColorClasses(): string {
    if (this.isHoveredSegment) {
      return 'text-sky-600';
    } else {
      return 'text-zinc-600';
    }
  }

  get textColorClasses(): string {
    if (this.isHighlightedSegment) {
      return 'text-yellow-300';
    } else if (this.isHoveredSegment) {
      return 'text-sky-400';
    } else {
      return 'text-white';
    }
  }

  get backgroundColorClasses(): string {
    if (this.isHighlightedSegment && this.isHoveredSegment) {
      return 'bg-blue-400/30';
    } else if (this.isHoveredSegment) {
      return 'bg-blue-400/15';
    } else {
      return '';
    }
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    SegmentAncestorsTooltipItem: typeof SegmentAncestorsTooltipItemComponent;
  }
}
