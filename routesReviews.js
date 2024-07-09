const express = require('express');
const router = express.Router();
const Reviews = require('../models/Rating.js');

// GET all reviews
router.get('/', async (req, res) => {
  try {
    const Reviews = await Reviews.find();
    res.json(Reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new reviews
router.post('/', async (req, res) => {
  const Reviews = new Reviews({
    stars: req.body.stars,
    comment: req.body.comment,
    productId: req.body.productId,
  });

  try {
    const newReviews = await reviews.save();
    res.status(201).json(newReviews;
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;

