const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const Additionaleducationtypes = sequelize.define('additionaleducationtypes',{
    id:{
        type: DataTypes.INTEGER ,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name:{
        type: DataTypes.STRING
      },
      nameEn:{
        type: DataTypes.STRING
      }
},{
    freezeTableName: true
});