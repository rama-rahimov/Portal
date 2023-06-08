const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const support_files = sequelize.define('support_files', {
   id:{
    type: DataTypes.INTEGER ,
    allowNull: false ,
    autoIncrement: true ,
    primaryKey: true
   } ,
   support_apply_id:{
    type: DataTypes.INTEGER
   },
   doc_scan:{
    type: DataTypes.STRING ,
    defaultValue: ''
   }
});