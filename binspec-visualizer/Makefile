generate_data_from_yaml:
	mkdir -p app/data/formats/generated
	find app/data/formats -name '*.yml' -exec sh -c 'yq -o json eval {} > $$(dirname {})/generated/$$(basename {} .yml).ts' \;
	gsed -i '1s/^/const generated: GeneratedData = /' app/data/formats/generated/*.ts
	gsed -i '1s|^|import type { GeneratedData } from "binspec-visualizer/lib/format";\n\n|' app/data/formats/generated/*.ts
	gsed -i '1s/^/\/\/ GENERATED FILE - DO NOT EDIT DIRECTLY - RUN make generate_data_from_yaml INSTEAD\n/' app/data/formats/generated/*.ts
	gsed -i '$$a\\nexport default generated;' app/data/formats/generated/*.ts
