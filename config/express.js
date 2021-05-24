const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { json, urlencoded } = require('body-parser');

module.exports = () => {
  const app = express();

  app.use(cors());
  app.use(helmet());
  app.use(json({ limit: '10mb', extended: true }));
  app.use(urlencoded({ limit: '10mb', extended: true }));

  // json body verification
  app.use((error, req, res, next) => {
    if (error instanceof SyntaxError) {
      return res.status(406).json({ error });
    } else {
      next();
    }
  });

  return app;
};
