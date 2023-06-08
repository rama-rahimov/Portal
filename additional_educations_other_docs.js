const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const additional_educations_other_docs = sequelize.define('additional_educations_other_docs', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    doc_scan:{
        type: DataTypes.INTEGER
    },
    additional_education_id:{
        type: DataTypes.INTEGER
    }
},{
    freezeTableName: true
});