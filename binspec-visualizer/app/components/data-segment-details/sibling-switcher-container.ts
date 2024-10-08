import { service } from '@ember/service';
import Component from '@glimmer/component';
import type { DataSegment } from 'binspec-visualizer/lib/data-segment';
import type HoverStateService from 'binspec-visualizer/services/hover-state';

type Signature = {
  Args: {
    nextSegment?: DataSegment;
    previousSegment?: DataSegment;
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

export default class SiblingSwitcherContainerComponent extends Component<Signature> {
  @service declare hoverState: HoverStateService;

  get hoveredSegment(): DataSegment | undefined {
    return this.hoverState.segment;
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'DataSegmentDetails::SiblingSwitcherContainer': typeof SiblingSwitcherContainerComponent;
  }
}
