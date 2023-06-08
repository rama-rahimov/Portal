const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const Appeals_out_of_school = sequelize.define('appeals_out_of_school',{
    id:{
        type: DataTypes.INTEGER ,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      children_id:{
        type: DataTypes.INTEGER
      },
      user_id:{
        type: DataTypes.INTEGER
      },
      step:{
        type: DataTypes.TINYINT(1)
      },
      status:{
        type: DataTypes.TINYINT(1)
      },
      first_name:{
         type: DataTypes.STRING
      },
      last_name:{
        type: DataTypes.STRING
      },
      father_name:{
        type: DataTypes.STRING
      },
      birth_date:{
        type: DataTypes.STRING
      },
      address:{
        type: DataTypes.STRING  
      },
      actual_address:{
        type: DataTypes.STRING
      },
      genderId:{
        type: DataTypes.TINYINT(1)
      },
      is_address_current:{
        type: DataTypes.TINYINT(1)
      },
      city:{
        type: DataTypes.STRING
      },
      region:{
        type: DataTypes.STRING
      },
      current_enterprise:{
        type: DataTypes.STRING
      },
      grade:{
        type: DataTypes.STRING
      },
      parent_type:{
        type: DataTypes.STRING(11)
      },
      teaching_language:{
        type: DataTypes.STRING
      },
      health_cert_date:{
        type: DataTypes.STRING
      },
      health_cert_no:{
        type: DataTypes.STRING
      },
      health_cert_scan:{
        type: DataTypes.STRING
      },
      photo_3x4_scan:{
        type: DataTypes.STRING
      },
      birth_cert_scan:{
        type: DataTypes.STRING
      }
},{
    freezeTableName:true
}) ;