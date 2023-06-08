const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const Education_base = sequelize.define('education_base', {
    id:{
        type: DataTypes.INTEGER ,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name:{
        type: DataTypes.STRING(200)
    },
    deleted:{
        type: DataTypes.TINYINT(1),
        defaultValue: 0
    }
},{
    freezeTableName: true
});