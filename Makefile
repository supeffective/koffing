default:build

build:
	echo "> Building dist..."
	npx webpack --mode production
	echo "[DONE]"
	echo "> Building docs..."
	npx webpack --config ./webpack.config-docs.js --mode production
	echo "[DONE]"

start:
	echo "> Starting local webpack server with hot refresh..."
	npx webpack-dev-server --config ./webpack.config-docs.js --mode development

$(V).SILENT:
.PHONY: build
