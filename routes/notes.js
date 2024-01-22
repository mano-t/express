var express = require('express');
var router = express.Router();
const cors = require('cors');
require('dotenv').config();

const { MongoClient } = require("mongodb");
const uri = process.env.MONGODB_URI;

router.get('/:id', async (req, res) => {
    let client;
    try {
        client = new MongoClient(uri);
        await client.connect();

        const database = client.db('notes');
        const notes = database.collection('notes');
        const query = { id: parseInt(req.params.id) };
        const note = await notes.findOne(query);

        res.json(note);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    } finally {
        if (client) {
            await client.close();
        }
    }
});

module.exports = router;
