const express = require('express');
const { Review } = require('./db.js');

const app = express();
const port = 3002;

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

app.listen(port, () => { console.log(`Listening on port ${port}`); });
