import express, { ErrorRequestHandler, Request, Response } from 'express';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/', (req, res, next) => {
  res.send('Hello World');
  next();
});

// Error handling middleware
app.use((err: ErrorRequestHandler, req: Request, res: Response) => {
  res.send('Error').json({ err });
});

export default app;
