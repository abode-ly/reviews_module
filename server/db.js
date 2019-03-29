const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/abodely', { useNewUrlParser: true });

const oneReviewSchema = new mongoose.Schema({
  user_name: String,
  user_photo: String,
  review_text: String,
  accuracy: Number,
  communication: Number,
  cleanliness: Number,
  location: Number,
  check_in: Number,
  value: Number,
  review_date: String,
});

const reviewSchema = new mongoose.Schema({
  abode_id: Number,
  abode_name: String,
  reviews: [oneReviewSchema],
});
const Review = mongoose.model('Review', reviewSchema);

module.exports.Review = Review;


// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });

// module.exports.db = db;
// module.exports.OneReview = OneReview;
