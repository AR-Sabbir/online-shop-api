const getRandomID = require("../utility/getRandomID");
const getSlug = require("../utility/getSlug");
const { getCatagoryDB, updateCatagoryDB } = require("../utility/read _&_write");

/**
 * 
 * @desc //  All Catagory info
 * @name get api/v1/catagory
 * @access public
 */

const allCatagoryRouter = ( req, res) => {

    // all customer
    const allCatagory = getCatagoryDB();
    // sent tag data
    res.status(200).json(allCatagory);
}

/**
 * 
 * @desc //  create Tag
 * @name post api/v1/catagory
 * @access public
 */

const createCatagory = ( req,res) => {

    // all tag db
    const catagory = getCatagoryDB();

    catagory.push({
        id : getRandomID(),
        ...req.body,
        slug : getSlug(req.body?.name),
        profil_pic : req.file ? req.file.originalname : "https://i.ibb.co/x66hxJW/128253342-104272698194468-1671028996997175290-n.jpg"
       
    });

    if(!req.body){
        res.status(400).json({
            "status" : false,
            "massege" : "All field are require"
        })
    }else{
        // updata data
        updateCatagoryDB(catagory);
        res.status(201).json({
            "status" : true,
            "massege" : "tag create successfully"
        })
    };
};


/**
 * 
 * @desc //   tag sinigle data update
 * @name edit api/v1/tag/catagory
 * @access public
 */

 const catagoryUpdate = ( req, res) => {
         // get all customer db
         const catagory = getCatagoryDB();

         // get slug
         const {id} = req.params;
 
         // get index
         const index = catagory.findIndex(data => data.id == id);
        
         // validation
         if(catagory.some(data => data.slug == slug)){
             
             // update tag data

             catagory[index]= {
                ...catagory[index],
                ...req.body,
                profil_pic : req.file ? req.file.originalname : catagory[index]?.profil_pic
             

            }
            
            // updata data
            updateCatagoryDB(catagory)
             res.status(200).json({
                "status" : true,
                "massege" : "Catagory tag data succesfull"
             });

         }else{
             res.status(404).json({
                "status" : false,
                "massage" : "Catagory not found"
            })
           
         }
}









/**
 * 
 * @desc //   Catagory sinigle data delete
 * @name delete api/v1/catagory/slug
 * @access public
 */

 const catagoryDelete = ( req, res) => {
     // get all customer db
     const catagory = getCatagoryDB();

     // get id
     const {id} = req.params;

     // get index
     const allDAta = catagory.filter(data => data.id != id);
    
     // validation
     if(catagory.some(data => data.id == id)){
        
        // update customer data
        updateCatagoryDB(allDAta);

         res.status(200).json({
            "status" : true,
            "massege" : "Tag delete succesfull" 
         })


         
     }else{
        res.status(404).json({
            "status" : false,
            "massage" : "Tag not found"
        })
     }
        
}

// export

module.exports = {
    allCatagoryRouter,
    createCatagory,
    catagoryDelete,
    catagoryUpdate,
    
}