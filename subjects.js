const {sequelize} = require('../db');
const {DataTypes, SequelizeScopeError} = require('sequelize');

const subjects = sequelize.define('subjects', {
    id:{
        type: DataTypes.INTEGER.UNSIGNED ,
        autoIncrement: true ,
        primaryKey: true ,
        allowNull: false
    },
    name:{
        type: DataTypes.STRING(41) ,
        allowNull: false ,
        defaultValue: ''
    }
})