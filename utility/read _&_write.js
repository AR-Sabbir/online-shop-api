// package include
const {readFileSync,writeFileSync} = require('fs');
const path = require('path');

// get all customer db
const getCustomerDB = () => {

    // customer db json db
    return JSON.parse(readFileSync(path.join(__dirname, '../db/customers.json')));
    
}

// update culstomer db

const updateCustomerDB = (obj) => {
  return  writeFileSync(path.join(__dirname, "../db/customers.json"),JSON.stringify(obj));
};


// get all tag db
const getTagDB = () => {

    // tag db json db
    return JSON.parse(readFileSync(path.join(__dirname, '../db/tag.json')));
    
}

// update tag db

const updateTagDB = (obj) => {
  return  writeFileSync(path.join(__dirname, "../db/tag.json"),JSON.stringify(obj));
};

// get all catagory db
const getCatagoryDB = () => {

    // catagory db json db
    return JSON.parse(readFileSync(path.join(__dirname, '../db/catagory.json')));
    
}

// update catagory db

const updateCatagoryDB = (obj) => {
  return  writeFileSync(path.join(__dirname, "../db/catagory.json"),JSON.stringify(obj));
};


// get all product db
const getProductDB = () => {
    // product db json db
    return JSON.parse(readFileSync(path.join(__dirname,"../db/product.json")));
};

// update product db
const updateProductDB = (obj) => {
  return  writeFileSync(path.join(__dirname, "../db/product.json"),JSON.stringify(obj));
};

// export

module.exports = {
    getCustomerDB,
    updateCustomerDB,
    getTagDB,
    updateTagDB,
    getCatagoryDB,
    updateCatagoryDB,
    getProductDB,
    updateProductDB
}