const {sequelize} = require('../db');
const {DataTypes, DATE} = require('sequelize');

const educationlevel = sequelize.define('educationlevel', {
    id:{
        type: DataTypes.INTEGER.UNSIGNED ,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name:{
        type: DataTypes.STRING(200)
    },
    nameEn:{
        type: DataTypes.STRING(200)
    }
},{
    freezeTableName: true
});