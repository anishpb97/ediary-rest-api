/* eslint-disable no-undef */
import dotenv from 'dotenv';
import express, { Application, Request, Response } from 'express';
import { Server } from 'http';

dotenv.config();

const app: Application = express();

app.get('/health', (request:Request, response:Response) => {
  response.status(200).send('App is up and running...');
});

const { PORT } = process.env;
// eslint-disable-next-line no-console
export const server:Server = app.listen(PORT, () => console.log(`Server is listening on port ${PORT}!`));

export default app;
