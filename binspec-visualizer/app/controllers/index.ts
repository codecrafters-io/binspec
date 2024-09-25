import Controller from '@ember/controller';
import { action } from '@ember/object';
import { DataSegment } from 'binspec-visualizer/lib/data-segment';
import { tracked } from '@glimmer/tracking';
import SampleSQLiteData from 'binspec-visualizer/lib/sample-sqlite-data';

export default class IndexController extends Controller {
  @tracked highlightedSegment?: DataSegment =
    this.sampleSegments[0]!.children[0];

  get sampleData(): Uint8Array {
    return SampleSQLiteData.data;
  }

  get sampleSegments(): DataSegment[] {
    return SampleSQLiteData.segments;
  }

  @action
  handleSegmentSelected(segment: DataSegment) {
    this.highlightedSegment = segment;
  }
}
