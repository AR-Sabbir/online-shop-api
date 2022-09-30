// package include
const express            = require('express');
const colors             = require('colors');
const customersRouter    = require('./routes/customersRouter');
const tagRouter          = require('./routes/tagRouter');
const productRouter      = require('./routes/productRouter');
const catagoryRouter     = require('./routes/catagoryRouter');
const dotenv             = require('dotenv').config();
const cors               = require('cors');

// environment setup
const PORT = process.env.PORT || 8080;

// express init 
const app = express();


// middleware user
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cors())
// public folder static 

app.use(express.static('public'))

// api routes

app.use('/api/v1/customers',customersRouter);
app.use('/api/v1/product',productRouter)
app.use('/api/v1/catagory',catagoryRouter)
app.use('/api/v1/tag',tagRouter)

// server port

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`.bgGreen.black);
})