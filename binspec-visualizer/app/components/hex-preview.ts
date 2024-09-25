import Component from '@glimmer/component';
import type { DataSegment } from 'binspec-visualizer/lib/data-segment';
import { BytePreview } from 'binspec-visualizer/lib/byte-preview';

type Signature = {
  Args: {
    data: Uint8Array;
    highlightedSegment?: DataSegment;
    onSegmentSelect: (segment: DataSegment) => void;
  };

  Element: HTMLDivElement;
};

export default class HexPreview extends Component<Signature> {
  get bytePreviews(): BytePreview[] {
    const bytePreviews: BytePreview[] = [];

    for (const [index, byte] of this.args.data.entries()) {
      if (
        this.args.highlightedSegment &&
        this.args.highlightedSegment.containsByteIndex(index)
      ) {
        bytePreviews.push(new BytePreview(byte, this.args.highlightedSegment));
      } else {
        bytePreviews.push(new BytePreview(byte));
      }
    }

    return bytePreviews;
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    HexPreview: typeof HexPreview;
  }
}
