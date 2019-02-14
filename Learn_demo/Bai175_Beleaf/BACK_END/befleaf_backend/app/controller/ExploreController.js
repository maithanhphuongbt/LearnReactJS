const db = require ('../config/Database');
const Explore = db.explores;
const sequelize = require('sequelize');

// Post a Explore
exports.create = (req, res) => {
  // Save Explore to MySQL database
  Explore.create ({
    title: req.body.title,
    author: req.body.author,
    description: req.body.description,
    published: req.body.published,
  })
    .then (explore => {
      // Send created explore to client
      res.send (explore);
    })
    .catch (err => {
      res.status (500).send ('Error -> ' + err);
    });
};

// Fetch all Explore
exports.findAll = (req, res) => {
  Explore.findAll ({
     order: sequelize.literal('id ASC')
    })
    .then (explore => {
      // Send all Explore to Client
      res.send (explore);
      console.log(explore)
    })
    .catch (err => {
      res.status (500).send ('Error -> ' + err);
    });
};

// Find a Customer by Id
exports.findById = (req, res) => {
  Explore.findById (req.params.exploreId)
    .then (explore => {
      res.send (explore);
    })
    .catch (err => {
      res.status (500).send ('Error -> ' + err);
    });
};

// Update a Explore
exports.update = (req, res) => {
  var explore = req.body;
  const id = req.params.exploreId;
  Explore.update (
    {
      title: req.body.title,
      author: req.body.author,
      description: req.body.description,
      published: req.body.published,
    },
    {
      where: {
        id: req.params.exploreId,
      }
    }
  )
    .then (() => {
      res.status (200).send (explore);
    })
    .catch (err => {
      res.status (500).send ('Error -> ' + err);
    });
};

// Delete a Explore by Id
exports.delete = (req, res) => {
  const id = req.params.exploreId;
  Explore.destroy ({
    where: {id: id},
  })
    .then (() => {
      res.status (200).send ('Explore has been deleted!');
    })
    .catch (err => {
      res.status (500).send ('Fail to delete!');
    });
};

//Update num_like a Explore by id;
exports.updateNumLike = (req, res) => {
  var message = {
      status: 200,
      message: "Success"
  }

  console.log(req.body);
  
  
  Explore.update (
    {
      num_like: sequelize.literal('num_like + 1')
    },
    {
      where: {
        id: req.body.id
      }
    }
  )
    .then (() => {
      res.status (200).send (message);
    })
    .catch (err => {
      res.status (500).send ('Error -> ' + err);
    });
}
