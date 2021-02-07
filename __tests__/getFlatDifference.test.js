import getFixturePath from '../src/getFixturePath.js';
import getFlatDifference from '../src/getFlatDifference.js';

let fileJson1;
let fileJson2;
let fileYaml1;
let fileYaml2;
let expected;

beforeAll(() => {
  fileJson1 = getFixturePath('test1.json');
  fileJson2 = getFixturePath('test2.json');
  fileYaml1 = getFixturePath('test1.yml');
  fileYaml2 = getFixturePath('test2.yml');
  expected = `{
    host: hexlet.io
  - timeout: 50
  + timeout: 20
  - proxy: 123.234.53.22
  - follow: false
  + verbose: true
}`;
});

test('flat distinction of JSON files', () => {
  expect(getFlatDifference(fileJson1, fileJson2)).toEqual(expected);
});

test('flat distinction of YAML files', () => {
  expect(getFlatDifference(fileYaml1, fileYaml2)).toEqual(expected);
});
