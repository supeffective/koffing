default:build

build:
	yarn build

audit-fix:
	rm -rf package-lock.json ./node_modules
	npm i --package-lock-only
	npm audit fix
	rm -f yarn.lock
	yarn import
	rm -f package-lock.json

gh-pages:
	node tasks/gh-pages-prepare.js

gh-pages-deploy: gh-pages
	cd build
	git push

$(V).SILENT:
.PHONY: build
