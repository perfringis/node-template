const dotenv = require('dotenv');
const { resolve } = require('path');

dotenv.config({ path: resolve('.env') });

const env = process.env.NODE_ENV || 'dev';

dotenv.config({ path: resolve(`.env.${env}`) });

module.exports = {
  root: resolve('./'),
};
