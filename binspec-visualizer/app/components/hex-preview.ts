import { action } from '@ember/object';
import Component from '@glimmer/component';
import type { DataSegment } from 'binspec-visualizer/lib/data-segment';

type Signature = {
  Args: {
    data: Uint8Array;
    segments: DataSegment[];
    highlightedSegment?: DataSegment;
    hoveredSegment?: DataSegment;
    onSegmentSelect: (segment: DataSegment) => void;
    onSegmentMouseEnter: (segment: DataSegment) => void;
    onSegmentMouseLeave: (segment: DataSegment) => void;
  };

  Element: HTMLDivElement;
};

type BytePreviewParams = {
  byteIndex: number;
  rawValue: number;
  leafSegment?: DataSegment;
};

export default class HexPreview extends Component<Signature> {
  get bytePreviewParamsList(): BytePreviewParams[] {
    return Array.from(this.args.data).map((byte, index) => {
      return {
        byteIndex: index,
        rawValue: byte,
        leafSegment: this.args.segments
          .flatMap((segment) => segment.leafSegments)
          .find(
            (segment) =>
              segment.children.length === 0 && segment.containsByteIndex(index),
          ),
      };
    });
  }

  get segmentForTooltip(): DataSegment | undefined {
    return this.args.hoveredSegment;
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
