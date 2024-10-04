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
    onSegmentMouseEnter: (
      section: NonNullable<HoverStateService['initiatedFromSection']>,
      segment: DataSegment,
      byteIndex?: number,
      event?: MouseEvent,
    ) => void;
    onSegmentMouseLeave: () => void;
    onSegmentSelect: (segment: DataSegment) => void;
    section: NonNullable<HoverStateService['initiatedFromSection']>;
    segments: DataSegment[];
    startByteIndex?: number; // defaults to 0
  };

  Element: HTMLDivElement;

  Blocks: {
    interstitial?: [];
    lastBytePreview?: [];
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
  isClickable: boolean;
};

export default class HexPreview extends Component<Signature> {
  @service declare hoverState: HoverStateService;
  @service declare screen: Screen;

  get leafSegments(): DataSegment[] {
    return this.args.segments.flatMap((segment) => segment.leafSegments);
  }

  get byteGrid(): ByteGrid {
    return new ByteGrid({
      rowWidth: this.rowWidth,
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
          isClickable: !!this.hoverableSegmentForByteIndex(i),
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

  get containerClasses(): string {
    if (this.rowWidth === 16) {
      return 'grid-cols-16 w-full max-w-[640px]';
    } else if (this.rowWidth === 8) {
      return 'grid-cols-8 w-full max-w-[400px]';
    } else {
      throw new Error(`Invalid row width: ${this.rowWidth}`);
    }
  }

  get interstitialContainerClasses(): string {
    if (this.rowWidth === 16) {
      return 'col-span-16';
    } else if (this.rowWidth === 8) {
      return 'col-span-8';
    } else {
      throw new Error(`Invalid row width: ${this.rowWidth}`);
    }
  }

  get rowWidth(): 16 | 8 {
    if (this.screen.width < 640) {
      return 8;
    }

    return 16;
  }

  get tooltipSegment(): DataSegment | undefined {
    if (!this.hoverState.segment) {
      return undefined;
    }

    if (this.args.section !== this.hoverState.initiatedFromSection) {
      return undefined;
    }

    if (this.hoverState.segment.title) {
      return this.hoverState.segment;
    }

    return undefined;
  }

  get tooltipParams(): TooltipParams | undefined {
    const tooltipSegment = this.tooltipSegment;

    if (!tooltipSegment) {
      return undefined;
    }

    return {
      segment: tooltipSegment,
      byteIndex:
        this.byteGrid.caretPositionForByteIndexRange(
          tooltipSegment.startByteIndex,
          tooltipSegment.endByteIndex,
          this.hoverState.byteIndex,
        )?.byteIndex || tooltipSegment.startByteIndex,
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

    if (highlightedSegment.containsByteIndex(byteIndex)) {
      return highlightedSegment.children.find((child) =>
        child.containsByteIndex(byteIndex),
      );
    }

    if (
      highlightedSegment.parent &&
      highlightedSegment.parent.containsByteIndex(byteIndex)
    ) {
      return highlightedSegment.parent;
    }

    // If the segment & its parent doesn't contain the byte index, we'll use the root segments
    return this.args.segments.find((segment) =>
      segment.containsByteIndex(byteIndex),
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
      this.args.onSegmentMouseEnter(this.args.section, segment, byteIndex);
    } else {
      this.args.onSegmentMouseEnter(
        this.args.section,
        new DataSegment({
          startBitIndex: byteIndex * 8,
          endBitIndex: byteIndex * 8 + 7,
          children: [],
        }),
        byteIndex,
      );
    }
  }

  @action
  handleBytePreviewMouseLeave() {
    this.args.onSegmentMouseLeave();
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    HexPreview: typeof HexPreview;
  }
}
