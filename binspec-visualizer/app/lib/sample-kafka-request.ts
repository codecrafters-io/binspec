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
        title: 'Message Length',
        explanationMarkdown:
          'The message length is a 4-byte integer indicating the size of the message, excluding the length itself.',
      }),
      // Request Header v2
      new DataSegment({
        startBitIndex: 32,
        endBitIndex: 183,
        title: 'Request Header v2',
        explanationMarkdown:
          'The Request Header v2 includes the API key, API version, correlation ID, and client ID.',
        children: [
          // API Key
          new DataSegment({
            startBitIndex: 32,
            endBitIndex: 47,
            title: 'API Key',
            explanationMarkdown:
              'The API key is a 2-byte integer that identifies the API being invoked. Here it is 0x0012 (18), which corresponds to GetAPIVersions.',
          }),
          // API Version
          new DataSegment({
            startBitIndex: 48,
            endBitIndex: 63,
            title: 'API Version',
            explanationMarkdown:
              'The API version is a 2-byte integer indicating the version of the API being used. Here, it is 0x0004 (4).',
          }),
          // Correlation ID
          new DataSegment({
            startBitIndex: 64,
            endBitIndex: 95,
            title: 'Correlation ID',
            explanationMarkdown:
              'The Correlation ID is a 4-byte integer used to correlate requests and responses between client and server. Here, it is 0x00000007 (7).',
          }),
          // Client ID
          new DataSegment({
            startBitIndex: 96,
            endBitIndex: 183,
            title: 'Client ID',
            explanationMarkdown:
              'The Client ID consists of a 2-byte length field followed by the actual Client ID string.',
            children: [
              // Client ID Length
              new DataSegment({
                startBitIndex: 96,
                endBitIndex: 111,
                title: 'Client ID Length',
                explanationMarkdown:
                  'The Client ID length is a 2-byte integer indicating the length of the Client ID string. Here, it is 0x0009 (9).',
              }),
              // Client ID String
              new DataSegment({
                startBitIndex: 112,
                endBitIndex: 183,
                title: 'Client ID String',
                explanationMarkdown:
                  'The Client ID is a variable-length string identifying the client. In this case, it is "kafka-cli" encoded in UTF-8.',
              }),
            ],
          }),
        ],
      }),
      // Body
      new DataSegment({
        startBitIndex: 184,
        endBitIndex: this.data.length * 8 - 1,
        title: 'Request Body',
        explanationMarkdown:
          'The request body contains the specific data for the request.',
        children: [
          // Empty tagged field array
          new DataSegment({
            startBitIndex: 184,
            endBitIndex: 191,
            title: 'Empty Tagged Field Array',
            explanationMarkdown:
              'An empty tagged field array, represented by a single byte of value 0x00.',
          }),
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
                title: 'Client ID Length',
                explanationMarkdown:
                  'The length of the Client ID compact string, represented as a single byte. Here, it is 0x0A (10).',
              }),
              // Client ID String
              new DataSegment({
                startBitIndex: 200,
                endBitIndex: 271,
                title: 'Client ID String',
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
                title: 'Version String',
                explanationMarkdown:
                  'The actual Client Software Version string. In this case, it is "0.1" encoded in UTF-8.',
              }),
            ],
          }),
          // Empty tagged field array
          new DataSegment({
            startBitIndex: 304,
            endBitIndex: this.data.length * 8 - 1,
            title: 'Empty Tagged Field Array',
            explanationMarkdown:
              'An empty tagged field array, represented by a single byte of value 0x00.',
          }),
        ],
      }),
    ];
  }
}
