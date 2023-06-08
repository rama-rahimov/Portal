const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const rewards = sequelize.define('rewards', {
    id:{
        type: DataTypes.INTEGER.UNSIGNED ,
        autoIncrement: true ,
        primaryKey: true ,
        allowNull: false
    },
    user_id:{
        type: DataTypes.INTEGER ,
        allowNull: false
    },
    vacancy_appeals_id:{
        type: DataTypes.STRING ,
        allowNull: false
    },
    rewarding_doc:{
        type: DataTypes.STRING
    },
    rewarding_date:{
        type: DataTypes.STRING 
    }
});