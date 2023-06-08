const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const informal_edu_status_messages = sequelize.define('informal_edu_status_messages', {
    id:{
        type: DataTypes.BIGINT(20) ,
        autoIncrement: true ,
        primaryKey: true ,
        allowNull: false
    },
    status:{
        type: DataTypes.INTEGER
    },
    message:{
        type: DataTypes.STRING(50)
    }
},{freezeTableName: true});