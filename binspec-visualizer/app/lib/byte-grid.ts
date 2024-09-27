type ByteGridLine = {
  startByteIndex: number;
  endByteIndex: number;
};

type CaretPosition = {
  byteIndex: number;
  alignment: 'start' | 'end' | 'middle';
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
    if (hoverIndex !== undefined) {
      const line = this.lineForByteIndex(hoverIndex);

      const clamp = (value: number, min: number, max: number) => {
        return Math.min(Math.max(value, min), max);
      };

      if (line) {
        rangeStartIndex = clamp(line.startByteIndex, startIndex, endIndex);
        rangeEndIndex = clamp(line.endByteIndex, startIndex, endIndex);
      }
    }

    return {
      byteIndex: Math.floor((rangeStartIndex + rangeEndIndex) / 2),
      alignment: (rangeStartIndex + rangeEndIndex) % 2 === 0 ? 'middle' : 'end',
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
