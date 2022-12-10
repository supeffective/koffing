default:build

clean:
	rm -rf ./build

build:
	yarn build

audit-fix:
	rm -rf package-lock.json ./node_modules
	npm i --package-lock-only
	npm audit fix
	rm -f yarn.lock
	yarn import
	rm -f package-lock.json

gh-pages: build
	npx gh-pages-publish

$(V).SILENT:
.PHONY: build
