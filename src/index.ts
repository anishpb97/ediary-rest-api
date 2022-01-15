import dotenv from 'dotenv';
import express, { Application } from 'express';

dotenv.config();

const app: Application = express();

const { PORT } = process.env;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}!`));
