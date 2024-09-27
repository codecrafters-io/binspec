type ByteGridLine = {
  startByteIndex: number;
  endByteIndex: number;
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
