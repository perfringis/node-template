import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config({ path: resolve('backend/.env') });

const env = process.env.NODE_ENV || 'dev';

dotenv.config({ path: resolve(`backend/.env.${env}`) });

export default {
  root: resolve('backend'),
};
