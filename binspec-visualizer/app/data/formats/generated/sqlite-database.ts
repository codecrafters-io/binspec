// GENERATED FILE - DO NOT EDIT DIRECTLY - RUN make generate_data_from_yaml INSTEAD
import type { GeneratedData } from "binspec-visualizer/lib/format";

const generated: GeneratedData = {
  "name": "SQLite Database File",
  "slug": "sqlite",
  "data": [
    83,
    81,
    76,
    105,
    116,
    101,
    32,
    102,
    111,
    114,
    109,
    97,
    116,
    32,
    51,
    0,
    0,
    16,
    1,
    1,
    0,
    64,
    32,
    32,
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
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    4,
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
    0
  ],
  "segments": [
    {
      "title": "Header string",
      "length_in_bytes": 16,
      "explanation_markdown": "The header string is the first part of the database file header. It contains the string \"SQLite format 3\"\n(encoded as UTF-8) followed by a null byte (`0x00`).\n"
    },
    {
      "title": "Page size",
      "length_in_bytes": 2,
      "explanation_markdown": "The page size is a 2-byte integer that specifies the size of each page in the database. This value must be a power of 2 and must be between 512 and 32768 inclusive. If the value is 1, then the page size is 65536 bytes.\n"
    },
    {
      "title": "File format versions",
      "length_in_bytes": 2,
      "explanation_markdown": "The file format versions allow for enhancements of the file format in future versions of SQLite. If a version of SQLite coded to the current file format specification encounters a database file where the read version is 1 or 2 but the write version is greater than 2, then the database file must be treated as read-only. If a database file with a read version greater than 2 is encountered, then that database cannot be read or written.\n",
      "children": [
        {
          "title": "File format write version",
          "length_in_bytes": 1,
          "explanation_markdown": "The file format write version is intended to allow for enhancements of the file format in future versions of SQLite. In current versions of SQLite, this value is 1 for rollback journalling modes and 2 for WAL journalling mode.\n"
        },
        {
          "title": "File format read version",
          "length_in_bytes": 1,
          "explanation_markdown": "The file format read version is intended to allow for enhancements of the file format in future versions of SQLite. In current versions of SQLite, this value is 1 for rollback journalling modes and 2 for WAL journalling mode.\n"
        }
      ]
    },
    {
      "title": "Reserved space size",
      "length_in_bytes": 1,
      "explanation_markdown": "This is a 1-byte integer that specifies the size of the reserved space at the end of this page. The reserved space is used by certain extensions.\n"
    },
    {
      "title": "Payload fractions",
      "length_in_bytes": 3,
      "explanation_markdown": "These values were originally intended to be tunable parameters that could be used to modify the storage format of the b-tree algorithm. However, that functionality is currently not supported, so these values are always fixed.\n",
      "children": [
        {
          "title": "Maximum embedded payload fraction",
          "length_in_bytes": 1,
          "explanation_markdown": "This value must be 64. It was initially intended to be a tunable parameter that could be used to modify the storage format of the b-tree algorithm. However, that functionality is currently not supported, so this value is always fixed.\n"
        },
        {
          "title": "Minimum embedded payload fraction",
          "length_in_bytes": 1,
          "explanation_markdown": "This value must be 32. It was initially intended to be a tunable parameter that could be used to modify the storage format of the b-tree algorithm. However, that functionality is currently not supported, so this value is always fixed.\n"
        },
        {
          "title": "Leaf payload fraction",
          "length_in_bytes": 1,
          "explanation_markdown": "This value must be 32. It was initially intended to be a tunable parameter that could be used to modify the storage format of the b-tree algorithm. However, that functionality is currently not supported, so this value is always fixed.\n"
        }
      ]
    },
    {
      "title": "File change counter",
      "length_in_bytes": 4,
      "explanation_markdown": "This is a 4-byte big-endian integer that is incremented whenever the database file is changed.\n"
    },
    {
      "title": "Database size in pages",
      "length_in_bytes": 4,
      "explanation_markdown": "This is a 4-byte big-endian integer that represents the size of the database file in pages.\n"
    },
    {
      "title": "First freelist trunk page",
      "length_in_bytes": 4,
      "explanation_markdown": "This is a 4-byte big-endian integer that represents the page number of the first freelist trunk page.\n"
    },
    {
      "title": "Total freelist pages",
      "length_in_bytes": 4,
      "explanation_markdown": "This is a 4-byte big-endian integer that represents the total number of freelist pages.\n"
    },
    {
      "title": "Schema cookie",
      "length_in_bytes": 4,
      "explanation_markdown": "This is a 4-byte big-endian integer that is incremented whenever the database schema changes.\n"
    },
    {
      "title": "Schema format number",
      "length_in_bytes": 4,
      "explanation_markdown": "This is a 4-byte big-endian integer that represents the schema format number. A value of 4 means SQLite version 4 or greater.\n"
    },
    {
      "title": "Default page cache size",
      "length_in_bytes": 4,
      "explanation_markdown": "This is a 4-byte big-endian integer that represents the default page cache size.\n"
    },
    {
      "title": "Largest root b-tree page number",
      "length_in_bytes": 4,
      "explanation_markdown": "This is a 4-byte big-endian integer that represents the largest root b-tree page number.\n"
    },
    {
      "title": "Database text encoding",
      "length_in_bytes": 4,
      "explanation_markdown": "This is a 4-byte big-endian integer that represents the database text encoding. 1 = UTF-8, 2 = UTF-16le, 3 = UTF-16be.\n"
    },
    {
      "title": "User version",
      "length_in_bytes": 4,
      "explanation_markdown": "This is a 4-byte big-endian integer that represents the user version.\n"
    },
    {
      "title": "Incremental-vacuum mode",
      "length_in_bytes": 4,
      "explanation_markdown": "This is a 4-byte big-endian integer that represents the incremental-vacuum mode.\n"
    },
    {
      "title": "Application ID",
      "length_in_bytes": 4,
      "explanation_markdown": "This is a 4-byte big-endian integer that represents the application ID.\n"
    },
    {
      "title": "Reserved space",
      "length_in_bytes": 20,
      "explanation_markdown": "This is a 20-byte space reserved for future expansion.\n"
    }
  ]
}

export default generated;
