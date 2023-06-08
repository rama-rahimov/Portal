const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const atis_enterprises = sequelize.define('atis_enterprises', {
    id:{
        type: DataTypes.INTEGER ,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name:{
      type: DataTypes.STRING(100)
      },
      nameEn:{
        type: DataTypes.STRING(100)
      },
      ATIS_ID:{
        type: DataTypes.STRING(100)
      },
      type:{
        type: DataTypes.TINYINT(4)
      }
},{
    freezeTableName: true
});