const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const Atis_specialty = sequelize.define('atis_specialty', {
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
      },
      ATIS_ID:{
        type: DataTypes.STRING(100)
      },
      password:{
        type: DataTypes.STRING(100)
      }
},{
    freezeTableName: true
});