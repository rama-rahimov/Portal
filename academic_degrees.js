const express = require('express');
const router = express.Router();

const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const Academic_degrees = sequelize.define('academic_degrees', {
  id:{
    type: DataTypes.INTEGER ,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  user_id:{
    type: DataTypes.INTEGER
  },
  vacancy_appeals_id:{
    type: DataTypes.INTEGER
  },
  academic_degree_date:{
    type: DataTypes.STRING
  },
  academic_degree:{
    type: DataTypes.STRING
  }
},{
  freezeTableName:true
});

