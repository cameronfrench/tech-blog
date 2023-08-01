const router = require('express').Router();
const { Blogpost, User } = require('../models');

// GET blogs for homepage
router.get('/', async (req, res) => {
  try {
      const dbBlogData = await Blogpost.findAll({
          include: [
              {
                  model: User,
                  attributes: ['username'],
              },
          ],
          order: [
              ['id', 'DESC'],
          ],
      });

      const blogposts = dbBlogData.map((blogpost) => 
          blogpost.get({ plain: true})
      );
      res.render('homepage', {
          blogposts: blogposts,
          loggedIn: req.session.loggedIn,
          username: req.session.username,
      });
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
  }
});

// GET dashboard route 
router.get('/dashboard', async (req, res) => {
  try {
    const dbBlogpostData = await Blogpost.findAll();
    const blogposts = dbBlogpostData.map((blogpost) => blogpost.get({ plain: true }));
    res.render('dashboard', {
      blogposts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;
