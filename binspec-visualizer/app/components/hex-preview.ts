import Component from '@glimmer/component';
import type { DataSegment } from 'binspec-visualizer/lib/data-segment';
import { BytePreview } from 'binspec-visualizer/lib/byte-preview';

type Signature = {
  Args: {
    data: Uint8Array;
    highlightedSegment?: DataSegment;
    hoveredSegment?: DataSegment;
    onSegmentSelect: (segment: DataSegment) => void;
  };

  Element: HTMLDivElement;
};

export default class HexPreview extends Component<Signature> {
  get bytePreviews(): BytePreview[] {
    const bytePreviews: BytePreview[] = [];

    for (const [index, byte] of this.args.data.entries()) {
      const highlightedSegment =
        this.args.highlightedSegment?.containsByteIndex(index)
          ? this.args.highlightedSegment
          : undefined;

      const hoveredSegment = this.args.hoveredSegment?.containsByteIndex(index)
        ? this.args.hoveredSegment
        : undefined;

      bytePreviews.push(
        new BytePreview(byte, highlightedSegment, hoveredSegment),
      );
    }

    return bytePreviews;
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    HexPreview: typeof HexPreview;
  }
}
