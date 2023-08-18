import {fileURLToPath} from 'url';
import { dirname } from 'path';
import { log } from 'console';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default __dirname;

console.log(import.meta.url)
console.log(fileURLToPath(import.meta.url))
console.log(dirname(__filename))
