// GENERATED FILE - DO NOT EDIT DIRECTLY - RUN make generate_data_from_yaml INSTEAD
import type { GeneratedData } from "binspec-visualizer/lib/format";

const generated: GeneratedData = {
  "name": "BitTorrent Handshake",
  "slug": "bittorrent-handshake",
  "data": [
    19,
    66,
    105,
    116,
    84,
    111,
    114,
    114,
    101,
    110,
    116,
    32,
    112,
    114,
    111,
    116,
    111,
    99,
    111,
    108,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    199,
    120,
    41,
    210,
    167,
    125,
    101,
    22,
    248,
    140,
    215,
    163,
    222,
    26,
    38,
    171,
    203,
    250,
    176,
    219,
    48,
    48,
    49,
    49,
    50,
    50,
    51,
    51,
    52,
    52,
    53,
    53,
    54,
    54,
    55,
    55,
    56,
    56,
    57,
    57
  ],
  "segments": [
    {
      "title": "Protocol string length",
      "length_in_bytes": 1,
      "explanation_markdown": "A 1-byte integer that specifies the length of the protocol string.\n\nThe value here is 19 (the length of the string \"BitTorrent protocol\"), which is represented as 0x13 in hexadecimal.\n"
    },
    {
      "title": "Protocol string",
      "length_in_bytes": 19,
      "explanation_markdown": "The protocol string is the second part of the BitTorrent handshake. It contains the string \"BitTorrent protocol\".\n"
    },
    {
      "title": "Reserved bytes",
      "length_in_bytes": 8,
      "explanation_markdown": "The reserved bytes are 8 bytes that are reserved for future use.\n\nIn this example, all 8 bytes are 0x00.\n"
    },
    {
      "title": "Infohash",
      "length_in_bytes": 20,
      "explanation_markdown": "The infohash is a 20-byte value that is used to identify the content of the BitTorrent file.\n\nIn this example, the infohash is `c77829d2a77d6516f88cd7a3de1a26abcbfab0db`.\n"
    },
    {
      "title": "Peer ID",
      "length_in_bytes": 20,
      "explanation_markdown": "The peer ID is a 20-byte value that is used to identify the client.\n\nIn this example, the peer ID is `001122334455667788`.\n"
    }
  ]
}

export default generated;
