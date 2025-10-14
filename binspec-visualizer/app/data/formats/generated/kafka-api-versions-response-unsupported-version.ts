// GENERATED FILE - DO NOT EDIT DIRECTLY - RUN make generate_data_from_yaml INSTEAD
import type { GeneratedData } from "binspec-visualizer/lib/format";

const generated: GeneratedData = {
  "name": "Kafka ApiVersions Error Response (v0)",
  "slug": "kafka-api-versions-response-unsupported-version",
  "data": [
    0,
    0,
    0,
    16,
    0,
    0,
    0,
    7,
    0,
    35,
    0,
    0,
    0,
    1,
    0,
    18,
    0,
    0,
    0,
    4
  ],
  "segments": [
    {
      "title": "Message Size",
      "length_in_bytes": 4,
      "explanation_markdown": "Message Size is a 4-byte big-endian integer indicating the size of the rest of the message. All Kafka responses start with this field.\n\nIn this case, the value is 0x10 (16 in decimal) indicating that the rest of the message is 16 bytes long.\n"
    },
    {
      "title": "Response Header (v0)",
      "explanation_markdown": "The Response Header structure is common across all Kafka responses.\n\nAPIVersions uses the older version of Response Headers (v0), to keep this API compatible across all clients.\n\nYou can read more about this [here](https://github.com/apache/kafka/blob/654ebe10f4a5c31e449b2a2ef6c284254ed7dceb/clients/src/main/resources/common/message/ApiVersionsResponse.json#L24)\n\nv0 headers and v1 headers are nearly identical, the only difference is that v1 contains an additional `tag_buffer` field at the end.\n",
      "children": [
        {
          "title": "Correlation ID",
          "length_in_bytes": 4,
          "explanation_markdown": "The Correlation ID is a 4-byte big-endian integer that matches the ID sent in the corresponding request.\n\nHere, it is 0x07 (7).\n"
        }
      ]
    },
    {
      "title": "ApiVersions Response Body (v0)",
      "explanation_markdown": "The response body contains fields specific to the ApiVersions response.\n",
      "children": [
        {
          "title": "Error Code",
          "length_in_bytes": 2,
          "explanation_markdown": "A 2-byte big-endian integer representing the error code for this response.\n\nHere, it is 0x0023 (35), which corresponds to UNSUPPORTED_VERSION.\nYou can find all the error codes [here](https://kafka.apache.org/protocol.html#protocol_error_codes)\n"
        },
        {
          "title": "API Keys Array",
          "explanation_markdown": "An array of API Keys supported by this Kafka instance.\n\nThis array is encoded as an `ARRAY` type, which starts with a int32 corresponding to the length of the array, followed by each element.\n\nNote: In all versions except for v0, this value is encoded as a `COMPACT_ARRAY`. In v0, it is encoded as a `ARRAY`.\n",
          "children": [
            {
              "title": "Array Length",
              "length_in_bytes": 4,
              "explanation_markdown": "The length of the API Keys array, encoded as a int32. Here, it is 0x01 (1), meaning that the array length is 1.\n"
            },
            {
              "title": "API Version #1",
              "explanation_markdown": "A single API Version in the array.\n",
              "children": [
                {
                  "title": "API Key",
                  "length_in_bytes": 2,
                  "explanation_markdown": "A 2-byte big-endian integer representing the API Key for this API Version.\n\nHere, it is 0x0012 (18), which corresponds to the ApiVersions API.\n"
                },
                {
                  "title": "Min Supported API Version",
                  "length_in_bytes": 2,
                  "explanation_markdown": "A 2-byte big-endian integer representing the minimum supported API Version for this API.\nHere, it is 0x0000 (0), which means that the ApiVersions API supports versions 0 and up.\n"
                },
                {
                  "title": "Max Supported API Version",
                  "length_in_bytes": 2,
                  "explanation_markdown": "A 2-byte big-endian integer representing the maximum supported API Version for this API.\nHere, it is 0x0004 (4), which means that the ApiVersions API supports versions upto 4.\n"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

export default generated;
