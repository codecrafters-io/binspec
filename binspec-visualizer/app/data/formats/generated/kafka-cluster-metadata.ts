// GENERATED FILE - DO NOT EDIT DIRECTLY - RUN make generate_data_from_yaml INSTEAD
import type { GeneratedData } from "binspec-visualizer/lib/format";

const generated: GeneratedData = {
  "name": "Kafka Cluster Metadata",
  "slug": "kafka-cluster-metadata",
  "data": [],
  "segments": [
    {
      "title": "Record Batch \\#1",
      "explanation_markdown": "A record batch is the on-disk format that Kafka uses to store multiple records.\n\nIn this case, the record batch contains 3 records starting at base offset `0`.\n",
      "children": [
        {
          "title": "Base Offset",
          "length_in_bytes": 8
        },
        {
          "title": "Records",
          "children": [
            {
              "title": "Count",
              "length_in_bytes": 2
            },
            {
              "title": "Elements",
              "children": [
                {
                  "title": "Record 1",
                  "children": [
                    {
                      "title": "Length"
                    }
                  ]
                },
                {
                  "title": "Record 2"
                },
                {
                  "title": "Record 3"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "title": "Record Batch \\#2",
      "explanation_markdown": "A record batch is the on-disk format that Kafka uses to store multiple records.\n\nIn this case, the record batch contains 1 records starting at base offset `2`.\n"
    }
  ]
}

export default generated;
