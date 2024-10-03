import { service } from '@ember/service';
import Component from '@glimmer/component';
import type { DataSegment } from 'binspec-visualizer/lib/data-segment';
import type HoverStateService from 'binspec-visualizer/services/hover-state';

type Signature = {
  Args: {
    data: Uint8Array;
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

export default class DataSegmentDetails extends Component<Signature> {
  @service declare hoverState: HoverStateService;

  get hoveredSegment(): DataSegment | undefined {
    return this.hoverState.segment;
  }

  get titleTextColorClasses(): string {
    return 'text-yellow-300';
  }

  get previewEndByteIndex(): number {
    return Math.min(
      this.args.segment.endByteIndex,
      this.args.segment.startByteIndex + 14,
    );
  }

  get previewIsTruncated(): boolean {
    return this.args.segment.endByteIndex > this.previewEndByteIndex;
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    DataSegmentDetails: typeof DataSegmentDetails;
  }
}
