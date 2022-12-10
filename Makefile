DCR=.devcontainer/run

default: build
up: dev
dev:
	${DCR} up -d app
	sleep 2
	make open

restart:
	${DCR} restart

stop:
	${DCR} stop

install:
	${DCR} app yarn install

open:
	open http://localhost:3000

sh: bash
bash:
	${DCR} app bash

test:
	${DCR} app yarn test

test-workflows: # you need to have 'act' installed in your OS for this
	act

build:
	${DCR} app yarn build

lint:
	${DCR} app yarn lint

format:
	${DCR} app yarn format

ci:
	${DCR} app yarn ci

pkg:
	cd packages/koffing && npm publish --dry-run