// GENERATED FILE - DO NOT EDIT DIRECTLY - RUN make generate_data_from_yaml INSTEAD
import type { GeneratedData } from "binspec-visualizer/lib/format";

const generated: GeneratedData = {
  "name": "Kafka DescribeTopicPartitions Response (v0) - Unknown Topic",
  "slug": "kafka-describe-topic-partitions-response-v0-unknown-topic",
  "data": [
    0,
    0,
    0,
    41,
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
    3,
    4,
    102,
    111,
    111,
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
              "title": "Topic #1",
              "explanation_markdown": "A single topic in the array.\n",
              "children": [
                {
                  "title": "Error Code",
                  "length_in_bytes": 2,
                  "explanation_markdown": "A 2-byte integer representing the error code for this topic.\n\nHere, it is 0x0003 (3), which corresponds to UNKNOWN_TOPIC.\n"
                },
                {
                  "title": "Topic Name",
                  "length_in_bytes": 4,
                  "explanation_markdown": "The topic name encoded as a `COMPACT_STRING`, which starts with a varint corresponding to the length of the string + 1, followed by the string itself encoded in UTF-8.\n",
                  "children": [
                    {
                      "title": "Length",
                      "length_in_bytes": 1,
                      "explanation_markdown": "The length of the topic name + 1, encoded as a varint. Here, it is 0x04 (4), meaning that the topic name is 3 bytes long.\n"
                    },
                    {
                      "title": "Contents",
                      "length_in_bytes": 3,
                      "explanation_markdown": "The actual topic name. In this case, it is \"foo\" encoded in UTF-8.\n"
                    }
                  ]
                },
                {
                  "title": "Topic ID",
                  "length_in_bytes": 16,
                  "explanation_markdown": "A 16-byte UUID representing the unique identifier for this topic.\n\nHere, it is all zeros (00000000-0000-0000-0000-000000000000), which indicates an unassigned or null UUID.\n"
                },
                {
                  "title": "Is Internal",
                  "length_in_bytes": 1,
                  "explanation_markdown": "A boolean indicating whether the topic is internal.\n\nHere, it is 0x00 (false).\n"
                },
                {
                  "title": "Partitions Array",
                  "length_in_bytes": 1,
                  "explanation_markdown": "A `COMPACT_ARRAY` of partitions for this topic, which contains the length + 1 encoded as a varint, followed by the contents.\n\nHere, the length is 0x01 (1), indicating an empty array.\n"
                },
                {
                  "title": "Topic Authorized Operations",
                  "length_in_bytes": 4,
                  "explanation_markdown": "A 4-byte integer (bitfield) representing the authorized operations for this topic.\n\nHere, the value is 0x00000df8, which is the following in binary:\n\n```\n0000 1101 1111 1000\n```\n\nThis corresponds to the following operations:\n\n- READ (bit index 3 from the right)\n- WRITE (bit index 4 from the right)\n- CREATE (bit index 5 from the right)\n- DELETE (bit index 6 from the right)\n- ALTER (bit index 7 from the right)\n- DESCRIBE (bit index 8 from the right)\n- DESCRIBE_CONFIGS (bit index 10 from the right)\n- ALTER_CONFIGS (bit index 11 from the right)\n\nThe full list of operations can be found [here](https://github.com/apache/kafka/blob/1962917436f463541f9bb63791b7ed55c23ce8c1/clients/src/main/java/org/apache/kafka/common/acl/AclOperation.java#L44).\n"
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
