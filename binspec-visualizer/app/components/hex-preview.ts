import Component from '@glimmer/component';

type Signature = {
  Args: {
    data: Uint8Array;
  };

  Element: HTMLDivElement;
};

class BytePreview {
  public rawValue: number;

  constructor(rawValue: number) {
    if (rawValue < 0 || rawValue > 255) {
      throw new Error('Raw value must be between 0 and 255');
    }

    this.rawValue = rawValue;
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

export default class HexPreview extends Component<Signature> {
  get bytePreviews(): BytePreview[] {
    const bytePreviews: BytePreview[] = [];

    for (const byte of this.args.data) {
      bytePreviews.push(new BytePreview(byte));
    }

    return bytePreviews;
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    HexPreview: typeof HexPreview;
  }
}
