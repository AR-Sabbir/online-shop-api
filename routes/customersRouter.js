// file include
const express  = require('express');
const { multurCustomerStorage } = require('../utility/storageDisk');
const { allCustomersRouter,createCustomer,customerView,customerUpdate,customerDelete } = require('../controllers/customersControllers');


// init router
const customersRouter = express.Router();

// routes
customersRouter.route('/').get(allCustomersRouter).post(multurCustomerStorage(),createCustomer);
customersRouter.route('/:id').get(customerView).put(multurCustomerStorage(),customerUpdate).delete(customerDelete)

// module export
module.exports = customersRouter;