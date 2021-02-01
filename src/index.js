import program from 'commander';
import path from 'path';
import fs from 'fs';

const has = (object, key) => object !== null && hasOwnProperty.call(object, key);

const genDiff = (filepath1, filepath2) => {
  const file1 = JSON.parse(fs.readFileSync(path.resolve(filepath1), 'utf8'));
  const file2 = JSON.parse(fs.readFileSync(path.resolve(filepath2), 'utf8'));

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
};

const getInterface = () => {
  program
    .version('0.0.1', '-V, --version', 'output the version number')
    .description('Compares two configuration files and shows a difference.')
    .arguments('<filepath1>, <filepath2>')
    .option('--format [type]', 'output format')
    .action(genDiff);

  program.parse(process.argv);
};

export default getInterface;
