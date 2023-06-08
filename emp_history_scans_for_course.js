const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const Emp_history_scans_for_course = sequelize.define('emp_history_scans_for_course', {
    id:{
        type: DataTypes.INTEGER.UNSIGNED ,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false                                                                                                                                                                 
    },
    user_id:{
        type: DataTypes.INTEGER ,
        allowNull: false
    },
    course_appeals_id:{
        type: DataTypes.INTEGER ,
        allowNull: false 
    },
    doc_scan:{
        type: DataTypes.STRING 
    }
},{
 freezeTableName: false   
});