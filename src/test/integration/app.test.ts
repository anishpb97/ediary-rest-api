// eslint-disable-next-line import/no-extraneous-dependencies
import request from 'supertest';
import app, { server } from '../../index';

describe('Test App Health', () => {
  it('Request /health should return status!', async () => {
    const result = await request(app).get('/health').send();
    expect(result.status).toBe(200);
    expect(result.text).toBe('App is up and running...');
  });
  afterAll((done) => {
    server.close();
    done();
  });
});
