const Blog = require('../models/Blog');

exports.createBlog = async (req, res) => {
  const blog = new Blog({
    ...req.body,
    author: req.user._id
  });

  try {
    await blog.save();
    res.status(201).send(blog);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({}).populate('author', 'name');
    res.send(blogs);
  } catch (error) {
    res.status(500).send();
  }
};

exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate('author', 'name');
    if (!blog) {
      return res.status(404).send();
    }
    res.send(blog);
  } catch (error) {
    res.status(500).send();
  }
};

exports.updateBlog = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['title', 'content', 'category', 'subscriberOnly', 'featured'];
  const isValidOperation = updates.every(update => allowedUpdates.includes(update));

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  }

  try {
    const blog = await Blog.findOne({ _id: req.params.id, author: req.user._id });

    if (!blog) {
      return res.status(404).send();
    }

    updates.forEach(update => blog[update] = req.body[update]);
    await blog.save();
    res.send(blog);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findOneAndDelete({ _id: req.params.id, author: req.user._id });

    if (!blog) {
      return res.status(404).send();
    }

    res.send(blog);
  } catch (error) {
    res.status(500).send();
  }
};