const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const File_api_limit = sequelize.define('file_api_limit', {
    id:{
        type: DataTypes.INTEGER.UNSIGNED ,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    api:{
        type: DataTypes.STRING
    },
    ip:{
        type: DataTypes.STRING
    }
},{freezeTableName: true});