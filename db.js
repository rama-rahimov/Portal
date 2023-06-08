const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('portalm', 'root', '123456', {
    dialect: 'mysql',
    pool:{
        acquire: 100000,
        max: 1000
    }
});


module.exports = {sequelize} ;