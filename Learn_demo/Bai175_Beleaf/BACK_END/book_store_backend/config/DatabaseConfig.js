const postgresInfo = {
    database: 'BookStore',
    username: 'postgres',
    password: 'vull8062365@',
    host: 'localhost',
    dialect: 'postgres',
    port: 5432,
    
};

const Sequelize = require('sequelize');
const sequelize = new Sequelize(postgresInfo.database, postgresInfo.username, postgresInfo.password, {
    host: postgresInfo.host,
    dialect: postgresInfo.dialect,
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.book_info = require('../model/Book.js')(sequelize, Sequelize);

module.exports = db;