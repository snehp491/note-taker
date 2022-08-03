const fs = require('fs');
const app = require('express').Router();

let db = require('../db/db.json');

app.get('/notes', (req, res) => {
    db = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'))

    res.json(db);

});

app.post('/notes', (req, res) => {

    const id = (new Date()).getTime();
    const note = {id: id, title: req.body.title, text: req.body.text};

    db.push(note);
    fs.writeFileSync('./db/db.json', JSON.stringify(db));
    res.json(db);
});

module.exports = app;
