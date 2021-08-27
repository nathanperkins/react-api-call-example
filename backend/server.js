"use strict";

var express = require('express');
var app = express();
app.get('/', function (req, res) {
    const data = {
        "hello": "world"
    };
    res.send(JSON.stringify(data));
});

app.listen(4000, function () {
    console.log('App listening on port 4000!');
});
