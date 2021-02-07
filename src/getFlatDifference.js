import path from 'path';
import { has } from './utils.js';
import parse from './parses.js';
import getFile from './getFile.js';

const getFlatComparison = (filepath1, filepath2) => {
  const extensionFile1 = path.extname(filepath1);
  const extensionFile2 = path.extname(filepath2);

  const file1 = parse(getFile(filepath1), extensionFile1);
  const file2 = parse(getFile(filepath2), extensionFile2);

  const keys = Object.keys({ ...file1, ...file2 });

  const diff = keys.reduce((acc, key) => {
    if (!has(file2, key)) {
      acc.push([`  - ${key}: ${file1[key]}`]);
    } else if (!has(file1, key)) {
      acc.push([`  + ${key}: ${file2[key]}`]);
    } else if (file1[key] !== file2[key]) {
      acc.push([`  - ${key}: ${file1[key]}`]);
      acc.push([`  + ${key}: ${file2[key]}`]);
    } else {
      acc.push([`    ${key}: ${file1[key]}`]);
    }
    return acc;
  }, ['{']);

  diff.push('}');

  console.log(diff.join('\n'));
  return diff.join('\n');
};

export default getFlatComparison;
