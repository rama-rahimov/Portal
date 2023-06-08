const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const teaching_aids = sequelize.define('teaching_aids', {
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
        type: DataTypes.INTEGER ,
        allowNull: false
    },
    aid_name:{
        type: DataTypes.STRING
    },
    aid_publication_date:{
        type: DataTypes.STRING
    }
});