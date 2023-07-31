const router = require('express').Router();
const { Blogpost } = require('../models');

// GET blogs for homepage
router.get('/', async (req, res) => {
  try {
      const dbBlogpostData = await Blogpost.findAll();
      const blogposts = dbBlogpostData.map((blogpost) => 
          blogpost.get({ plain: true})
      );
      res.render('homepage', {
          blogposts,
          loggedIn: req.session.loggedIn,
      });
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
  }
});

// // GET one blog
// router.get('/blog/:id', async (req, res) => {
//   try {
//     const dbBlogpostData = await Blogpost.findByPk(req.params.id, {
//       include: [
//         {
//           model: Blogpost,
//           attributes: [
//             'title',
//             'author',
//             'createdOn',
//             'content',
//           ],
//         },
//       ],
//     });

//     const blogpost = dbBlogpostData.get({ plain: true });
//     res.render('blogpost', { blogpost, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// Login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;
