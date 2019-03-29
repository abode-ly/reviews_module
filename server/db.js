const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/abodely', { useNewUrlParser: true });

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


let test = new Review({
  abode_id: 43,
  abode_name: 'Palace on the beach',
  reviews: [{
    user_name: 'John Johnson',
    user_photo: 'apicturehere.com/jpeg',
    review_text: 'It was a great place. Had a lovely stay.',
    accuracy: 3,
    communication: 16,
    cleanliness: 5,
    location: 4,
    check_in: 10,
    value: 5,
    review_date: new Date('December 17, 1995 03:24:00'),
  }],
});

test.save((err, testSuccess) => {
  if (err) {
    console.log('failed to save the test case ', err);
  } else {
    console.log('saved test into db ', testSuccess);
  }
});

Review.find((err, all)=>{
  if (err) {
    console.log('find err');
  } else {
    console.log('hello', all[0].reviews)
  }
})

module.exports.Review = Review;


// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });

// module.exports.db = db;
// module.exports.OneReview = OneReview;
