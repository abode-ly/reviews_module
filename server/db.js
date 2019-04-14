const mongoose = require('mongoose');

mongoose.connect('mongodb://172.17.0.2/abodely', { useNewUrlParser: true, useCreateIndex: true });
// localhost
// 172.17.0.2

const oneReviewSchema = new mongoose.Schema({
  user_name: { type: String, unique: true },
  user_photo: String,
  review_text: String,
  accuracy: Buffer,
  communication: Buffer,
  cleanliness: Buffer,
  location: Buffer,
  check_in: Buffer,
  value: Buffer,
  review_date: Date,
});

const reviewSchema = new mongoose.Schema({
  abode_id: { type: Number, unique: true },
  abode_name: String,
  reviews: [oneReviewSchema],
});
const Review = mongoose.model('Review', reviewSchema);

module.exports.Review = Review;
