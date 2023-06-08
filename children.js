const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const children = sequelize.define('children',{
    id:{
        type: DataTypes.INTEGER ,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    user_id:{
      type: DataTypes.INTEGER ,
      allowNull: false
    },
    fin:{
        type: DataTypes.STRING(25),
        defaultValue: ''
    },
    birth_certificate_no:{
        type: DataTypes.STRING(25),
        defaultValue: ''
    },
    type:{
        type: DataTypes.TINYINT(1),
        allowNull: false
    } ,
    city:{
        type: DataTypes.STRING ,
        defaultValue: ''
    },
    region:{
        type: DataTypes.STRING,
        defaultValue: ''
    },
    current_enterprise:{
        type: DataTypes.STRING ,
        defaultValue: ''
    },
    grade:{
        type: DataTypes.STRING ,
        defaultValue: ''
    },
    teaching_language:{
        type: DataTypes.STRING ,
        defaultValue: ''
    },
    parent_type:{
        type: DataTypes.STRING ,
        defaultValue: ''
    },
    deleted:{
        type: DataTypes.TINYINT(1) ,
        defaultValue: 0
    },
    school_code:{
        type: DataTypes.STRING(20)  
    },
    utis_code:{
        type: DataTypes.STRING(20)
    },
    edu_level:{
        type: DataTypes.STRING ,
        defaultValue: ''
    }
},{
    freezeTableName:true
});