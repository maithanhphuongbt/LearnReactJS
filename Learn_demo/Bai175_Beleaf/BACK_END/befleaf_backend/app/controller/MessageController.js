const db = require('../config/Database');
const Message = db.message;
const sequelize = require('sequelize');

// Post a Message
exports.create = (req, res) => {
    // Save Message to MySQL database
    Message.create({
            title: req.body.title,
            author: req.body.author,
            description: req.body.description,
            published: req.body.published,
        })
        .then(message => {
            // Send created message to client
            res.send(message);
        })
        .catch(err => {
            res.status(500).send('Error -> ' + err);
        });
};

// Fetch all Message
exports.findAll = (req, res) => {
    Message.findAll({
            order: sequelize.literal('id ASC')
        })
        .then(message => {
            // Send all Message to Client
            res.send(message);
            console.log(message)
        })
        .catch(err => {
            res.status(500).send('Error -> ' + err);
        });
};

// Find a Customer by Id
exports.findById = (req, res) => {
    Message.findById(req.params.messageId)
        .then(message => {
            res.send(message);
        })
        .catch(err => {
            res.status(500).send('Error -> ' + err);
        });
};

// Update a Message
exports.update = (req, res) => {
    var message = req.body;
    const id = req.params.messageId;
    Message.update({
            title: req.body.title,
            author: req.body.author,
            description: req.body.description,
            published: req.body.published,
        }, {
            where: {
                id: req.params.messageId,
            }
        })
        .then(() => {
            res.status(200).send(message);
        })
        .catch(err => {
            res.status(500).send('Error -> ' + err);
        });
};

// Delete a Message by Id
exports.delete = (req, res) => {
    const id = req.params.messageId;
    Message.destroy({
            where: {
                id: id
            },
        })
        .then(() => {
            res.status(200).send('Message has been deleted!');
        })
        .catch(err => {
            res.status(500).send('Fail to delete!');
        });
};

//Update num_like a Message by id;
exports.updateNumLike = (req, res) => {
    var message = {
        status: 200,
        message: "Success"
    }

    console.log(req.body);


    Message.update({
            num_like: sequelize.literal('num_like + 1')
        }, {
            where: {
                id: req.body.id
            }
        })
        .then(() => {
            res.status(200).send(message);
        })
        .catch(err => {
            res.status(500).send('Error -> ' + err);
        });
}