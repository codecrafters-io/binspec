// GENERATED FILE - DO NOT EDIT DIRECTLY - RUN make generate_data_from_yaml INSTEAD
import type { GeneratedData } from "binspec-visualizer/lib/format";

const generated: GeneratedData = {
  "name": "Kafka Produce Request (v11)",
  "slug": "kafka-produce-request-v11",
  "data": [
    0,
    0,
    0,
    143,
    0,
    0,
    0,
    11,
    63,
    218,
    106,
    81,
    0,
    12,
    107,
    97,
    102,
    107,
    97,
    45,
    116,
    101,
    115,
    116,
    101,
    114,
    0,
    1,
    0,
    1,
    0,
    0,
    0,
    0,
    2,
    18,
    117,
    110,
    107,
    110,
    111,
    119,
    110,
    45,
    116,
    111,
    112,
    105,
    99,
    45,
    113,
    117,
    122,
    2,
    0,
    0,
    0,
    0,
    86,
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
    73,
    255,
    255,
    255,
    255,
    2,
    208,
    24,
    108,
    26,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    152,
    50,
    65,
    134,
    153,
    0,
    0,
    1,
    152,
    50,
    65,
    134,
    153,
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
    0,
    46,
    0,
    0,
    0,
    1,
    34,
    72,
    101,
    108,
    108,
    111,
    32,
    102,
    114,
    111,
    109,
    32,
    69,
    100,
    100,
    105,
    101,
    33,
    0,
    0,
    0,
    0
  ],
  "segments": [
    {
      "title": "Message Size",
      "length_in_bytes": 4,
      "explanation_markdown": "Message Size is a 4-byte big-endian integer indicating the size of the rest of the message. All Kafka requests and responses start with this field.\n\nIn this case, the value is 0x8f (143 in decimal) indicating that the rest of the message is 143 bytes long.\n"
    },
    {
      "title": "Request Header (v2)",
      "length_in_bytes": 23,
      "explanation_markdown": "The Request Header structure is common across all Kafka requests. It contains information on the API Key this request is for, the version of that API, and more.\n",
      "children": [
        {
          "title": "API Key",
          "length_in_bytes": 2,
          "explanation_markdown": "The API key is a 2-byte integer that identifies the API Key that this request is for.\n\nHere it is 0x0000 (0), which corresponds to Produce.\n"
        },
        {
          "title": "API Version",
          "length_in_bytes": 2,
          "explanation_markdown": "The API version is a 2-byte integer indicating the version of the API being used.\n\nHere, it is 0x000b (11) which corresponds to v11 of the Produce API.\n"
        },
        {
          "title": "Correlation ID",
          "length_in_bytes": 4,
          "explanation_markdown": "The Correlation ID is a 4-byte integer that will be echo-ed back in the response. When multiple requests are in-flight, this ID can be used to match responses with their corresponding requests.\n\nHere, it is 0x3fda6a51 (1071278673).\n"
        },
        {
          "title": "Client ID",
          "length_in_bytes": 14,
          "explanation_markdown": "The Client ID is a string identifying the client.\n\nHere, the value is \"kafka-tester\".\n",
          "children": [
            {
              "title": "Length",
              "length_in_bytes": 2,
              "explanation_markdown": "The Client ID length is a 2-byte integer indicating the length of the Client ID string. Here, it is 0x000c (12).\n"
            },
            {
              "title": "Contents",
              "length_in_bytes": 12,
              "explanation_markdown": "The Client ID is a variable-length string identifying the client. In this case, it is \"kafka-tester\" encoded in UTF-8.\n"
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
      "title": "Produce Request Body (v11)",
      "length_in_bytes": 116,
      "explanation_markdown": "The request body contains fields specific to the Produce request.\n",
      "children": [
        {
          "title": "Transactional ID",
          "length_in_bytes": 1,
          "explanation_markdown": "The Transactional ID as a nullable compact string. A value of 0x01 indicates null (no transactional ID).\n"
        },
        {
          "title": "Required Acks",
          "length_in_bytes": 2,
          "explanation_markdown": "The number of acknowledgments the producer requires the leader to have received before considering a request complete.\n- 0: no acknowledgments\n- 1: only the leader\n- -1: full ISR\n\nHere, it is 0x01 (1) indicating leader acknowledgment only.\n"
        },
        {
          "title": "Timeout",
          "length_in_bytes": 4,
          "explanation_markdown": "The timeout to await a response in milliseconds. Here, it is 0x00 (0 milliseconds).\n"
        },
        {
          "title": "Topic Data Array",
          "length_in_bytes": 110,
          "explanation_markdown": "Array of topics to produce to. Uses compact array format.\n",
          "children": [
            {
              "title": "Array Length",
              "length_in_bytes": 1,
              "explanation_markdown": "Length of topic array + 1 for compact array format. Here, 0x02 indicates 1 topic.\n"
            },
            {
              "title": "Topic",
              "length_in_bytes": 109,
              "explanation_markdown": "Topic data containing name and partitions.\n",
              "children": [
                {
                  "title": "Topic Name",
                  "length_in_bytes": 18,
                  "explanation_markdown": "The topic name as a compact string.\n",
                  "children": [
                    {
                      "title": "Length",
                      "length_in_bytes": 1,
                      "explanation_markdown": "Topic name length + 1 for compact string. Here, 0x12 (18) indicates 17 characters.\n"
                    },
                    {
                      "title": "Contents",
                      "length_in_bytes": 17,
                      "explanation_markdown": "The topic name \"unknown-topic-quz\" encoded in UTF-8.\n"
                    }
                  ]
                },
                {
                  "title": "Partition Data Array",
                  "length_in_bytes": 90,
                  "explanation_markdown": "Array of partitions for this topic.\n",
                  "children": [
                    {
                      "title": "Array Length",
                      "length_in_bytes": 1,
                      "explanation_markdown": "Length of partition array + 1 for compact array format. Here, 0x02 indicates 1 partition.\n"
                    },
                    {
                      "title": "Partition",
                      "length_in_bytes": 89,
                      "explanation_markdown": "Partition data containing ID and records.\n",
                      "children": [
                        {
                          "title": "Partition ID",
                          "length_in_bytes": 4,
                          "explanation_markdown": "The partition index. Here, 0x00 (partition 0).\n"
                        },
                        {
                          "title": "Records",
                          "length_in_bytes": 84,
                          "explanation_markdown": "The record data to be produced, containing record batches.\n",
                          "children": [
                            {
                              "title": "Records Length",
                              "length_in_bytes": 1,
                              "explanation_markdown": "Length of the records data. Here, 0x56 (86 bytes).\n"
                            },
                            {
                              "title": "Record Batch",
                              "length_in_bytes": 83,
                              "explanation_markdown": "A record batch containing one or more records with their metadata.\n",
                              "children": [
                                {
                                  "title": "Base Offset",
                                  "length_in_bytes": 8,
                                  "explanation_markdown": "The offset of the first record in this batch. Here, 0x00 (offset 0).\n"
                                },
                                {
                                  "title": "Batch Length",
                                  "length_in_bytes": 4,
                                  "explanation_markdown": "Length of the rest of the record batch. Here, 0x49 (73 bytes).\n"
                                },
                                {
                                  "title": "Partition Leader Epoch",
                                  "length_in_bytes": 4,
                                  "explanation_markdown": "The partition leader epoch. Here, 0xffffffff (-1).\n"
                                },
                                {
                                  "title": "Magic Byte",
                                  "length_in_bytes": 1,
                                  "explanation_markdown": "Version identifier for the record batch format. Here, 0x02 (version 2).\n"
                                },
                                {
                                  "title": "CRC32",
                                  "length_in_bytes": 4,
                                  "explanation_markdown": "CRC32 checksum of the record batch data. Here, 0xd0186c1a.\n"
                                },
                                {
                                  "title": "Attributes",
                                  "length_in_bytes": 2,
                                  "explanation_markdown": "Batch attributes including compression codec, timestamp type, transactional flag, and control batch flag.\n\nHere, 0x0000 indicates no compression, CreateTime timestamps, non-transactional, data batch.\n"
                                },
                                {
                                  "title": "Last Offset Delta",
                                  "length_in_bytes": 4,
                                  "explanation_markdown": "Delta between the base offset and the last record's offset. Here, 0x00.\n"
                                },
                                {
                                  "title": "First Timestamp",
                                  "length_in_bytes": 8,
                                  "explanation_markdown": "Timestamp of the first record. Here, 0x019832418699 (Jan 1, 1970 00:06:48.843155097 UTC).\n"
                                },
                                {
                                  "title": "Max Timestamp",
                                  "length_in_bytes": 8,
                                  "explanation_markdown": "Maximum timestamp among all records. Here, same as first timestamp.\n"
                                },
                                {
                                  "title": "Producer ID",
                                  "length_in_bytes": 8,
                                  "explanation_markdown": "ID of the producer. Here, 0x00 (producer ID 0).\n"
                                },
                                {
                                  "title": "Producer Epoch",
                                  "length_in_bytes": 2,
                                  "explanation_markdown": "Epoch of the producer. Here, 0x00 (epoch 0).\n"
                                },
                                {
                                  "title": "Base Sequence",
                                  "length_in_bytes": 4,
                                  "explanation_markdown": "Base sequence number for records in this batch. Here, 0x00.\n"
                                },
                                {
                                  "title": "Record Count",
                                  "length_in_bytes": 4,
                                  "explanation_markdown": "Number of records in this batch. Here, 0x01 (1 record).\n"
                                },
                                {
                                  "title": "Record",
                                  "length_in_bytes": 23,
                                  "explanation_markdown": "Individual record containing the actual message data.\n",
                                  "children": [
                                    {
                                      "title": "Length",
                                      "length_in_bytes": 1,
                                      "explanation_markdown": "Length of the record as a varint. Here, 0x2e (46 bytes).\n"
                                    },
                                    {
                                      "title": "Attributes",
                                      "length_in_bytes": 1,
                                      "explanation_markdown": "Record attributes (reserved). Here, 0x00.\n"
                                    },
                                    {
                                      "title": "Timestamp Delta",
                                      "length_in_bytes": 1,
                                      "explanation_markdown": "Delta from batch timestamp as varint. Here, 0x00.\n"
                                    },
                                    {
                                      "title": "Offset Delta",
                                      "length_in_bytes": 1,
                                      "explanation_markdown": "Delta from base offset as varint. Here, 0x00.\n"
                                    },
                                    {
                                      "title": "Key Length",
                                      "length_in_bytes": 1,
                                      "explanation_markdown": "Length of the key as varint. Here, 0x01 indicates null key.\n"
                                    },
                                    {
                                      "title": "Value Length",
                                      "length_in_bytes": 1,
                                      "explanation_markdown": "Length of the value as varint. Here, 0x22 (17 bytes).\n"
                                    },
                                    {
                                      "title": "Value",
                                      "length_in_bytes": 17,
                                      "explanation_markdown": "The actual message value. Here, \"Hello from Eddie!\" encoded in UTF-8.\n"
                                    },
                                    {
                                      "title": "Header Count",
                                      "length_in_bytes": 1,
                                      "explanation_markdown": "Number of headers as varint. Here, 0x00 (no headers).\n"
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "title": "Partition Tag Buffer",
                          "length_in_bytes": 1,
                          "explanation_markdown": "Empty tagged field array for partition data.\n"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Topic Tag Buffer",
                  "length_in_bytes": 1,
                  "explanation_markdown": "Empty tagged field array for topic data.\n"
                }
              ]
            }
          ]
        },
        {
          "title": "Request Body Tag Buffer",
          "length_in_bytes": 1,
          "explanation_markdown": "Empty tagged field array for the request body."
        }
      ]
    }
  ]
}

export default generated;
