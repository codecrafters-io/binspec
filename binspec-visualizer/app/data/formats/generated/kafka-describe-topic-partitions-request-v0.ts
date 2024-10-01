// GENERATED FILE - DO NOT EDIT DIRECTLY - RUN make generate_data_from_yaml INSTEAD
import type { GeneratedData } from "binspec-visualizer/lib/format";

const generated: GeneratedData = {
  "name": "Kafka Describe Topic Partitions Request (v0)",
  "slug": "kafka-describe-topic-partitions-request-v0",
  "data": [
    0,
    0,
    0,
    32,
    0,
    75,
    0,
    0,
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
    2,
    4,
    102,
    111,
    111,
    0,
    0,
    0,
    0,
    100,
    255,
    0
  ],
  "segments": [
    {
      "title": "Message Size",
      "length_in_bytes": 4,
      "explanation_markdown": "Message Size is a 4-byte big-endian integer indicating the size of the rest of the message. All Kafka requests and responses start with this field.\n\nIn this case, the value is 0x20 (32 in decimal) indicating that the rest of the message is 32 bytes long.\n"
    },
    {
      "title": "Request Header (v2)",
      "length_in_bytes": 20,
      "explanation_markdown": "The Request Header structure is common across all Kafka requests. It contains information on the API Key this request is for, the version of that API, and more.\n",
      "children": [
        {
          "title": "API Key",
          "length_in_bytes": 2,
          "explanation_markdown": "The API key is a 2-byte integer that identifies the API Key that this request is for.\n\nHere it is 0x4b (75), which corresponds to DescribeTopicPartitions.\n"
        },
        {
          "title": "API Version",
          "length_in_bytes": 2,
          "explanation_markdown": "The API version is a 2-byte integer indicating the version of the API being used.\n\nHere, it is 0x00 (0) which corresponds to v0 of the DescribeTopicPartitions API.\n"
        },
        {
          "title": "Correlation ID",
          "length_in_bytes": 4,
          "explanation_markdown": "The Correlation ID is a 4-byte integer that will be echo-ed back in the response. When multiple requests are in-flight, this ID can be used to match responses with their corresponding requests.\n\nHere, it is 0x07 (7).\n"
        },
        {
          "title": "Client ID",
          "length_in_bytes": 11,
          "explanation_markdown": "The Client ID is a string identifying the client.\n\nHere, the value is \"kafka-cli\".\n",
          "children": [
            {
              "title": "Length",
              "length_in_bytes": 2,
              "explanation_markdown": "The Client ID length is a 2-byte integer indicating the length of the Client ID string. Here, it is 0x0009 (9).\n"
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
      "title": "DescribeTopicPartitions Request Body (v0)",
      "length_in_bytes": 12,
      "explanation_markdown": "The request body contains fields specific to the DescribeTopicPartitions request.\n",
      "children": [
        {
          "title": "Topics Array",
          "length_in_bytes": 6,
          "explanation_markdown": "An array of topics to describe.\n\nThis array is encoded as a `COMPACT_ARRAY`, which starts with a varint corresponding to the length of the array + 1, followed by each element.\n",
          "children": [
            {
              "title": "Array Length",
              "length_in_bytes": 1,
              "explanation_markdown": "The length of the topics array + 1, encoded as a varint. Here, it is 0x02 (2), meaning that the array length is 1.\n"
            },
            {
              "title": "Topic",
              "length_in_bytes": 5,
              "explanation_markdown": "A single topic in the array.\n\nThis topic is encoded as a `COMPACT_STRING`, which starts with a varint corresponding to the length of the string + 1, followed by the string itself encoded in UTF-8.\n",
              "children": [
                {
                  "title": "Topic Name Length",
                  "length_in_bytes": 1,
                  "explanation_markdown": "The length of the topic name + 1, encoded as a varint. Here, it is 0x04 (4), meaning that the topic name is 3 bytes long.\n"
                },
                {
                  "title": "Topic Name",
                  "length_in_bytes": 3,
                  "explanation_markdown": "The actual topic name. In this case, it is \"foo\" encoded in UTF-8.\n"
                },
                {
                  "title": "Topic Tag Buffer",
                  "length_in_bytes": 1,
                  "explanation_markdown": "An empty tagged field array for the topic, represented by a single byte of value 0x00.\n"
                }
              ]
            }
          ]
        },
        {
          "title": "Response Partition Limit",
          "length_in_bytes": 4,
          "explanation_markdown": "A 4-byte integer that limits the number of partitions to be returned in the response.\n\nHere, it is 0x00000064 (100 in decimal).\n"
        },
        {
          "title": "Cursor",
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
