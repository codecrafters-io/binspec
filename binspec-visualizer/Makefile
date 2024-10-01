generate_js_data_from_yaml:
	mkdir -p app/data/formats/generated
	find app/data/formats -name '*.yml' -exec sh -c 'yq -o json eval {} > $$(dirname {})/generated/$$(basename {} .yml).js' \;
	gsed -i '1s/^/export default /' app/data/formats/generated/*.js
	gsed -i '1s/^/\/\/ GENERATED FILE - DO NOT EDIT DIRECTLY - RUN make generate_js_data_from_yaml INSTEAD/g' app/data/formats/generated/*.js
