export class DataSegment {
  children: DataSegment[];
  startBitIndex: number;
  endBitIndex: number;
  explanationMarkdown: string;
  parent?: DataSegment;
  title?: string;

  constructor({
    startBitIndex,
    endBitIndex,
    explanationMarkdown,
    children,
    title,
  }: {
    startBitIndex: number;
    endBitIndex: number;
    explanationMarkdown: string;
    children: DataSegment[];
    title?: string;
  }) {
    this.startBitIndex = startBitIndex;
    this.endBitIndex = endBitIndex;
    this.explanationMarkdown = explanationMarkdown;
    this.children = children;
    this.title = title;

    for (const child of children) {
      child.parent = this;
    }
  }

  equals(other: DataSegment): boolean {
    return (
      this.startBitIndex === other.startBitIndex &&
      this.endBitIndex === other.endBitIndex
    );
  }

  get leafSegments(): DataSegment[] {
    if (this.children.length === 0) {
      return [this];
    }

    return this.children.flatMap((child) => child.leafSegments);
  }

  get startByteIndex(): number {
    return Math.floor(this.startBitIndex / 8);
  }

  get endByteIndex(): number {
    return Math.floor(this.endBitIndex / 8);
  }

  get titleForDisplay(): string {
    return (
      this.title ?? `Byte ${this.startBitIndex / 8} - ${this.endBitIndex / 8}`
    );
  }

  containsByteIndex(byteIndex: number): boolean {
    const byteStartBitIndex = byteIndex * 8;
    const byteEndBitIndex = byteStartBitIndex + 7;

    return (
      byteStartBitIndex >= this.startBitIndex &&
      byteEndBitIndex <= this.endBitIndex
    );
  }
}
