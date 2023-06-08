const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const olympiad_modules = sequelize.define('olympiad_modules', {
    id:{
        type: DataTypes.INTEGER ,
        allowNull: false ,
        autoIncrement: true ,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING
    },
    olympiad_type:{
        type: DataTypes.INTEGER,
        defaultValue: 4
    },
    deleted:{
        type: DataTypes.TINYINT(1) ,
        allowNull: false ,
        defaultValue: 0
    }
});