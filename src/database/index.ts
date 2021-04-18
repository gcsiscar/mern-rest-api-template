import mongoose from 'mongoose';
import config from '../config';

export default async () => {
  const db = mongoose.connection;
  db.once('open', () => console.log('Connected to Database:', db.name))
    .once('disconnected', () => console.log('Disconnected'))
    .on('error', (err) => console.error(err));

  const database = await mongoose.connect(config.mongodb.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    family: 4,
  });

  return database;
};
