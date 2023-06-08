const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const Emp_history_scans = sequelize.define('emp_history_scans', {
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
    vacancy_appeals_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    doc_scan:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
})