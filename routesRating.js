const express = require('express');
const router = express.Router();
const Rating = require('../models/Rating.js');

// GET all ratings
router.get('/', async (req, res) => {
  try {
    const ratings = await Rating.find();
    res.json(ratings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new rating
router.post('/', async (req, res) => {
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
});

module.exports = router;
