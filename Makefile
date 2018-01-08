
.PHONY: generate

default: generate

generate:
	swagger-codegen generate -i peatio.yaml -c codegen.json -l javascript
	rm -f git_push.sh
