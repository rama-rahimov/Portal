const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const tempdata22 = sequelize.define('tempdata22', {
    id:{
        type: DataTypes.INTEGER.UNSIGNED ,
        autoIncrement: true ,
        allowNull: false ,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING(100)
    },
    ATIS_ID:{
        type: DataTypes.STRING(100)
    },
    enterprise_name:{
        type: DataTypes.STRING(100)
    },
    enterprise_ATIS_ID:{
        type: DataTypes.STRING(100)
    },
    specialty_code:{
        type: DataTypes.STRING(100)
    },
    educationForms:{
        type: DataTypes.STRING(100)
    }
});