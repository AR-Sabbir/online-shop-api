// file include
const express  = require('express');
const { multurProductStorage } = require('../utility/storageDisk');
const { allProductRouter,createProduct,productView,productUpdate,productDelete } = require('../controllers/productControllers');


// init router
const productRouter = express.Router();

// routes
productRouter.route('/').get(allProductRouter).post(multurProductStorage(),createProduct);
productRouter.route('/:id').put(multurProductStorage(),productUpdate).delete(productDelete);
productRouter.route('/:slug').get(productView);
// module export
module.exports = productRouter;