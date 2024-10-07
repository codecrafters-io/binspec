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

  @tracked highlightedSegment?: DataSegment =
    this.model.format.segments[0]!.firstLeafSegment!;

  @service declare hoverState: HoverStateService;

  get data(): Uint8Array {
    return this.model.format.data;
  }

  get hoveredSegment(): DataSegment | undefined {
    return this.hoverState.segment;
  }

  get segments(): DataSegment[] {
    return this.model.format.segments;
  }

  @action
  handleClickOutside() {
    this.hoverState.clear();
    this.highlightedSegment = undefined;
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
    this.highlightedSegment = segment;
    this.hoverState.clear();

    next(() => {
      this.hoverState.clear(); // If interstitial jumps and we trigger hover, let's clear that too
    });
  }
}
