const getRandomID = require("../utility/getRandomID");
const getSlug = require("../utility/getSlug");
const { getProductDB, updateProductDB } = require("../utility/read _&_write");

/**
 * 
 * @desc //  All Product info
 * @name get api/v1/product
 * @access public
 */

const allProductRouter = ( req, res) => {

    // all customer
    const product = getProductDB();
    // sent customer data
    res.status(200).json(product);
}

/**
 * 
 * @desc //  create Product
 * @name post api/v1/product
 * @access public
 */

const createProduct = ( req,res) => {

    // all product db
    const product = getProductDB();

    let jros = [];
    req.files.forEach(pd => {
        jros.push(pd.filename)
    });
    console.log(req.files);

    product.push({
        id : getRandomID(),
        ...req.body,
        slug : getSlug(req.body?.name),
        photo : req.files ? jros : "https://i.ibb.co/x66hxJW/128253342-104272698194468-1671028996997175290-n.jpg"
    });
    
    if(!req.body){
        res.status(400).json({
            "status" : false,
            "massege" : "All field are require"
        })
    }else{
        // updata data
        updateProductDB(product);
        res.status(201).json({
            "status" : true,
            "massege" : "Product profile create successfully"
        })
    };
};


/**
 * 
 * @desc //   Product sinigle view
 * @name get api/v1/product
 * @access public
 */
    const productView = ( req, res) => {
        // get all customer db
        const product = getProductDB();

        // get id
        const {slug} = req.params;
        
        // get index
        const data = product.find(data => data.slug == slug);
        

        // validation
        if(product.some(data => data.slug == slug)){
            // responsive
            res.status(201).json(data);
        }else{
            res.status(404).json({
                "status" : false,
                "massage" : "page not found"
            })

        }
    }

/**
 * 
 * @desc //   Product sinigle data update
 * @name edit api/v1/product
 * @access public
 */

 const productUpdate = ( req, res) => {
         // get all Product db
         const product = getProductDB();

         // get id
         const {id} = req.params;
 
         // get index
         const index = product.findIndex(data => data.id == id);

          //product multiple image
              let pdImg = [];
            req.files.forEach((pd) => {
                pdImg.push(pd?.filename);
            });
           
         // validation
         if(product.some(data => data.id == id)){
             
            product[index]= {
                ...product[index],
                ...req.body,
                photo : req.files ? pdImg : product[index]?.photo
            
            }
           
            // updata data
            updateProductDB(product)
             res.status(200).json({
                "status" : true,
                "massege" : "Update data succesfull"
             });

         }else{
            
             res.status(404).json({
                "status" : false,
                "massage" : "page not found"
            })
           
         }
}
/**
 * 
 * @desc //   product sinigle data delete
 * @name delete api/v1/product
 * @access public
 */

 const productDelete = ( req, res) => {
     // get all customer db
     const product = getProductDB();

     // get id
     const {id} = req.params;

     // get index
     const allDAta = product.filter(data => data.id != id);
    
     // validation
     if(product.some(data => data.id == id)){
        
        // update customer data
        updateProductDB(allDAta);

         res.status(200).json({
            "status" : true,
            "massege" : "Product delete succesfull" 
         })


         
     }else{
        res.status(404).json({
            "status" : false,
            "massage" : "page not found"
        })
     }
        
}

// export

module.exports = {
    allProductRouter,
    createProduct,
    productView,
    productUpdate,
    productDelete
}