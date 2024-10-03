import { action } from '@ember/object';
import { service } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import type { DataSegment } from 'binspec-visualizer/lib/data-segment';
import type HoverStateService from 'binspec-visualizer/services/hover-state';

type Signature = {
  Args: {
    segment: DataSegment;
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

export default class TitleWithBreadcrumbsComponent extends Component<Signature> {
  @service declare hoverState: HoverStateService;

  @tracked ancestorTreeTooltipIsOpen = false;

  get hoveredSegment(): DataSegment | undefined {
    return this.hoverState.segment;
  }

  get titleTextColorClasses(): string {
    return this.hoveredSegment === this.args.segment
      ? 'text-blue-400'
      : 'text-yellow-300';
  }

  get visibleAncestors(): DataSegment[] {
    return this.args.segment.ancestorsReversed;
  }

  @action
  handleAncestorTreeToggleButtonClick() {
    this.ancestorTreeTooltipIsOpen = !this.ancestorTreeTooltipIsOpen;
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'DataSegmentDetails::TitleWithBreadcrumbs': typeof TitleWithBreadcrumbsComponent;
  }
}
