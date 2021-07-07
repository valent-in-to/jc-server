const Sequelize = require('sequelize');
const {db} = require('../config');

const database = new Sequelize(
    db.database,
    db.username,
    db.password,
    {
        host: db.host,
        dialect: 'mysql'
    }
);

database.sync()

module.exports = database 