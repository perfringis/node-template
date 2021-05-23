const { Router } = require('express');
const router = Router();
const { resolve } = require('path');
const { hello } = require(resolve('controller/hello.js'));

router.route('/').get(hello);

module.exports = app => {
  app.use('/hello', router);
};
