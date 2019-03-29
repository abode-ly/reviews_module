const express = require('express');
const { generateListings } = require('./generated_reviews.js');

const app = express();
const port = 3002;

generateListings();

app.listen(port, () => { console.log(`Listening on port ${port}`); });
