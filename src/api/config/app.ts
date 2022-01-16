/* eslint-disable no-undef */

import express, { Express, Request, Response } from 'express';

export const setupApplication = async (): Promise<Express>  => {
    const app: Express = express();
    app.get('/health', (request:Request, response:Response) => {
        response.status(200).send('App is up and running...');
      });
    return app;
};


