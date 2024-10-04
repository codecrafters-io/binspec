// GENERATED FILE - DO NOT EDIT DIRECTLY - RUN make generate_data_from_yaml INSTEAD
import type { GeneratedData } from "binspec-visualizer/lib/format";

const generated: GeneratedData = {
  "name": "Kafka Cluster Metadata",
  "slug": "kafka-cluster-metadata",
  "data": [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    79,
    0,
    0,
    0,
    1,
    2,
    150,
    84,
    177,
    165,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    145,
    224,
    90,
    248,
    24,
    0,
    0,
    1,
    145,
    224,
    90,
    248,
    24,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    0,
    0,
    0,
    1,
    58,
    0,
    0,
    0,
    1,
    46,
    1,
    12,
    0,
    17,
    109,
    101,
    116,
    97,
    100,
    97,
    116,
    97,
    46,
    118,
    101,
    114,
    115,
    105,
    111,
    110,
    0,
    20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    228,
    0,
    0,
    0,
    1,
    2,
    235,
    96,
    42,
    157,
    0,
    0,
    0,
    0,
    0,
    2,
    0,
    0,
    1,
    145,
    224,
    91,
    45,
    21,
    0,
    0,
    1,
    145,
    224,
    91,
    45,
    21,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    0,
    0,
    0,
    3,
    60,
    0,
    0,
    0,
    1,
    48,
    1,
    2,
    0,
    4,
    115,
    97,
    122,
    0,
    0,
    0,
    0,
    0,
    0,
    64,
    0,
    128,
    0,
    0,
    0,
    0,
    0,
    0,
    145,
    0,
    144,
    1,
    0,
    0,
    2,
    1,
    130,
    1,
    1,
    3,
    1,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    64,
    0,
    128,
    0,
    0,
    0,
    0,
    0,
    0,
    145,
    2,
    0,
    0,
    0,
    1,
    2,
    0,
    0,
    0,
    1,
    1,
    1,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    2,
    16,
    0,
    0,
    0,
    0,
    0,
    64,
    0,
    128,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    144,
    1,
    0,
    0,
    4,
    1,
    130,
    1,
    1,
    3,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    64,
    0,
    128,
    0,
    0,
    0,
    0,
    0,
    0,
    145,
    2,
    0,
    0,
    0,
    1,
    2,
    0,
    0,
    0,
    1,
    1,
    1,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    2,
    16,
    0,
    0,
    0,
    0,
    0,
    64,
    0,
    128,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0
  ],
  "segments": [
    {
      "title": "Record Batch #1",
      "explanation_markdown": "A record batch is the on-disk format that Kafka uses to store multiple records.\n\nThis is the first record batch in this file. It contains 1 record starting at base offset `0`.\n",
      "children": [
        {
          "title": "Base Offset",
          "length_in_bytes": 8,
          "explanation_markdown": "Base Offset is a 8-byte big-endian integer indicating the offset of the first record in this batch.\n\nIn this case, the value is `0x00`, which is `0` in decimal, indicating that this is the first batch of records.\n"
        },
        {
          "title": "Batch Length",
          "length_in_bytes": 4,
          "explanation_markdown": "Batch Length is a 4-byte big-endian integer indicating the length of the entire record batch in bytes.\n\nThis value excludes the Base Offset (8 bytes) and the Batch Length (4 bytes) itself, but includes\nall other bytes in the record batch.\n\nIn this case, the value is `0x4f`, which is `79` in decimal.\n"
        },
        {
          "title": "Partition Leader Epoch",
          "length_in_bytes": 4,
          "explanation_markdown": "Partition Leader Epoch is a 4-byte big-endian integer indicating the epoch of the leader for this partition. It is a monotonically increasing number that is incremented by 1 whenever the partition leader changes. This allows to detect out of order writes.\n\nIn this case, the value is `0x01`, which is `1` in decimal.\n"
        },
        {
          "title": "Magic Byte",
          "length_in_bytes": 1,
          "explanation_markdown": "Magic Byte is a 1-byte big-endian integer indicating the version of the record batch format. It allows Kafka to support multiple message format versions simultaneously.\n\nIn this case, the value is `0x02`, which is `2` in decimal.\n"
        },
        {
          "title": "CRC",
          "length_in_bytes": 4,
          "explanation_markdown": "CRC is a 4-byte big-endian integer indicating the CRC32 checksum of the record batch.\nThe CRC covers the data from the attributes to the end of the record batch. The CRC-32C (Castagnoli) polynomial is used for the computation.\n\nIn this case, the value is `0x9654b1a5`, which is `-1772834395` in decimal.\n"
        },
        {
          "title": "Attributes",
          "length_in_bytes": 2,
          "explanation_markdown": "Attributes is a 2-byte big-endian integer indicating the attributes of the record batch.\nAttributes is a bitmask of the following flags:\n    bit 0~2:\n        0: no compression\n        1: gzip\n        2: snappy\n        3: lz4\n        4: zstd\n    bit 3: timestampType\n    bit 4: isTransactional (0 means not transactional)\n    bit 5: isControlBatch (0 means not a control batch)\n    bit 6: hasDeleteHorizonMs (0 means baseTimestamp is not set as the delete horizon for compaction)\n    bit 7~15: unused\n\nIn this case, the value is `0x00`, which is `0` in decimal.\n"
        },
        {
          "title": "Last Offset Delta",
          "length_in_bytes": 4,
          "explanation_markdown": "Last Offset Delta is a 4-byte big-endian integer indicating the difference between the last offset of this record batch and the base offset.\n\nIn this case, the value is `0x00`, which is `0` in decimal, indicating that the last offset of this record batch is `0` higher than the base offset, so there is 1 record in the recordBatch.\n"
        },
        {
          "title": "Base Timestamp",
          "length_in_bytes": 8,
          "explanation_markdown": "Base Timestamp is a 8-byte big-endian integer indicating the timestamp of the first record in this batch.\n\nIn this case, the value is `0x191e05af818`, which is `1726045943832` in decimal.\nThis is an unix timestamp in milliseconds, which is `2024-09-11 09:12:23.832` in UTC.\n"
        },
        {
          "title": "Max Timestamp (8 bytes, 0x191e05af818 in hex, 1726045943832 in decimal)",
          "length_in_bytes": 8,
          "explanation_markdown": "Max Timestamp is a 8-byte big-endian integer indicating the maximum timestamp of the records in this batch.\n\nIn this case, the value is `0x191e05af818`, which is `1726045943832` in decimal.\nThis is an unix timestamp in milliseconds, which is `2024-09-11 09:12:23.832` in UTC.\n"
        },
        {
          "title": "Producer ID",
          "length_in_bytes": 8,
          "explanation_markdown": "Producer ID is a 8-byte big-endian integer indicating the ID of the producer that produced the records in this batch.\n\nIn this case, the value is `0xffffffffffffffff`, which is `-1` in decimal.\nThis is a special value that indicates that the producer ID is not set.\n"
        },
        {
          "title": "Producer Epoch",
          "length_in_bytes": 2,
          "explanation_markdown": "Producer Epoch is a 2-byte big-endian integer indicating the epoch of the producer that produced the records in this batch.\n\nIn this case, the value is `0xffff`, which is `-1` in decimal.\nThis is a special value that indicates that the producer epoch is not applicable.\n"
        },
        {
          "title": "Base Sequence",
          "length_in_bytes": 4,
          "explanation_markdown": "Base Sequence is a 4-byte big-endian integer indicating the sequence number of the first record in a batch. It is used to ensure the correct ordering and deduplication of messages produced by a Kafka producer.\n\nIn this case, the value is `0xffffffff`, which is `-1` in decimal.\n"
        },
        {
          "title": "Records Length",
          "length_in_bytes": 4,
          "explanation_markdown": "Records Length is a 4-byte big-endian integer indicating the number of records in this batch.\n\nIn this case, the value is `0x01`, which is `1` in decimal, indicating that there is 1 record in the recordBatch.\n"
        },
        {
          "title": "Record #1",
          "explanation_markdown": "A record is the on-disk format that Kafka uses to store a single record.\n",
          "children": [
            {
              "title": "Length",
              "length_in_bytes": 1,
              "explanation_markdown": "Length is a signed variable size integer indicating the length of the record, the length is calculated from the attributes field to the end of the record.\n\nIn this case, the value is `0x3a`, which is `29` in decimal after parsing.\n"
            },
            {
              "title": "Attributes",
              "length_in_bytes": 1,
              "explanation_markdown": "Attributes is a 1-byte big-endian integer indicating the attributes of the record.\nCurrently, this field is unused in the protocol.\n\nIn this case, the value is `0x00`, which is `0` in decimal after parsing.\n"
            },
            {
              "title": "Timestamp Delta",
              "length_in_bytes": 1,
              "explanation_markdown": "Timestamp Delta is a signed variable size integer indicating the difference between the timestamp of the record and the base timestamp of the record batch.\n\nIn this case, the value is `0x00`, which is `0` in decimal after parsing.\n"
            },
            {
              "title": "Offset Delta",
              "length_in_bytes": 1,
              "explanation_markdown": "Offset Delta is a signed variable size integer indicating the difference between the offset of the record and the base offset of the record batch.\n\nIn this case, the value is `0x00`, which is `0` in decimal after parsing.\n"
            },
            {
              "title": "Key Length",
              "length_in_bytes": 1,
              "explanation_markdown": "Key Length is a signed variable size integer indicating the length of the key of the record.\n\nIn this case, the value is `0x01`, which is `-1` in decimal after parsing.\nThis is a special value that indicates that the key is null.\n"
            },
            {
              "title": "Key",
              "length_in_bytes": 0,
              "explanation_markdown": "Key is a byte array indicating the key of the record.\n\nIn this case, the key is null.\n"
            },
            {
              "title": "Value Length",
              "length_in_bytes": 1,
              "explanation_markdown": "Value Length is a signed variable size integer indicating the length of the value of the record.\n\nIn this case, the value is `0x2e`, which is `23` in decimal after parsing.\n"
            },
            {
              "title": "Value (Feature Level Record)",
              "length_in_bytes": 23,
              "explanation_markdown": "Value is a byte array indicating the value of the record.\n\nIn this case, the value is the payload of the Feature level record type.\n",
              "children": [
                {
                  "title": "Frame Version",
                  "length_in_bytes": 1,
                  "explanation_markdown": "Frame Version is a 1-byte big-endian integer indicating the version of the format of the record.\n\nIn this case, the value is `0x01`, which is `1` in decimal.\n"
                },
                {
                  "title": "Type",
                  "length_in_bytes": 1,
                  "explanation_markdown": "Type is a 1-byte big-endian integer indicating the type of the record.\n\nIn this case, the value is `0x0c`, which is `12` in decimal, indicating that this is a Feature Level Record.\n"
                },
                {
                  "title": "Version",
                  "length_in_bytes": 1,
                  "explanation_markdown": "Version is a 1-byte big-endian integer indicating the version of the feature level record.\n\nIn this case, the value is `0x01`, which is `1` in decimal.\n"
                },
                {
                  "title": "Name length",
                  "length_in_bytes": 1,
                  "explanation_markdown": "Name length is a unsigned variable size integer indicating the length of the name. But, as name is a compact string, the length of the name is always length - 1.\n\nIn this case, the value is `0x11`, which is `17` in decimal, indicating that the length of the name is `16`.\n"
                },
                {
                  "title": "Name",
                  "length_in_bytes": 16,
                  "explanation_markdown": "Name is a byte array parsed as a string indicating the name of the feature level record.\n\nIn this case, after parsing `0x6d657461646174612e76657273696f6e` as a string, we get the value as `metadata.version`.\n"
                },
                {
                  "title": "Feature Level",
                  "length_in_bytes": 2,
                  "explanation_markdown": "Feature Level is a 2-byte big-endian integer indicating the level of the feature.\n\nIn this case, the value is `0x14`, which is `20` in decimal.\nIndicating that, the `metadata.version` is at level `20`.\n"
                },
                {
                  "title": "Tagged Fields Count",
                  "length_in_bytes": 1,
                  "explanation_markdown": "Tagged Fields is an unsigned variable size integer indicating the number of tagged fields.\n\nIn this case, the value is `0x00`, which is `0` in decimal.\nSo, we can skip parsing the tagged fields.\n"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "title": "Record Batch #2",
      "explanation_markdown": "A record batch is the on-disk format that Kafka uses to store multiple records.\n\nIn this case, the record batch contains 3 records starting at base offset `1`.\n",
      "children": [
        {
          "title": "Base Offset",
          "length_in_bytes": 8,
          "explanation_markdown": "Base Offset is a 8-byte big-endian integer indicating the offset of the first record in this batch.\n\nIn this case, the value is `0x01`, which is `1` in decimal, indicating that this is the second batch of records.\n"
        },
        {
          "title": "Batch Length",
          "length_in_bytes": 4,
          "explanation_markdown": "Batch Length is a 4-byte big-endian integer indicating the length of the entire record batch in bytes.\n\nThis value excludes the Base Offset (8 bytes) and the Batch Length (4 bytes) itself, but includes\nall other bytes in the record batch.\n\nIn this case, the value is `0xe4`, which is `228` in decimal.\n"
        },
        {
          "title": "Partition Leader Epoch",
          "length_in_bytes": 4,
          "explanation_markdown": "Partition Leader Epoch is a 4-byte big-endian integer indicating the epoch of the leader for this partition. It is a monotonically increasing number that is incremented by 1 whenever the partition leader changes. This allows to detect out of order writes.\n\nIn this case, the value is `0x01`, which is `1` in decimal.\n"
        },
        {
          "title": "Magic Byte",
          "length_in_bytes": 1,
          "explanation_markdown": "Magic Byte is a 1-byte big-endian integer indicating the version of the record batch format. It allows Kafka to support multiple message format versions simultaneously.\n\nIn this case, the value is `0x02`, which is `2` in decimal.\n"
        },
        {
          "title": "CRC",
          "length_in_bytes": 4,
          "explanation_markdown": "CRC is a 4-byte big-endian integer indicating the CRC32 checksum of the record batch.\nThe CRC covers the data from the attributes to the end of the record batch. The CRC-32C (Castagnoli) polynomial is used for the computation.\n\nIn this case, the value is `0xeb602a9d`, which is `-346019171` in decimal.\n"
        },
        {
          "title": "Attributes",
          "length_in_bytes": 2,
          "explanation_markdown": "Attributes is a 2-byte big-endian integer indicating the attributes of the record batch.\nAttributes is a bitmask of the following flags:\n    bit 0~2:\n        0: no compression\n        1: gzip\n        2: snappy\n        3: lz4\n        4: zstd\n    bit 3: timestampType\n    bit 4: isTransactional (0 means not transactional)\n    bit 5: isControlBatch (0 means not a control batch)\n    bit 6: hasDeleteHorizonMs (0 means baseTimestamp is not set as the delete horizon for compaction)\n    bit 7~15: unused\n\nIn this case, the value is `0x00`, which is `0` in decimal.\n"
        },
        {
          "title": "Last Offset Delta",
          "length_in_bytes": 4,
          "explanation_markdown": "Last Offset Delta is a 4-byte big-endian integer indicating the difference between the last offset of this record batch and the base offset.\n\nIn this case, the value is `0x02`, which is `2` in decimal, indicating that the last offset of this record batch is `2` higher than the base offset, so there are 3 records in the recordBatch.\n"
        },
        {
          "title": "Base Timestamp",
          "length_in_bytes": 8,
          "explanation_markdown": "Base Timestamp is a 8-byte big-endian integer indicating the timestamp of the first record in this batch.\n\nIn this case, the value is `0x191e05b2d15`, which is `1726045957397` in decimal.\nThis is an unix timestamp in milliseconds, which is `2024-09-11 09:12:37.397` in UTC.\n"
        },
        {
          "title": "Max Timestamp",
          "length_in_bytes": 8,
          "explanation_markdown": "Max Timestamp is a 8-byte big-endian integer indicating the maximum timestamp of the records in this batch.\n\nIn this case, the value is `0x191e05b2d15`, which is `1726045957397` in decimal.\nThis is an unix timestamp in milliseconds, which is `2024-09-11 09:12:37.397` in UTC.\n"
        },
        {
          "title": "Producer ID",
          "length_in_bytes": 8,
          "explanation_markdown": "Producer ID is a 8-byte big-endian integer indicating the ID of the producer that produced the records in this batch.\n\nIn this case, the value is `0xffffffffffffffff`, which is `-1` in decimal.\nThis is a special value that indicates that the producer ID is not set.\n"
        },
        {
          "title": "Producer Epoch",
          "length_in_bytes": 2,
          "explanation_markdown": "Producer Epoch is a 2-byte big-endian integer indicating the epoch of the producer that produced the records in this batch.\n\nIn this case, the value is `0xffff`, which is `-1` in decimal.\nThis is a special value that indicates that the producer epoch is not applicable.\n"
        },
        {
          "title": "Base Sequence",
          "length_in_bytes": 4,
          "explanation_markdown": "Base Sequence is a 4-byte big-endian integer indicating the sequence number of the first record in a batch. It is used to ensure the correct ordering and deduplication of messages produced by a Kafka producer.\n\nIn this case, the value is `0xffffffff`, which is `-1` in decimal.\n"
        },
        {
          "title": "Records Length",
          "length_in_bytes": 4,
          "explanation_markdown": "Records Length is a 4-byte big-endian integer indicating the number of records in this batch.\n\nIn this case, the value is `0x03`, which is `3` in decimal, indicating that there are 3 records in the recordBatch.\n"
        },
        {
          "title": "Record #1",
          "explanation_markdown": "A record is the on-disk format that Kafka uses to store a single record.\n",
          "children": [
            {
              "title": "Length",
              "length_in_bytes": 1,
              "explanation_markdown": "Length is a signed variable size integer indicating the length of the record, the length is calculated from the attributes field to the end of the record.\n\nIn this case, the value is `0x3c`, which is `30` in decimal after parsing.\n"
            },
            {
              "title": "Attributes",
              "length_in_bytes": 1,
              "explanation_markdown": "Attributes is a 1-byte big-endian integer indicating the attributes of the record.\nCurrently, this field is unused in the protocol.\n\nIn this case, the value is `0x00`, which is `0` in decimal after parsing.\n"
            },
            {
              "title": "Timestamp Delta",
              "length_in_bytes": 1,
              "explanation_markdown": "Timestamp Delta is a signed variable size integer indicating the difference between the timestamp of the record and the base timestamp of the record batch.\n\nIn this case, the value is `0x00`, which is `0` in decimal after parsing.\n"
            },
            {
              "title": "Offset Delta",
              "length_in_bytes": 1,
              "explanation_markdown": "Offset Delta is a signed variable size integer indicating the difference between the offset of the record and the base offset of the record batch.\n\nIn this case, the value is `0x00`, which is `0` in decimal after parsing.\n"
            },
            {
              "title": "Key Length",
              "length_in_bytes": 1,
              "explanation_markdown": "Key Length is a signed variable size integer indicating the length of the key of the record.\n\nIn this case, the value is `0x01`, which is `-1` in decimal after parsing.\nThis is a special value that indicates that the key is null.\n"
            },
            {
              "title": "Key",
              "length_in_bytes": 0,
              "explanation_markdown": "Key is a byte array indicating the key of the record.\n\nIn this case, the key is null.\n"
            },
            {
              "title": "Value Length",
              "length_in_bytes": 1,
              "explanation_markdown": "Value Length is a signed variable size integer indicating the length of the value of the record.\n\nIn this case, the value is `0x30`, which is `24` in decimal after parsing.\n"
            },
            {
              "title": "Value (Feature Level Record)",
              "length_in_bytes": 24,
              "explanation_markdown": "Value is a byte array indicating the value of the record.\n\nIn this case, the value is the payload of the Topic Record type.\n",
              "children": [
                {
                  "title": "Frame Version",
                  "length_in_bytes": 1,
                  "explanation_markdown": "Frame Version is a 1-byte big-endian integer indicating the version of the format of the record.\n\nIn this case, the value is `0x01`, which is `1` in decimal.\n"
                },
                {
                  "title": "Type",
                  "length_in_bytes": 1,
                  "explanation_markdown": "Type is a 1-byte big-endian integer indicating the type of the record.\n\nIn this case, the value is `0x02`, which is `2` in decimal, indicating that this is a Topic Record.\n"
                },
                {
                  "title": "Version",
                  "length_in_bytes": 1,
                  "explanation_markdown": "Version is a 1-byte big-endian integer indicating the version of the feature level record.\n\nIn this case, the value is `0x00`, which is `0` in decimal.\n"
                },
                {
                  "title": "Name length",
                  "length_in_bytes": 1,
                  "explanation_markdown": "Name length is a unsigned variable size integer indicating the length of the name. But, as name is a compact string, the length of the name is always length - 1.\n\nIn this case, the value is `0x04`, which is `4` in decimal, indicating that the length of the name is `3`.\n"
                },
                {
                  "title": "Topic Name",
                  "length_in_bytes": 3,
                  "explanation_markdown": "Name is a byte array parsed as a string indicating the name of the feature level record.\n\nIn this case, after parsing `0x73617a` as a string, we get the value as `saz`.\n"
                },
                {
                  "title": "Topic UUID",
                  "length_in_bytes": 16,
                  "explanation_markdown": "Topic UUID is a 16-byte raw byte array indicating the UUID of the topic.\n\nIn this case, the value is `0x00-0000-4000-8000-000000000091`, which needs to be parsed as a UUID.\n"
                },
                {
                  "title": "Tagged Fields Count",
                  "length_in_bytes": 1,
                  "explanation_markdown": "Tagged Fields is an unsigned variable size integer indicating the number of tagged fields.\n\nIn this case, the value is `0x00`, which is `0` in decimal.\nSo, we can skip parsing the tagged fields.\n"
                }
              ]
            }
          ]
        },
        {
          "title": "Record #2",
          "explanation_markdown": "A record is the on-disk format that Kafka uses to store a single record.\n",
          "children": [
            {
              "title": "Length",
              "length_in_bytes": 2,
              "explanation_markdown": "Length is a signed variable size integer indicating the length of the record, the length is calculated from the attributes field to the end of the record.\n\nIn this case, the value is `0x9001`, which is `72` in decimal after parsing.\n"
            },
            {
              "title": "Attributes",
              "length_in_bytes": 1,
              "explanation_markdown": "Attributes is a 1-byte big-endian integer indicating the attributes of the record.\nCurrently, this field is unused in the protocol.\n\nIn this case, the value is `0x00`, which is `0` in decimal after parsing.\n"
            },
            {
              "title": "Timestamp Delta",
              "length_in_bytes": 1,
              "explanation_markdown": "Timestamp Delta is a signed variable size integer indicating the difference between the timestamp of the record and the base timestamp of the record batch.\n\nIn this case, the value is `0x00`, which is `0` in decimal after parsing.\n"
            },
            {
              "title": "Offset Delta",
              "length_in_bytes": 1,
              "explanation_markdown": "Offset Delta is a signed variable size integer indicating the difference between the offset of the record and the base offset of the record batch.\n\nIn this case, the value is `0x02`, which is `1` in decimal after parsing.\n"
            },
            {
              "title": "Key Length",
              "length_in_bytes": 1,
              "explanation_markdown": "Key Length is a signed variable size integer indicating the length of the key of the record.\n\nIn this case, the value is `0x01`, which is `-1` in decimal after parsing.\nThis is a special value that indicates that the key is null.\n"
            },
            {
              "title": "Key",
              "length_in_bytes": 0,
              "explanation_markdown": "Key is a byte array indicating the key of the record.\n\nIn this case, the key is null.\n"
            },
            {
              "title": "Value Length",
              "length_in_bytes": 2,
              "explanation_markdown": "Value Length is a signed variable size integer indicating the length of the value of the record.\n\nIn this case, the value is `0x8201`, which is `65` in decimal after parsing.\n"
            },
            {
              "title": "Value (Partition Record)",
              "length_in_bytes": 65,
              "explanation_markdown": "Value is a byte array indicating the value of the record.\n\nIn this case, the value is the payload of the Partition Record type.\n",
              "children": [
                {
                  "title": "Frame Version",
                  "length_in_bytes": 1,
                  "explanation_markdown": "Frame Version is a 1-byte big-endian integer indicating the version of the format of the record.\n\nIn this case, the value is `0x01`, which is `1` in decimal.\n"
                },
                {
                  "title": "Type",
                  "length_in_bytes": 1,
                  "explanation_markdown": "Type is a 1-byte big-endian integer indicating the type of the record.\n\nIn this case, the value is `0x03`, which is `3` in decimal, indicating that this is a Partition Record.\n"
                },
                {
                  "title": "Version",
                  "length_in_bytes": 1,
                  "explanation_markdown": "Version is a 1-byte big-endian integer indicating the version of the feature level record.\n\nIn this case, the value is `0x01`, which is `1` in decimal.\n"
                },
                {
                  "title": "Partition ID",
                  "length_in_bytes": 4,
                  "explanation_markdown": "Partition ID is a 4-byte big-endian integer indicating the ID of the partition.\n\nIn this case, the value is `0x01`, which is `1` in decimal. Indicating that this Partition record is for partition `1`.\n"
                },
                {
                  "title": "Topic UUID",
                  "length_in_bytes": 16,
                  "explanation_markdown": "Topic UUID is a 16-byte raw byte array indicating the UUID of the topic.\n\nIn this case, the value is `0x00-0000-4000-8000-000000000091`, which needs to be parsed as a UUID.\n"
                },
                {
                  "title": "Length of replica array",
                  "length_in_bytes": 1,
                  "explanation_markdown": "Length of replica array is an unsigned variable size integer indicating the number of replicas in the replica array.\n\nIn this case, the value is `0x02`, which is `2` in decimal. As the replica array is a compact array, the length of the replica array is length - 1, which means its length is `1`.\n"
                },
                {
                  "title": "Replica Array",
                  "length_in_bytes": 4,
                  "explanation_markdown": "Replica Array is a compact array of 4-byte big-endian integers, containing the replica ID of the replicas.\n\nIn this case, the value is `0x01`, which is `1` in decimal.\nIndicating that the replica ID of the first entry in the replicas array is `1`.\n"
                },
                {
                  "title": "Length of In Sync Replica array",
                  "length_in_bytes": 1,
                  "explanation_markdown": "Length of In Sync Replica array is an unsigned variable size integer indicating the number of replicas in the In Sync Replica array.\n\nIn this case, the value is `0x02`, which is `2` in decimal. As the in sync replica array is a compact array, the length of the actual array is length - 1, which means its length is `1`.\n"
                },
                {
                  "title": "In Sync Replica Array",
                  "length_in_bytes": 4,
                  "explanation_markdown": "In Sync Replica Array is a compact array of 4-byte big-endian integers, containing the replica ID of the in sync replicas.\n\nIn this case, the value is `0x01`, which is `1` in decimal.\nIndicating that the replica ID of the first entry in the in sync replicas array is `1`.\n"
                },
                {
                  "title": "Length of Removing Replicas array",
                  "length_in_bytes": 1,
                  "explanation_markdown": "Length of Removing Replicas array is an unsigned variable size integer indicating the number of replicas in the Removing Replicas array.\n\nIn this case, the value is `0x01`, which is `1` in decimal. As the removing replicas array is a compact array, the length of the actual array is length - 1, which means its length is `0`.\n"
                },
                {
                  "title": "Length of Adding Replicas array",
                  "length_in_bytes": 1,
                  "explanation_markdown": "Length of Adding Replicas array is an unsigned variable size integer indicating the number of replicas in the Adding Replicas array.\n\nIn this case, the value is `0x01`, which is `1` in decimal. As the adding replicas array is a compact array, the length of the actual array is length - 1, which means its length is `0`.\n"
                },
                {
                  "title": "Leader",
                  "length_in_bytes": 4,
                  "explanation_markdown": "Leader is a 4-byte big-endian integer indicating the replica ID of the leader.\n\nIn this case, the value is `0x01`, which is `1` in decimal.\nIndicating that the leader is replica `1`.\n"
                },
                {
                  "title": "Leader Epoch",
                  "length_in_bytes": 4,
                  "explanation_markdown": "Leader Epoch is a 4-byte big-endian integer indicating the epoch of the leader.\n\nIn this case, the value is `0x00`, which is `0` in decimal.\n"
                },
                {
                  "title": "Partition Epoch",
                  "length_in_bytes": 4,
                  "explanation_markdown": "Partition Epoch is a 4-byte big-endian integer indicating the epoch of the partition.\n\nIn this case, the value is `0x00`, which is `0` in decimal.\n"
                },
                {
                  "title": "Length of Directories array",
                  "length_in_bytes": 1,
                  "explanation_markdown": "Length of Directories array is an unsigned variable size integer indicating the number of directories in the Directories array.\n\nIn this case, the value is `0x02`, which is `2` in decimal. As the directories array is a compact array, the length of the actual array is length - 1, which means its length is `1`.\n"
                },
                {
                  "title": "Directories Array",
                  "length_in_bytes": 16,
                  "explanation_markdown": "Directories Array is a compact array of 16-byte raw byte arrays, containing the UUID of the directories.\n\nIn this case, the value is `0x00000000-0000-4000-8000-000000000001`, which needs to be parsed as a UUID.\n"
                },
                {
                  "title": "Tagged Fields Count",
                  "length_in_bytes": 1,
                  "explanation_markdown": "Tagged Fields is an unsigned variable size integer indicating the number of tagged fields.\n\nIn this case, the value is `0x00`, which is `0` in decimal.\nSo, we can skip parsing the tagged fields.\n"
                }
              ]
            }
          ]
        },
        {
          "title": "Record #3",
          "explanation_markdown": "A record is the on-disk format that Kafka uses to store a single record.\n",
          "children": [
            {
              "title": "Length",
              "length_in_bytes": 2,
              "explanation_markdown": "Length is a signed variable size integer indicating the length of the record, the length is calculated from the attributes field to the end of the record.\n\nIn this case, the value is `0x9001`, which is `72` in decimal after parsing.\n"
            },
            {
              "title": "Attributes",
              "length_in_bytes": 1,
              "explanation_markdown": "Attributes is a 1-byte big-endian integer indicating the attributes of the record.\nCurrently, this field is unused in the protocol.\n\nIn this case, the value is `0x00`, which is `0` in decimal after parsing.\n"
            },
            {
              "title": "Timestamp Delta",
              "length_in_bytes": 1,
              "explanation_markdown": "Timestamp Delta is a signed variable size integer indicating the difference between the timestamp of the record and the base timestamp of the record batch.\n\nIn this case, the value is `0x00`, which is `0` in decimal after parsing.\n"
            },
            {
              "title": "Offset Delta",
              "length_in_bytes": 1,
              "explanation_markdown": "Offset Delta is a signed variable size integer indicating the difference between the offset of the record and the base offset of the record batch.\n\nIn this case, the value is `0x04`, which is `2` in decimal after parsing.\n"
            },
            {
              "title": "Key Length",
              "length_in_bytes": 1,
              "explanation_markdown": "Key Length is a signed variable size integer indicating the length of the key of the record.\n\nIn this case, the value is `0x01`, which is `-1` in decimal after parsing.\nThis is a special value that indicates that the key is null.\n"
            },
            {
              "title": "Key",
              "length_in_bytes": 0,
              "explanation_markdown": "Key is a byte array indicating the key of the record.\n\nIn this case, the key is null.\n"
            },
            {
              "title": "Value Length",
              "length_in_bytes": 2,
              "explanation_markdown": "Value Length is a signed variable size integer indicating the length of the value of the record.\n\nIn this case, the value is `0x8201`, which is `65` in decimal after parsing.\n"
            },
            {
              "title": "Value (Partition Record)",
              "length_in_bytes": 65,
              "explanation_markdown": "Value is a byte array indicating the value of the record.\n\nIn this case, the value is the payload of the Partition Record type.\n",
              "children": [
                {
                  "title": "Frame Version",
                  "length_in_bytes": 1,
                  "explanation_markdown": "Frame Version is a 1-byte big-endian integer indicating the version of the format of the record.\n\nIn this case, the value is `0x01`, which is `1` in decimal.\n"
                },
                {
                  "title": "Type",
                  "length_in_bytes": 1,
                  "explanation_markdown": "Type is a 1-byte big-endian integer indicating the type of the record.\n\nIn this case, the value is `0x03`, which is `3` in decimal, indicating that this is a Partition Record.\n"
                },
                {
                  "title": "Version",
                  "length_in_bytes": 1,
                  "explanation_markdown": "Version is a 1-byte big-endian integer indicating the version of the feature level record.\n\nIn this case, the value is `0x01`, which is `1` in decimal.\n"
                },
                {
                  "title": "Partition ID",
                  "length_in_bytes": 4,
                  "explanation_markdown": "Partition ID is a 4-byte big-endian integer indicating the ID of the partition.\n\nIn this case, the value is `0x00000000`, which is `0` in decimal. Indicating that this Partition record is for partition `0`.\n"
                },
                {
                  "title": "Topic UUID",
                  "length_in_bytes": 16,
                  "explanation_markdown": "Topic UUID is a 16-byte raw byte array indicating the UUID of the topic.\n\nIn this case, the value is `0x00000000-0000-4000-8000-000000000091`, which needs to be parsed as a UUID.\n"
                },
                {
                  "title": "Length of replica array",
                  "length_in_bytes": 1,
                  "explanation_markdown": "Length of replica array is an unsigned variable size integer indicating the number of replicas in the replica array.\n\nIn this case, the value is `0x02`, which is `2` in decimal. As the replica array is a compact array, the length of the replica array is length - 1, which means its length is `1`.\n"
                },
                {
                  "title": "Replica Array",
                  "length_in_bytes": 4,
                  "explanation_markdown": "Replica Array is a compact array of 4-byte big-endian integers, containing the replica ID of the replicas.\n\nIn this case, the value is `0x00000001`, which is `1` in decimal.\nIndicating that the replica ID of the first entry in the replicas array is `1`.\n"
                },
                {
                  "title": "Length of In Sync Replica array",
                  "length_in_bytes": 1,
                  "explanation_markdown": "Length of In Sync Replica array is an unsigned variable size integer indicating the number of replicas in the In Sync Replica array.\n\nIn this case, the value is `0x02`, which is `2` in decimal. As the in sync replica array is a compact array, the length of the actual array is length - 1, which means its length is `1`.\n"
                },
                {
                  "title": "In Sync Replica Array",
                  "length_in_bytes": 4,
                  "explanation_markdown": "In Sync Replica Array is a compact array of 4-byte big-endian integers, containing the replica ID of the in sync replicas.\n\nIn this case, the value is `0x00000001`, which is `1` in decimal.\nIndicating that the replica ID of the first entry in the in sync replicas array is `1`.\n"
                },
                {
                  "title": "Length of Removing Replicas array",
                  "length_in_bytes": 1,
                  "explanation_markdown": "Length of Removing Replicas array is an unsigned variable size integer indicating the number of replicas in the Removing Replicas array.\n\nIn this case, the value is `0x01`, which is `1` in decimal. As the removing replicas array is a compact array, the length of the actual array is length - 1, which means its length is `0`.\n"
                },
                {
                  "title": "Length of Adding Replicas array",
                  "length_in_bytes": 1,
                  "explanation_markdown": "Length of Adding Replicas array is an unsigned variable size integer indicating the number of replicas in the Adding Replicas array.\n\nIn this case, the value is `0x01`, which is `1` in decimal. As the adding replicas array is a compact array, the length of the actual array is length - 1, which means its length is `0`.\n"
                },
                {
                  "title": "Leader",
                  "length_in_bytes": 4,
                  "explanation_markdown": "Leader is a 4-byte big-endian integer indicating the replica ID of the leader.\n\nIn this case, the value is `0x00000001`, which is `1` in decimal.\nIndicating that the leader is replica `1`.\n"
                },
                {
                  "title": "Leader Epoch",
                  "length_in_bytes": 4,
                  "explanation_markdown": "Leader Epoch is a 4-byte big-endian integer indicating the epoch of the leader.\n\nIn this case, the value is `0x00000000`, which is `0` in decimal.\n"
                },
                {
                  "title": "Partition Epoch",
                  "length_in_bytes": 4,
                  "explanation_markdown": "Partition Epoch is a 4-byte big-endian integer indicating the epoch of the partition.\n\nIn this case, the value is `0x00000000`, which is `0` in decimal.\n"
                },
                {
                  "title": "Length of Directories array",
                  "length_in_bytes": 1,
                  "explanation_markdown": "Length of Directories array is an unsigned variable size integer indicating the number of directories in the Directories array.\n\nIn this case, the value is `0x02`, which is `2` in decimal. As the directories array is a compact array, the length of the actual array is length - 1, which means its length is `1`.\n"
                },
                {
                  "title": "Directories Array",
                  "length_in_bytes": 16,
                  "explanation_markdown": "Directories Array is a compact array of 16-byte raw byte arrays, containing the UUID of the directories.\n\nIn this case, the value is `0x10000000-0000-4000-8000-000000000001`, which needs to be parsed as a UUID.\n"
                },
                {
                  "title": "Tagged Fields Count",
                  "length_in_bytes": 1,
                  "explanation_markdown": "Tagged Fields is an unsigned variable size integer indicating the number of tagged fields.\n\nIn this case, the value is `0x00`, which is `0` in decimal.\nSo, we can skip parsing the tagged fields.\n"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

export default generated;
