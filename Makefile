.PHONY: install brain-games lint
install:
 	npm ci
brain-games:
 	node bin/brain-games.js
 lint:
 	npx eslint .