const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const receptionline = sequelize.define('receptionline', {
    id:{
        type: DataTypes.INTEGER.UNSIGNED ,
        autoIncrement: true ,
        primaryKey: true ,
        allowNull: false
    },
    group:{
        type: DataTypes.STRING ,
        allowNull: false ,
        defaultValue: ''
    },
    name:{
        type: DataTypes.STRING ,
        allowNull: false ,
        defaultValue: ''
    },
    nameEn:{
        type: DataTypes.STRING ,
        defaultValue: ''
    },
    ATIS_ID:{
        type: DataTypes.INTEGER 
    },
    is_delete:{
        type: DataTypes.TINYINT(1).UNSIGNED ,
        allowNull: false ,
        defaultValue: 0
    }
});