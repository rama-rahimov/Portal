const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const appealed_out_of_schools = sequelize.define('appealed_out_of_schools', {
    id:{
        type: DataTypes.INTEGER ,
        primaryKey: true ,
        autoIncrement: true ,
        allowNull: false
    },
    appeals_out_of_school_id:{
        type: DataTypes.INTEGER 
    },
    out_of_school_id:{
        type: DataTypes.INTEGER  
    }
},{
    freezeTableName: true
});