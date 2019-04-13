const express = require('express');
const path = require('path');
const { Review } = require('./db.js');
const compression = require('compression');

const app = express();
const port = 3002;

app.use(compression());
app.use(express.static('public'));

app.get('/abodes/:abode_id/reviews', (req, res) => {
  Review.findOne({ abode_id: parseInt(req.params.abode_id) }, (err, abodeInfo) => {
    if (err) {
      console.log('failed to find this listing', err);
    } else {
      res.send(abodeInfo);
    }
  });
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port, () => { console.log(`Listening on port ${port}`); });
