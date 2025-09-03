// GENERATED FILE - DO NOT EDIT DIRECTLY - RUN make generate_data_from_yaml INSTEAD
import type { GeneratedData } from "binspec-visualizer/lib/format";

const generated: GeneratedData = {
  "name": "Kafka Produce Request (v11)",
  "slug": "kafka-produce-request-v11",
  "data": [
    0,
    0,
    1,
    43,
    0,
    0,
    0,
    11,
    51,
    45,
    225,
    65,
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
    0,
    255,
    255,
    0,
    0,
    117,
    48,
    3,
    4,
    113,
    117,
    120,
    3,
    0,
    0,
    0,
    0,
    80,
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
    67,
    0,
    0,
    0,
    0,
    2,
    147,
    102,
    98,
    214,
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
    0,
    0,
    0,
    0,
    0,
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
    34,
    0,
    238,
    143,
    184,
    139,
    13,
    0,
    1,
    14,
    109,
    101,
    115,
    115,
    103,
    32,
    48,
    0,
    0,
    0,
    0,
    0,
    1,
    80,
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
    67,
    0,
    0,
    0,
    0,
    2,
    128,
    196,
    250,
    161,
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
    0,
    0,
    0,
    0,
    0,
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
    34,
    0,
    238,
    143,
    184,
    139,
    13,
    0,
    1,
    14,
    109,
    101,
    115,
    115,
    103,
    32,
    49,
    0,
    0,
    0,
    4,
    112,
    97,
    120,
    2,
    0,
    0,
    0,
    0,
    80,
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
    67,
    0,
    0,
    0,
    0,
    2,
    180,
    35,
    82,
    56,
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
    0,
    0,
    0,
    0,
    0,
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
    34,
    0,
    238,
    143,
    184,
    139,
    13,
    0,
    1,
    14,
    109,
    101,
    115,
    115,
    103,
    32,
    50,
    0,
    0,
    0,
    0
  ],
  "segments": [
    {
      "title": "Message Size",
      "length_in_bytes": 4,
      "explanation_markdown": "Message Size is a 4-byte big-endian integer indicating the size of the rest of the message. All Kafka requests and responses start with this field.\nIn this case, the value is 0x012b (299 in decimal) indicating that the rest of the message is 299 bytes long.\n"
    },
    {
      "title": "Request Header (v2)",
      "length_in_bytes": 23,
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
          "explanation_markdown": "The Correlation ID is a 4-byte integer that will be echo-ed back in the response. When multiple requests are in-flight, this ID can be used to match responses with their corresponding requests.\n\nHere, it is 0x332de141 (858644801).\n"
        },
        {
          "title": "Client ID",
          "length_in_bytes": 14,
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
      "length_in_bytes": 276,
      "explanation_markdown": "The request body contains fields specific to the Produce request.\n",
      "children": [
        {
          "title": "Transaction ID",
          "length_in_bytes": 1,
          "explanation_markdown": "The Transaction ID as a COMPACT_NULLABLE_STRING. A value of 0x00 indicates null (no transaction ID).\n"
        },
        {
          "title": "Required Acks",
          "length_in_bytes": 2,
          "explanation_markdown": "Required Acks is a 2-byte integer indicating the number of acknowledgments the producer requires the leader to have received before considering a request complete.\n\nHere it is 0xffff (-1), which means the producer requires acknowledgment from all in-sync replicas.\n"
        },
        {
          "title": "Timeout",
          "length_in_bytes": 4,
          "explanation_markdown": "Timeout is a 4-byte integer indicating the time in milliseconds to wait for acknowledgment from the server.\n\nHere it is 0x00007530 (30000 milliseconds or 30 seconds).\n"
        },
        {
          "title": "Topic Data Array",
          "length_in_bytes": 268,
          "explanation_markdown": "A compact array containing topic data. The first byte indicates the array length + 1.\n\nHere the value is 0x03, indicating an actual array length of 2.\n",
          "children": [
            {
              "title": "Topic Array Length",
              "length_in_bytes": 1,
              "explanation_markdown": "Compact array length (actual length + 1). Value of 0x03 means 2 topics.\n"
            },
            {
              "title": "Topic #1: qux",
              "length_in_bytes": 176,
              "explanation_markdown": "First topic in the array with name \"qux\" and its partitions.\n",
              "children": [
                {
                  "title": "Topic Name",
                  "length_in_bytes": 4,
                  "explanation_markdown": "Topic name as a compact string.\n",
                  "children": [
                    {
                      "title": "Length",
                      "length_in_bytes": 1,
                      "explanation_markdown": "Compact string length (actual length + 1). Value of 0x04 means 3 characters.\n"
                    },
                    {
                      "title": "Contents",
                      "length_in_bytes": 3,
                      "explanation_markdown": "The topic name \"qux\" encoded in UTF-8.\n"
                    }
                  ]
                },
                {
                  "title": "Partition Data Array",
                  "length_in_bytes": 171,
                  "explanation_markdown": "Array of partitions for this topic. Compact array length of 0x03 means 2 partitions.\n",
                  "children": [
                    {
                      "title": "Partition Array Length",
                      "length_in_bytes": 1,
                      "explanation_markdown": "Compact array length (actual length + 1). Value of 0x03 means 2 partitions.\n"
                    },
                    {
                      "title": "Partition #0",
                      "length_in_bytes": 85,
                      "explanation_markdown": "First partition (ID 0) with its record batch.\n",
                      "children": [
                        {
                          "title": "Partition ID",
                          "length_in_bytes": 4,
                          "explanation_markdown": "Partition ID as a 4-byte integer. Value is 0x00000000 (0).\n"
                        },
                        {
                          "title": "Record Batches",
                          "length_in_bytes": 80,
                          "explanation_markdown": "Compact record batch for this partition.\n",
                          "children": [
                            {
                              "title": "Record Batch Length",
                              "length_in_bytes": 1,
                              "explanation_markdown": "Compact array length. Value of 0x50 (80 bytes).\n"
                            },
                            {
                              "title": "Record Batch",
                              "length_in_bytes": 79,
                              "explanation_markdown": "The record batch containing the actual message data.\n",
                              "children": [
                                {
                                  "title": "Base Offset",
                                  "length_in_bytes": 8,
                                  "explanation_markdown": "Base offset is an 8-byte integer representing the starting offset for this record batch in the partition's log. All individual record offsets in this batch are calculated as base_offset + offset_delta.\n\nValue is 0x0000000000000000 (0), indicating this batch starts at offset 0 in the partition.\n"
                                },
                                {
                                  "title": "Batch Length",
                                  "length_in_bytes": 4,
                                  "explanation_markdown": "Length of this record batch. Value is 0x00000043 (67 bytes).\n"
                                },
                                {
                                  "title": "Partition Leader Epoch",
                                  "length_in_bytes": 4,
                                  "explanation_markdown": "Partition leader epoch is a monotonically increasing number that identifies the current leader for this partition. It's used to prevent data corruption during leader changes and to detect stale requests.\n\nValue is 0x00000000 (0), indicating this is from the first leader epoch for this partition.\n"
                                },
                                {
                                  "title": "Magic Byte",
                                  "length_in_bytes": 1,
                                  "explanation_markdown": "Magic byte indicates the record batch format version, allowing Kafka to evolve the format while maintaining backward compatibility. Version 2 (0x02) introduced features like idempotent producers, transactional records, and improved compression.\n\nValue is 0x02 (version 2), the current record batch format.\n"
                                },
                                {
                                  "title": "CRC32",
                                  "length_in_bytes": 4,
                                  "explanation_markdown": "CRC32 checksum of the record batch. Value is 0x936662d6.\n"
                                },
                                {
                                  "title": "Attributes",
                                  "length_in_bytes": 2,
                                  "explanation_markdown": "Record batch attributes is a 16-bit bitmask indicating various properties:\n- Bits 0-2: Compression type (0=none, 1=gzip, 2=snappy, 3=lz4, 4=zstd)\n- Bit 3: Timestamp type (0=CreateTime, 1=LogAppendTime)\n- Bit 4: Transactional flag (1 if part of a transaction)\n- Bit 5: Control batch flag (1 for transaction markers)\n- Bit 6: Has delete horizon ms flag\n\nValue is 0x0000, indicating no compression, CreateTime timestamps, non-transactional, and regular data records.\n"
                                },
                                {
                                  "title": "Last Offset Delta",
                                  "length_in_bytes": 4,
                                  "explanation_markdown": "Last offset delta represents the difference between the base offset and the highest offset in this batch. For a batch with N records, this equals N-1. This field helps determine the range of offsets covered by the batch.\n\nValue is 0x00000000 (0), indicating this batch contains only one record (offset range: base_offset to base_offset+0).\n"
                                },
                                {
                                  "title": "First Timestamp",
                                  "length_in_bytes": 8,
                                  "explanation_markdown": "First timestamp in the batch represents the earliest timestamp among all records in this batch. Used for log retention, time-based indexing, and consumer seeking by timestamp.\n\nValue is 0x0000000000000000 (Unix epoch - January 1, 1970 00:00:00.000 UTC), indicating timestamp 0.\n"
                                },
                                {
                                  "title": "Last Timestamp",
                                  "length_in_bytes": 8,
                                  "explanation_markdown": "Last timestamp in the batch represents the latest timestamp among all records in this batch. When combined with first timestamp, defines the time range covered by this batch.\n\nValue is 0x0000000000000000 (Unix epoch - January 1, 1970 00:00:00.000 UTC), same as first timestamp since there's only one record.\n"
                                },
                                {
                                  "title": "Producer ID",
                                  "length_in_bytes": 8,
                                  "explanation_markdown": "Producer ID is a unique identifier assigned to each producer instance for idempotent and transactional operations. It enables Kafka to detect and prevent duplicate records.\n\nValue is 0xffffffffffffffff (-1), indicating this producer is not using idempotent or transactional features.\n"
                                },
                                {
                                  "title": "Producer Epoch",
                                  "length_in_bytes": 2,
                                  "explanation_markdown": "Producer epoch is a monotonically increasing number that prevents zombie producers from corrupting data after a producer restart or failover. Each producer session gets a new epoch.\n\nValue is 0xffff (-1), indicating this producer is not using idempotent features.\n"
                                },
                                {
                                  "title": "Base Sequence",
                                  "length_in_bytes": 4,
                                  "explanation_markdown": "Base sequence number is the starting sequence number for records in this batch. Each producer maintains a per-partition sequence counter for duplicate detection. Combined with producer ID and epoch, it ensures exactly-once semantics.\n\nValue is 0xffffffff (-1), indicating this producer is not using idempotent features.\n"
                                },
                                {
                                  "title": "Number of Records",
                                  "length_in_bytes": 4,
                                  "explanation_markdown": "Number of records in this batch. Value is 0x00000001 (1).\n"
                                },
                                {
                                  "title": "Records",
                                  "length_in_bytes": 18,
                                  "explanation_markdown": "The actual records in this batch.\n",
                                  "children": [
                                    {
                                      "title": "Record #0",
                                      "length_in_bytes": 18,
                                      "explanation_markdown": "First record containing \"messg 0\".\n",
                                      "children": [
                                        {
                                          "title": "Record Length",
                                          "length_in_bytes": 1,
                                          "explanation_markdown": "Varint record length. Value is 0x22 (17 bytes as varint).\n"
                                        },
                                        {
                                          "title": "Record Attributes",
                                          "length_in_bytes": 1,
                                          "explanation_markdown": "Record attributes is an 8-bit field for per-record flags. Currently unused but reserved for future extensions like per-record compression or encryption indicators.\n\nValue is 0x00, indicating no special attributes for this record.\n"
                                        },
                                        {
                                          "title": "Timestamp Delta",
                                          "length_in_bytes": 5,
                                          "explanation_markdown": "Timestamp delta as varint represents the difference between this record's timestamp and the batch's first timestamp. This compression technique saves space since records in a batch often have similar timestamps.\n\nThe varint value decodes to a delta that, when added to first timestamp (0), gives Jan 21, 1970 08:00:24.567000000 UTC.\n"
                                        },
                                        {
                                          "title": "Offset Delta",
                                          "length_in_bytes": 1,
                                          "explanation_markdown": "Offset delta as varint represents this record's position within the batch. The actual offset of this record is base_offset + offset_delta. Encoded as a varint to save space.\n\nValue is 0x00 (0), meaning this is the first record in the batch at offset base_offset+0.\n"
                                        },
                                        {
                                          "title": "Key",
                                          "length_in_bytes": 1,
                                          "explanation_markdown": "Key as compact bytes. Value is 0x01 (null).\n"
                                        },
                                        {
                                          "title": "Value",
                                          "length_in_bytes": 8,
                                          "explanation_markdown": "Value as compact bytes containing \"messg 0\".\n",
                                          "children": [
                                            {
                                              "title": "Value Length",
                                              "length_in_bytes": 1,
                                              "explanation_markdown": "Varint length. Value is 0x0e (7 bytes).\n"
                                            },
                                            {
                                              "title": "Value Contents",
                                              "length_in_bytes": 7,
                                              "explanation_markdown": "The message \"messg 0\" in UTF-8.\n"
                                            }
                                          ]
                                        },
                                        {
                                          "title": "Headers",
                                          "length_in_bytes": 1,
                                          "explanation_markdown": "Headers array count. Value is 0x00 (no headers).\n"
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "title": "Partition Tag Buffer",
                          "length_in_bytes": 1,
                          "explanation_markdown": "Tag buffer for partition. Value is 0x00 (empty).\n"
                        }
                      ]
                    },
                    {
                      "title": "Partition #1",
                      "length_in_bytes": 85,
                      "explanation_markdown": "Second partition (ID 1) with its record batch.\n",
                      "children": [
                        {
                          "title": "Partition ID",
                          "length_in_bytes": 4,
                          "explanation_markdown": "Partition ID as a 4-byte integer. Value is 0x00000001 (1).\n"
                        },
                        {
                          "title": "Record Batches",
                          "length_in_bytes": 80,
                          "explanation_markdown": "Compact record batch for this partition.\n",
                          "children": [
                            {
                              "title": "Record Batch Length",
                              "length_in_bytes": 1,
                              "explanation_markdown": "Compact array length. Value of 0x50 (80 bytes).\n"
                            },
                            {
                              "title": "Record Batch",
                              "length_in_bytes": 79,
                              "explanation_markdown": "The record batch containing the actual message data.\n",
                              "children": [
                                {
                                  "title": "Base Offset",
                                  "length_in_bytes": 8,
                                  "explanation_markdown": "Base offset is an 8-byte integer representing the starting offset for this record batch in the partition's log. All individual record offsets in this batch are calculated as base_offset + offset_delta.\n\nValue is 0x0000000000000000 (0), indicating this batch starts at offset 0 in the partition.\n"
                                },
                                {
                                  "title": "Batch Length",
                                  "length_in_bytes": 4,
                                  "explanation_markdown": "Length of this record batch. Value is 0x00000043 (67 bytes).\n"
                                },
                                {
                                  "title": "Partition Leader Epoch",
                                  "length_in_bytes": 4,
                                  "explanation_markdown": "Partition leader epoch is a monotonically increasing number that identifies the current leader for this partition. It's used to prevent data corruption during leader changes and to detect stale requests.\n\nValue is 0x00000000 (0), indicating this is from the first leader epoch for this partition.\n"
                                },
                                {
                                  "title": "Magic Byte",
                                  "length_in_bytes": 1,
                                  "explanation_markdown": "Magic byte indicates the record batch format version, allowing Kafka to evolve the format while maintaining backward compatibility. Version 2 (0x02) introduced features like idempotent producers, transactional records, and improved compression.\n\nValue is 0x02 (version 2), the current record batch format.\n"
                                },
                                {
                                  "title": "CRC32",
                                  "length_in_bytes": 4,
                                  "explanation_markdown": "CRC32 checksum of the record batch. Value is 0x80c4faa1.\n"
                                },
                                {
                                  "title": "Attributes",
                                  "length_in_bytes": 2,
                                  "explanation_markdown": "Record batch attributes is a 16-bit bitmask indicating various properties:\n- Bits 0-2: Compression type (0=none, 1=gzip, 2=snappy, 3=lz4, 4=zstd)\n- Bit 3: Timestamp type (0=CreateTime, 1=LogAppendTime)\n- Bit 4: Transactional flag (1 if part of a transaction)\n- Bit 5: Control batch flag (1 for transaction markers)\n- Bit 6: Has delete horizon ms flag\n\nValue is 0x0000, indicating no compression, CreateTime timestamps, non-transactional, and regular data records.\n"
                                },
                                {
                                  "title": "Last Offset Delta",
                                  "length_in_bytes": 4,
                                  "explanation_markdown": "Last offset delta represents the difference between the base offset and the highest offset in this batch. For a batch with N records, this equals N-1. This field helps determine the range of offsets covered by the batch.\n\nValue is 0x00000000 (0), indicating this batch contains only one record (offset range: base_offset to base_offset+0).\n"
                                },
                                {
                                  "title": "First Timestamp",
                                  "length_in_bytes": 8,
                                  "explanation_markdown": "First timestamp in the batch represents the earliest timestamp among all records in this batch. Used for log retention, time-based indexing, and consumer seeking by timestamp.\n\nValue is 0x0000000000000000 (Unix epoch - January 1, 1970 00:00:00.000 UTC), indicating timestamp 0.\n"
                                },
                                {
                                  "title": "Last Timestamp",
                                  "length_in_bytes": 8,
                                  "explanation_markdown": "Last timestamp in the batch represents the latest timestamp among all records in this batch. When combined with first timestamp, defines the time range covered by this batch.\n\nValue is 0x0000000000000000 (Unix epoch - January 1, 1970 00:00:00.000 UTC), same as first timestamp since there's only one record.\n"
                                },
                                {
                                  "title": "Producer ID",
                                  "length_in_bytes": 8,
                                  "explanation_markdown": "Producer ID is a unique identifier assigned to each producer instance for idempotent and transactional operations. It enables Kafka to detect and prevent duplicate records.\n\nValue is 0xffffffffffffffff (-1), indicating this producer is not using idempotent or transactional features.\n"
                                },
                                {
                                  "title": "Producer Epoch",
                                  "length_in_bytes": 2,
                                  "explanation_markdown": "Producer epoch is a monotonically increasing number that prevents zombie producers from corrupting data after a producer restart or failover. Each producer session gets a new epoch.\n\nValue is 0xffff (-1), indicating this producer is not using idempotent features.\n"
                                },
                                {
                                  "title": "Base Sequence",
                                  "length_in_bytes": 4,
                                  "explanation_markdown": "Base sequence number is the starting sequence number for records in this batch. Each producer maintains a per-partition sequence counter for duplicate detection. Combined with producer ID and epoch, it ensures exactly-once semantics.\n\nValue is 0xffffffff (-1), indicating this producer is not using idempotent features.\n"
                                },
                                {
                                  "title": "Number of Records",
                                  "length_in_bytes": 4,
                                  "explanation_markdown": "Number of records in this batch. Value is 0x00000001 (1).\n"
                                },
                                {
                                  "title": "Records",
                                  "length_in_bytes": 18,
                                  "explanation_markdown": "The actual records in this batch.\n",
                                  "children": [
                                    {
                                      "title": "Record #0",
                                      "length_in_bytes": 18,
                                      "explanation_markdown": "First record containing \"messg 1\".\n",
                                      "children": [
                                        {
                                          "title": "Record Length",
                                          "length_in_bytes": 1,
                                          "explanation_markdown": "Varint record length. Value is 0x22 (17 bytes as varint).\n"
                                        },
                                        {
                                          "title": "Record Attributes",
                                          "length_in_bytes": 1,
                                          "explanation_markdown": "Record attributes is an 8-bit field for per-record flags. Currently unused but reserved for future extensions like per-record compression or encryption indicators.\n\nValue is 0x00, indicating no special attributes for this record.\n"
                                        },
                                        {
                                          "title": "Timestamp Delta",
                                          "length_in_bytes": 5,
                                          "explanation_markdown": "Timestamp delta as varint represents the difference between this record's timestamp and the batch's first timestamp. This compression technique saves space since records in a batch often have similar timestamps.\n\nThe varint value decodes to a delta that, when added to first timestamp (0), gives Jan 21, 1970 08:00:24.567000000 UTC.\n"
                                        },
                                        {
                                          "title": "Offset Delta",
                                          "length_in_bytes": 1,
                                          "explanation_markdown": "Offset delta as varint represents this record's position within the batch. The actual offset of this record is base_offset + offset_delta. Encoded as a varint to save space.\n\nValue is 0x00 (0), meaning this is the first record in the batch at offset base_offset+0.\n"
                                        },
                                        {
                                          "title": "Key",
                                          "length_in_bytes": 1,
                                          "explanation_markdown": "Key as compact bytes. Value is 0x01 (null).\n"
                                        },
                                        {
                                          "title": "Value",
                                          "length_in_bytes": 8,
                                          "explanation_markdown": "Value as compact bytes containing \"messg 1\".\n",
                                          "children": [
                                            {
                                              "title": "Value Length",
                                              "length_in_bytes": 1,
                                              "explanation_markdown": "Varint length. Value is 0x0e (7 bytes).\n"
                                            },
                                            {
                                              "title": "Value Contents",
                                              "length_in_bytes": 7,
                                              "explanation_markdown": "The message \"messg 1\" in UTF-8.\n"
                                            }
                                          ]
                                        },
                                        {
                                          "title": "Headers",
                                          "length_in_bytes": 1,
                                          "explanation_markdown": "Headers array count. Value is 0x00 (no headers).\n"
                                        }
                                      ]
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
                          "explanation_markdown": "Tag buffer for the partition. Value is 0x00 (empty).\n"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Topic Tag Buffer",
                  "length_in_bytes": 1,
                  "explanation_markdown": "Tag buffer for the topic. Value is 0x00 (empty).\n"
                }
              ]
            },
            {
              "title": "Topic #2: pax",
              "length_in_bytes": 91,
              "explanation_markdown": "Second topic in the array with name \"pax\" and its partitions.\n",
              "children": [
                {
                  "title": "Topic Name",
                  "length_in_bytes": 4,
                  "explanation_markdown": "Topic name as a compact string.\n",
                  "children": [
                    {
                      "title": "Length",
                      "length_in_bytes": 1,
                      "explanation_markdown": "Compact string length (actual length + 1). Value of 0x04 means 3 characters.\n"
                    },
                    {
                      "title": "Contents",
                      "length_in_bytes": 3,
                      "explanation_markdown": "The topic name \"pax\" encoded in UTF-8.\n"
                    }
                  ]
                },
                {
                  "title": "Partition Data Array",
                  "length_in_bytes": 86,
                  "explanation_markdown": "Array of partitions for this topic. Compact array length of 0x02 means 1 partition.\n",
                  "children": [
                    {
                      "title": "Partition Array Length",
                      "length_in_bytes": 1,
                      "explanation_markdown": "Compact array length (actual length + 1). Value of 0x02 means 1 partition.\n"
                    },
                    {
                      "title": "Partition #0",
                      "length_in_bytes": 85,
                      "explanation_markdown": "First partition (ID 0) with its record batch.\n",
                      "children": [
                        {
                          "title": "Partition ID",
                          "length_in_bytes": 4,
                          "explanation_markdown": "Partition ID as a 4-byte integer. Value is 0x00000000 (0).\n"
                        },
                        {
                          "title": "Records Batch",
                          "length_in_bytes": 80,
                          "explanation_markdown": "Compact record batch for this partition.\n",
                          "children": [
                            {
                              "title": "Record Batch Length",
                              "length_in_bytes": 1,
                              "explanation_markdown": "Compact array length. Value of 0x50 (80 bytes).\n"
                            },
                            {
                              "title": "Record Batch",
                              "length_in_bytes": 79,
                              "explanation_markdown": "The record batch containing the actual message data.\n",
                              "children": [
                                {
                                  "title": "Base Offset",
                                  "length_in_bytes": 8,
                                  "explanation_markdown": "Base offset is an 8-byte integer representing the starting offset for this record batch in the partition's log. All individual record offsets in this batch are calculated as base_offset + offset_delta.\n\nValue is 0x0000000000000000 (0), indicating this batch starts at offset 0 in the partition.\n"
                                },
                                {
                                  "title": "Batch Length",
                                  "length_in_bytes": 4,
                                  "explanation_markdown": "Length of this record batch. Value is 0x00000043 (67 bytes).\n"
                                },
                                {
                                  "title": "Partition Leader Epoch",
                                  "length_in_bytes": 4,
                                  "explanation_markdown": "Partition leader epoch is a monotonically increasing number that identifies the current leader for this partition. It's used to prevent data corruption during leader changes and to detect stale requests.\n\nValue is 0x00000000 (0), indicating this is from the first leader epoch for this partition.\n"
                                },
                                {
                                  "title": "Magic Byte",
                                  "length_in_bytes": 1,
                                  "explanation_markdown": "Magic byte indicates the record batch format version, allowing Kafka to evolve the format while maintaining backward compatibility. Version 2 (0x02) introduced features like idempotent producers, transactional records, and improved compression.\n\nValue is 0x02 (version 2), the current record batch format.\n"
                                },
                                {
                                  "title": "CRC32",
                                  "length_in_bytes": 4,
                                  "explanation_markdown": "CRC32 checksum of the record batch. Value is 0xb4235238.\n"
                                },
                                {
                                  "title": "Attributes",
                                  "length_in_bytes": 2,
                                  "explanation_markdown": "Record batch attributes is a 16-bit bitmask indicating various properties:\n- Bits 0-2: Compression type (0=none, 1=gzip, 2=snappy, 3=lz4, 4=zstd)\n- Bit 3: Timestamp type (0=CreateTime, 1=LogAppendTime)\n- Bit 4: Transactional flag (1 if part of a transaction)\n- Bit 5: Control batch flag (1 for transaction markers)\n- Bit 6: Has delete horizon ms flag\n\nValue is 0x0000, indicating no compression, CreateTime timestamps, non-transactional, and regular data records.\n"
                                },
                                {
                                  "title": "Last Offset Delta",
                                  "length_in_bytes": 4,
                                  "explanation_markdown": "Last offset delta represents the difference between the base offset and the highest offset in this batch. For a batch with N records, this equals N-1. This field helps determine the range of offsets covered by the batch.\n\nValue is 0x00000000 (0), indicating this batch contains only one record (offset range: base_offset to base_offset+0).\n"
                                },
                                {
                                  "title": "First Timestamp",
                                  "length_in_bytes": 8,
                                  "explanation_markdown": "First timestamp in the batch represents the earliest timestamp among all records in this batch. Used for log retention, time-based indexing, and consumer seeking by timestamp.\n\nValue is 0x0000000000000000 (Unix epoch - January 1, 1970 00:00:00.000 UTC), indicating timestamp 0.\n"
                                },
                                {
                                  "title": "Last Timestamp",
                                  "length_in_bytes": 8,
                                  "explanation_markdown": "Last timestamp in the batch represents the latest timestamp among all records in this batch. When combined with first timestamp, defines the time range covered by this batch.\n\nValue is 0x0000000000000000 (Unix epoch - January 1, 1970 00:00:00.000 UTC), same as first timestamp since there's only one record.\n"
                                },
                                {
                                  "title": "Producer ID",
                                  "length_in_bytes": 8,
                                  "explanation_markdown": "Producer ID is a unique identifier assigned to each producer instance for idempotent and transactional operations. It enables Kafka to detect and prevent duplicate records.\n\nValue is 0xffffffffffffffff (-1), indicating this producer is not using idempotent or transactional features.\n"
                                },
                                {
                                  "title": "Producer Epoch",
                                  "length_in_bytes": 2,
                                  "explanation_markdown": "Producer epoch is a monotonically increasing number that prevents zombie producers from corrupting data after a producer restart or failover. Each producer session gets a new epoch.\n\nValue is 0xffff (-1), indicating this producer is not using idempotent features.\n"
                                },
                                {
                                  "title": "Base Sequence",
                                  "length_in_bytes": 4,
                                  "explanation_markdown": "Base sequence number is the starting sequence number for records in this batch. Each producer maintains a per-partition sequence counter for duplicate detection. Combined with producer ID and epoch, it ensures exactly-once semantics.\n\nValue is 0xffffffff (-1), indicating this producer is not using idempotent features.\n"
                                },
                                {
                                  "title": "Number of Records",
                                  "length_in_bytes": 4,
                                  "explanation_markdown": "Number of records in this batch. Value is 0x00000001 (1).\n"
                                },
                                {
                                  "title": "Records",
                                  "length_in_bytes": 18,
                                  "explanation_markdown": "The actual records in this batch.\n",
                                  "children": [
                                    {
                                      "title": "Record #0",
                                      "length_in_bytes": 18,
                                      "explanation_markdown": "First record containing \"messg 2\".\n",
                                      "children": [
                                        {
                                          "title": "Record Length",
                                          "length_in_bytes": 1,
                                          "explanation_markdown": "Varint record length. Value is 0x22 (17 bytes as varint).\n"
                                        },
                                        {
                                          "title": "Record Attributes",
                                          "length_in_bytes": 1,
                                          "explanation_markdown": "Record attributes is an 8-bit field for per-record flags. Currently unused but reserved for future extensions like per-record compression or encryption indicators.\n\nValue is 0x00, indicating no special attributes for this record.\n"
                                        },
                                        {
                                          "title": "Timestamp Delta",
                                          "length_in_bytes": 5,
                                          "explanation_markdown": "Timestamp delta as varint represents the difference between this record's timestamp and the batch's first timestamp. This compression technique saves space since records in a batch often have similar timestamps.\n\nThe varint value decodes to a delta that, when added to first timestamp (0), gives Jan 21, 1970 08:00:24.567000000 UTC.\n"
                                        },
                                        {
                                          "title": "Offset Delta",
                                          "length_in_bytes": 1,
                                          "explanation_markdown": "Offset delta as varint represents this record's position within the batch. The actual offset of this record is base_offset + offset_delta. Encoded as a varint to save space.\n\nValue is 0x00 (0), meaning this is the first record in the batch at offset base_offset+0.\n"
                                        },
                                        {
                                          "title": "Key",
                                          "length_in_bytes": 1,
                                          "explanation_markdown": "Key as compact bytes. Value is 0x01 (null).\n"
                                        },
                                        {
                                          "title": "Value",
                                          "length_in_bytes": 8,
                                          "explanation_markdown": "Value as compact bytes containing \"messg 2\".\n",
                                          "children": [
                                            {
                                              "title": "Value Length",
                                              "length_in_bytes": 1,
                                              "explanation_markdown": "Varint length. Value is 0x0e (7 bytes).\n"
                                            },
                                            {
                                              "title": "Value Contents",
                                              "length_in_bytes": 7,
                                              "explanation_markdown": "The message \"messg 2\" in UTF-8.\n"
                                            }
                                          ]
                                        },
                                        {
                                          "title": "Headers",
                                          "length_in_bytes": 1,
                                          "explanation_markdown": "Headers array count. Value is 0x00 (no headers).\n"
                                        }
                                      ]
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
                          "explanation_markdown": "Tag buffer for the partition. Value is 0x00 (empty).\n"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Topic Tag Buffer",
                  "length_in_bytes": 1,
                  "explanation_markdown": "Tag buffer for the topic. Value is 0x00 (empty).\n"
                }
              ]
            }
          ]
        },
        {
          "title": "Request Tag Buffer",
          "length_in_bytes": 1,
          "explanation_markdown": "Tag buffer for the entire request. Value is 0x00 (empty).\n"
        }
      ]
    }
  ]
}

export default generated;
