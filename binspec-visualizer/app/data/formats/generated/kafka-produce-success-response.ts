// GENERATED FILE - DO NOT EDIT DIRECTLY - RUN make generate_data_from_yaml INSTEAD
import type { GeneratedData } from "binspec-visualizer/lib/format";

const generated: GeneratedData = {
  "name": "Kafka Produce Success Response (v11)",
  "slug": "kafka-produce-success-response",
  "data": [
    0,
    0,
    0,
    122,
    0,
    0,
    0,
    7,
    0,
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
    0,
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
    0,
    0,
    0,
    0,
    0,
    1,
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
    0,
    0,
    0,
    0,
    0
  ],
  "segments": [
    {
      "title": "Message Size",
      "length_in_bytes": 4,
      "explanation_markdown": "Message Size is a 4-byte big-endian integer indicating the size of the rest of the message. All Kafka responses start with this field.\n\nIn this case, the value is 0x0000007a (122 in decimal) indicating that the rest of the message is 122 bytes long.\n"
    },
    {
      "title": "Response Header (v1)",
      "length_in_bytes": 5,
      "explanation_markdown": "The Response Header structure is common across all Kafka responses. It contains the Correlation ID that matches the request.\n",
      "children": [
        {
          "title": "Correlation ID",
          "length_in_bytes": 4,
          "explanation_markdown": "The Correlation ID is a 4-byte integer that matches the ID sent in the corresponding request.\n\nHere, it is 0x00000007 (7 in decimal).\n"
        },
        {
          "title": "Tag buffer",
          "length_in_bytes": 1,
          "explanation_markdown": "An empty tagged field array, represented by a single byte of value 0x00.\n"
        }
      ]
    },
    {
      "title": "Produce Response Body (v11)",
      "length_in_bytes": 117,
      "explanation_markdown": "The response body contains fields specific to the Produce response.\n",
      "children": [
        {
          "title": "Topics Array",
          "length_in_bytes": 112,
          "explanation_markdown": "An array of topics described in the response.\n\nThis array is encoded as a `COMPACT_ARRAY`, which starts with a varint corresponding to the length of the array + 1, followed by each element.\n",
          "children": [
            {
              "title": "Array Length",
              "length_in_bytes": 1,
              "explanation_markdown": "The length of the topics array + 1, encoded as a varint. Here, it is 0x03 (3), indicating that the array length is 2.\n"
            },
            {
              "title": "Topic #1",
              "length_in_bytes": 72,
              "explanation_markdown": "A single topic in the array.\n",
              "children": [
                {
                  "title": "Topic Name",
                  "length_in_bytes": 4,
                  "explanation_markdown": "The name of the topic, encoded as a `COMPACT_STRING`.\n",
                  "children": [
                    {
                      "title": "String Length",
                      "length_in_bytes": 1,
                      "explanation_markdown": "The length of the string + 1, encoded as a varint. Here, it is 0x04 (4), indicating that the string length is 3.\n"
                    },
                    {
                      "title": "String Content",
                      "length_in_bytes": 3,
                      "explanation_markdown": "The content of the string: \"qux\".\n"
                    }
                  ]
                },
                {
                  "title": "Partitions Array",
                  "length_in_bytes": 67,
                  "explanation_markdown": "An array of partitions for this topic.\n",
                  "children": [
                    {
                      "title": "Array Length",
                      "length_in_bytes": 1,
                      "explanation_markdown": "The length of the partitions array + 1, encoded as a varint. Here, it is 0x03 (3), indicating that the array length is 2.\n"
                    },
                    {
                      "title": "Partition 0",
                      "length_in_bytes": 33,
                      "explanation_markdown": "Information about the first partition.\n",
                      "children": [
                        {
                          "title": "Partition ID",
                          "length_in_bytes": 4,
                          "explanation_markdown": "A 4-byte integer representing the ID of this partition.\nHere, it is 0x00000000 (0 in decimal).\n"
                        },
                        {
                          "title": "Error Code",
                          "length_in_bytes": 2,
                          "explanation_markdown": "A 2-byte integer representing the error code for this partition.\nHere, it is 0x0000 (0 in decimal), indicating NO_ERROR.\n"
                        },
                        {
                          "title": "Base Offset",
                          "length_in_bytes": 8,
                          "explanation_markdown": "An 8-byte integer representing the base offset of the first record in this partition.\n\nHere, it is 0x0000000000000000 (0 in decimal).\n"
                        },
                        {
                          "title": "Log Append Time",
                          "length_in_bytes": 8,
                          "explanation_markdown": "An 8-byte integer representing the timestamp when the records were appended to the log.\n\nHere, it is 0xffffffffffffffff (-1 in decimal).\n"
                        },
                        {
                          "title": "Log Start Offset",
                          "length_in_bytes": 8,
                          "explanation_markdown": "An 8-byte integer representing the earliest available offset within this partition's log.\n\nHere, it is 0x0000000000000000 (0 in decimal).\n"
                        },
                        {
                          "title": "Record Errors Array",
                          "length_in_bytes": 1,
                          "explanation_markdown": "An array of record-level errors, encoded as a varint.\n\nHere, it is 0x01 (1 in decimal), indicating that the array length is 0.\n"
                        },
                        {
                          "title": "Error Message",
                          "length_in_bytes": 1,
                          "explanation_markdown": "An optional error message providing additional context about the error, encoded as a `COMPACT_NULLABLE_STRING`.\n\nHere, it is 0x00, indicating a NULL string.\n"
                        },
                        {
                          "title": "Tag Buffer",
                          "length_in_bytes": 1,
                          "explanation_markdown": "An empty tagged field array, represented by a single byte of value 0x00.\n"
                        }
                      ]
                    },
                    {
                      "title": "Partition 1",
                      "length_in_bytes": 33,
                      "explanation_markdown": "Information about the second partition.\n",
                      "children": [
                        {
                          "title": "Partition ID",
                          "length_in_bytes": 4,
                          "explanation_markdown": "A 4-byte integer representing the ID of this partition.\nHere, it is 0x00000001 (1 in decimal).\n"
                        },
                        {
                          "title": "Error Code",
                          "length_in_bytes": 2,
                          "explanation_markdown": "A 2-byte integer representing the error code for this partition.\nHere, it is 0x0000 (0 in decimal), indicating NO_ERROR.\n"
                        },
                        {
                          "title": "Base Offset",
                          "length_in_bytes": 8,
                          "explanation_markdown": "An 8-byte integer representing the base offset of the first record in this partition.\n\nHere, it is 0x0000000000000000 (0 in decimal).\n"
                        },
                        {
                          "title": "Log Append Time",
                          "length_in_bytes": 8,
                          "explanation_markdown": "An 8-byte integer representing the timestamp when the records were appended to the log.\n\nHere, it is 0xffffffffffffffff (-1 in decimal).\n"
                        },
                        {
                          "title": "Log Start Offset",
                          "length_in_bytes": 8,
                          "explanation_markdown": "An 8-byte integer representing the earliest available offset within this partition's log.\n\nHere, it is 0x0000000000000000 (0 in decimal).\n"
                        },
                        {
                          "title": "Record Errors Array",
                          "length_in_bytes": 1,
                          "explanation_markdown": "An array of record-level errors, encoded as a varint.\n\nHere, it is 0x01 (1 in decimal), indicating that the array length is 0.\n"
                        },
                        {
                          "title": "Error Message",
                          "length_in_bytes": 1,
                          "explanation_markdown": "An optional error message providing additional context about the error, encoded as a `COMPACT_NULLABLE_STRING`.\n\nHere, it is 0x00, indicating a NULL string.\n"
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
            },
            {
              "title": "Topic #2",
              "length_in_bytes": 39,
              "explanation_markdown": "A single topic in the array.\n",
              "children": [
                {
                  "title": "Topic Name",
                  "length_in_bytes": 4,
                  "explanation_markdown": "The name of the topic, encoded as a `COMPACT_STRING`.\n",
                  "children": [
                    {
                      "title": "String Length",
                      "length_in_bytes": 1,
                      "explanation_markdown": "The length of the string + 1, encoded as a varint. Here, it is 0x04 (4), indicating that the string length is 3.\n"
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
                  "length_in_bytes": 34,
                  "explanation_markdown": "An array of partitions for this topic.\n",
                  "children": [
                    {
                      "title": "Array Length",
                      "length_in_bytes": 1,
                      "explanation_markdown": "The length of the partitions array + 1, encoded as a varint. Here, it is 0x02 (2), indicating that the array length is 1.\n"
                    },
                    {
                      "title": "Partition 0",
                      "length_in_bytes": 33,
                      "explanation_markdown": "Information about the first partition.\n",
                      "children": [
                        {
                          "title": "Partition ID",
                          "length_in_bytes": 4,
                          "explanation_markdown": "A 4-byte integer representing the ID of this partition.\nHere, it is 0x00000000 (0 in decimal).\n"
                        },
                        {
                          "title": "Error Code",
                          "length_in_bytes": 2,
                          "explanation_markdown": "A 2-byte integer representing the error code for this partition.\nHere, it is 0x0000 (0 in decimal), indicating NO_ERROR.\n"
                        },
                        {
                          "title": "Base Offset",
                          "length_in_bytes": 8,
                          "explanation_markdown": "An 8-byte integer representing the base offset of the first record in this partition.\n\nHere, it is 0x0000000000000000 (0 in decimal).\n"
                        },
                        {
                          "title": "Log Append Time",
                          "length_in_bytes": 8,
                          "explanation_markdown": "An 8-byte integer representing the timestamp when the records were appended to the log.\n\nHere, it is 0xffffffffffffffff (-1 in decimal).\n"
                        },
                        {
                          "title": "Log Start Offset",
                          "length_in_bytes": 8,
                          "explanation_markdown": "An 8-byte integer representing the earliest available offset within this partition's log.\n\nHere, it is 0x0000000000000000 (0 in decimal).\n"
                        },
                        {
                          "title": "Record Errors Array",
                          "length_in_bytes": 1,
                          "explanation_markdown": "An array of record-level errors.\n",
                          "children": [
                            {
                              "title": "Array Length",
                              "length_in_bytes": 1,
                              "explanation_markdown": "The length of the record errors array + 1, encoded as a varint. Here, it is 0x01 (1), indicating that the array length is 0.\n"
                            }
                          ]
                        },
                        {
                          "title": "Error Message",
                          "length_in_bytes": 1,
                          "explanation_markdown": "A nullable string containing an error message.\nHere, it is 0x00, indicating a null value.\n"
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
          "title": "Throttle Time",
          "length_in_bytes": 4,
          "explanation_markdown": "A 4-byte integer that represents the duration in milliseconds for which the request was throttled due to quota violation.\n\nHere, it is 0x00000000 (0 in decimal), indicating no throttling.\n"
        },
        {
          "title": "Tag Buffer",
          "length_in_bytes": 1,
          "explanation_markdown": "An empty tagged field array, represented by a single byte of value 0x00.\n"
        }
      ]
    }
  ]
}

export default generated;
