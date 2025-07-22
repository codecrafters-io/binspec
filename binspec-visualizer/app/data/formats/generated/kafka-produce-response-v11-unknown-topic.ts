// GENERATED FILE - DO NOT EDIT DIRECTLY - RUN make generate_data_from_yaml INSTEAD
import type { GeneratedData } from "binspec-visualizer/lib/format";

const generated: GeneratedData = {
  "name": "Kafka Produce Response (v11) - Unknown Topic",
  "slug": "kafka-produce-response-v11-unknown-topic",
  "data": [
    0,
    0,
    0,
    50,
    0,
    0,
    0,
    7,
    0,
    2,
    4,
    113,
    117,
    122,
    2,
    0,
    0,
    0,
    0,
    0,
    3,
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
      "explanation_markdown": "Message Size is a 4-byte big-endian integer indicating the size of the rest of the message. All Kafka responses start with this field.\n\nIn this case, the value is `0x32`, which is `50` in decimal, indicating that the rest of the message is 50 bytes long.\n"
    },
    {
      "title": "Response Header (v1)",
      "explanation_markdown": "The Response Header structure is common across all Kafka responses. It contains the Correlation ID that matches the request.\n",
      "children": [
        {
          "title": "Correlation ID",
          "length_in_bytes": 4,
          "explanation_markdown": "The Correlation ID is a 4-byte integer that matches the ID sent in the corresponding request.\n\nHere, it is `0x07`, which is `7` in decimal.\n"
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
      "explanation_markdown": "The response body contains fields specific to the Produce response.\n",
      "children": [
        {
          "title": "Topic Responses Array",
          "explanation_markdown": "An array of topic responses.\n\nThis array is encoded as a `COMPACT_ARRAY`, which starts with a varint corresponding to the length of the array + 1, followed by each element.\n",
          "children": [
            {
              "title": "Array Length",
              "length_in_bytes": 1,
              "explanation_markdown": "The length of the topic responses array + 1, encoded as an unsigned varint. Here, it is `0x02`, which is `2` in decimal, meaning that the array length is 1.\n"
            },
            {
              "title": "Topic #1",
              "explanation_markdown": "A single topic in the array.\n",
              "children": [
                {
                  "title": "Topic Name",
                  "explanation_markdown": "The topic name encoded as a `COMPACT_STRING`, which starts with a varint corresponding to the length of the string + 1, followed by the string itself encoded in UTF-8.\n",
                  "children": [
                    {
                      "title": "String Length",
                      "length_in_bytes": 1,
                      "explanation_markdown": "The length of the topic name compact string + 1, represented as an unsigned varint. Here, it is 0x04 (4), indicating that the length of the topic name is 3.\n"
                    },
                    {
                      "title": "String Content",
                      "length_in_bytes": 3,
                      "explanation_markdown": "The actual topic name string. In this case, it is \"quz\" encoded in UTF-8.\n"
                    }
                  ]
                },
                {
                  "title": "Partition Responses Array",
                  "explanation_markdown": "An array of partition responses for this topic.\n\nThis array is encoded as a `COMPACT_ARRAY`, which starts with a varint corresponding to the length of the array + 1, followed by each element.\n",
                  "children": [
                    {
                      "title": "Array Length",
                      "length_in_bytes": 1,
                      "explanation_markdown": "The length of the partition array + 1, encoded as an unsigned varint. Here, it is `0x02`, which is `2` in decimal, meaning that the array length is 1.\n"
                    },
                    {
                      "title": "Partition #1",
                      "explanation_markdown": "Information about the first partition.\n",
                      "children": [
                        {
                          "title": "Partition ID",
                          "length_in_bytes": 4,
                          "explanation_markdown": "A 4-byte integer representing the partition index.\n\nHere, it is `0x00000000`, which is `0` in decimal, which corresponds to partition 0.\n"
                        },
                        {
                          "title": "Error Code",
                          "length_in_bytes": 2,
                          "explanation_markdown": "A 2-byte integer representing the error code for this partition.\n\nHere, it is `0x0003`, which is `3` in decimal, which corresponds to `UNKNOWN_TOPIC_OR_PARTITION`. You can find all error codes [here](https://kafka.apache.org/protocol.html#protocol_error_codes).\n"
                        },
                        {
                          "title": "Base Offset",
                          "length_in_bytes": 8,
                          "explanation_markdown": "An 8-byte integer representing the base offset of the batch.\n\nHere, it is `0xffffffffffffffff`, which is `-1` in decimal, indicating an error.\n"
                        },
                        {
                          "title": "Log Append Time",
                          "length_in_bytes": 8,
                          "explanation_markdown": "An 8-byte integer representing the timestamp assigned to the batch by the broker.\n\nHere, it is `0xffffffffffffffff`, which is `-1` in decimal, indicating an error or when the broker is configured with `CreateTime`.\n"
                        },
                        {
                          "title": "Log Start Offset",
                          "length_in_bytes": 8,
                          "explanation_markdown": "An 8-byte integer representing the start offset of the log.\n\nHere, it is `0xffffffffffffffff`, which is `-1` in decimal, indicating an error.\n"
                        },
                        {
                          "title": "Record Errors Array",
                          "explanation_markdown": "An array of record-level errors.\n\nThis array is encoded as a `COMPACT_ARRAY`, which starts with a varint corresponding to the length of the array + 1, followed by each element.\n",
                          "children": [
                            {
                              "title": "Array Length",
                              "length_in_bytes": 1,
                              "explanation_markdown": "The length of the record errors array + 1, encoded as an unsigned varint. Here, it is `0x01`, which is `1` in decimal, meaning the array length is 0.\n"
                            }
                          ]
                        },
                        {
                          "title": "Error Message",
                          "length_in_bytes": 1,
                          "explanation_markdown": "A nullable compact string containing a detailed error message.\n\nHere, it is `0x00`, which is `0` in decimal, indicating a null string.\n"
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
          "explanation_markdown": "A 4-byte integer that represents the duration in milliseconds for which the request was throttled due to quota violation.\n\nHere, it is `0x00000000`, which is `0` in decimal, indicating no throttling.\n"
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
