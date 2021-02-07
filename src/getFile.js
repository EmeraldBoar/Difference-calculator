import fs from 'fs';
import getFilePath from './getFilePath.js';

const getFile = (filepath1) => fs.readFileSync(getFilePath(filepath1), 'utf-8');

export default getFile;
