// GENERATED FILE - DO NOT EDIT DIRECTLY - RUN make generate_data_from_yaml INSTEAD
import type { GeneratedData } from "binspec-visualizer/lib/format";

const generated: GeneratedData = {
  "name": "Kafka Produce Unknown Topic or Partition Response (v11)",
  "slug": "kafka-produce-unknown-topic-or-partition-response-v11",
  "data": [
    0,
    0,
    0,
    51,
    0,
    0,
    0,
    7,
    0,
    2,
    5,
    112,
    101,
    97,
    114,
    2,
    255,
    255,
    255,
    255,
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
      "explanation_markdown": "Message Size is a 4-byte big-endian integer indicating the size of the rest of the message. All Kafka responses start with this field.\n\nIn this case, the value is 0x00000033 (51 in decimal) indicating that the rest of the message is 51 bytes long.\n"
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
      "length_in_bytes": 46,
      "explanation_markdown": "The response body contains fields specific to the Produce response.\n",
      "children": [
        {
          "title": "Topic Responses Array",
          "length_in_bytes": 41,
          "explanation_markdown": "An array of topics described in the response.\n\nThis array is encoded as a `COMPACT_ARRAY`, which starts with a varint corresponding to the length of the array + 1, followed by each element.\n",
          "children": [
            {
              "title": "Array Length",
              "length_in_bytes": 1,
              "explanation_markdown": "The length of the topics array + 1, encoded as a varint. Here, it is 0x02 (2), indicating that the array length is 1.\n"
            },
            {
              "title": "Topic #1",
              "length_in_bytes": 40,
              "explanation_markdown": "A single topic in the array.\n",
              "children": [
                {
                  "title": "Topic Name",
                  "length_in_bytes": 5,
                  "explanation_markdown": "The name of the topic, encoded as a `COMPACT_STRING`.\n",
                  "children": [
                    {
                      "title": "String Length",
                      "length_in_bytes": 1,
                      "explanation_markdown": "The length of the string + 1, encoded as a varint. Here, it is 0x05 (5), indicating that the string length is 4.\n"
                    },
                    {
                      "title": "String Content",
                      "length_in_bytes": 4,
                      "explanation_markdown": "The content of the string: \"pear\".\n"
                    }
                  ]
                },
                {
                  "title": "Partition Responses Array",
                  "length_in_bytes": 34,
                  "explanation_markdown": "An array of partitions for this topic.\n",
                  "children": [
                    {
                      "title": "Array Length",
                      "length_in_bytes": 1,
                      "explanation_markdown": "The length of the partitions array + 1, encoded as a varint. Here, it is 0x02 (2), indicating that the array length is 1.\n"
                    },
                    {
                      "title": "Partition Response #1",
                      "length_in_bytes": 33,
                      "explanation_markdown": "Information about the first partition.\n",
                      "children": [
                        {
                          "title": "Partition Index",
                          "length_in_bytes": 4,
                          "explanation_markdown": "A 4-byte integer representing the index of this partition.\n\nHere, it is 0xffffffff (-1 in decimal).\n"
                        },
                        {
                          "title": "Error Code",
                          "length_in_bytes": 2,
                          "explanation_markdown": "A 2-byte integer representing the error code for this partition.\n\nHere, it is 0x0003 (3 in decimal), which corresponds to UNKNOWN_TOPIC_OR_PARTITION, indicating the topic or partition doesn't exist.\n"
                        },
                        {
                          "title": "Base Offset",
                          "length_in_bytes": 8,
                          "explanation_markdown": "An 8-byte integer representing the base offset of this partition. For errors, this is -1.\n\nHere, it is 0xffffffffffffffff (-1 in decimal), indicating the offset is invalid due to the error.\n"
                        },
                        {
                          "title": "Log Append Time",
                          "length_in_bytes": 8,
                          "explanation_markdown": "An 8-byte integer representing the timestamp when the message was appended to the log. For errors, this is -1.\n\nHere, it is 0xffffffffffffffff (-1 in decimal), indicating no timestamp due to the error.\n"
                        },
                        {
                          "title": "Log Start Offset",
                          "length_in_bytes": 8,
                          "explanation_markdown": "An 8-byte integer representing the earliest offset available in this partition's log. For errors, this is -1.\n\nHere, it is 0xffffffffffffffff (-1 in decimal), indicating this information is unavailable due to the error.\n"
                        },
                        {
                          "title": "Record Errors Array",
                          "length_in_bytes": 1,
                          "explanation_markdown": "An array of per-record errors within the batch.\n",
                          "children": [
                            {
                              "title": "Array Length",
                              "length_in_bytes": 1,
                              "explanation_markdown": "The length of the record errors array + 1, encoded as a unsigned varint. Here, it is 0x01 (1), indicating that the array length is 0.\n"
                            }
                          ]
                        },
                        {
                          "title": "Error Message",
                          "length_in_bytes": 1,
                          "explanation_markdown": "An optional error message providing additional context about the error, encoded as a `COMPACT_NULLABLE_STRING`.\n\nHere, it is 0x00, indicating a NULL string (no additional error message provided).\n"
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
