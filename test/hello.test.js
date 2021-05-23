const request = require('supertest');
const { resolve } = require('path');
const app = require(resolve('app'));

describe('Endpoint test', () => {
  it('should test GET method on /', async done => {
    const response = await request(app).get('/hello');

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('hello!');

    done();
  });
});
