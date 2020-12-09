import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { returnError } from '../util/status.js';
import {json, urlencoded} from 'body-parser';

export default () => {
  const app = express();

  app.use(cors());
  app.use(helmet());
  app.use(json({ limit: '10mb', extended: true }));
  app.use(urlencoded({ limit: '10mb', extended: true }));

  //json body verification
  app.use((error, req, res, next) => {
    if (error instanceof SyntaxError) {
      return returnError(res, 'invalid request');
    } else {
      next();
    }
  });
  return app;
};
