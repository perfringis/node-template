import express from 'express';
import config from './config';

import expressConfig from './config/express';
import routersConfig from './router';

const app = expressConfig();

routersConfig(express, app);

app.listen(config.port, config.host, () => {
  console.log('Application is running...');
});

export default app;
