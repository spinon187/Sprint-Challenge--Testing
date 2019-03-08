const server = require('./server.js');
const request = require('supertest');
const db = require('./dbConfig.js');


describe('server.js', () => {
    describe('GET /games', () => {
        it('should return 200', () => {
            return request(server)
                .get('/games')
                .then(res => {
                    expect(res.status).toBe(200);
                })
        });
        it('should return a value even if empty', () => {
            return request(server)
                .get('/games')
                .then(res => {
                    expect(res).toBeDefined();
                })
        });
        it('should return JSON', () => {
            return request(server)
            .get('/games')
            .then(res => {
                expect(res.type).toBe('application/json');
            })
        })

    })

    describe('POST /games', () => {


        it('should return 201', async () => {
            return request(server)
                .post('/games')
                .send({title: 'battletoads', genre: 'battletoads'})
                .then(res => {
                    expect(res.status).toBe(201);
                })

        });

        it('should return 422', async() => {
            return request(server)
                .post('/games')
                .send({title: 'battletoads'})
                .then(res => {
                    expect(res.status).toBe(422);
                })
        });

        it('should return 500', async() => {
            return request(server)
                .post('/games')
                .send({title: 'battletoads', genre: 'battletoads', errormaker: 'monkeywrench'})
                .then(res => {
                    expect(res.status).toBe(500);
                })
        });
    })
})