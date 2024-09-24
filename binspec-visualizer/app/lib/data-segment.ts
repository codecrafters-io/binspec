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
