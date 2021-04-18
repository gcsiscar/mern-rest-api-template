import dotenv from 'dotenv';

dotenv.config();

// Server
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || 'localhost';

// DB
const URI = process.env.DB_URI || 'mongdb';

export default {
  server: {
    port: PORT,
    host: HOST,
  },
  mongodb: {
    uri: URI,
  },
};
