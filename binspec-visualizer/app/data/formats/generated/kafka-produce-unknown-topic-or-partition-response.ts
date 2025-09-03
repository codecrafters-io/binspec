// GENERATED FILE - DO NOT EDIT DIRECTLY - RUN make generate_data_from_yaml INSTEAD
import type { GeneratedData } from "binspec-visualizer/lib/format";

const generated: GeneratedData = {
  "name": "Kafka Produce Unknown Topic or Partition Response (v11)",
  "slug": "kafka-produce-unknown-topic-or-partition-response-v11",
  "data": [
    0,
    0,
    0,
    68,
    55,
    137,
    169,
    28,
    0,
    2,
    22,
    117,
    110,
    107,
    110,
    111,
    119,
    110,
    95,
    105,
    110,
    118,
    97,
    108,
    105,
    100,
    95,
    116,
    111,
    112,
    105,
    99,
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
      "explanation_markdown": "Message Size is a 4-byte big-endian integer indicating the size of the rest of the message. All Kafka responses start with this field.\n\nIn this case, the value is 0x44 (68 in decimal) indicating that the rest of the message is 68 bytes long.\n"
    },
    {
      "title": "Response Header (v1)",
      "length_in_bytes": 5,
      "explanation_markdown": "The Response Header structure is common across all Kafka responses. It contains the correlation ID that matches the request and tagged fields for extensibility.\n",
      "children": [
        {
          "title": "Correlation ID",
          "length_in_bytes": 4,
          "explanation_markdown": "The Correlation ID is a 4-byte integer that matches the ID sent in the corresponding Produce request. This allows clients to correlate responses with their requests when multiple requests are in-flight.\n\nHere, it is 0x3789a91c (931768604 in decimal).\n"
        },
        {
          "title": "Tag Buffer",
          "length_in_bytes": 1,
          "explanation_markdown": "An empty tagged field array for the response header, represented by a single byte of value 0x00.\n"
        }
      ]
    },
    {
      "title": "Produce Response Body (v11)",
      "length_in_bytes": 63,
      "explanation_markdown": "The response body contains fields specific to the Produce response, including topic responses and throttling information.\n",
      "children": [
        {
          "title": "Topic Responses Array",
          "length_in_bytes": 58,
          "explanation_markdown": "A compact array containing responses for each topic in the original request. The first byte indicates the array length + 1.\n\nHere the value is 0x02, indicating an actual array length of 1.\n",
          "children": [
            {
              "title": "Topic Array Length",
              "length_in_bytes": 1,
              "explanation_markdown": "Compact array length (actual length + 1). Value of 0x02 means 1 topic response.\n"
            },
            {
              "title": "Topic #1",
              "length_in_bytes": 57,
              "explanation_markdown": "Response for the topic \"unknown_invalid_topic\" which doesn't exist, resulting in an error.\n",
              "children": [
                {
                  "title": "Topic Name",
                  "length_in_bytes": 22,
                  "explanation_markdown": "Topic name as a compact string.\n",
                  "children": [
                    {
                      "title": "Length",
                      "length_in_bytes": 1,
                      "explanation_markdown": "Compact string length (actual length + 1). Value of 0x16 means 21 characters.\n"
                    },
                    {
                      "title": "Contents",
                      "length_in_bytes": 21,
                      "explanation_markdown": "The topic name \"unknown_invalid_topic\" encoded in UTF-8.\n"
                    }
                  ]
                },
                {
                  "title": "Partition Responses Array",
                  "length_in_bytes": 34,
                  "explanation_markdown": "Array of partition responses for this topic. Compact array length of 0x02 means 1 partition response.\n",
                  "children": [
                    {
                      "title": "Partition Array Length",
                      "length_in_bytes": 1,
                      "explanation_markdown": "Compact array length (actual length + 1). Value of 0x02 means 1 partition response.\n"
                    },
                    {
                      "title": "Partition Response #1",
                      "length_in_bytes": 33,
                      "explanation_markdown": "Response for partition 0, which failed because the topic doesn't exist.\n",
                      "children": [
                        {
                          "title": "Partition Index",
                          "length_in_bytes": 4,
                          "explanation_markdown": "Partition index as a 4-byte integer. Value is 0x00000000 (0), indicating this response is for partition 0.\n"
                        },
                        {
                          "title": "Error Code",
                          "length_in_bytes": 2,
                          "explanation_markdown": "Error code indicating the result of the produce request for this partition.\n\nValue is 0x0003 (3), which corresponds to UNKNOWN_TOPIC_OR_PARTITION error, indicating the topic or partition doesn't exist.\n"
                        },
                        {
                          "title": "Base Offset",
                          "length_in_bytes": 8,
                          "explanation_markdown": "Base offset where the message batch would have been written if successful. For errors, this is typically -1.\n\nValue is 0xffffffffffffffff (-1), indicating the offset is invalid due to the error.\n"
                        },
                        {
                          "title": "Log Append Time",
                          "length_in_bytes": 8,
                          "explanation_markdown": "Timestamp when the message was appended to the log. For LogAppendTime timestamp type, this overrides the producer timestamp. For errors, this is typically -1.\n\nValue is 0xffffffffffffffff (-1), indicating no timestamp due to the error.\n"
                        },
                        {
                          "title": "Log Start Offset",
                          "length_in_bytes": 8,
                          "explanation_markdown": "The earliest offset available in this partition's log. This helps producers understand the valid offset range for the partition.\n\nValue is 0xffffffffffffffff (-1), indicating this information is unavailable due to the error.\n"
                        },
                        {
                          "title": "Record Errors Array",
                          "length_in_bytes": 1,
                          "explanation_markdown": "Array of per-record errors within the batch. The batch indices of records that caused the batch to be dropped. Compact array with length encoding.\n",
                          "children": [
                            {
                              "title": "Record Errors Array Length",
                              "length_in_bytes": 1,
                              "explanation_markdown": "Compact array length (actual length + 1). Value of 0x01 means 0 record errors.\n"
                            }
                          ]
                        },
                        {
                          "title": "Error Message",
                          "length_in_bytes": 1,
                          "explanation_markdown": "Optional error message providing additional context about the error.\nValue is 0x00, indicating null (no additional error message provided).\n"
                        },
                        {
                          "title": "Tag Buffer",
                          "length_in_bytes": 1,
                          "explanation_markdown": "Tag buffer for the partition response. Value is 0x00 (empty).\n"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Tag Buffer",
                  "length_in_bytes": 1,
                  "explanation_markdown": "Tag buffer for the topic. Value is 0x00 (empty).\n"
                }
              ]
            }
          ]
        },
        {
          "title": "Throttle Time",
          "length_in_bytes": 4,
          "explanation_markdown": "Duration in milliseconds for which the request was throttled due to quota violations. This helps clients implement backoff strategies.\n\nValue is 0x00000000 (0), indicating no throttling was applied.\n"
        },
        {
          "title": "Response Tag Buffer",
          "length_in_bytes": 1,
          "explanation_markdown": "Tag buffer for the entire response body. Value is 0x00 (empty).\n"
        }
      ]
    }
  ]
}

export default generated;
