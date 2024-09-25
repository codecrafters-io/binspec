import Component from '@glimmer/component';
import type { DataSegment } from 'binspec-visualizer/lib/data-segment';

type Signature = {
  Args: {
    index: number;
    rawValue: number;
    highlightedSegment?: DataSegment;
    hoveredSegment?: DataSegment;
  };

  Element: HTMLDivElement;
};

export default class BytePreview extends Component<Signature> {
  get asciiString(): string {
    if (this.args.rawValue === 32) {
      return '.';
    }

    return this.args.rawValue >= 32 && this.args.rawValue <= 126
      ? String.fromCharCode(this.args.rawValue)
      : '.';
  }

  get hexString(): string {
    return this.args.rawValue.toString(16).padStart(2, '0');
  }

  get isInHighlightedSegment(): boolean {
    return (
      this.args.highlightedSegment?.containsByteIndex(this.args.index) ?? false
    );
  }

  get isInHoveredSegment(): boolean {
    return (
      this.args.hoveredSegment?.containsByteIndex(this.args.index) ?? false
    );
  }

  get backgroundColorClasses(): string {
    if (this.isInHoveredSegment) {
      return 'bg-sky-500/15';
    } else if (this.isInHighlightedSegment) {
      return 'bg-zinc-700/60';
    } else {
      return '';
    }
  }

  get asciiTextColorClasses(): string {
    if (this.isInHighlightedSegment) {
      return 'text-yellow-500';
    } else if (this.isInHoveredSegment) {
      return 'text-zinc-400/40';
    } else {
      return 'text-zinc-500/40';
    }
  }

  get hexTextColorClasses(): string {
    if (this.isInHighlightedSegment) {
      return 'text-yellow-300';
    } else if (this.isInHoveredSegment) {
      return 'text-zinc-400';
    } else {
      return 'text-zinc-500/40';
    }
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'HexPreview::BytePreview': typeof BytePreview;
  }
}
