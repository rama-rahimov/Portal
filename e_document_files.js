const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const e_document_files = sequelize.define('e_document_files', {
    id:{
        type: DataTypes.INTEGER ,
        allowNull: false ,
        primaryKey: true ,
        autoIncrement: true
    },
    e_documents_apply_id:{
        type: DataTypes.INTEGER
    },
    doc_scan:{
        type: DataTypes.STRING
    }
},{freezeTableName: true});