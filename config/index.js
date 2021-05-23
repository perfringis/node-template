const { merge } = require('lodash');

const defaults = require('./default');

const env = process.env.NODE_ENV || 'dev';

const config = require(`./env/${env}.js`);

module.exports = merge({}, defaults, config);
