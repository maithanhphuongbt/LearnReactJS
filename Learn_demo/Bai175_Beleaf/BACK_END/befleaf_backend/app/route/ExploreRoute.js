module.exports = function (app) {

    const Explore = require('../controller/ExploreController');

    // Create a new Book
    app.post('/api/explore/create', Explore.create);

    // Retrieve all Books
    app.get('/api/explores', Explore.findAll);

    // Retrieve a single Book by Id
    app.get('/api/explore/:exploreId', Explore.findById);

    // Update a Book with Id
    app.put('/api/explore/:exploreId', Explore.update);

    // Delete a Book with Id
    app.delete('/api/explore/:exploreId', Explore.delete);

    //Update num_like with Id 
    app.post('/api/explore/update', Explore.updateNumLike);
}