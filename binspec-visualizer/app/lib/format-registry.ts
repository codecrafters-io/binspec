import Format from './format';
import SampleKafkaRequest from './sample-kafka-request';
// import SampleSQLiteDatabase from './sample-sqlite-database';
import generatedSQLiteDatabase from '../data/formats/generated/sqlite-database';

export default class FormatRegistry {
  static getBySlug(slug: string): Format | undefined {
    return this.formats.find((format) => format.slug === slug);
  }

  static get formats(): Format[] {
    return [
      Format.fromGeneratedData(generatedSQLiteDatabase),
      new Format(
        'Kafka APIVersions Request (v4)',
        'kafka-api-versions-request-v4',
        SampleKafkaRequest.data,
        SampleKafkaRequest.segments,
      ),
    ];
  }
}
