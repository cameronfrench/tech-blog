const router = require('express').Router();
const { Blogpost } = require('../models');

// GET blogs for dashboard
router.get('/', async (req, res) => {
  try {
      const dbBlogpostData = await Blogpost.findAll();
      const blogposts = dbBlogpostData.map((blogpost) => 
          blogpost.get({ plain: true})
      );
      res.render('dashboard', {
          blogposts,
          loggedIn: req.session.loggedIn,
      });
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
  }
});