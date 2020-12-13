const { merge } = require('lodash');

import defaults from './default';

const env = process.env.NODE_ENV || 'dev';

const config = require(`./env/${env}.js`);

export default merge({}, defaults, config);
