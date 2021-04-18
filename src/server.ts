import http from 'http';
import app from './app';
import makedb from './database';
import config from './config';

// Normalize a port into a number, string, or false.
const normalizePort = (val: any) => {
  const port = parseInt(val, 10);
  if (Number.isNaN(port)) {
    return val; // named pipe
  }
  if (port >= 0) {
    return port; // port number
  }
  return false;
};

const port = normalizePort(config.server.port);
const { host } = config.server;
app.set('port', port);
app.set('host', host);

const server = http.createServer(app);
server.listen(port, host, async () => {
  await makedb();
  console.log(`Server started at http://${host}:${port}`);
});

// Event listener for HTTP server "error" event.
const onError = (error: { syscall: string; code: string }) => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
};

server.on('error', onError);
