const express = require('express');
const { createBlog, getAllBlogs, getBlogById } = require('../controllers/blogController');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/', auth, createBlog);
router.get('/', getAllBlogs);
router.get('/:id', getBlogById);

module.exports = router;