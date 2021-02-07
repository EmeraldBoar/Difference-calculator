import program from 'commander';
import getFlatDifference from './src/getFlatDifference.js';

const getInterface = () => {
  program
    .version('0.0.1', '-V, --version', 'output the version number')
    .description('Compares two configuration files and shows a difference.')
    .arguments('<filepath1>, <filepath2>')
    .option('--format [type]', 'output format')
    .action(getFlatDifference);

  program.parse(process.argv);
};

export { getInterface, getFlatDifference };
