

// get slug
const getSlug = ( title = '') => {

    // make title
    return title.toLowerCase().replace(/[^\w-]+/g, '-');
}

// module exports
module.exports = getSlug ;