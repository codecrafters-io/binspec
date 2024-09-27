import { DataSegment } from 'binspec-visualizer/lib/data-segment';

export default class SampleKafkaRequest {
  static get data(): Uint8Array {
    return new Uint8Array([
      // Message length (4 bytes, 0x23 in hex, 35 in decimal)
      0x00,
      0x00,
      0x00,
      0x23,
      // Request Header v2 (confirm w/ Ryan why this isn't v1!)
      0x00, // API key (2 bytes, 0x12 in hex, 18 in decimal => GetAPIVersions)
      0x12,
      0x00, // API version (2 bytes, 0x04 in hex, 4 in decimal)
      0x04,
      0x00, // Correlation ID (4 bytes, 0x07 in hex, 7 in decimal)
      0x00,
      0x00,
      0x07,
      0x00, // Client ID length (INT16, 2 bytes, 0x09 in hex, 9 in decimal)
      0x09,
      0x6b, // Client ID (variable length, "kafka-cli" in UTF-8)
      0x61, // | a
      0x66, // | f
      0x6b, // | k
      0x61, // | a
      0x2d, // | -
      0x63, // | c
      0x6c, // | l
      0x69, // | i
      // Body
      0x00, // Empty tagged field array (1 byte, 0x00 in hex, 0 in decimal)
      0x0a, // Client ID (Compact string) length (INT16, 2 bytes, 0x0a in hex, 10 in decimal)
      0x6b, // | k
      0x61, // | a
      0x66, // | f
      0x6b, // | k
      0x61, // | a
      0x2d, // | -
      0x63, // | c
      0x6c, // | l
      0x69, // | i
      0x04, // Client software version (compact string) length (INT16, 2 bytes, 0x04 in hex, 4 in decimal)
      0x30, // | 0
      0x2e, // | .
      0x31, // | 1
      0x00, // Empty tagged field array (1 byte, 0x00 in hex, 0 in decimal)
    ]);
  }

  static get segments(): DataSegment[] {
    return [
      // Message Length
      new DataSegment({
        startBitIndex: 0,
        endBitIndex: 31,
        title: 'Message Size',
        explanationMarkdown: `
Message Size is a 4-byte big-endian integer indicating the size of the rest of the message. All Kafka requests and responses start with this field.

In this case, the value is 0x23 (35 in decimal) indicating that the rest of the message is 35 bytes long.
        `,
      }),
      // Request Header v2
      new DataSegment({
        startBitIndex: 4 * 8,
        endBitIndex: 191,
        title: 'Request Header (v2)',
        explanationMarkdown:
          'The Request Header structure is common across all Kafka requests. It contains information on the API Key this request is for, the version of that API, and more.',
        children: [
          // API Key
          new DataSegment({
            startBitIndex: 32,
            endBitIndex: 47,
            title: 'API Key',
            explanationMarkdown:
              'The API key is a 2-byte integer that identifies the API Key that this request is for.\n\nHere it is 0x12 (18), which corresponds to GetAPIVersions.',
          }),
          // API Version
          new DataSegment({
            startBitIndex: 48,
            endBitIndex: 63,
            title: 'API Version',
            explanationMarkdown:
              'The API version is a 2-byte integer indicating the version of the API being used.\n\n Here, it is 0x04 (4) which corresponds to v4 of the APIVersions API.',
          }),
          // Correlation ID
          new DataSegment({
            startBitIndex: 64,
            endBitIndex: 95,
            title: 'Correlation ID',
            explanationMarkdown:
              'The Correlation ID is a 4-byte integer that will be echo-ed back in the response. When multiple requests are in-flight, this ID can be used to match responses with their corresponding requests.\n\nHere, it is 0x07 (7).',
          }),
          // Client ID
          new DataSegment({
            startBitIndex: 96,
            endBitIndex: 183,
            title: 'Client ID',
            explanationMarkdown:
              'The Client ID is a string identifying the client.\n\nHere, the value is "kafka-cli".',
            children: [
              // Client ID Length
              new DataSegment({
                startBitIndex: 96,
                endBitIndex: 111,
                title: 'Length',
                explanationMarkdown:
                  'The Client ID length is a 2-byte integer indicating the length of the Client ID string. Here, it is 0x0009 (9).',
              }),
              // Client ID String
              new DataSegment({
                startBitIndex: 112,
                endBitIndex: 183,
                title: 'Contents',
                explanationMarkdown:
                  'The Client ID is a variable-length string identifying the client. In this case, it is "kafka-cli" encoded in UTF-8.',
              }),
            ],
          }),
          // Empty tagged field array
          new DataSegment({
            startBitIndex: 184,
            endBitIndex: 191,
            title: 'Tag buffer',
            explanationMarkdown:
              'An empty tagged field array, represented by a single byte of value 0x00.',
          }),
        ],
      }),
      // Body
      new DataSegment({
        startBitIndex: 192,
        endBitIndex: this.data.length * 8 - 1,
        title: 'APIVersions Request Body (v4)',
        explanationMarkdown:
          'The request body contains fields specific to the APIVersions request.',
        children: [
          // Client ID
          new DataSegment({
            startBitIndex: 192,
            endBitIndex: 271,
            title: 'Client ID',
            explanationMarkdown:
              'The Client ID in the body, represented as a compact string.',
            children: [
              // Client ID Length (Compact String)
              new DataSegment({
                startBitIndex: 192,
                endBitIndex: 199,
                title: 'Length',
                explanationMarkdown:
                  'The length of the Client ID compact string, represented as a single byte. Here, it is 0x0A (10).',
              }),
              // Client ID String
              new DataSegment({
                startBitIndex: 200,
                endBitIndex: 271,
                title: 'Contents',
                explanationMarkdown:
                  'The actual Client ID string. In this case, it is "kafka-cli" encoded in UTF-8.',
              }),
            ],
          }),
          // Client Software Version
          new DataSegment({
            startBitIndex: 272,
            endBitIndex: 303,
            title: 'Client Software Version',
            explanationMarkdown:
              'The Client Software Version, represented as a compact string.',
            children: [
              // Client Software Version Length (Compact String)
              new DataSegment({
                startBitIndex: 272,
                endBitIndex: 279,
                title: 'Length',
                explanationMarkdown:
                  'The length of the Client Software Version compact string, represented as a single byte. Here, it is 0x04 (4).',
              }),
              // Client Software Version String
              new DataSegment({
                startBitIndex: 280,
                endBitIndex: 303,
                title: 'Contents',
                explanationMarkdown:
                  'The actual Client Software Version string. In this case, it is "0.1" encoded in UTF-8.',
              }),
            ],
          }),
          // Empty tagged field array
          new DataSegment({
            startBitIndex: 304,
            endBitIndex: this.data.length * 8 - 1,
            title: 'Tag buffer',
            explanationMarkdown:
              'An empty tagged field array, represented by a single byte of value 0x00.',
          }),
        ],
      }),
    ];
  }
}
