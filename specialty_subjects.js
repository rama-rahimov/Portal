const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const specialty_subjects = sequelize.define('specialty_subjects', {
    id:{
        type: DataTypes.INTEGER ,
        allowNull: false ,
        autoIncrement: true ,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING(100),
        allowNull: true 
    },
    deleted:{
        type: DataTypes.TINYINT(1),
        allowNull: false ,
        defaultValue: 0
    },
    sinif:{
        type: DataTypes.INTEGER(2),
        allowNull: false
    },
    index:{
        type: DataTypes.INTEGER(2),
        allowNull: false
    }
});