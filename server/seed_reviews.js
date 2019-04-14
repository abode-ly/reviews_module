
const faker = require('faker');
const { Review } = require('./db.js');

const reviewText = () => {
  let reviewParagraphsArr = [];
  const reviewLength = Math.ceil(Math.random() * 4);
  for (let paragraphs = 0; paragraphs < reviewLength; paragraphs++) {
    reviewParagraphsArr.push(faker.lorem.paragraph());
  }
  return reviewParagraphsArr.join('\n');
};

const generateReviews = () => {
  const numOfReviews = Math.floor(Math.random() * 45);
  const reviews = [];
  for (let count = 0; count < numOfReviews; count++) {
    reviews.push({
      user_name: faker.name.findName(),
      user_photo: faker.image.avatar(),
      review_text: reviewText(),
      accuracy: Math.ceil(Math.random() * 5),
      communication: Math.ceil(Math.random() * 5),
      cleanliness: Math.ceil(Math.random() * 5),
      location: Math.ceil(Math.random() * 5),
      check_in: Math.ceil(Math.random() * 5),
      value: Math.ceil(Math.random() * 5),
      review_date: faker.date.past(),
    });
  }
  return reviews;
};

const generateListings = () => {
  let abodeCount = 0;

  for (let abode = 1; abode < 101; abode++) {
    const listing = new Review({
      abode_id: abode,
      abode_name: faker.lorem.words(),
      reviews: generateReviews(),
    });

    listing.save((err) => {
      abodeCount++;
      console.log("abodeCount:" + abodeCount);
      if (err) {
        console.log('failed to save the listing to database ', err);
      } else {
        console.log('saved a listing to the database');
        if (abodeCount === 100) {
          process.exit();
        }
      }
    });
  }
};

if (Review.collection) {
  Review.db.dropCollection('reviews', (err) => {
    if (err) {
      console.log('failed to drop existing collection from MongoDB, ', err);
    } else {
      console.log('successfully removed collection and now reseeding');
      generateListings();
    }
  });
} else {
  console.log('seeding data for the first time');
  generateListings();
}

module.exports.generateListings = generateListings;
