const { resolve } = require('path');
const Hello = require(resolve('schema/hello'));

const getHello = async () => {
  return await Hello.find({});
};

module.exports = {
  getHello,
};
