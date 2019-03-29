const jsf = require('json-schema-faker');
const Review = require('./db.js');

const fake = jsf.generate(Review);

console.log(fake);
