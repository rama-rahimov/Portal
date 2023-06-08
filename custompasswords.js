const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const custompasswords = sequelize.define('custompasswords', {
    id:{
        type: DataTypes.INTEGER ,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING ,
        defaultValue: '' ,
        allowNull: false
    },
    fin:{
        type: DataTypes.STRING(200)
    },
    stage:{
        type: DataTypes.STRING(1),
        defaultValue: '' 
    },
    line:{
        type: DataTypes.TINYINT(1)
    },
    iso3:{
        type: DataTypes.STRING(5)
    }
},{
    freezeTableName: true
});