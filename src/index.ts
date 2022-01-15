/* eslint-disable no-undef */
import dotenv from 'dotenv';
import express, { Application, Request, Response } from 'express';

dotenv.config();

const app: Application = express();

app.get('/health', (request:Request, response:Response) => {
  response.send('App is up and running...');
});

const { PORT } = process.env;
// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}!`));
