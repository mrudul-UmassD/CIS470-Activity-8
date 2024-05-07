const express = require('express');
const serverless = require('serverless-http');
const { classifyTriangle } = require('./classifyTriangle');

const app = express();


app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

app.post('/', (req, res) => {
    const { side1, side2, side3 } = req.body;
    const result = classifyTriangle(side1, side2, side3);
    res.json({ result });
})

module.exports.handler = serverless(app);
