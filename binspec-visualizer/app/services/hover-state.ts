import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { DataSegment } from 'binspec-visualizer/lib/data-segment';

export default class HoverStateService extends Service {
  @tracked segment?: DataSegment;
  @tracked initiatedFromSection?: 'structure' | 'raw';

  setSegment(segment: DataSegment, initiatedFromSection: 'structure' | 'raw') {
    // Force no update
    if (
      this.segment?.equals(segment) &&
      this.initiatedFromSection === initiatedFromSection
    ) {
      return;
    }

    this.segment = segment;
    this.initiatedFromSection = initiatedFromSection;
  }

  clear() {
    this.segment = undefined;
    this.initiatedFromSection = undefined;
  }
}
