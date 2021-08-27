"use strict";

var cors = require('cors');
var express = require('express');
var app = express();

app.use(cors());

app.get('/', function (req, res) {
    const data = {
        "hello": "world"
    };
    res.send(JSON.stringify(data));
});

app.listen(4000, function () {
    console.log('App listening on port 4000!');
});
