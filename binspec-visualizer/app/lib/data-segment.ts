export class DataSegment {
  children: DataSegment[];
  startBitIndex: number;
  endBitIndex: number;
  explanationMarkdown?: string;
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
    children: DataSegment[];
    explanationMarkdown?: string;
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

  get ancestors(): DataSegment[] {
    const ancestors: DataSegment[] = [];

    let currentParent = this.parent;

    while (currentParent) {
      ancestors.push(currentParent);
      currentParent = currentParent.parent;
    }

    return ancestors;
  }

  get ancestorsReversed(): DataSegment[] {
    return this.ancestors.reverse();
  }

  contains(other: DataSegment): boolean {
    return (
      this.startBitIndex <= other.startBitIndex &&
      this.endBitIndex >= other.endBitIndex
    );
  }

  equals(other: DataSegment): boolean {
    return (
      this.startBitIndex === other.startBitIndex &&
      this.endBitIndex === other.endBitIndex
    );
  }

  findChildOrSiblingOrAncestorContainingByteIndex(
    byteIndex: number,
  ): DataSegment | undefined {
    // If the highlighted segment contains the byte index, we'll use its children
    if (this.containsByteIndex(byteIndex)) {
      return this.children.find((segment) =>
        segment.containsByteIndex(byteIndex),
      );
    }

    // eslint-disable-next-line @typescript-eslint/no-this-alias
    let currentRoot = this as DataSegment;

    while (currentRoot.parent) {
      const matchingSegment = currentRoot.parent.children.find((child) =>
        child.containsByteIndex(byteIndex),
      );

      if (matchingSegment) {
        return matchingSegment;
      }

      currentRoot = currentRoot.parent;
    }

    return undefined;
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

  get startIndexIsByteBoundary(): boolean {
    return this.startBitIndex % 8 === 0;
  }

  get endIndexIsByteBoundary(): boolean {
    return this.endBitIndex % 8 === 7;
  }

  get titleForDisplay(): string {
    if (this.title) {
      return this.title;
    }

    if (this.startIndexIsByteBoundary && this.endIndexIsByteBoundary) {
      if (this.startByteIndex === this.endByteIndex) {
        return `Byte ${this.startByteIndex}`;
      }

      return `Bytes ${this.startByteIndex} - ${this.endByteIndex}`;
    }

    // Improve message
    return `Byte ${this.startBitIndex / 8} - ${this.endBitIndex / 8}`;
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
