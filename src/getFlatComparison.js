import path from 'path';
import fs from 'fs';
import { has } from './utils.js';

const getFlatComparison = (filepath1, filepath2) => {
  const getFilePath = (filepath) => path.resolve(filepath);

  const readFile = (filename) => JSON.parse(fs.readFileSync(getFilePath(filename), 'utf-8'));

  const file1 = readFile(filepath1);
  const file2 = readFile(filepath2);

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
