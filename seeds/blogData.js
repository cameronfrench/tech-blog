const { Blogpost } = require('../models');

const blogdata = [
  {
    title: 'MVC',
    author: 'Cameron French',
    createdOn: 'June 21, 2021 17:00:00',
    content: 'This is content',

  },
  {
    title: 'ORM',
    author: 'Cameron French',
    createdOn: 'June 21, 2021 17:00:00',
    content: 'This is content',

  },
  {
    title: 'MySQL',
    author: 'Cameron French',
    createdOn: 'June 21, 2021 17:00:00',
    content: 'This is content',

  },
];

const seedBlog = () => Blogpost.bulkCreate(blogdata);

module.exports = seedBlog;