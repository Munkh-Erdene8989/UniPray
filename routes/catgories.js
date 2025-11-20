const express = require('express');
const router = express.Router();
const { getCatgories, getCatgory, updateatgory, deleteCatgory } = require('../controller/catgories');

module.exports = router;