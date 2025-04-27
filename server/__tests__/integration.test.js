const request = require('supertest');
const path = require('path');
const app = require('../src/app');

describe('Static File Serving', () => {
  beforeAll(() => {
    process.env.NODE_ENV = 'test';
  });

  afterAll(() => {
    process.env.NODE_ENV = 'test';
  });

  test('serves index.html for root path', async () => {
    const response = await request(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200);
    
    expect(response.text).toContain('<div id="root"');
  });

  test('API endpoints still work when serving static files', async () => {
    const response = await request(app)
      .get('/api/health')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body).toEqual({ status: 'ok' });
  });
});