// file include
const express  = require('express');
const { allTagRouter, createTag,tagUpdate ,tagDelete} = require('../controllers/tagControllers');


// init router
const tagRouter = express.Router();

// routes
tagRouter.route('/').get(allTagRouter).post(createTag);
tagRouter.route('/:id').put(tagUpdate).delete(tagDelete)

// module export
module.exports = tagRouter;