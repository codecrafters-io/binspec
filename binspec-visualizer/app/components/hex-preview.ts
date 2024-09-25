import Component from '@glimmer/component';
import type { DataSegment } from 'binspec-visualizer/lib/data-segment';

type Signature = {
  Args: {
    data: Uint8Array;
    highlightedSegment?: DataSegment;
    hoveredSegment?: DataSegment;
    onSegmentSelect: (segment: DataSegment) => void;
    onSegmentMouseEnter: (segment: DataSegment) => void;
    onSegmentMouseLeave: (segment: DataSegment) => void;
  };

  Element: HTMLDivElement;
};

export default class HexPreview extends Component<Signature> {
  get bytes(): number[] {
    return Array.from(this.args.data);
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    HexPreview: typeof HexPreview;
  }
}
