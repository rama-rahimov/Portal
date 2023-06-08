const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const Edu_repair_files = sequelize.define('edu_repair_files', {
    id:{
        type: DataTypes.INTEGER ,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false                                                                                                                                                                 
    },
    edu_repair_apply_id:{
        type: DataTypes.INTEGER
    },
    doc_scan:{
        type: DataTypes.STRING(250)
    }
},{
    freezeTableName: true
});