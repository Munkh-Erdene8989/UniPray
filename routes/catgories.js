const express = require('express');
const router = express.Router();
const { getCategories, getCatgory, updateatgory, deleteCatgory } = require('../controllers/catgories');

module.exports = router;