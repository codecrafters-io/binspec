import type { DataSegment } from './data-segment';

export class BytePreview {
  public rawValue: number;
  public highlightedSegment?: DataSegment;

  constructor(rawValue: number, highlightedSegment?: DataSegment) {
    if (rawValue < 0 || rawValue > 255) {
      throw new Error('Raw value must be between 0 and 255');
    }

    this.rawValue = rawValue;
    this.highlightedSegment = highlightedSegment;
  }

  get asciiString(): string {
    if (this.rawValue === 32) {
      return '.';
    }

    return this.rawValue >= 32 && this.rawValue <= 126
      ? String.fromCharCode(this.rawValue)
      : '.';
  }

  get hexString(): string {
    return this.rawValue.toString(16).padStart(2, '0');
  }
}
