const express = require('express');
const Review = require('./db.js');

const app = express();
const port = 3002;

app.listen(port, () => { console.log(`Listening on port ${port}`); });
