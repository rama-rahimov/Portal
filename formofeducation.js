const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const formofeducation = sequelize.define('formofeducation', {
    id:{
        type: DataTypes.INTEGER.UNSIGNED ,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name:{
        type: DataTypes.STRING ,
        allowNull: false
    },
    nameEn:{
        type: DataTypes.STRING ,
        allowNull: false ,
        defaultValue: ''
    }
},{freezeTableName: true});