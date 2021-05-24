module.exports = {
  app: {
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || 8081,
  },
  mongodb: {
    host: process.env.MONGODB_HOST,
    port: process.env.MONGODB_PORT,
    user: process.env.MONGODB_USER,
    pass: process.env.MONGODB_PASS,
    dbName: process.env.MONGODB_DBNAME,
  },
};
