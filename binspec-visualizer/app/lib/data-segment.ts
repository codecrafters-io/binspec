export class DataSegment {
  children: DataSegment[];
  startBitIndex: number;
  endBitIndex: number;
  parent?: DataSegment;

  constructor({
    startBitIndex,
    endBitIndex,
    children,
  }: {
    startBitIndex: number;
    endBitIndex: number;
    children: DataSegment[];
  }) {
    this.startBitIndex = startBitIndex;
    this.endBitIndex = endBitIndex;
    this.children = children;

    for (const child of children) {
      child.parent = this;
    }
  }

  get explanationMarkdown(): string {
    return 'Sample explanation markdown';
  }
}
