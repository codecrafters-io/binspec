// GENERATED FILE - DO NOT EDIT DIRECTLY - RUN make generate_data_from_yaml INSTEAD
import type { GeneratedData } from "binspec-visualizer/lib/format";

const generated: GeneratedData = {
  "name": "Kafka DescribeTopicPartitions Response (v0)",
  "slug": "kafka-describe-topic-partitions-response-v0",
  "data": [
    0,
    0,
    0,
    97,
    0,
    0,
    0,
    7,
    0,
    0,
    0,
    0,
    0,
    2,
    0,
    0,
    4,
    102,
    111,
    111,
    227,
    146,
    128,
    109,
    181,
    51,
    72,
    16,
    186,
    3,
    11,
    67,
    196,
    155,
    96,
    252,
    0,
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
    1,
    0,
    0,
    0,
    0,
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
    1,
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
    1,
    0,
    0,
    0,
    0,
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
    1,
    0,
    0,
    0,
    13,
    248,
    0,
    255,
    0
  ],
  "segments": [
    {
      "title": "Message Size",
      "length_in_bytes": 4,
      "explanation_markdown": "Message Size is a 4-byte big-endian integer indicating the size of the rest of the message. All Kafka responses start with this field.\n\nIn this case, the value is 0x29 (41 in decimal) indicating that the rest of the message is 41 bytes long.\n"
    },
    {
      "title": "Response Header (v1)",
      "explanation_markdown": "The Response Header structure is common across all Kafka responses. It contains the Correlation ID that matches the request.\n",
      "children": [
        {
          "title": "Correlation ID",
          "length_in_bytes": 4,
          "explanation_markdown": "The Correlation ID is a 4-byte integer that matches the ID sent in the corresponding request.\n\nHere, it is 0x07 (7).\n"
        },
        {
          "title": "Tag buffer",
          "length_in_bytes": 1,
          "explanation_markdown": "An empty tagged field array, represented by a single byte of value 0x00.\n"
        }
      ]
    },
    {
      "title": "DescribeTopicPartitions Response Body (v0)",
      "explanation_markdown": "The response body contains fields specific to the DescribeTopicPartitions response.\n",
      "children": [
        {
          "title": "Throttle Time",
          "length_in_bytes": 4,
          "explanation_markdown": "A 4-byte integer that represents the duration in milliseconds for which the request was throttled due to quota violation.\n\nHere, it is 0x00000000 (0 in decimal), indicating no throttling.\n"
        },
        {
          "title": "Topics Array",
          "explanation_markdown": "An array of topics described in the response.\n\nThis array is encoded as a `COMPACT_ARRAY`, which starts with a varint corresponding to the length of the array + 1, followed by each element.\n",
          "children": [
            {
              "title": "Array Length",
              "length_in_bytes": 1,
              "explanation_markdown": "The length of the topics array + 1, encoded as a varint. Here, it is 0x02 (2), meaning that the array length is 1.\n"
            },
            {
              "title": "Topics",
              "explanation_markdown": "A single topic in the array.\n",
              "children": [
                {
                  "title": "Error Code",
                  "length_in_bytes": 2,
                  "explanation_markdown": "A 2-byte integer representing the error code for this topic.\nHere, it is 0x0000 (0 in decimal), indicating NO_ERROR.\n"
                },
                {
                  "title": "Topic Name",
                  "explanation_markdown": "The name of the topic, encoded as a COMPACT_STRING.\n",
                  "children": [
                    {
                      "title": "String Length",
                      "length_in_bytes": 1,
                      "explanation_markdown": "The length of the string + 1, encoded as a varint. Here, it is 0x04 (4), meaning the string length is 3.\n"
                    },
                    {
                      "title": "String Content",
                      "length_in_bytes": 3,
                      "explanation_markdown": "The content of the string: \"foo\".\n"
                    }
                  ]
                },
                {
                  "title": "Topic ID",
                  "length_in_bytes": 16,
                  "explanation_markdown": "A 16-byte UUID representing the unique identifier for this topic.\nHere, it is e392806d-b533-4810-ba03-0b43c49b60fc.\n"
                },
                {
                  "title": "Is Internal",
                  "length_in_bytes": 1,
                  "explanation_markdown": "A boolean indicating whether the topic is internal.\nHere, it is 0x00 (false).\n"
                },
                {
                  "title": "Partitions Array",
                  "explanation_markdown": "An array of partitions for this topic.\n",
                  "children": [
                    {
                      "title": "Array Length",
                      "length_in_bytes": 1,
                      "explanation_markdown": "The length of the partitions array + 1, encoded as a varint. Here, it is 0x03 (3), meaning the array length is 2.\n"
                    },
                    {
                      "title": "Partition 0",
                      "explanation_markdown": "Information about the first partition.\n",
                      "children": [
                        {
                          "title": "Error Code",
                          "length_in_bytes": 2,
                          "explanation_markdown": "A 2-byte integer representing the error code for this partition.\nHere, it is 0x0000 (0 in decimal), indicating NO_ERROR.\n"
                        },
                        {
                          "title": "Partition Index",
                          "length_in_bytes": 4,
                          "explanation_markdown": "A 4-byte integer representing the index of this partition.\nHere, it is 0x00000000 (0 in decimal).\n"
                        },
                        {
                          "title": "Leader ID",
                          "length_in_bytes": 4,
                          "explanation_markdown": "A 4-byte integer representing the ID of the leader for this partition.\nHere, it is 0x00000001 (1 in decimal).\n"
                        },
                        {
                          "title": "Leader Epoch",
                          "length_in_bytes": 4,
                          "explanation_markdown": "A 4-byte integer representing the epoch of the leader.\nHere, it is 0x00000000 (0 in decimal).\n"
                        },
                        {
                          "title": "Replica Nodes",
                          "explanation_markdown": "An array of replica node IDs for this partition.\n",
                          "children": [
                            {
                              "title": "Array Length",
                              "length_in_bytes": 1,
                              "explanation_markdown": "The length of the replica nodes array + 1, encoded as a varint. Here, it is 0x02 (2), meaning the array length is 1.\n"
                            },
                            {
                              "title": "Replica Node",
                              "length_in_bytes": 4,
                              "explanation_markdown": "A 4-byte integer representing a replica node ID.\nHere, it is 0x00000001 (1 in decimal).\n"
                            }
                          ]
                        },
                        {
                          "title": "ISR Nodes",
                          "explanation_markdown": "An array of in-sync replica node IDs for this partition.\n",
                          "children": [
                            {
                              "title": "Array Length",
                              "length_in_bytes": 1,
                              "explanation_markdown": "The length of the ISR nodes array + 1, encoded as a varint. Here, it is 0x02 (2), meaning the array length is 1.\n"
                            },
                            {
                              "title": "ISR Node",
                              "length_in_bytes": 4,
                              "explanation_markdown": "A 4-byte integer representing an in-sync replica node ID.\nHere, it is 0x00000001 (1 in decimal).\n"
                            }
                          ]
                        },
                        {
                          "title": "Eligible Leader Replicas",
                          "length_in_bytes": 1,
                          "explanation_markdown": "The count of eligible leader replicas + 1, encoded as a varint.\nHere, it is 0x01 (1), indicating 0 eligible leader replicas.\n"
                        },
                        {
                          "title": "Last Known ELR",
                          "length_in_bytes": 1,
                          "explanation_markdown": "The count of last known eligible leader replicas + 1, encoded as a varint.\nHere, it is 0x01 (1), indicating 0 last known eligible leader replicas.\n"
                        },
                        {
                          "title": "Offline Replicas",
                          "length_in_bytes": 1,
                          "explanation_markdown": "The count of offline replicas + 1, encoded as a varint.\nHere, it is 0x01 (1), indicating 0 offline replicas.\n"
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
                      "explanation_markdown": "Information about the second partition.\n",
                      "children": [
                        {
                          "title": "Error Code",
                          "length_in_bytes": 2,
                          "explanation_markdown": "A 2-byte integer representing the error code for this partition.\nHere, it is 0x0000 (0 in decimal), indicating NO_ERROR.\n"
                        },
                        {
                          "title": "Partition Index",
                          "length_in_bytes": 4,
                          "explanation_markdown": "A 4-byte integer representing the index of this partition.\nHere, it is 0x00000001 (1 in decimal).\n"
                        },
                        {
                          "title": "Leader ID",
                          "length_in_bytes": 4,
                          "explanation_markdown": "A 4-byte integer representing the ID of the leader for this partition.\nHere, it is 0x00000001 (1 in decimal).\n"
                        },
                        {
                          "title": "Leader Epoch",
                          "length_in_bytes": 4,
                          "explanation_markdown": "A 4-byte integer representing the epoch of the leader.\nHere, it is 0x00000000 (0 in decimal).\n"
                        },
                        {
                          "title": "Replica Nodes",
                          "explanation_markdown": "An array of replica node IDs for this partition.\n",
                          "children": [
                            {
                              "title": "Array Length",
                              "length_in_bytes": 1,
                              "explanation_markdown": "The length of the replica nodes array + 1, encoded as a varint. Here, it is 0x02 (2), meaning the array length is 1.\n"
                            },
                            {
                              "title": "Replica Node",
                              "length_in_bytes": 4,
                              "explanation_markdown": "A 4-byte integer representing a replica node ID.\nHere, it is 0x00000001 (1 in decimal).\n"
                            }
                          ]
                        },
                        {
                          "title": "ISR Nodes",
                          "explanation_markdown": "An array of in-sync replica node IDs for this partition.\n",
                          "children": [
                            {
                              "title": "Array Length",
                              "length_in_bytes": 1,
                              "explanation_markdown": "The length of the ISR nodes array + 1, encoded as a varint. Here, it is 0x02 (2), meaning the array length is 1.\n"
                            },
                            {
                              "title": "ISR Node",
                              "length_in_bytes": 4,
                              "explanation_markdown": "A 4-byte integer representing an in-sync replica node ID.\nHere, it is 0x00000001 (1 in decimal).\n"
                            }
                          ]
                        },
                        {
                          "title": "Eligible Leader Replicas",
                          "length_in_bytes": 1,
                          "explanation_markdown": "The count of eligible leader replicas + 1, encoded as a varint.\nHere, it is 0x01 (1), indicating 0 eligible leader replicas.\n"
                        },
                        {
                          "title": "Last Known ELR",
                          "length_in_bytes": 1,
                          "explanation_markdown": "The count of last known eligible leader replicas + 1, encoded as a varint.\nHere, it is 0x01 (1), indicating 0 last known eligible leader replicas.\n"
                        },
                        {
                          "title": "Offline Replicas",
                          "length_in_bytes": 1,
                          "explanation_markdown": "The count of offline replicas + 1, encoded as a varint.\nHere, it is 0x01 (1), indicating 0 offline replicas.\n"
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
                  "title": "Topic Authorized Operations",
                  "length_in_bytes": 4,
                  "explanation_markdown": "A 4-byte integer representing the authorized operations for this topic.\nHere, it is 0x00000df8.\n"
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
          "title": "Next Cursor",
          "length_in_bytes": 1,
          "explanation_markdown": "A nullable field that can be used for pagination.\n\nHere, it is 0xff, indicating a null value.\n"
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
