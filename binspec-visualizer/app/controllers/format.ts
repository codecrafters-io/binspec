import Controller from '@ember/controller';
import { action } from '@ember/object';
import { DataSegment } from 'binspec-visualizer/lib/data-segment';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
import type HoverStateService from 'binspec-visualizer/services/hover-state';
import type { ModelType } from 'binspec-visualizer/routes/format';
import { next } from '@ember/runloop';

export default class FormatController extends Controller {
  declare model: ModelType;

  queryParams = [
    {
      highlightQueryParam: 'highlight',
    },
  ];

  @tracked highlightQueryParam?: string;

  @service declare hoverState: HoverStateService;

  get data(): Uint8Array {
    return this.model.format.data;
  }

  get highlightedSegment(): DataSegment | undefined {
    if (!this.highlightQueryParam) {
      return this.model.format.segments[0]!.firstLeafSegment!;
    }

    const startByteIndexStr = this.highlightQueryParam.split('-')[0];
    const endByteIndexStr = this.highlightQueryParam.split('-')[1];

    if (startByteIndexStr === undefined || endByteIndexStr === undefined) {
      return this.model.format.segments[0]!.firstLeafSegment!;
    }

    const startByteIndex = parseInt(startByteIndexStr, 10);
    const endByteIndex = parseInt(endByteIndexStr, 10);

    const allSegments = [];

    for (const segment of this.model.format.segments) {
      allSegments.push(segment);
      allSegments.push(...segment.recursiveChildren);
    }

    const exactMatch = allSegments.find(
      (segment) =>
        segment.startByteIndex === startByteIndex &&
        segment.endByteIndex === endByteIndex,
    );

    if (exactMatch) {
      return exactMatch;
    }

    return this.model.format.segments[0]!.firstLeafSegment!;
  }

  get hoveredSegment(): DataSegment | undefined {
    return this.hoverState.segment;
  }

  get nextSegment(): DataSegment | undefined {
    // If there's no highlighted segment, return the first leaf segment
    if (!this.highlightedSegment) {
      return this.model.format.segments[0]!.firstLeafSegment;
    }

    const leafSegments = [];

    for (const segment of this.model.format.segments) {
      leafSegments.push(...segment.leafSegments);
    }

    const nextLeafSegment = leafSegments
      .sort((a, b) => a.startByteIndex - b.startByteIndex)
      .find(
        (segment) =>
          segment.startByteIndex > this.highlightedSegment!.endByteIndex,
      );

    // If this is a leaf segment, find the next leaf segment
    if (this.highlightedSegment.isLeafSegment) {
      return nextLeafSegment;
    }

    // If this is a root segment, let's find the next root segment
    if (!this.highlightedSegment.parent) {
      return this.model.format.segments
        .sort((a, b) => a.startByteIndex - b.startByteIndex)
        .find(
          (segment) =>
            segment.startByteIndex > this.highlightedSegment!.startByteIndex,
        );
    }

    // Otherwise, let's try to find the next sibling, and if not, let's find the next leaf segment
    return this.highlightedSegment.nextSibling || nextLeafSegment;
  }

  get previousSegment(): DataSegment | undefined {
    // If there's no highlighted segment, return the first leaf segment
    if (!this.highlightedSegment) {
      return this.model.format.segments[0]!.firstLeafSegment;
    }

    const leafSegments = [];

    for (const segment of this.model.format.segments) {
      leafSegments.push(...segment.leafSegments);
    }

    const previousLeafSegment = leafSegments
      .sort((a, b) => b.startByteIndex - a.startByteIndex)
      .find(
        (segment) =>
          segment.endByteIndex < this.highlightedSegment!.startByteIndex,
      );

    // If this is a leaf segment, find the previous leaf segment
    if (this.highlightedSegment.isLeafSegment) {
      return previousLeafSegment;
    }

    // If this is a root segment, let's find the previous root segment
    if (!this.highlightedSegment.parent) {
      return this.model.format.segments
        .sort((a, b) => b.startByteIndex - a.startByteIndex)
        .find(
          (segment) =>
            segment.endByteIndex < this.highlightedSegment!.startByteIndex,
        );
    }

    // Otherwise, let's try to find the previous sibling, and if not, let's find the previous leaf segment
    return this.highlightedSegment.previousSibling || previousLeafSegment;
  }

  get segments(): DataSegment[] {
    return this.model.format.segments;
  }

  @action
  handleClickOutside() {
    this.hoverState.clear();
  }

  @action
  handleSegmentMouseEnter(
    section: NonNullable<HoverStateService['initiatedFromSection']>,
    segment: DataSegment,
    byteIndex?: number,
  ) {
    // Don't hover if the segment is already highlighted (TODO: See if we want to filter this?)
    if (this.highlightedSegment?.equals(segment)) {
      return;
    }

    this.hoverState.setValues(
      segment,
      byteIndex ?? segment.startByteIndex,
      section,
    );
  }

  @action
  handleSegmentMouseLeave() {
    this.hoverState.clear();
  }

  @action
  handleSegmentSelected(segment: DataSegment) {
    this.highlightQueryParam = `${segment.startByteIndex}-${segment.endByteIndex}`;
    this.hoverState.clear();

    next(() => {
      this.hoverState.clear(); // If interstitial jumps and we trigger hover, let's clear that too

      const interstitial = document.getElementById(
        'highlighted-segment-interstitial',
      );

      interstitial?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }
}
