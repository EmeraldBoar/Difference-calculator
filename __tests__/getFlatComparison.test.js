import getFixturePath from '../src/getFixturePath.js';
import getFlatComparison from '../src/getFlatComparison.js';

let file1;
let file2;

beforeAll(() => {
  file1 = getFixturePath('test1.json');
  file2 = getFixturePath('test2.json');
});

test('flat differance', () => {
  const expected = `{
    host: hexlet.io
  - timeout: 50
  + timeout: 20
  - proxy: 123.234.53.22
  - follow: false
  + verbose: true
}`;
  expect(getFlatComparison(file1, file2)).toEqual(expected);
});
