import request from 'supertest';
import app from '../../app';

describe('GET /health', () => {
    test('should succeed and return a body response with status code 200', async() => {
        const response = await request(app).get('/health');
        expect(response.body).toEqual({status: 'UP'});
        expect(response.status).toBe(200);
    });
});

describe('GET /live', () => {
    test('should fail and return a status code 501', async() => {
        const response = await request(app).get('/live');
        expect(response.status).toBe(501);
    });
});

describe('GET /ready', () => {
    test('should fail and return a status code 501', async() => {
        const response = await request(app).get('/ready');
        expect(response.status).toBe(501);
    });
});