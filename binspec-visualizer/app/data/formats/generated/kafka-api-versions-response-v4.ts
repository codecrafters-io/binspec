// GENERATED FILE - DO NOT EDIT DIRECTLY - RUN make generate_data_from_yaml INSTEAD
import type { GeneratedData } from "binspec-visualizer/lib/format";

const generated: GeneratedData = {
  "name": "Kafka API Versions Response (v4)",
  "slug": "kafka-api-versions-Response-v4",
  "data": [
    0,
    0,
    0,
    33,
    0,
    0,
    0,
    7,
    0,
    0,
    4,
    0,
    1,
    0,
    0,
    0,
    17,
    0,
    0,
    18,
    0,
    0,
    0,
    4,
    0,
    0,
    75,
    0,
    0,
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
      "explanation_markdown": "Message Size is a 4-byte big-endian integer indicating the size of the rest of the message. All Kafka responses start with this field.\n\nIn this case, the value is 0x21 (33 in decimal) indicating that the rest of the message is 33 bytes long.\n"
    },
    {
      "title": "Response Header (v0)",
      "explanation_markdown": "The Response Header structure is common across all Kafka responses.\n\nAPIVersions uses the older version of Response Headers (v0), to keep this API compatible across all clients.\n\nYou can read more about this [here](https://github.com/apache/kafka/blob/654ebe10f4a5c31e449b2a2ef6c284254ed7dceb/clients/src/main/resources/common/message/ApiVersionsResponse.json#L24)\n\nv0 headers and v1 headers are nearly identical, the only difference is that v1 contains an additional `tag_buffer` field at the end.\n",
      "children": [
        {
          "title": "Correlation ID",
          "length_in_bytes": 4,
          "explanation_markdown": "The Correlation ID is a 4-byte integer that matches the ID sent in the corresponding request.\n\nHere, it is 0x07 (7).\n"
        }
      ]
    },
    {
      "title": "API Versions Response Body (v4)",
      "explanation_markdown": "The response body contains fields specific to the API Versions response.\n",
      "children": [
        {
          "title": "Error Code",
          "length_in_bytes": 2,
          "explanation_markdown": "A 2-byte integer representing the error code for this response.\n\nHere, it is 0x0000 (0), which corresponds to NO_ERROR.\n"
        },
        {
          "title": "API Versions Array",
          "explanation_markdown": "An array of API Versions described in the response.\n\nThis array is encoded as a `COMPACT_ARRAY`, which starts with a varint corresponding to the length of the array + 1, followed by each element.\n",
          "children": [
            {
              "title": "Array Length",
              "length_in_bytes": 1,
              "explanation_markdown": "The length of the API Versions array + 1, encoded as a varint. Here, it is 0x04 (4), meaning that the array length is 3.\n"
            },
            {
              "title": "API Version #1",
              "explanation_markdown": "A single API Version in the array.\n",
              "children": [
                {
                  "title": "API Key",
                  "length_in_bytes": 2,
                  "explanation_markdown": "A 2-byte integer representing the API Key for this entry.\n\nHere, it is 0x0001 (1), which corresponds to the Fetch API.\n"
                },
                {
                  "title": "Min Supported API Version",
                  "length_in_bytes": 2,
                  "explanation_markdown": "A 2-byte integer representing the minimum supported API Version for this entry. \nHere, it is 0x0000 (0), which means that the Fetch API supports versions 0 and up.\n"
                },
                {
                  "title": "Max Supported API Version",
                  "length_in_bytes": 2,
                  "explanation_markdown": "A 2-byte integer representing the maximum supported API Version for this entry.\nHere, it is 0x0011 (17), which means that the Fetch API supports versions upto 17.\n"
                },
                {
                  "title": "Tag Buffer",
                  "length_in_bytes": 1,
                  "explanation_markdown": "An empty tagged field array for the response, represented by a single byte of value 0x00.\n"
                }
              ]
            },
            {
              "title": "API Version #2",
              "explanation_markdown": "A single API Version in the array.\n",
              "children": [
                {
                  "title": "API Key",
                  "length_in_bytes": 2,
                  "explanation_markdown": "A 2-byte integer representing the API Key for this entry.\n\nHere, it is 0x0012 (18), which corresponds to the APIVersions API.\n"
                },
                {
                  "title": "Min Supported API Version",
                  "length_in_bytes": 2,
                  "explanation_markdown": "A 2-byte integer representing the minimum supported API Version for this entry. \nHere, it is 0x0000 (0), which means that the APIVersions API supports versions 0 and up.\n"
                },
                {
                  "title": "Max Supported API Version",
                  "length_in_bytes": 2,
                  "explanation_markdown": "A 2-byte integer representing the maximum supported API Version for this entry.\nHere, it is 0x0004 (4), which means that the APIVersions API supports versions upto 4.\n"
                },
                {
                  "title": "Tag Buffer",
                  "length_in_bytes": 1,
                  "explanation_markdown": "An empty tagged field array for the response, represented by a single byte of value 0x00.\n"
                }
              ]
            },
            {
              "title": "API Version #3",
              "explanation_markdown": "A single API Version in the array.\n",
              "children": [
                {
                  "title": "API Key",
                  "length_in_bytes": 2,
                  "explanation_markdown": "A 2-byte integer representing the API Key for this entry.\n\nHere, it is 0x004b (75), which corresponds to the DescribeTopicPartitions API.\n"
                },
                {
                  "title": "Min Supported API Version",
                  "length_in_bytes": 2,
                  "explanation_markdown": "A 2-byte integer representing the minimum supported API Version for this entry. \nHere, it is 0x0000 (0), which means that the DescribeTopicPartitions API supports versions 0 and up.\n"
                },
                {
                  "title": "Max Supported API Version",
                  "length_in_bytes": 2,
                  "explanation_markdown": "A 2-byte integer representing the maximum supported API Version for this entry.\nHere, it is 0x0000 (0), which means that the DescribeTopicPartitions API supports versions upto 0.\n"
                },
                {
                  "title": "Tag Buffer",
                  "length_in_bytes": 1,
                  "explanation_markdown": "An empty tagged field array for the response, represented by a single byte of value 0x00.\n"
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
