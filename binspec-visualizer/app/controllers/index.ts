import Controller from '@ember/controller';
import { DataSegment } from 'binspec-visualizer/lib/data-segment';
import { DataSegmentCollection } from 'binspec-visualizer/lib/data-segment-collection';

export default class IndexController extends Controller {
  get sampleData(): Uint8Array {
    return this.sampleSQLiteHeader;
  }

  get sampleSQLiteHeader(): Uint8Array {
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

  get sampleSQLiteDataSegments(): DataSegmentCollection {
    return new DataSegmentCollection([
      new DataSegment({
        startBitIndex: 0,
        endBitIndex: 8 * 10, // 10 bytes
        children: [],
      }),
    ]);
  }
}
