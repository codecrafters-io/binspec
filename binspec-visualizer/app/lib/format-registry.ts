import type { DataSegment } from './data-segment';
import SampleKafkaRequest from './sample-kafka-request';
import SampleSQLiteDatabase from './sample-sqlite-database';

export interface Format {
  name: string;
  slug: string;
  data: Uint8Array;
  segments: DataSegment[];
}

export default class FormatRegistry {
  static getBySlug(slug: string): Format | undefined {
    return this.formats.find((format) => format.slug === slug);
  }

  static get formats(): Format[] {
    return [
      {
        name: 'SQLite Database File',
        slug: 'sqlite',
        data: SampleSQLiteDatabase.data,
        segments: SampleSQLiteDatabase.segments,
      },
      {
        name: 'Kafka APIVersions Request (v4)',
        slug: 'kafka-api-versions-request-v4',
        data: SampleKafkaRequest.data,
        segments: SampleKafkaRequest.segments,
      },
    ];
  }
}
