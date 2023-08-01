const { Blogpost } = require('../models');

const blogData = [
  {
    title: 'MVC',
    author: 'Cameron French',
    createdOn: 'June 21, 2021 17:00:00',
    content: 'Blog content',
  },
  {
    title: 'ORM',
    author: 'Cameron French',
    createdOn: 'June 21, 2021 17:00:00',
    content: "Blog content",

  },
  {
    title: 'MySQL',
    author: 'Cameron French',
    createdOn: 'June 21, 2021 17:00:00',
    content: 'Blog content',

  },
];

const seedBlog = () => Blogpost.bulkCreate(blogData);

module.exports = seedBlog;