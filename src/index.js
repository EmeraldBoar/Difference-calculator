import { Command } from 'commander';
import path from 'path';
import fs from 'fs';

const getDiff = (filepath1, filepath2) => {
  const file1 = JSON.parse(fs.readFileSync(path.resolve(filepath1), 'utf8'));
  const file2 = JSON.parse(fs.readFileSync(path.resolve(filepath2), 'utf8'));
};

const getInterface = () => {
  const program = new Command();

  program
    .version('0.0.1', '-V, --version', 'output the version number')
    .description('Compares two configuration files and shows a difference.')
    .arguments('<filepath1>, <filepath2>')
    .option('--format [type]', 'output format')
    .action(getDiff);

  program.parse(process.argv);
};

export default getInterface;
