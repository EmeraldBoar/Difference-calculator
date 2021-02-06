install:
	npm install
publish:
	npm publish --dry-run
lint:
	npx eslint .
test:
	npm test
test-coverage:
	npm test -- --coverage --coverageProvider=v8
diff:
	gendiff __fixtures__/test1.json __fixtures__/test2.json