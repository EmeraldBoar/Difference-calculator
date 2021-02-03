install:
	npm install
publish:
	npm publish --dry-run
lint:
	npx eslint .
diff:
	gendiff test1.json test2.json