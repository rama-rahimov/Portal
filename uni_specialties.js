const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const uni_specialties = sequelize.define('uni_specialties', {
    id:{
        type: DataTypes.INTEGER ,
        allowNull: false ,
        autoIncrement: true ,
        primaryKey: true
    },
    specialty_name:{
       type: DataTypes.STRING 
    },
    kod:{
        type: DataTypes.STRING(100)
    },
    kod2:{
        type: DataTypes.STRING(100)
    },
    name:{
        type: DataTypes.STRING
    }
});