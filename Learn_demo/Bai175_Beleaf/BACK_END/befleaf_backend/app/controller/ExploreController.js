const db = require ('../config/Database');
const Explore = db.explores;

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
  Explore.findAll ()
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
      },
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
