import { DataSegment } from 'binspec-visualizer/lib/data-segment';

export default class SampleSQLiteDatabase {
  static get data(): Uint8Array {
    return new Uint8Array([
      0x53, // 'S': Magic header string
      0x51, // 'Q': Magic header string
      0x4c, // 'L': Magic header string
      0x69, // 'i': Magic header string
      0x74, // 't': Magic header string
      0x65, // 'e': Magic header string
      0x20, // ' ': Magic header string
      0x66, // 'f': Magic header string
      0x6f, // 'o': Magic header string
      0x72, // 'r': Magic header string
      0x6d, // 'm': Magic header string
      0x61, // 'a': Magic header string
      0x74, // 't': Magic header string
      0x20, // ' ': Magic header string
      0x33, // '3': Magic header string
      0x00, // Null terminator for the string
      0x00, // Page size (2 bytes): 0x0000 = 65536 bytes
      0x10,
      0x01, // File format write version
      0x01, // File format read version
      0x00, // Unused byte at offset 18
      0x40, // Maximum embedded payload fraction (64)
      0x20, // Minimum embedded payload fraction (32)
      0x20, // Leaf payload fraction (32)
      0x00, // File change counter (4 bytes)
      0x00,
      0x00,
      0x01,
      0x00, // Size of the database file in pages (4 bytes)
      0x00,
      0x00,
      0x01,
      0x00, // Page number of the first freelist trunk page (4 bytes)
      0x00,
      0x00,
      0x00,
      0x00, // Total number of freelist pages (4 bytes)
      0x00,
      0x00,
      0x00,
      0x00, // Schema cookie (4 bytes)
      0x00,
      0x00,
      0x00,
      0x04, // Schema format number (4 means SQLite version 4 or greater)
      0x00,
      0x00,
      0x00,
      0x00, // Default page cache size (4 bytes)
      0x00,
      0x00,
      0x00,
      0x00, // Largest root b-tree page number (4 bytes)
      0x00,
      0x00,
      0x00,
      0x00, // Database text encoding (1 = UTF-8, 2 = UTF-16le, 3 = UTF-16be)
      0x01,
      0x00, // User version (4 bytes)
      0x00,
      0x00,
      0x00,
      0x00, // Incremental-vacuum mode (4 bytes)
      0x00,
      0x00,
      0x00,
      0x00, // Application ID (4 bytes)
      0x00,
      0x00,
      0x00,
      0x00, // Reserved for expansion (20 bytes)
    ]);
  }

  static get segments(): DataSegment[] {
    return [
      new DataSegment({
        startBitIndex: 0,
        endBitIndex: this.data.length * 8 - 1, // 100 bytes
        children: [
          new DataSegment({
            startBitIndex: 0,
            endBitIndex: 16 * 8 - 1, // 16 bytes
            children: [],
            title: 'Header string',
            explanationMarkdown:
              'The header string is the first part of the database file header. It contains the string "SQLite format 3" (encoded as UTF-8) followed by a null byte (`0x00`).',
          }),
          new DataSegment({
            startBitIndex: 16 * 8, // 16th byte
            endBitIndex: 18 * 8 - 1, // (2 bytes)
            children: [],
            title: 'Page size',
            explanationMarkdown:
              'The page size is a 2-byte integer that specifies the size of each page in the database. This value must be a power of 2 and must be between 512 and 32768 inclusive. If the value is 1, then the page size is 65536 bytes.',
          }),
          new DataSegment({
            startBitIndex: 18 * 8, // 18th byte
            endBitIndex: 20 * 8 - 1, // (2 bytes)
            children: [
              new DataSegment({
                startBitIndex: 18 * 8, // 18th byte
                endBitIndex: 19 * 8 - 1, // (1 byte)
                children: [],
                title: 'File format write version',
                explanationMarkdown:
                  'The file format write version is intended to allow for enhancements of the file format in future versions of SQLite. In current versions of SQLite, this value is 1 for rollback journalling modes and 2 for WAL journalling mode.',
              }),
              new DataSegment({
                startBitIndex: 19 * 8, // 19th byte
                endBitIndex: 20 * 8 - 1, // (1 byte)
                children: [],
                title: 'File format read version',
                explanationMarkdown:
                  'The file format read version is intended to allow for enhancements of the file format in future versions of SQLite. In current versions of SQLite, this value is 1 for rollback journalling modes and 2 for WAL journalling mode.',
              }),
            ],
            title: 'File format versions',
            explanationMarkdown:
              'The file format versions allow for enhancements of the file format in future versions of SQLite. If a version of SQLite coded to the current file format specification encounters a database file where the read version is 1 or 2 but the write version is greater than 2, then the database file must be treated as read-only. If a database file with a read version greater than 2 is encountered, then that database cannot be read or written.',
          }),
          new DataSegment({
            startBitIndex: 20 * 8, // 20th byte
            endBitIndex: 21 * 8 - 1, // (1 byte)
            children: [],
            title: 'Reserved space size',
            explanationMarkdown:
              'This is a 1-byte integer that specifies the size of the reserved space at the end of this page. The reserved space is used by certain extensions.',
          }),
          new DataSegment({
            startBitIndex: 21 * 8, // 21st byte
            endBitIndex: 24 * 8 - 1, // (3 bytes)
            children: [
              new DataSegment({
                startBitIndex: 21 * 8, // 21st byte
                endBitIndex: 22 * 8 - 1, // (1 byte)
                children: [],
                title: 'Maximum embedded payload fraction',
                explanationMarkdown:
                  'This value must be 64. It was initially intended to be a tunable parameter that could be used to modify the storage format of the b-tree algorithm. However, that functionality is currently not supported, so this value is always fixed.',
              }),
              new DataSegment({
                startBitIndex: 22 * 8, // 22nd byte
                endBitIndex: 23 * 8 - 1, // (1 byte)
                children: [],
                title: 'Minimum embedded payload fraction',
                explanationMarkdown:
                  'This value must be 32. It was initially intended to be a tunable parameter that could be used to modify the storage format of the b-tree algorithm. However, that functionality is currently not supported, so this value is always fixed.',
              }),
              new DataSegment({
                startBitIndex: 23 * 8, // 23rd byte
                endBitIndex: 24 * 8 - 1, // (1 byte)
                children: [],
                title: 'Leaf payload fraction',
                explanationMarkdown:
                  'This value must be 32. It was initially intended to be a tunable parameter that could be used to modify the storage format of the b-tree algorithm. However, that functionality is currently not supported, so this value is always fixed.',
              }),
            ],
            title: 'Payload fractions',
            explanationMarkdown:
              'These values were originally intended to be tunable parameters that could be used to modify the storage format of the b-tree algorithm. However, that functionality is currently not supported, so these values are always fixed.',
          }),
        ],
        title: 'Database file header',
        explanationMarkdown:
          'The database file header is the first part of the SQLite database file. It is 100 bytes long and contains metadata about the database, such as the page size.',
      }),
    ];
  }
}
