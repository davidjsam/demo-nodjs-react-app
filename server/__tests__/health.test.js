const request = require('supertest');
const app = require('../src/app');

describe('Health Check Endpoint', () => {
  test('GET /api/health returns status ok', async () => {
    const response = await request(app)
      .get('/api/health')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body).toEqual({ status: 'ok' });
  });
});