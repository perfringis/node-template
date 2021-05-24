const { resolve } = require('path');
const mongoose = require('mongoose');

const {
  mongodb: { host, port, user, pass, dbName },
} = require(resolve('config'));

module.exports = mongoose.connect(
  `${host}:${port}/${dbName}`,
  {
    user,
    pass,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    authSource: 'admin',
  }
);
