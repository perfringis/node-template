const { resolve } = require('path');

const {
  app: { port, host },
} = require(resolve('config'));
const expressConfig = require(resolve('config/express'));
const mongoose = require(resolve('config/mongoose'));

const express = require('express');
const routers = require(resolve('router'));
const app = expressConfig();

routers(express, app);

mongoose
  .then(conn => {
    console.log('MongoDB connected...');
  })
  .catch(err => {
    console.log(`MongoDB error ${err}`);
  });

app.listen(port, host, () => {
  console.log('Application is running...');
});

module.exports = app;
