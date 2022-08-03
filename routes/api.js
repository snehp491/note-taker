const fs = require('fs');
const app = require('express').Router();

let db = require('../db/db.json');

app.get('/notes', (req, res) => {
    db = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'))

    res.json(db);

});

module.exports = app;
