import Controller from '@ember/controller';
import { action } from '@ember/object';
import { DataSegment } from 'binspec-visualizer/lib/data-segment';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
import type HoverStateService from 'binspec-visualizer/services/hover-state';
import type { ModelType } from 'binspec-visualizer/routes/format';

export default class FormatController extends Controller {
  declare model: ModelType;

  @tracked highlightedSegment?: DataSegment = this.model.format.segments[0]!;

  @service declare hoverState: HoverStateService;

  get data(): Uint8Array {
    return this.model.format.data;
  }

  get segments(): DataSegment[] {
    return this.model.format.segments;
  }

  @action
  handleClickOutside() {
    console.log('click outside triggered');
    this.hoverState.clear();
    this.highlightedSegment = undefined;
  }

  @action
  handleSegmentMouseEnter(section: 'structure' | 'raw', segment: DataSegment) {
    // Don't hover if the segment is already highlighted in the structure section
    if (section === 'structure' && this.highlightedSegment?.equals(segment)) {
      return;
    }

    this.hoverState.setSegment(segment, section);
  }

  @action
  handleSegmentMouseLeave() {
    this.hoverState.clear();
  }

  @action
  handleSegmentSelected(section: 'structure' | 'raw', segment: DataSegment) {
    console.log('setting segment', segment.titleForDisplay);
    this.highlightedSegment = segment;
    this.hoverState.clear();
  }
}
