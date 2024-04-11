const express = require('express');
const serverless = require('serverless-http');

const app = express();

const { classifyTriangle } = require('./classifyTriangle');

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('https://k4z6ccacqk.execute-api.us-east-2.amazonaws.com/default/triangleapp', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

app.post('https://k4z6ccacqk.execute-api.us-east-2.amazonaws.com/default/check-triangle', (req, res) => {
    const { side1, side2, side3 } = req.body;
    const result = classifyTriangle(side1,side2,side3);
    res.json({ result });
})

module.exports.handler = serverless(app);
