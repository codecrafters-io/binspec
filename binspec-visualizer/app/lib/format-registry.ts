import Format from './format';
import generatedSQLiteDatabase from 'binspec-visualizer/data/formats/generated/sqlite-database';
import kafkaApiVersionsRequestV4 from 'binspec-visualizer/data/formats/generated/kafka-api-versions-request-v4';
import kafkaDescribeTopicPartitionsRequestV0 from 'binspec-visualizer/data/formats/generated/kafka-describe-topic-partitions-request-v0';
import kafkaDescribeTopicPartitionsResponseV0 from 'binspec-visualizer/data/formats/generated/kafka-describe-topic-partitions-response-v0';

export default class FormatRegistry {
  static getBySlug(slug: string): Format | undefined {
    return this.formats.find((format) => format.slug === slug);
  }

  static get formats(): Format[] {
    return [
      Format.fromGeneratedData(generatedSQLiteDatabase),
      Format.fromGeneratedData(kafkaApiVersionsRequestV4),
      Format.fromGeneratedData(kafkaDescribeTopicPartitionsRequestV0),
      Format.fromGeneratedData(kafkaDescribeTopicPartitionsResponseV0),
    ];
  }
}
