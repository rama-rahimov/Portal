const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const English_degree = sequelize.define('english_degree', {
    id:{
        type: DataTypes.STRING ,
        primaryKey: true ,
        autoIncrement: true ,
        allowNull: false
    },
    name:{
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});