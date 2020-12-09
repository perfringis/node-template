const { readdirSync } = require('fs');
const { join, resolve } = require('path');

export default (express, app) => {
  readdirSync(join(resolve('router')))
    .filter(file => file.search(/index/))
    .map(file => {
      require(resolve('router/' + file))(app);
    });
};
