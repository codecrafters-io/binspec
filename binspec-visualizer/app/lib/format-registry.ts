import Format from './format';
import generatedSQLiteDatabase from 'binspec-visualizer/data/formats/generated/sqlite-database';
import kafkaApiVersionsRequestV4 from 'binspec-visualizer/data/formats/generated/kafka-api-versions-request-v4';
import kafkaApiVersionsErrorResponse from 'binspec-visualizer/data/formats/generated/kafka-api-versions-response-unsupported-version';
import kafkaApiVersionsResponseV4 from 'binspec-visualizer/data/formats/generated/kafka-api-versions-response-v4';
import kafkaDescribeTopicPartitionsRequestV0 from 'binspec-visualizer/data/formats/generated/kafka-describe-topic-partitions-request-v0';
import kafkaDescribeTopicPartitionsResponseV0 from 'binspec-visualizer/data/formats/generated/kafka-describe-topic-partitions-response-v0';
import kafkaDescribeTopicPartitionsResponseV0UnknownTopic from 'binspec-visualizer/data/formats/generated/kafka-describe-topic-partitions-response-v0-unknown-topic';
import kafkaClusterMetadata from 'binspec-visualizer/data/formats/generated/kafka-cluster-metadata';
import bittorentHandshake from 'binspec-visualizer/data/formats/generated/bittorrent-handshake';

export default class FormatRegistry {
  static getBySlug(slug: string): Format | undefined {
    return this.formats.find((format) => format.slug === slug);
  }

  static get formats(): Format[] {
    const unsortedFormats = [
      Format.fromGeneratedData(generatedSQLiteDatabase),
      Format.fromGeneratedData(kafkaApiVersionsRequestV4),
      Format.fromGeneratedData(kafkaDescribeTopicPartitionsRequestV0),
      Format.fromGeneratedData(kafkaDescribeTopicPartitionsResponseV0),
      Format.fromGeneratedData(
        kafkaDescribeTopicPartitionsResponseV0UnknownTopic,
      ),
      Format.fromGeneratedData(kafkaClusterMetadata),
      Format.fromGeneratedData(bittorentHandshake),
      Format.fromGeneratedData(kafkaApiVersionsErrorResponse),
      Format.fromGeneratedData(kafkaApiVersionsResponseV4),
    ];

    return unsortedFormats.sort((a, b) => a.name.localeCompare(b.name));
  }
}
