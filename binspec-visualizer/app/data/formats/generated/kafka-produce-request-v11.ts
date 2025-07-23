// GENERATED FILE - DO NOT EDIT DIRECTLY - RUN make generate_data_from_yaml INSTEAD
import type { GeneratedData } from "binspec-visualizer/lib/format";

const generated: GeneratedData = {
  "name": "Kafka Produce Request (v11)",
  "slug": "kafka-produce-request-v11",
  "data": [
    0,
    0,
    0,
    112,
    0,
    0,
    0,
    11,
    0,
    0,
    0,
    7,
    0,
    9,
    107,
    97,
    102,
    107,
    97,
    45,
    99,
    108,
    105,
    0,
    1,
    0,
    1,
    0,
    0,
    0,
    0,
    2,
    4,
    102,
    111,
    111,
    2,
    0,
    0,
    0,
    0,
    72,
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
    59,
    255,
    255,
    255,
    255,
    2,
    99,
    182,
    255,
    19,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    152,
    56,
    3,
    67,
    248,
    0,
    0,
    1,
    152,
    56,
    3,
    67,
    248,
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
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    18,
    0,
    0,
    0,
    1,
    6,
    98,
    97,
    114,
    0,
    0,
    0,
    0
  ],
  "segments": [
    {
      "title": "Message Size",
      "length_in_bytes": 4,
      "explanation_markdown": "Message Size is a 4-byte big-endian integer indicating the size of the rest of the message. All Kafka requests and responses start with this field.\n\nIn this case, the value is 0x70 (112 in decimal) indicating that the rest of the message is 112 bytes long.\n"
    },
    {
      "title": "Request Header (v2)",
      "explanation_markdown": "The Request Header structure is common across all Kafka requests. It contains information on the API Key this request is for, the version of that API, and more.\n",
      "children": [
        {
          "title": "API Key",
          "length_in_bytes": 2,
          "explanation_markdown": "The API key is a 2-byte integer that identifies the API Key that this request is for.\n\nHere it is 0x00 (0), which corresponds to Produce.\n"
        },
        {
          "title": "API Version",
          "length_in_bytes": 2,
          "explanation_markdown": "The API version is a 2-byte integer indicating the version of the API being used.\n\nHere, it is 0x0b (11) which corresponds to v11 of the Produce API.\n"
        },
        {
          "title": "Correlation ID",
          "length_in_bytes": 4,
          "explanation_markdown": "The Correlation ID is a 4-byte integer that will be echo-ed back in the response. When multiple requests are in-flight, this ID can be used to match responses with their corresponding requests.\n\nHere, it is 0x07 (7).\n"
        },
        {
          "title": "Client ID",
          "explanation_markdown": "The Client ID is a string identifying the client.\n\nHere, the value is \"kafka-cli\".\n",
          "children": [
            {
              "title": "Length",
              "length_in_bytes": 2,
              "explanation_markdown": "The Client ID length is a 2-byte integer indicating the length of the Client ID string. Here, it is 0x09 (9).\n"
            },
            {
              "title": "Contents",
              "length_in_bytes": 9,
              "explanation_markdown": "The Client ID is a variable-length string identifying the client. In this case, it is \"kafka-cli\" encoded in UTF-8.\n"
            }
          ]
        },
        {
          "title": "Tag buffer",
          "length_in_bytes": 1,
          "explanation_markdown": "An empty tagged field array, represented by a single byte of value 0x00.\n"
        }
      ]
    },
    {
      "title": "Produce Request Body (v11)",
      "explanation_markdown": "The request body contains fields specific to the Produce request.\n",
      "children": [
        {
          "title": "Transactional ID",
          "length_in_bytes": 1,
          "explanation_markdown": "The Transactional ID is a nullable compact string. A value of 0x01 indicates null (no transactional ID).\n\nIn this case, the value is 0x01, indicating that the producer is not transactional.\n"
        },
        {
          "title": "Required Acks",
          "length_in_bytes": 2,
          "explanation_markdown": "The number of acknowledgments the producer requires the leader to have received before considering a request complete. Allowed values: 0 for no acknowledgments, 1 for only the leader and -1 for the full ISR.\n\nHere, it is 0x01 (1) indicating leader acknowledgment only.\n"
        },
        {
          "title": "Timeout",
          "length_in_bytes": 4,
          "explanation_markdown": "A 4-byte integer that represents the timeout to await a response in milliseconds.\n\nHere, it is 0x00 (0 in decimal), indicating no timeout.\n"
        },
        {
          "title": "Topic Data Array",
          "explanation_markdown": "An array of topics to produce to.\n\nThis array is encoded as a `COMPACT_ARRAY`, which starts with a varint corresponding to the length of the array + 1, followed by each element.\n",
          "children": [
            {
              "title": "Array Length",
              "length_in_bytes": 1,
              "explanation_markdown": "The length of the topic array + 1, encoded as a varint. Here, it is 0x02 (2), meaning that the array length is 1.\n"
            },
            {
              "title": "Topic #1",
              "explanation_markdown": "A single topic in the array.\n",
              "children": [
                {
                  "title": "Topic Name",
                  "explanation_markdown": "The topic name, represented as a compact string.\n",
                  "children": [
                    {
                      "title": "String Length",
                      "length_in_bytes": 1,
                      "explanation_markdown": "The length of the topic name compact string + 1, represented as an unsigned varint. Here, it is 0x04 (4), indicating that the length of the topic name is 3.\n"
                    },
                    {
                      "title": "String Content",
                      "length_in_bytes": 3,
                      "explanation_markdown": "The actual topic name string. In this case, it is \"foo\" encoded in UTF-8.\n"
                    }
                  ]
                },
                {
                  "title": "Partitions Array",
                  "explanation_markdown": "An array of partitions for this topic.\n",
                  "children": [
                    {
                      "title": "Array Length",
                      "length_in_bytes": 1,
                      "explanation_markdown": "The length of the partition array + 1, encoded as an unsigned varint. Here, it is 0x02 (2), meaning that the array length is 1.\n"
                    },
                    {
                      "title": "Partition",
                      "explanation_markdown": "Information about the first partition.\n",
                      "children": [
                        {
                          "title": "Partition ID",
                          "length_in_bytes": 4,
                          "explanation_markdown": "A 4-byte integer representing the partition index.\n\nHere, it is 0x00 (0), which corresponds to partition 0.\n"
                        },
                        {
                          "title": "Records Data",
                          "explanation_markdown": "The record data to be produced, containing a record batch.\n",
                          "children": [
                            {
                              "title": "Records Length",
                              "length_in_bytes": 1,
                              "explanation_markdown": "An unsigned varint representing the number of bytes of record batch data that follows. Here, 0x48 indicates 72 bytes.\n"
                            },
                            {
                              "title": "Record Batch",
                              "explanation_markdown": "A batch of records. This has the same format as the on-disk record batches.\n",
                              "children": [
                                {
                                  "title": "Base Offset",
                                  "length_in_bytes": 8,
                                  "explanation_markdown": "Base Offset is an 8-byte big-endian integer indicating the offset of the first record in this batch. For produce requests, this is usually 0.\n\nIn this case, the value is `0x00`, which is `0` in decimal.\n"
                                },
                                {
                                  "title": "Batch Length",
                                  "length_in_bytes": 4,
                                  "explanation_markdown": "Batch Length is a 4-byte big-endian integer indicating the length of the entire record batch in bytes.\n\nThis value excludes the Base Offset (8 bytes) and the Batch Length (4 bytes) itself, but includes all other bytes in the record batch.\n\nIn this case, the value is `0x3b`, which is `59` in decimal.\n"
                                },
                                {
                                  "title": "Partition Leader Epoch",
                                  "length_in_bytes": 4,
                                  "explanation_markdown": "Partition Leader Epoch is a 4-byte big-endian integer indicating the epoch of the leader for this partition. It is a monotonically increasing number that is incremented by 1 whenever the partition leader changes. This value is used to detect out of order writes.\n\nIn this case, the value is `0xffffffff`, which is `-1` in decimal, indicating that the producer is not aware of the leader epoch.\n"
                                },
                                {
                                  "title": "Magic Byte",
                                  "length_in_bytes": 1,
                                  "explanation_markdown": "Magic Byte is a 1-byte integer indicating the version of the record batch format. This value is used to evolve the record batch format in a backward-compatible way.\n\nIn this case, the value is `0x02`, which is `2` in decimal, corresponding to message format v2.\n"
                                },
                                {
                                  "title": "CRC",
                                  "length_in_bytes": 4,
                                  "explanation_markdown": "CRC is a 4-byte big-endian integer indicating the CRC32-C checksum of the record batch.\n\nThe CRC is computed over the data following the CRC field to the end of the record batch. The CRC32-C (Castagnoli) polynomial is used for the computation.\n\nIn this case, the value is `0x63b6ff13`, which is `1672937235` in decimal.\n"
                                },
                                {
                                  "title": "Attributes",
                                  "length_in_bytes": 2,
                                  "explanation_markdown": "Attributes is a 2-byte bitfield indicating the attributes of the record batch.\n\nAttributes is a bitmask of the following flags:\n\n- bit 0~2:\n    - 0: no compression\n    - 1: gzip\n    - 2: snappy\n    - 3: lz4\n    - 4: zstd\n- bit 3: timestampType\n- bit 4: isTransactional (0 means not transactional)\n- bit 5: isControlBatch (0 means not a control batch)\n- bit 6: hasDeleteHorizonMs (0 means baseTimestamp is not set as the delete horizon for compaction)\n- bit 7~15: unused\n\nIn this case, the value is `0x00`, which is `0` in decimal.\n"
                                },
                                {
                                  "title": "Last Offset Delta",
                                  "length_in_bytes": 4,
                                  "explanation_markdown": "Last Offset Delta is a 4-byte big-endian integer indicating the difference between the last offset of this record batch and the base offset.\n\nIn this case, the value is `0x00`, which is `0` in decimal, indicating that the last offset of this record batch is `0` higher than the base offset, so there is 1 record in the recordBatch.\n"
                                },
                                {
                                  "title": "Base Timestamp",
                                  "length_in_bytes": 8,
                                  "explanation_markdown": "Base Timestamp is an 8-byte big-endian integer representing the timestamp of the first record in the batch.\n\nIn this case, the value is `0x0198380343f8`, which is `1753286394872` in decimal. This is an unix timestamp in milliseconds, which is `2025-07-23 03:59:54.872` in UTC.\n"
                                },
                                {
                                  "title": "Max Timestamp",
                                  "length_in_bytes": 8,
                                  "explanation_markdown": "Max Timestamp is an 8-byte big-endian integer representing the maximum timestamp among all records in the batch.\n\nIn this case, the value is `0x0198380343f8`, which is `1753286394872` in decimal. This is an unix timestamp in milliseconds, which is `2025-07-23 03:59:54.872` in UTC.\n"
                                },
                                {
                                  "title": "Producer ID",
                                  "length_in_bytes": 8,
                                  "explanation_markdown": "Producer ID is an 8-byte big-endian integer indicating the ID of the producer that produced the records in this batch.\n\nIn this case, the value is `0x00`, which is `0` in decimal, indicating that the producer ID is not set.\n"
                                },
                                {
                                  "title": "Producer Epoch",
                                  "length_in_bytes": 2,
                                  "explanation_markdown": "Producer Epoch is a 2-byte big-endian integer indicating the epoch of the producer that produced the records in this batch.\n\nIn this case, the value is `0x00`, which is `0` in decimal, indicating that the producer epoch is not set.\n"
                                },
                                {
                                  "title": "Base Sequence",
                                  "length_in_bytes": 4,
                                  "explanation_markdown": "Base Sequence is a 4-byte big-endian integer indicating the sequence number of the first record in a batch. It is used for idempotent and transactional producers to ensure correct ordering and prevent duplicates.\n\nA value of 0 indicates the producer is not idempotent.\n"
                                },
                                {
                                  "title": "Records Count",
                                  "length_in_bytes": 4,
                                  "explanation_markdown": "A 4-byte big-endian integer indicating the number of records in the batch.\n\nIn this case, the value is `0x01`, which is `1` in decimal, indicating that there is 1 record in the recordBatch.\n"
                                },
                                {
                                  "title": "Record #1",
                                  "explanation_markdown": "A single record within the batch.\n",
                                  "children": [
                                    {
                                      "title": "Length",
                                      "length_in_bytes": 1,
                                      "explanation_markdown": "A varint representing the length of the record.\n\nIn this case, the value is `0x12`, which is `18` in decimal.\nBut the actual length is 9 bytes (using zigzag encoding, refer to: https://protobuf.dev/programming-guides/encoding/#signed-ints))\n"
                                    },
                                    {
                                      "title": "Attributes",
                                      "length_in_bytes": 1,
                                      "explanation_markdown": "Attributes is a 1-byte big-endian integer indicating the attributes of the record. Currently, this field is unused in the protocol.\n\nIn this case, the value is `0x00`, which is `0` in decimal.\n"
                                    },
                                    {
                                      "title": "Timestamp Delta",
                                      "length_in_bytes": 1,
                                      "explanation_markdown": "A varint representing the time difference between this record's timestamp and the `Base Timestamp` of the batch.\n\nIn this case, the value is `0x00`, which is `0` in decimal, meaning the timestamp is the same as the batch's `Base Timestamp`.\n"
                                    },
                                    {
                                      "title": "Offset Delta",
                                      "length_in_bytes": 1,
                                      "explanation_markdown": "Offset Delta is a signed variable size integer indicating the difference between the offset of the record and the base offset of the record batch.\n\nIn this case, the value is `0x00`, which is `0` in decimal.\n"
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
                                      "explanation_markdown": "Value Length is a signed variable size integer indicating the length of the value of the record.\n\nIn this case, the value is `0x06`, which is `6` in decimal.\nBut the actual length is 3 bytes (using zigzag encoding, refer to: https://protobuf.dev/programming-guides/encoding/#signed-ints))\n"
                                    },
                                    {
                                      "title": "Value",
                                      "length_in_bytes": 3,
                                      "explanation_markdown": "Value is a byte array indicating the value of the record.\n\nThe record's value. In this case, it is \"bar\" encoded in UTF-8.\n"
                                    },
                                    {
                                      "title": "Headers Count",
                                      "length_in_bytes": 1,
                                      "explanation_markdown": "Header array count is an unsigned variable size integer indicating the number of headers present.\n\nIn this case, the value is `0`, indicating no headers.\n"
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "title": "Tag Buffer",
                          "length_in_bytes": 1,
                          "explanation_markdown": "An empty tagged field array, represented by a single byte of value 0x00.\n"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Tag Buffer",
                  "length_in_bytes": 1,
                  "explanation_markdown": "An empty tagged field array, represented by a single byte of value 0x00.\n"
                }
              ]
            }
          ]
        },
        {
          "title": "Tag Buffer",
          "length_in_bytes": 1,
          "explanation_markdown": "An empty tagged field array, represented by a single byte of value 0x00."
        }
      ]
    }
  ]
}

export default generated;
