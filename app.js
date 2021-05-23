const express = require('express');
const { port, host } = require('./config');

const expressConfig = require('./config/express');
const routersConfig = require('./router');

const app = expressConfig();

routersConfig(express, app);

app.listen(port, host, () => {
  console.log('Application is running...');
});

module.exports = app;
