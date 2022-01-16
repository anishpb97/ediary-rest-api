// eslint-disable-next-line import/no-extraneous-dependencies
import request from 'supertest';
import { Express } from 'express';
import { setupApplication } from '@/api/config/app';

let app:Express;
describe('Test App Health', () => {
  beforeAll(async ()=> {
     app = await setupApplication();
  })
  it('Request /health should return status!', async () => {
    const result = await request(app).get('/health').send();
    expect(result.status).toBe(200);
    expect(result.text).toBe('App is up and running...');
  });
  // afterAll((done) => {
  //   server.close();
  //   done();
  // });
});
