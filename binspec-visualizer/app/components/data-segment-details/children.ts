import { service } from '@ember/service';
import Component from '@glimmer/component';
import type { DataSegment } from 'binspec-visualizer/lib/data-segment';
import type HoverStateService from 'binspec-visualizer/services/hover-state';

type Signature = {
  Args: {
    segment: DataSegment;
    onSegmentSelect: (segment: DataSegment) => void;
    onSegmentMouseEnter: (segment: DataSegment) => void;
    onSegmentMouseLeave: (segment: DataSegment) => void;
  };

  Element: HTMLDivElement;
};

export default class ChildrenComponent extends Component<Signature> {
  @service declare hoverState: HoverStateService;

  get hoveredSegment(): DataSegment | undefined {
    return this.hoverState.segment;
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'DataSegmentDetails::Children': typeof ChildrenComponent;
  }
}
