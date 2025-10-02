// GENERATED FILE - DO NOT EDIT DIRECTLY - RUN make generate_data_from_yaml INSTEAD
import type { GeneratedData } from "binspec-visualizer/lib/format";

const generated: GeneratedData = {
  "name": "Kafka ApiVersions Request (v4)",
  "slug": "kafka-api-versions-request-v4",
  "data": [
    0,
    0,
    0,
    35,
    0,
    18,
    0,
    4,
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
    10,
    107,
    97,
    102,
    107,
    97,
    45,
    99,
    108,
    105,
    4,
    48,
    46,
    49,
    0
  ],
  "segments": [
    {
      "title": "Message Size",
      "length_in_bytes": 4,
      "explanation_markdown": "Message Size is a 4-byte big-endian integer indicating the size of the rest of the message. All Kafka requests and responses start with this field.\n\nIn this case, the value is 0x23 (35 in decimal) indicating that the rest of the message is 35 bytes long.\n"
    },
    {
      "title": "Request Header (v2)",
      "length_in_bytes": 20,
      "explanation_markdown": "The Request Header structure is common across all Kafka requests. It contains information on the API Key this request is for, the version of that API, and more.\n",
      "children": [
        {
          "title": "API Key",
          "length_in_bytes": 2,
          "explanation_markdown": "The API key is a 2-byte integer that identifies the API Key that this request is for.\n\nHere it is 0x12 (18), which corresponds to ApiVersions.\n"
        },
        {
          "title": "API Version",
          "length_in_bytes": 2,
          "explanation_markdown": "The API version is a 2-byte integer indicating the version of the API being used.\n\nHere, it is 0x04 (4) which corresponds to v4 of the APIVersions API.\n"
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
      "title": "APIVersions Request Body (v4)",
      "length_in_bytes": 15,
      "explanation_markdown": "The request body contains fields specific to the APIVersions request.\n",
      "children": [
        {
          "title": "Client ID",
          "length_in_bytes": 10,
          "explanation_markdown": "The Client ID in the body, represented as a compact string.\n",
          "children": [
            {
              "title": "Length",
              "length_in_bytes": 1,
              "explanation_markdown": "The length of the Client ID compact string, represented as a single byte. Here, it is 0x0A (10).\n"
            },
            {
              "title": "Contents",
              "length_in_bytes": 9,
              "explanation_markdown": "The actual Client ID string. In this case, it is \"kafka-cli\" encoded in UTF-8.\n"
            }
          ]
        },
        {
          "title": "Client Software Version",
          "length_in_bytes": 4,
          "explanation_markdown": "The Client Software Version, represented as a compact string.\n",
          "children": [
            {
              "title": "Length",
              "length_in_bytes": 1,
              "explanation_markdown": "The length of the Client Software Version compact string, represented as a single byte. Here, it is 0x04 (4).\n"
            },
            {
              "title": "Contents",
              "length_in_bytes": 3,
              "explanation_markdown": "The actual Client Software Version string. In this case, it is \"0.1\" encoded in UTF-8.\n"
            }
          ]
        },
        {
          "title": "Tag buffer",
          "length_in_bytes": 1,
          "explanation_markdown": "An empty tagged field array, represented by a single byte of value 0x00.\n"
        }
      ]
    }
  ]
}

export default generated;
