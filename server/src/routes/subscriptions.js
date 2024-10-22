const express = require('express');
const { createSubscription, getSubscription } = require('../controllers/subscriptionController');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/', auth, createSubscription);
router.get('/', auth, getSubscription);

module.exports = router;