import {fileURLToPath} from 'url';
import { dirname } from 'path';
import jwt from 'jsonwebtoken'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default __dirname;

const PRIVATE_KEY='secretPass'

export const generaJWT=(usuario)=>jwt.sign({usuario},PRIVATE_KEY,{expiresIn:'1h'})

