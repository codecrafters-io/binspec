import { action } from '@ember/object';
import { service } from '@ember/service';
import Component from '@glimmer/component';
import type { DataSegment } from 'binspec-visualizer/lib/data-segment';
import type HoverStateService from 'binspec-visualizer/services/hover-state';

type Signature = {
  Args: {
    data: Uint8Array;
    endByteIndex?: number; // defaults to data.length
    highlightedSegment?: DataSegment;
    onSegmentMouseEnter: (segment: DataSegment) => void;
    onSegmentMouseLeave: (segment: DataSegment) => void;
    onSegmentSelect: (segment: DataSegment) => void;
    section: 'structure' | 'raw';
    segments: DataSegment[];
    startByteIndex?: number; // defaults to 0
  };

  Element: HTMLDivElement;
};

type BytePreviewParams = {
  byteIndex: number;
  rawValue: number;
  leafSegment?: DataSegment;
};

export default class HexPreview extends Component<Signature> {
  @service declare hoverState: HoverStateService;

  get bytePreviewParamsList(): BytePreviewParams[] {
    const startByteIndex = this.args.startByteIndex ?? 0;
    const endByteIndex = this.args.endByteIndex ?? this.args.data.length - 1;

    const result = [];

    for (let i = startByteIndex; i <= endByteIndex; i++) {
      const leafSegment = this.args.segments
        .flatMap((segment) => segment.leafSegments)
        .find(
          (segment) =>
            segment.children.length === 0 && segment.containsByteIndex(i),
        );

      result.push({
        byteIndex: i,
        rawValue: this.args.data[i]!,
        leafSegment: leafSegment,
      });
    }

    return result;
  }

  get segmentForTooltip(): DataSegment | undefined {
    if (this.args.section === 'structure') {
      return undefined; // Don't show for structure now
    }

    if (this.hoverState.initiatedFromSection === this.args.section) {
      return this.hoverState.segment;
    }

    return undefined;
  }

  @action
  handleBytePreviewClick(segment: DataSegment | undefined) {
    if (segment) {
      this.args.onSegmentSelect(segment);
    }
  }

  @action
  handleBytePreviewMouseEnter(segment: DataSegment | undefined) {
    if (segment) {
      this.args.onSegmentMouseEnter(segment);
    }
  }

  @action
  handleBytePreviewMouseLeave(segment: DataSegment | undefined) {
    if (segment) {
      this.args.onSegmentMouseLeave(segment);
    }
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    HexPreview: typeof HexPreview;
  }
}
