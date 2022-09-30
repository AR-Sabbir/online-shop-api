const getRandomID = require("../utility/getRandomID");
const { getCustomerDB, updateCustomerDB } = require("../utility/read _&_write");

/**
 * 
 * @desc //  All customer info
 * @name get api/v1/customers
 * @access public
 */

const allCustomersRouter = ( req, res) => {

    // all customer
    const customers = getCustomerDB();
    // sent customer data
    res.status(200).json(customers);
}

/**
 * 
 * @desc //  create customer
 * @name post api/v1/customers
 * @access public
 */

const createCustomer = ( req,res) => {

    // all customer db
    const customer = getCustomerDB();

    customer.push({
        id : getRandomID(),
        ...req.body,
        profil_pic : req.file ? req.file.originalname : "https://i.ibb.co/x66hxJW/128253342-104272698194468-1671028996997175290-n.jpg"
    });

    if(!req.body){
        res.status(400).json({
            "status" : false,
            "massege" : "All field are require"
        })
    }else{
        // updata data
        updateCustomerDB(customer);
        res.status(201).json({
            "status" : true,
            "massege" : "customer profile create successfully"
        })
    };
};

/**
 * 
 * @desc //   customer sinigle view
 * @name get api/v1/customers
 * @access public
 */
    const customerView = ( req, res) => {
        // get all customer db
        const customers = getCustomerDB();

        // get id
        const {id} = req.params;
        
        // get index
        const data = customers.find(data => data.id == id);
        

        // validation
        if(customers.some(data => data.id == id)){
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
 * @desc //   customer sinigle data update
 * @name edit api/v1/customers
 * @access public
 */

 const customerUpdate = ( req, res) => {
         // get all customer db
         const customers = getCustomerDB();

         // get id
         const {id} = req.params;
 
         // get index
         const index = customers.findIndex(data => data.id == id);
        console.log(index);
         // validation
         if(customers.some(data => data.id == id)){
             // responsive
             // update customer data

            customers[index]= {
                ...customers[index],
                ...req.body,
                profil_pic : req.file ? req.file.originalname : customers[index]?.profil_pic

            }
            
            // updata data
            updateCustomerDB(customers)
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
 * @desc //   customer sinigle data delete
 * @name delete api/v1/customers
 * @access public
 */

 const customerDelete = ( req, res) => {
     // get all customer db
     const customers = getCustomerDB();

     // get id
     const {id} = req.params;

     // get index
     const allDAta = customers.filter(data => data.id != id);
    
     // validation
     if(customers.some(data => data.id == id)){
        
        // update customer data
        updateCustomerDB(allDAta);

         res.status(200).json({
            "status" : true,
            "massege" : "Customer delete succesfull" 
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
    allCustomersRouter,
    createCustomer,
    customerView,
    customerUpdate,
    customerDelete
}