const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const olympiad_certificates = sequelize.define('olympiad_certificates', {
    id:{
        type: DataTypes.INTEGER.UNSIGNED ,
        autoIncrement: true ,
        primaryKey: true ,
        allowNull: false
    },
    olympiad_apply_id:{
        type: DataTypes.INTEGER ,
        allowNull: false
    },
    doc_scan:{
        type: DataTypes.STRING ,
        allowNull: false ,
        defaultValue: ''
    }
});