const server = require('./server.js');
const request = require('supertest');


describe('server.js', () => {
    describe('GET /games', () => {
        it('should return 200', () => {
            return request(server)
                .get('/games')
                .then(res => {
                    expect(res.status).toBe(200);
                })
        });
        it('should return an array even if empty', () => {
            return request(server)
                .get('/games')
                .then(res => {
                    expect(res).toBeDefined();
                })
        });

    })
})