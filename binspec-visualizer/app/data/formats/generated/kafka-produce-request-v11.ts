// GENERATED FILE - DO NOT EDIT DIRECTLY - RUN make generate_data_from_yaml INSTEAD
import type { GeneratedData } from "binspec-visualizer/lib/format";

const generated: GeneratedData = {
  "name": "Kafka Produce Request (v11)",
  "slug": "kafka-produce-request-v11",
  "data": [
    0,
    0,
    1,
    56,
    0,
    0,
    0,
    11,
    0,
    0,
    0,
    6,
    0,
    10,
    112,
    114,
    111,
    100,
    117,
    99,
    101,
    114,
    45,
    49,
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
    112,
    97,
    120,
    2,
    0,
    0,
    0,
    0,
    85,
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
    72,
    255,
    255,
    255,
    255,
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
    1,
    153,
    37,
    20,
    101,
    145,
    0,
    0,
    1,
    153,
    37,
    20,
    101,
    145,
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
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    44,
    0,
    0,
    0,
    1,
    32,
    109,
    115,
    103,
    45,
    112,
    97,
    120,
    45,
    48,
    45,
    104,
    101,
    108,
    108,
    111,
    110,
    0,
    0,
    0,
    4,
    113,
    117,
    122,
    3,
    0,
    0,
    0,
    0,
    85,
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
    72,
    255,
    255,
    255,
    255,
    2,
    46,
    183,
    132,
    170,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    153,
    37,
    20,
    101,
    142,
    0,
    0,
    1,
    153,
    37,
    20,
    101,
    142,
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
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    44,
    0,
    0,
    0,
    1,
    32,
    109,
    115,
    103,
    45,
    113,
    117,
    122,
    45,
    48,
    45,
    104,
    101,
    108,
    108,
    111,
    110,
    0,
    0,
    0,
    0,
    0,
    1,
    85,
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
    72,
    255,
    255,
    255,
    255,
    2,
    46,
    183,
    132,
    170,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    153,
    37,
    20,
    101,
    142,
    0,
    0,
    1,
    153,
    37,
    20,
    101,
    142,
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
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    44,
    0,
    0,
    0,
    1,
    32,
    109,
    115,
    103,
    45,
    113,
    117,
    122,
    45,
    49,
    45,
    104,
    101,
    108,
    108,
    111,
    110,
    0,
    0,
    0,
    0
  ],
  "segments": [
    {
      "title": "Message Size",
      "length_in_bytes": 4,
      "explanation_markdown": "Message Size is a 4-byte big-endian integer indicating the size of the rest of the message. All Kafka requests start with this field.\n\nIn this case, the value is 0x00000138 (312 in decimal) indicating that the rest of the message is 312 bytes long.\n"
    },
    {
      "title": "Request Header (v2)",
      "length_in_bytes": 21,
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
          "explanation_markdown": "The Correlation ID is a 4-byte integer that will be echo-ed back in the response. When multiple requests are in-flight, this ID can be used to match responses with their corresponding requests.\n\nHere, it is 0x00000006 (6).\n"
        },
        {
          "title": "Client ID",
          "length_in_bytes": 12,
          "explanation_markdown": "The Client ID is a string identifying the client.\n\nHere, the value is \"producer-1\".\n",
          "children": [
            {
              "title": "Length",
              "length_in_bytes": 2,
              "explanation_markdown": "The Client ID length is a 2-byte integer indicating the length of the Client ID string. Here, it is 0x000a (10).\n"
            },
            {
              "title": "Contents",
              "length_in_bytes": 10,
              "explanation_markdown": "The Client ID is a variable-length string identifying the client. In this case, it is \"producer-1\" encoded in UTF-8.\n"
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
      "length_in_bytes": 291,
      "explanation_markdown": "The request body contains fields specific to the Produce request.\n",
      "children": [
        {
          "title": "Transactional ID",
          "length_in_bytes": 1,
          "explanation_markdown": "The Transactional ID as a `COMPACT_NULLABLE_STRING`.\n\nHere, it is 0x00, indicating it is null, and no transactional ID is specified.\n"
        },
        {
          "title": "Required ACKs",
          "length_in_bytes": 2,
          "explanation_markdown": "A 2-byte integer representing the number of acknowledgments the producer requires the leader to have received before considering a request complete.\n\nHere, it is 0xffff (-1 in decimal), meaning all in-sync replicas must acknowledge.\n"
        },
        {
          "title": "Timeout",
          "length_in_bytes": 4,
          "explanation_markdown": "A 4-byte integer representing the time to await a response in milliseconds.\n\nHere, it is 0x00007530 (30000 in decimal), meaning 30 seconds.\n"
        },
        {
          "title": "Topics Array",
          "length_in_bytes": 283,
          "explanation_markdown": "An array of topics to produce data to. This array is encoded as a `COMPACT_ARRAY`.\n",
          "children": [
            {
              "title": "Array Length",
              "length_in_bytes": 1,
              "explanation_markdown": "The length of the topics array + 1, encoded as an unsigned varint. Here, it is 0x03 (3), meaning the array length is 2.\n"
            },
            {
              "title": "Topic #1",
              "length_in_bytes": 96,
              "explanation_markdown": "The first topic in the array.\n",
              "children": [
                {
                  "title": "Topic Name",
                  "length_in_bytes": 4,
                  "explanation_markdown": "The name of the topic, encoded as a `COMPACT_STRING`.\n",
                  "children": [
                    {
                      "title": "String Length",
                      "length_in_bytes": 1,
                      "explanation_markdown": "The length of the string + 1, encoded as an unsigned varint. Here, it is 0x04 (4), meaning the string length is 3.\n"
                    },
                    {
                      "title": "String Content",
                      "length_in_bytes": 3,
                      "explanation_markdown": "The content of the string: \"pax\".\n"
                    }
                  ]
                },
                {
                  "title": "Partitions Array",
                  "length_in_bytes": 91,
                  "explanation_markdown": "An array of partitions for this topic.\n",
                  "children": [
                    {
                      "title": "Array Length",
                      "length_in_bytes": 1,
                      "explanation_markdown": "The length of the partitions array + 1, encoded as an unsigned varint. Here, it is 0x02 (2), meaning the array length is 1.\n"
                    },
                    {
                      "title": "Partition 0",
                      "length_in_bytes": 90,
                      "explanation_markdown": "Information about the first partition.\n",
                      "children": [
                        {
                          "title": "Partition Index",
                          "length_in_bytes": 4,
                          "explanation_markdown": "A 4-byte integer representing the index of this partition.\nHere, it is 0x00000000 (0 in decimal).\n"
                        },
                        {
                          "title": "Record Batch Array",
                          "length_in_bytes": 85,
                          "explanation_markdown": "The array of record batches.\n",
                          "children": [
                            {
                              "title": "Record Batch Size",
                              "length_in_bytes": 1,
                              "explanation_markdown": "The length of the record batch + 1, encoded as an unsigned varint. Here, it is 0x55 (85), meaning the batch length is 84.\n"
                            },
                            {
                              "title": "Record Batch 1",
                              "length_in_bytes": 84,
                              "explanation_markdown": "The first record batch in the array.\n",
                              "children": [
                                {
                                  "title": "Base Offset",
                                  "length_in_bytes": 8,
                                  "explanation_markdown": "Base Offset is an 8-byte big-endian integer indicating the offset of the first record in this batch.\nHere, it is 0x0000000000000000 (0 in decimal).\n"
                                },
                                {
                                  "title": "Batch Size",
                                  "length_in_bytes": 4,
                                  "explanation_markdown": "Batch Size is a 4-byte big-endian integer indicating the size of the batch excluding the base offset and batch size.\nHere, it is 0x00000048 (72 in decimal).\n"
                                },
                                {
                                  "title": "Partition Leader Epoch",
                                  "length_in_bytes": 4,
                                  "explanation_markdown": "Partition Leader Epoch is a 4-byte big-endian integer indicating the epoch of the leader for this partition.\nHere, it is 0xffffffff (-1 in decimal).\n"
                                },
                                {
                                  "title": "Magic Byte",
                                  "length_in_bytes": 1,
                                  "explanation_markdown": "Magic Byte is a 1-byte integer indicating the version of the record batch format.\nHere, it is 0x02 (2 in decimal).\n"
                                },
                                {
                                  "title": "CRC32",
                                  "length_in_bytes": 4,
                                  "explanation_markdown": "CRC32 is a 4-byte big-endian integer indicating the CRC32 checksum of the record batch.\nHere, it is 0x936662d6.\n"
                                },
                                {
                                  "title": "Attributes",
                                  "length_in_bytes": 2,
                                  "explanation_markdown": "Attributes is a 2-byte big-endian integer indicating the attributes of the record batch.\nHere, it is 0x0000 (0 in decimal), indicating no compression and not transactional.\n"
                                },
                                {
                                  "title": "Last Offset Delta",
                                  "length_in_bytes": 4,
                                  "explanation_markdown": "Last Offset Delta is a 4-byte big-endian integer indicating the difference between the last offset and base offset.\nHere, it is 0x00000000 (0 in decimal).\n"
                                },
                                {
                                  "title": "First Timestamp",
                                  "length_in_bytes": 8,
                                  "explanation_markdown": "First Timestamp is an 8-byte big-endian integer indicating the timestamp of the first record.\nHere, it is 0x0000019925146591, which means Jan  1, 1970 00:06:49.622093713 UTC\n"
                                },
                                {
                                  "title": "Last Timestamp",
                                  "length_in_bytes": 8,
                                  "explanation_markdown": "Last Timestamp is an 8-byte big-endian integer indicating the timestamp of the last record.\nHere, it is 0x0000019925146591, which means Jan  1, 1970 00:06:49.622093713 UTC\n"
                                },
                                {
                                  "title": "Producer ID",
                                  "length_in_bytes": 8,
                                  "explanation_markdown": "Producer ID is an 8-byte big-endian integer indicating the ID of the producer.\nHere, it is 0x0000000000000001 (1 in decimal).\n"
                                },
                                {
                                  "title": "Producer Epoch",
                                  "length_in_bytes": 2,
                                  "explanation_markdown": "Producer Epoch is a 2-byte big-endian integer indicating the epoch of the producer.\nHere, it is 0x0000 (0 in decimal).\n"
                                },
                                {
                                  "title": "Base Sequence",
                                  "length_in_bytes": 4,
                                  "explanation_markdown": "Base Sequence is a 4-byte big-endian integer indicating the sequence number of the first record.\nHere, it is 0x00000000 (0 in decimal).\n"
                                },
                                {
                                  "title": "Records Arrray",
                                  "length_in_bytes": 27,
                                  "explanation_markdown": "The array of records in this batch.\n",
                                  "children": [
                                    {
                                      "title": "Records Array length",
                                      "length_in_bytes": 4,
                                      "explanation_markdown": "The length of records array. Here, it is 0x00000001, which means 1.\n"
                                    },
                                    {
                                      "title": "Record 1",
                                      "length_in_bytes": 23,
                                      "explanation_markdown": "The first record in the batch.\n",
                                      "children": [
                                        {
                                          "title": "Record Size",
                                          "length_in_bytes": 1,
                                          "explanation_markdown": "Record Size is a signed varint indicating the size of the record.\nHere, it is 0x2c (22 in decimal).\n"
                                        },
                                        {
                                          "title": "Attributes",
                                          "length_in_bytes": 1,
                                          "explanation_markdown": "Record Attributes is a 1-byte integer indicating the attributes of the record.\nHere, it is 0x00 (0 in decimal).\n"
                                        },
                                        {
                                          "title": "Timestamp Delta",
                                          "length_in_bytes": 1,
                                          "explanation_markdown": "Timestamp Delta is a signed varint indicating the difference between this record's timestamp and the base timestamp.\nHere, it is 0x00 (0 in decimal).\n"
                                        },
                                        {
                                          "title": "Offset Delta",
                                          "length_in_bytes": 1,
                                          "explanation_markdown": "Offset Delta is a signed varint indicating the difference between this record's offset and the base offset.\nHere, it is 0x00 (0 in decimal).\n"
                                        },
                                        {
                                          "title": "Key Length",
                                          "length_in_bytes": 1,
                                          "explanation_markdown": "The length of the key, encoded as a signed varint.\nHere, it is 0x01, indicating no key follows.\n"
                                        },
                                        {
                                          "title": "Value Length",
                                          "length_in_bytes": 1,
                                          "explanation_markdown": "The length of the value, encoded as a signed varint.\nHere, it is 0x20 (16 in decimal after decoding).\n"
                                        },
                                        {
                                          "title": "Value",
                                          "length_in_bytes": 16,
                                          "explanation_markdown": "The actual message value: \"msg-pax-0-hellon\" encoded in UTF-8.\n"
                                        },
                                        {
                                          "title": "Headers Count",
                                          "length_in_bytes": 1,
                                          "explanation_markdown": "Headers Count is a signed varint indicating the number of headers.\nHere, it is 0x00 (0 in decimal), indicating no headers.\n"
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
                          "explanation_markdown": "An empty tagged field array for the partition, represented by a single byte of value 0x00.\n"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Tag Buffer",
                  "length_in_bytes": 1,
                  "explanation_markdown": "An empty tagged field array for the topic, represented by a single byte of value 0x00.\n"
                }
              ]
            },
            {
              "title": "Topic #2",
              "length_in_bytes": 186,
              "explanation_markdown": "The second topic in the array.\n",
              "children": [
                {
                  "title": "Topic Name",
                  "length_in_bytes": 4,
                  "explanation_markdown": "The name of the topic, encoded as a `COMPACT_STRING`.\n",
                  "children": [
                    {
                      "title": "String Length",
                      "length_in_bytes": 1,
                      "explanation_markdown": "The length of the string + 1, encoded as an unsigned varint. Here, it is 0x04 (4), meaning the string length is 3.\n"
                    },
                    {
                      "title": "String Content",
                      "length_in_bytes": 3,
                      "explanation_markdown": "The content of the string: \"quz\".\n"
                    }
                  ]
                },
                {
                  "title": "Partitions Array",
                  "length_in_bytes": 181,
                  "explanation_markdown": "An array of partitions for this topic.\n",
                  "children": [
                    {
                      "title": "Array Length",
                      "length_in_bytes": 1,
                      "explanation_markdown": "The length of the partitions array + 1, encoded as an unsigned varint. Here, it is 0x03 (3), meaning the array length is 2.\n"
                    },
                    {
                      "title": "Partition 0",
                      "length_in_bytes": 90,
                      "explanation_markdown": "Information about the first partition.\n",
                      "children": [
                        {
                          "title": "Partition Index",
                          "length_in_bytes": 4,
                          "explanation_markdown": "A 4-byte integer representing the index of this partition.\nHere, it is 0x00000000 (0 in decimal).\n"
                        },
                        {
                          "title": "Record Batch Array",
                          "length_in_bytes": 85,
                          "explanation_markdown": "The array of record batches.\n",
                          "children": [
                            {
                              "title": "Record Batch Size",
                              "length_in_bytes": 1,
                              "explanation_markdown": "The total size of record batches that follow + 1, encoded as an unsigned varint. Here it is 0x55, which means 85.\n"
                            },
                            {
                              "title": "Record Batch 1",
                              "length_in_bytes": 84,
                              "explanation_markdown": "The first record batch in the array.\n",
                              "children": [
                                {
                                  "title": "Base Offset",
                                  "length_in_bytes": 8,
                                  "explanation_markdown": "Base Offset is an 8-byte big-endian integer indicating the offset of the first record in this batch.\nHere, it is 0x0000000000000000 (0 in decimal).\n"
                                },
                                {
                                  "title": "Batch Size",
                                  "length_in_bytes": 4,
                                  "explanation_markdown": "Batch Size is a 4-byte big-endian integer indicating the size of the batch excluding the base offset and batch size.\nHere, it is 0x00000048 (72 in decimal).\n"
                                },
                                {
                                  "title": "Partition Leader Epoch",
                                  "length_in_bytes": 4,
                                  "explanation_markdown": "Partition Leader Epoch is a 4-byte big-endian integer indicating the epoch of the leader for this partition.\nHere, it is 0xffffffff (-1 in decimal).\n"
                                },
                                {
                                  "title": "Magic Byte",
                                  "length_in_bytes": 1,
                                  "explanation_markdown": "Magic Byte is a 1-byte integer indicating the version of the record batch format.\nHere, it is 0x02 (2 in decimal).\n"
                                },
                                {
                                  "title": "CRC32",
                                  "length_in_bytes": 4,
                                  "explanation_markdown": "CRC32 is a 4-byte big-endian integer indicating the CRC32 checksum of the record batch.\nHere, it is 0x2eb784aa.\n"
                                },
                                {
                                  "title": "Attributes",
                                  "length_in_bytes": 2,
                                  "explanation_markdown": "Attributes is a 2-byte big-endian integer indicating the attributes of the record batch.\nHere, it is 0x0000 (0 in decimal), indicating no compression and not transactional.\n"
                                },
                                {
                                  "title": "Last Offset Delta",
                                  "length_in_bytes": 4,
                                  "explanation_markdown": "Last Offset Delta is a 4-byte big-endian integer indicating the difference between the last offset and base offset.\nHere, it is 0x00000000 , which is 0 in decimal.\n"
                                },
                                {
                                  "title": "First Timestamp",
                                  "length_in_bytes": 8,
                                  "explanation_markdown": "First Timestamp is an 8-byte big-endian integer indicating the timestamp of the first record.\nHere, it is 0x000001992514658e, which means Jan  1, 1970 00:06:49.622093710 UTC\n"
                                },
                                {
                                  "title": "Last Timestamp",
                                  "length_in_bytes": 8,
                                  "explanation_markdown": "Last Timestamp is an 8-byte big-endian integer indicating the timestamp of the last record.\nHere, it is 0x000001992514658e, which means Jan  1, 1970 00:06:49.622093710 UTC\n"
                                },
                                {
                                  "title": "Producer ID",
                                  "length_in_bytes": 8,
                                  "explanation_markdown": "Producer ID is an 8-byte big-endian integer indicating the ID of the producer.\nHere, it is 0x0000000000000001 (1 in decimal).\n"
                                },
                                {
                                  "title": "Producer Epoch",
                                  "length_in_bytes": 2,
                                  "explanation_markdown": "Producer Epoch is a 2-byte big-endian integer indicating the epoch of the producer that produced this record batch.\nHere, it is 0x0000 (0 in decimal).\n"
                                },
                                {
                                  "title": "Base Sequence",
                                  "length_in_bytes": 4,
                                  "explanation_markdown": "Base Sequence is a 4-byte big-endian integer indicating the sequence number of the first record.\nHere, it is 0x00000000 (0 in decimal).\n"
                                },
                                {
                                  "title": "Records Arrray",
                                  "length_in_bytes": 27,
                                  "explanation_markdown": "The array of records in this batch.\n",
                                  "children": [
                                    {
                                      "title": "Records Array length",
                                      "length_in_bytes": 4,
                                      "explanation_markdown": "The length of records array. Here, it is 0x00000001, which means 1.\n"
                                    },
                                    {
                                      "title": "Record 1",
                                      "length_in_bytes": 23,
                                      "explanation_markdown": "The first record in the batch.\n",
                                      "children": [
                                        {
                                          "title": "Record Size",
                                          "length_in_bytes": 1,
                                          "explanation_markdown": "Record Size is a signed varint indicating the size of the record.\nHere, it is 0x2c (22 in decimal).\n"
                                        },
                                        {
                                          "title": "Attributes",
                                          "length_in_bytes": 1,
                                          "explanation_markdown": "Record Attributes is a 1-byte integer indicating the attributes of the record.\nHere, it is 0x00 (0 in decimal).\n"
                                        },
                                        {
                                          "title": "Timestamp Delta",
                                          "length_in_bytes": 1,
                                          "explanation_markdown": "Timestamp Delta is a signed varint indicating the difference between this record's timestamp and the base timestamp.\nHere, it is 0x00 (0 in decimal).\n"
                                        },
                                        {
                                          "title": "Offset Delta",
                                          "length_in_bytes": 1,
                                          "explanation_markdown": "Offset Delta is a signed varint indicating the difference between this record's offset and the base offset.\nHere, it is 0x00 (0 in decimal).\n"
                                        },
                                        {
                                          "title": "Key Length",
                                          "length_in_bytes": 1,
                                          "explanation_markdown": "The length of the key, encoded as a signed varint.\nHere, it is 0x01, indicating no key.\n"
                                        },
                                        {
                                          "title": "Value Length",
                                          "length_in_bytes": 1,
                                          "explanation_markdown": "The length of the value, encoded as a signed varint.\nHere, it is 0x20 (16 in decimal after decoding).\n"
                                        },
                                        {
                                          "title": "Value",
                                          "length_in_bytes": 16,
                                          "explanation_markdown": "The actual message value: \"msg-quz-0-hellon\" encoded in UTF-8.\n"
                                        },
                                        {
                                          "title": "Headers Count",
                                          "length_in_bytes": 1,
                                          "explanation_markdown": "Headers Count is a signed varint indicating the number of headers.\nHere, it is 0x00 (0 in decimal), indicating no headers.\n"
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
                          "explanation_markdown": "An empty tagged field array for the partition, represented by a single byte of value 0x00.\n"
                        }
                      ]
                    },
                    {
                      "title": "Partition 1",
                      "length_in_bytes": 90,
                      "explanation_markdown": "Information about the second partition.\n",
                      "children": [
                        {
                          "title": "Partition Index",
                          "length_in_bytes": 4,
                          "explanation_markdown": "A 4-byte integer representing the index of this partition.\nHere, it is 0x00000001 (1 in decimal).\n"
                        },
                        {
                          "title": "Record Batch Array",
                          "length_in_bytes": 85,
                          "explanation_markdown": "The array of record batches.\n",
                          "children": [
                            {
                              "title": "Record Batch Size",
                              "length_in_bytes": 1,
                              "explanation_markdown": "The total size of record batches that follow + 1, encoded as a unsigned varint. Here it is 0x55, which means 85.\n"
                            },
                            {
                              "title": "Record Batch 1",
                              "length_in_bytes": 84,
                              "explanation_markdown": "The first record batch of the array.\n",
                              "children": [
                                {
                                  "title": "Base Offset",
                                  "length_in_bytes": 8,
                                  "explanation_markdown": "Base Offset is an 8-byte big-endian integer indicating the offset of the first record in this batch.\nHere, it is 0x0000000000000000 (0 in decimal).\n"
                                },
                                {
                                  "title": "Batch Size",
                                  "length_in_bytes": 4,
                                  "explanation_markdown": "Batch Size is a 4-byte big-endian integer indicating the size of the batch excluding the base offset and size.\nHere, it is 0x00000048 (72 in decimal).\n"
                                },
                                {
                                  "title": "Partition Leader Epoch",
                                  "length_in_bytes": 4,
                                  "explanation_markdown": "Partition Leader Epoch is a 4-byte big-endian integer indicating the epoch of the leader for this partition.\nHere, it is 0xffffffff (-1 in decimal).\n"
                                },
                                {
                                  "title": "Magic Byte",
                                  "length_in_bytes": 1,
                                  "explanation_markdown": "Magic Byte is a 1-byte integer indicating the version of the record batch format.\nHere, it is 0x02 (2 in decimal).\n"
                                },
                                {
                                  "title": "CRC32",
                                  "length_in_bytes": 4,
                                  "explanation_markdown": "CRC32 is a 4-byte big-endian integer indicating the CRC32 checksum of the record batch.\nHere, it is 0x2eb784aa.\n"
                                },
                                {
                                  "title": "Attributes",
                                  "length_in_bytes": 2,
                                  "explanation_markdown": "Attributes is a 2-byte big-endian integer indicating the attributes of the record batch.\nHere, it is 0x0000 (0 in decimal), indicating no compression and not transactional.\n"
                                },
                                {
                                  "title": "Last Offset Delta",
                                  "length_in_bytes": 4,
                                  "explanation_markdown": "Last Offset Delta is a 4-byte big-endian integer indicating the difference between the last offset and base offset.\nHere, it is 0x00000000 (0 in decimal).\n"
                                },
                                {
                                  "title": "First Timestamp",
                                  "length_in_bytes": 8,
                                  "explanation_markdown": "First Timestamp is an 8-byte big-endian integer indicating the timestamp of the first record.\nHere, it is 0x000001992514658e, which means Jan  1, 1970 00:06:49.622093710 UTC\n"
                                },
                                {
                                  "title": "Last Timestamp",
                                  "length_in_bytes": 8,
                                  "explanation_markdown": "Last Timestamp is an 8-byte big-endian integer indicating the timestamp of the last record.\nHere, it is 0x000001992514658e, which means Jan  1, 1970 00:06:49.622093710 UTC\n"
                                },
                                {
                                  "title": "Producer ID",
                                  "length_in_bytes": 8,
                                  "explanation_markdown": "Producer ID is an 8-byte big-endian integer indicating the ID of the producer.\nHere, it is 0x0000000000000001 (1 in decimal).\n"
                                },
                                {
                                  "title": "Producer Epoch",
                                  "length_in_bytes": 2,
                                  "explanation_markdown": "Producer Epoch is a 2-byte big-endian integer indicating the epoch of the producer.\nHere, it is 0x0000 (0 in decimal).\n"
                                },
                                {
                                  "title": "Base Sequence",
                                  "length_in_bytes": 4,
                                  "explanation_markdown": "Base Sequence is a 4-byte big-endian integer indicating the sequence number of the first record.\nHere, it is 0x00000000 (0 in decimal).\n"
                                },
                                {
                                  "title": "Records Arrray",
                                  "length_in_bytes": 27,
                                  "explanation_markdown": "The array of records in this batch.\n",
                                  "children": [
                                    {
                                      "title": "Records Array length",
                                      "length_in_bytes": 4,
                                      "explanation_markdown": "The length of records array. Here, it is 0x00000001, which means 1.\n"
                                    },
                                    {
                                      "title": "Record 1",
                                      "length_in_bytes": 23,
                                      "explanation_markdown": "The first record in the batch.\n",
                                      "children": [
                                        {
                                          "title": "Record Size",
                                          "length_in_bytes": 1,
                                          "explanation_markdown": "Record Size is a signed varint indicating the size of the record.\nHere, it is 0x2c (22 in decimal).\n"
                                        },
                                        {
                                          "title": "Attributes",
                                          "length_in_bytes": 1,
                                          "explanation_markdown": "Record Attributes is a 1-byte integer indicating the attributes of the record.\nHere, it is 0x00 (0 in decimal).\n"
                                        },
                                        {
                                          "title": "Timestamp Delta",
                                          "length_in_bytes": 1,
                                          "explanation_markdown": "Timestamp Delta is a signed varint indicating the difference between this record's timestamp and the base timestamp.\nHere, it is 0x00 (0 in decimal).\n"
                                        },
                                        {
                                          "title": "Offset Delta",
                                          "length_in_bytes": 1,
                                          "explanation_markdown": "Offset Delta is a signed varint indicating the difference between this record's offset and the base offset.\nHere, it is 0x00 (0 in decimal).\n"
                                        },
                                        {
                                          "title": "Key Length",
                                          "length_in_bytes": 1,
                                          "explanation_markdown": "The length of the key, encoded as a signed varint.\nHere, it is 0x01, indicating no key.\n"
                                        },
                                        {
                                          "title": "Value Length",
                                          "length_in_bytes": 1,
                                          "explanation_markdown": "The length of the value, encoded as a signed varint.\nHere, it is 0x20 (16 in decimal after decoding).\n"
                                        },
                                        {
                                          "title": "Value",
                                          "length_in_bytes": 16,
                                          "explanation_markdown": "The actual message value: \"msg-quz-1-hellon\" encoded in UTF-8.\n"
                                        },
                                        {
                                          "title": "Headers Count",
                                          "length_in_bytes": 1,
                                          "explanation_markdown": "Headers Count is a signed varint indicating the number of headers.\nHere, it is 0x00 (0 in decimal), indicating no headers.\n"
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
                          "explanation_markdown": "An empty tagged field array for the partition, represented by a single byte of value 0x00.\n"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Tag Buffer",
                  "length_in_bytes": 1,
                  "explanation_markdown": "An empty tagged field array for the topic, represented by a single byte of value 0x00.\n"
                }
              ]
            }
          ]
        },
        {
          "title": "Tag Buffer",
          "length_in_bytes": 1,
          "explanation_markdown": "An empty tagged field array for the request, represented by a single byte of value 0x00.\n"
        }
      ]
    }
  ]
}

export default generated;
