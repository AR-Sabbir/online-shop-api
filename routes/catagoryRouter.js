// file include
const express  = require('express');
const { allCatagoryRouter, createCatagory,catagoryUpdate ,catagoryDelete} = require('../controllers/catagoryControllers');
const { multurCustomerStorage } = require('../utility/storageDisk');


// init router
const catagoryRouter = express.Router();

// routes
catagoryRouter.route('/').get(allCatagoryRouter).post(multurCustomerStorage(),createCatagory);
catagoryRouter.route('/:id').get().put(multurCustomerStorage(),catagoryUpdate).delete(catagoryDelete)

// module export
module.exports = catagoryRouter;