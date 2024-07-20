const express = require('express');
const Blog = require('../models/Blog');
const router = express.Router();

// Get all blogs with pagination
router.get('/api/blogs', async (req, res) => {
  const { page = 1, limit = 18 } = req.query;
  try {
    const blogs = await Blog.find({}, 'image author date title snippet') // Fetch only necessary fields
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();
    const count = await Blog.countDocuments();
    res.json({
      blogs,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single blog by ID
router.get('/api/blogs/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Cannot find blog' });
    }
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

// Like a blog post
router.post('/api/blogs/:id/like', async (req, res) => {
    try {
      const blog = await Blog.findById(req.params.id);
      if (blog == null) {
        return res.status(404).json({ message: 'Cannot find blog' });
      }
      blog.likes += 1;
      await blog.save();
      res.json(blog);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  // Unlike a blog post
  router.post('/api/blogs/:id/unlike', async (req, res) => {
    try {
      const blog = await Blog.findById(req.params.id);
      if (blog == null) {
        return res.status(404).json({ message: 'Cannot find blog' });
      }
      if (blog.likes > 0) {
        blog.likes -= 1;
      }
      await blog.save();
      res.json(blog);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
