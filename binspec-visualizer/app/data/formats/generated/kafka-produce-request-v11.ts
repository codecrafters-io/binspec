// GENERATED FILE - DO NOT EDIT DIRECTLY - RUN make generate_data_from_yaml INSTEAD
import type { GeneratedData } from "binspec-visualizer/lib/format";

const generated: GeneratedData = {
  "name": "Kafka Produce Request (v11)",
  "slug": "kafka-produce-request-v11",
  "data": [
    0,
    0,
    0,
    143,
    0,
    0,
    0,
    11,
    0,
    0,
    0,
    7,
    0,
    12,
    107,
    97,
    102,
    107,
    97,
    45,
    116,
    101,
    115,
    116,
    101,
    114,
    0,
    1,
    0,
    1,
    0,
    0,
    0,
    0,
    2,
    18,
    117,
    110,
    107,
    110,
    111,
    119,
    110,
    45,
    116,
    111,
    112,
    105,
    99,
    45,
    113,
    117,
    122,
    2,
    0,
    0,
    0,
    0,
    86,
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
    73,
    255,
    255,
    255,
    255,
    2,
    208,
    24,
    108,
    26,
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
    50,
    65,
    134,
    153,
    0,
    0,
    1,
    152,
    50,
    65,
    134,
    153,
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
    0,
    0,
    0,
    46,
    0,
    0,
    0,
    1,
    34,
    72,
    101,
    108,
    108,
    111,
    32,
    102,
    114,
    111,
    109,
    32,
    69,
    100,
    100,
    105,
    101,
    33,
    0,
    0,
    0,
    0
  ],
  "segments": [
    {
      "title": "Message Size",
      "length_in_bytes": 4,
      "explanation_markdown": "Message Size is a 4-byte big-endian integer indicating the size of the rest of the message. All Kafka requests and responses start with this field.\n\nIn this case, the value is 0x8f (143 in decimal) indicating that the rest of the message is 143 bytes long.\n"
    },
    {
      "title": "Request Header (v2)",
      "explanation_markdown": "The Request Header structure is common across all Kafka requests. It contains information on the API Key this request is for, the version of that API, and more.\n",
      "children": [
        {
          "title": "API Key",
          "length_in_bytes": 2,
          "explanation_markdown": "The API key is a 2-byte integer that identifies the API Key that this request is for.\n\nHere it is 0x0000 (0), which corresponds to Produce.\n"
        },
        {
          "title": "API Version",
          "length_in_bytes": 2,
          "explanation_markdown": "The API version is a 2-byte integer indicating the version of the API being used.\n\nHere, it is 0x000b (11) which corresponds to v11 of the Produce API.\n"
        },
        {
          "title": "Correlation ID",
          "length_in_bytes": 4,
          "explanation_markdown": "The Correlation ID is a 4-byte integer that will be echo-ed back in the response. When multiple requests are in-flight, this ID can be used to match responses with their corresponding requests.\n\nHere, it is 0x00000007 (7).\n"
        },
        {
          "title": "Client ID",
          "explanation_markdown": "The Client ID is a string identifying the client.\n\nHere, the value is \"kafka-tester\".\n",
          "children": [
            {
              "title": "Length",
              "length_in_bytes": 2,
              "explanation_markdown": "The Client ID length is a 2-byte integer indicating the length of the Client ID string. Here, it is 0x000c (12).\n"
            },
            {
              "title": "Contents",
              "length_in_bytes": 12,
              "explanation_markdown": "The Client ID is a variable-length string identifying the client. In this case, it is \"kafka-tester\" encoded in UTF-8.\n"
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
          "explanation_markdown": "The number of acknowledgments the producer requires the leader to have received before considering a request complete. Allowed values: 0 for no acknowledgments, 1 for only the leader and -1 for the full ISR.\n\nHere, it is 0x0001 (1) indicating leader acknowledgment only.\n"
        },
        {
          "title": "Timeout",
          "length_in_bytes": 4,
          "explanation_markdown": "A 4-byte integer that represents the timeout to await a response in milliseconds.\n\nHere, it is 0x00000000 (0 in decimal), indicating no timeout.\n"
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
                      "explanation_markdown": "The length of the topic name compact string + 1, represented as an unsigned varint. Here, it is 0x12 (18), indicating that the length of the topic name is 17.\n"
                    },
                    {
                      "title": "String Content",
                      "length_in_bytes": 17,
                      "explanation_markdown": "The actual topic name string. In this case, it is \"unknown-topic-quz\" encoded in UTF-8.\n"
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
                      "title": "Partition 0",
                      "explanation_markdown": "Information about the first partition.\n",
                      "children": [
                        {
                          "title": "Partition ID",
                          "length_in_bytes": 4,
                          "explanation_markdown": "A 4-byte integer representing the partition index.\n\nHere, it is 0x00000000 (0), which corresponds to partition 0.\n"
                        },
                        {
                          "title": "Records Data",
                          "explanation_markdown": "The record data to be produced, containing a record batch.\n",
                          "children": [
                            {
                              "title": "Records Length",
                              "length_in_bytes": 1,
                              "explanation_markdown": "An unsigned varint representing the number of bytes of record batch data that follows. Here, 0x56 indicates 86 bytes.\n"
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
                                  "explanation_markdown": "Batch Length is a 4-byte big-endian integer indicating the length of the rest of the record batch in bytes.\n\nIn this case, the value is `0x49`, which is `73` in decimal.\n"
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
                                  "explanation_markdown": "CRC is a 4-byte big-endian integer indicating the CRC32-C checksum of the record batch.\n\nThe CRC is computed over the data following the CRC field to the end of the record batch. The CRC32-C (Castagnoli) polynomial is used for the computation.\n"
                                },
                                {
                                  "title": "Attributes",
                                  "length_in_bytes": 2,
                                  "explanation_markdown": "Attributes is a 2-byte bitfield indicating the attributes of the record batch.\n\nAttributes is a bitmask of the following flags:\n\n- bit 0~2: Compression codec (0: none, 1: gzip, 2: snappy, 3: lz4, 4: zstd)\n- bit 3: Timestamp type (0: CreateTime, 1: LogAppendTime)\n- bit 4: isTransactional (0 for non-transactional)\n- bit 5: isControlBatch (0 for data batches)\n- bit 6-15: unused\n\nIn this case, the value is `0x0000`, indicating no compression, `CreateTime` timestamp type, and a non-transactional data batch.\n"
                                },
                                {
                                  "title": "Last Offset Delta",
                                  "length_in_bytes": 4,
                                  "explanation_markdown": "Last Offset Delta is a 4-byte big-endian integer. The offset of the last record is `Base Offset` + `Last Offset Delta`.\n\nIn this case, the value is `0`, indicating that the last offset of this record batch is `0` higher than the base offset, so there is 1 record in the recordBatch.\n"
                                },
                                {
                                  "title": "Base Timestamp",
                                  "length_in_bytes": 8,
                                  "explanation_markdown": "Base Timestamp is an 8-byte big-endian integer representing the timestamp of the first record in the batch.\n"
                                },
                                {
                                  "title": "Max Timestamp",
                                  "length_in_bytes": 8,
                                  "explanation_markdown": "Max Timestamp is an 8-byte big-endian integer representing the maximum timestamp among all records in the batch.\n"
                                },
                                {
                                  "title": "Producer ID",
                                  "length_in_bytes": 8,
                                  "explanation_markdown": "Producer ID is an 8-byte big-endian integer used for idempotent and transactional producers.\n\nA value of 0 indicates the producer is not idempotent.\n"
                                },
                                {
                                  "title": "Producer Epoch",
                                  "length_in_bytes": 2,
                                  "explanation_markdown": "Producer Epoch is a 2-byte big-endian integer used for idempotent and transactional producers.\n\nA value of 0 indicates the producer is not idempotent.\n"
                                },
                                {
                                  "title": "Base Sequence",
                                  "length_in_bytes": 4,
                                  "explanation_markdown": "Base Sequence is a 4-byte big-endian integer used for idempotent and transactional producers to ensure correct ordering and prevent duplicates.\n\nA value of 0 indicates the producer is not idempotent.\n"
                                },
                                {
                                  "title": "Records Count",
                                  "length_in_bytes": 4,
                                  "explanation_markdown": "A 4-byte big-endian integer indicating the number of records in the batch.\n\nIn this case, the value is `1`.\n"
                                },
                                {
                                  "title": "Record #1",
                                  "explanation_markdown": "A single record within the batch.\n",
                                  "children": [
                                    {
                                      "title": "Length",
                                      "length_in_bytes": 1,
                                      "explanation_markdown": "A varint representing the length of the record.\n\nIn this case, the value is `0x2e`, which is `46` in decimal.\n"
                                    },
                                    {
                                      "title": "Attributes",
                                      "length_in_bytes": 1,
                                      "explanation_markdown": "A 1-byte integer for record attributes. Currently unused.\n"
                                    },
                                    {
                                      "title": "Timestamp Delta",
                                      "length_in_bytes": 1,
                                      "explanation_markdown": "A varint representing the time difference between this record's timestamp and the `Base Timestamp` of the batch.\n\nIn this case, the value is `0`, meaning the timestamp is the same as the batch's `Base Timestamp`.\n"
                                    },
                                    {
                                      "title": "Offset Delta",
                                      "length_in_bytes": 1,
                                      "explanation_markdown": "A varint representing the offset difference between this record and the `Base Offset` of the batch.\n\nIn this case, the value is `0`.\n"
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
                                      "explanation_markdown": "Value Length is a signed variable size integer indicating the length of the value of the record.\n\nIn this case, the value is `0x22`, which is `17` in decimal.\n"
                                    },
                                    {
                                      "title": "Value",
                                      "length_in_bytes": 17,
                                      "explanation_markdown": "Value is a byte array indicating the value of the record.\n\nThe record's value. In this case, it is \"Hello from Eddie!\".\n"
                                    },
                                    {
                                      "title": "Headers Count",
                                      "length_in_bytes": 1,
                                      "explanation_markdown": "A varint representing the number of headers.\n\nIn this case, the value is `0`, indicating no headers.\n"
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
