import { action } from '@ember/object';
import { service } from '@ember/service';
import Component from '@glimmer/component';
import { ByteGrid } from 'binspec-visualizer/lib/byte-grid';
import { DataSegment } from 'binspec-visualizer/lib/data-segment';
import type HoverStateService from 'binspec-visualizer/services/hover-state';

type TooltipParams = {
  segment: DataSegment;
  byteIndex: number;
};

type Signature = {
  Args: {
    byteIndexForInterstitial?: number;
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

  Blocks: {
    interstitial?: [];
  };
};

type ByteLine = {
  items: ByteLineItem[];
  startByteIndex: number;
  endByteIndex: number;
};

type ByteLineItem = {
  byteIndex: number;
  rawValue: number;
  leafSegment?: DataSegment;
};

export default class HexPreview extends Component<Signature> {
  @service declare hoverState: HoverStateService;

  get leafSegments(): DataSegment[] {
    return this.args.segments.flatMap((segment) => segment.leafSegments);
  }

  get byteGrid(): ByteGrid {
    return new ByteGrid({
      rowWidth: 16,
      startByteIndex: this.args.startByteIndex ?? 0,
      endByteIndex: this.args.endByteIndex ?? this.args.data.length - 1,
    });
  }

  get byteLines(): ByteLine[] {
    const lines: ByteLine[] = [];

    for (const line of this.byteGrid.lines) {
      const itemsInLine: ByteLineItem[] = [];

      for (let i = line.startByteIndex; i <= line.endByteIndex; i++) {
        itemsInLine.push({
          byteIndex: i,
          rawValue: this.args.data[i]!,
          leafSegment: this.leafSegmentForByteIndex(i),
        });
      }

      lines.push({
        items: itemsInLine,
        startByteIndex: line.startByteIndex,
        endByteIndex: line.endByteIndex,
      });
    }

    return lines;
  }

  get segmentForTooltip(): DataSegment | undefined {
    if (!this.hoverState.segment) {
      return undefined;
    }

    if (
      this.args.section === 'structure' ||
      this.hoverState.initiatedFromSection === 'structure'
    ) {
      return undefined; // Don't show for structure now
    }

    if (this.hoverState.segment.title) {
      return this.hoverState.segment;
    }

    return undefined;
  }

  get tooltipParams(): TooltipParams | undefined {
    const segmentForTooltip = this.segmentForTooltip;

    if (!segmentForTooltip) {
      return undefined;
    }

    return {
      segment: segmentForTooltip,
      byteIndex: Math.floor(
        (segmentForTooltip.startByteIndex + segmentForTooltip.endByteIndex) / 2,
      ),
    };
  }

  leafSegmentForByteIndex(byteIndex: number): DataSegment | undefined {
    return this.leafSegments.find((segment) =>
      segment.containsByteIndex(byteIndex),
    );
  }

  hoverableSegmentForByteIndex(byteIndex: number): DataSegment | undefined {
    const highlightedSegment = this.args.highlightedSegment;

    // If there's no highlighted segment, we'll use the root segments
    if (!highlightedSegment) {
      return this.args.segments.find((segment) =>
        segment.containsByteIndex(byteIndex),
      );
    }

    // If the highlighted segment contains the byte index, we'll use its children
    // Otherwise, we'll try to find a sibling segment
    return (
      highlightedSegment.findChildOrSiblingOrAncestorContainingByteIndex(
        byteIndex,
      ) ||
      this.args.segments.find((segment) => segment.containsByteIndex(byteIndex))
    );
  }

  @action
  handleBytePreviewClick(byteIndex: number) {
    const segment = this.hoverableSegmentForByteIndex(byteIndex);

    if (segment) {
      this.args.onSegmentSelect(segment);
    }
  }

  @action
  handleBytePreviewMouseEnter(byteIndex: number) {
    const segment = this.hoverableSegmentForByteIndex(byteIndex);

    if (segment) {
      this.args.onSegmentMouseEnter(segment);
    } else {
      this.args.onSegmentMouseEnter(
        new DataSegment({
          startBitIndex: byteIndex * 8,
          endBitIndex: byteIndex * 8 + 7,
          children: [],
        }),
      );
    }
  }

  @action
  handleBytePreviewMouseLeave(byteIndex: number) {
    const segment = this.hoverableSegmentForByteIndex(byteIndex);

    if (segment) {
      this.args.onSegmentMouseLeave(segment);
    } else {
      this.args.onSegmentMouseLeave(
        new DataSegment({
          startBitIndex: byteIndex * 8,
          endBitIndex: byteIndex * 8 + 7,
          children: [],
        }),
      );
    }
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    HexPreview: typeof HexPreview;
  }
}
