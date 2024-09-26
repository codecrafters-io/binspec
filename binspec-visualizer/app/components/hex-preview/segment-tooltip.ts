import Component from '@glimmer/component';
import type { DataSegment } from 'binspec-visualizer/lib/data-segment';

type Signature = {
  Args: {
    segment: DataSegment;
  };

  Element: HTMLDivElement;
};

export default class SegmentTooltip extends Component<Signature> {}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'HexPreview::SegmentTooltip': typeof SegmentTooltip;
  }
}
