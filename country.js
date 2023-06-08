const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const Country = sequelize.define('country', {
    id:{
        type: DataTypes.INTEGER ,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      iso:{
        type: DataTypes.CHAR(2),
        defaultValue: ''
      },
      nameEn:{
        type: DataTypes.STRING(80),
        defaultValue: ''
      },
      name:{
        type: DataTypes.STRING(80)
      },
      iso3:{
        type: DataTypes.CHAR(3)
      },
      numcode:{
         type: DataTypes.SMALLINT(6)
      },
      phonecode:{
        type: DataTypes.INTEGER(5),
        allowNull: false
      },
      min_size:{
        type: DataTypes.INTEGER ,
        defaultValue: 4
      },
      max_size:{
        type: DataTypes.INTEGER ,
        defaultValue: 13
      },
      recognized:{
        type: DataTypes.TINYINT(1),
        defaultValue: 0
      }
},{
    freezeTableName: true
});