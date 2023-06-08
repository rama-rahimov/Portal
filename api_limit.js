const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const api_limit = sequelize.define('api_limit', {
    id:{
        type: DataTypes.INTEGER ,
        primaryKey: true ,
        autoIncrement: true ,
        allowNull: false
    } ,
    api:{
    type: DataTypes.STRING
    },
    ip:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});