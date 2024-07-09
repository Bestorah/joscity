const Rating = require('../models/Rating.js');

exports.getAllRatings = async (req, res) => {
  try {
    const ratings = await Rating.find();
    res.json(ratings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createRating = async (req, res) => {
  const rating = new Rating({
    stars: req.body.stars,
    comment: req.body.comment,
    productId: req.body.productId,
  });

  try {
    const newRating = await rating.save();
    res.status(201).json(newRating);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
