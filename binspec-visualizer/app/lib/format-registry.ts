import Format from './format';
import generatedSQLiteDatabase from 'binspec-visualizer/data/formats/generated/sqlite-database';
import kafkaApiVersionsRequestV4 from 'binspec-visualizer/data/formats/generated/kafka-api-versions-request-v4';

export default class FormatRegistry {
  static getBySlug(slug: string): Format | undefined {
    return this.formats.find((format) => format.slug === slug);
  }

  static get formats(): Format[] {
    return [
      Format.fromGeneratedData(generatedSQLiteDatabase),
      Format.fromGeneratedData(kafkaApiVersionsRequestV4),
    ];
  }
}
