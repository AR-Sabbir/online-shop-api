const getRandomID = require("../utility/getRandomID");
const getSlug = require("../utility/getSlug");
const { getTagDB, updateTagDB } = require("../utility/read _&_write");

/**
 * 
 * @desc //  All Tag info
 * @name get api/v1/tag
 * @access public
 */

const allTagRouter = ( req, res) => {

    // all customer
    const allTag = getTagDB();
    // sent tag data
    res.status(200).json(allTag);
}

/**
 * 
 * @desc //  create Tag
 * @name post api/v1/tag
 * @access public
 */

const createTag = ( req,res) => {

    // all tag db
    const tag = getTagDB();

    tag.push({
        id : getRandomID(),
        ...req.body,
        slug : getSlug(req.body?.name)
       
    });

    if(!req.body){
        res.status(400).json({
            "status" : false,
            "massege" : "All field are require"
        })
    }else{
        // updata data
        updateTagDB(tag);
        res.status(201).json({
            "status" : true,
            "massege" : "tag create successfully"
        })
    };
};


/**
 * 
 * @desc //   tag sinigle data update
 * @name edit api/v1/tag/slug
 * @access public
 */

 const tagUpdate = ( req, res) => {
         // get all customer db
         const tag = getTagDB();

         // get slug
         const {id} = req.params;
 
         // get index
         const index = tag.findIndex(data => data.id == id);
        console.log(index);
         // validation
         if(tag.some(data => data.id == id)){
             
             // update tag data

             tag[index]= {
                ...tag[index],
                ...req.body,
             

            }
            
            // updata data
            updateTagDB(tag)
             res.status(200).json({
                "status" : true,
                "massege" : "Update tag data succesfull"
             });

         }else{
            
             res.status(404).json({
                "status" : false,
                "massage" : "tag not found"
            })
           
         }
}
/**
 * 
 * @desc //   customer sinigle data delete
 * @name delete api/v1/tag/slug
 * @access public
 */

 const tagDelete = ( req, res) => {
     // get all customer db
     const tag = getTagDB();

     // get id
     const {id} = req.params;

     // get index
     const allDAta = tag.filter(data => data.id != id);
    
     // validation
     if(tag.some(data => data.id == id)){
        
        // update customer data
        updateTagDB(allDAta);

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
    allTagRouter,
    createTag,
    tagDelete,
    tagUpdate,
    // customerDelete
}