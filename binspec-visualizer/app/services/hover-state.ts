import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { DataSegment } from 'binspec-visualizer/lib/data-segment';
import { cancel, later } from '@ember/runloop';
import { action } from '@ember/object';
import type { EmberRunTimer } from '@ember/runloop/types';

export default class HoverStateService extends Service {
  @tracked segment?: DataSegment;
  @tracked byteIndex?: number;
  @tracked initiatedFromSection?:
    | 'root-hexdump'
    | 'segment-details-hexdump'
    | 'other';

  clearTask?: EmberRunTimer;

  setValues(
    segment: DataSegment,
    byteIndex: number,
    initiatedFromSection: 'root-hexdump' | 'segment-details-hexdump' | 'other',
  ) {
    if (this.clearTask) {
      cancel(this.clearTask);
    }

    // Force no update
    if (
      this.segment?.equals(segment) &&
      this.initiatedFromSection === initiatedFromSection &&
      this.byteIndex === byteIndex
    ) {
      return;
    }

    this.segment = segment;
    this.initiatedFromSection = initiatedFromSection;
    this.byteIndex = byteIndex;
  }

  clear() {
    if (this.clearTask) {
      cancel(this.clearTask);
    }

    this.clearTask = later(this.doClear, 10);
  }

  @action
  doClear() {
    this.segment = undefined;
    this.initiatedFromSection = undefined;
    this.byteIndex = undefined;
  }
}
