//  require section
const multer = require('multer');
const path = require('path');
const randomstring = require('randomstring');
const {readFileSync,writeFileSync} = require('fs');

// multer customer photo
const multurCustomerStorage = () => {

    // multer diskstorage
    const customerStorage = multer.diskStorage({
        destination : (req,file,cb) => {
            cb(null,path.join(__dirname, '../public/customer'));
        },
        filename : (req,file,cb) => {
            cb(null,randomstring.generate(7) + "_" +randomstring.generate({
                length: 12,
                charset: 'alphabetic'
              }) + file.originalname);
        }
    });

    // customer multer
    const customerMulter = multer({
        storage : customerStorage

    }).single('customer_photo');

    return customerMulter;
}




// product multer

// multer product  photo
const multurProductStorage = () => {

    // multer diskstorage
    const productStorage = multer.diskStorage({
        destination : (req,file,cb) => {
            cb(null,path.join(__dirname, '../public/product'));
        },
        filename : (req,file,cb) => {
            cb(null,randomstring.generate(7) + "_" +randomstring.generate({
                length: 12,
                charset: 'alphabetic'
              }) + file.originalname);
        }
    });

    // product multer
    const productMulter = multer({
        storage : productStorage

    }).array('photo');

    return productMulter;
}


// multer catagory photo
const multurCatagoryStorage = () => {

    // multer diskstorage
    const catagoryStorage = multer.diskStorage({
        destination : (req,file,cb) => {
            cb(null,path.join(__dirname, '../public/catagory'));
        },
        filename : (req,file,cb) => {
            cb(null,randomstring.generate(7) + "_" +randomstring.generate({
                length: 12,
                charset: 'alphabetic'
              }) + file.originalname);
        }
    });

    // customer multer
    const catagoryMulter = multer({
        storage : catagoryStorage

    }).single('catagory_photo');

    return catagoryMulter;
}






// export

module.exports = {
    multurCustomerStorage,
    multurCatagoryStorage,
    multurProductStorage
}