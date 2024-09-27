type ByteGridLine = {
  startByteIndex: number;
  endByteIndex: number;
};

type CaretPosition = {
  byteIndex: number;
  side: 'left' | 'right' | 'middle';
};

export class ByteGrid {
  rowWidth: number;
  startByteIndex: number;
  endByteIndex: number;

  constructor({
    rowWidth,
    startByteIndex,
    endByteIndex,
  }: {
    rowWidth: number;
    startByteIndex: number;
    endByteIndex: number;
  }) {
    this.rowWidth = rowWidth;
    this.startByteIndex = startByteIndex;
    this.endByteIndex = endByteIndex;
  }

  lineForByteIndex(byteIndex: number): ByteGridLine | undefined {
    return this.lines.find(
      (line) =>
        line.startByteIndex <= byteIndex && line.endByteIndex >= byteIndex,
    );
  }

  caretPositionForByteIndexRange(
    startIndex: number,
    endIndex: number,
    hoverIndex?: number,
  ): CaretPosition | undefined {
    let rangeStartIndex = startIndex;
    let rangeEndIndex = endIndex;

    if (hoverIndex) {
      const line = this.lineForByteIndex(hoverIndex);

      if (line) {
        rangeStartIndex = Math.min(line.startByteIndex, startIndex);
        rangeEndIndex = Math.max(line.endByteIndex, endIndex);
      }
    }

    return {
      byteIndex: Math.floor((rangeStartIndex + rangeEndIndex) / 2),
      side: (rangeStartIndex + rangeEndIndex) % 2 === 0 ? 'middle' : 'right',
    };
  }

  get lines(): ByteGridLine[] {
    const startByteIndex = this.startByteIndex;
    const endByteIndex = this.endByteIndex;

    const lines: ByteGridLine[] = [];

    for (let i = startByteIndex; i <= endByteIndex; i += this.rowWidth) {
      lines.push({
        startByteIndex: i,
        endByteIndex: Math.min(i + this.rowWidth - 1, endByteIndex),
      });
    }

    return lines;
  }
}
