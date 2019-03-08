const express = require('express');
const server = express();
const db = require('./dbConfig.js');


server.use(express.json());

server.get('/games', async (req, res) => {
    const games = await db.getAll();
    res.status(200).json(games);
})

module.exports = server;