const express = require('express');
const server = express();
const db = require('./dbConfig.js');


server.use(express.json());

server.get('/games', async (req, res) => {
    const games = await db.getAll();
    res.status(200).json(games);
})

server.post('/games', async (req, res) => {
    try {
        if(req.body.title && req.body.genre){
            const game = await db.add(req.body)
            res.status(201).json(game)
        }
        else{
            res.status(422).json({message: 'title and genre required'})
        }
    }
    catch (err) {
        res.status(500).json(err)
    }
})

module.exports = server;