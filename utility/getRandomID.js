// randon id genarator
const getRandomID = ( ) => {
    // id genarator
    const id = Date.now() + "-" + Math.floor(Math.random() * 10000);
    
    // id return
    return id ;
};


// export

module.exports = getRandomID;