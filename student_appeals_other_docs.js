const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const student_appeals_other_docs = sequelize.define('student_appeals_other_docs', {
    id:{
        type: DataTypes.INTEGER ,
        allowNull: false ,
        autoIncrement: true ,
        primaryKey: true
    },
    doc_scan:{
        type: DataTypes.STRING
    },
    student_appeal_id:{
        type: DataTypes.INTEGER
    }
});