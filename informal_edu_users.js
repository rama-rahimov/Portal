const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const informal_edu_users = sequelize.define('informal_edu_users', {
    id:{
        type: DataTypes.BIGINT(20) ,
        autoIncrement: true ,
        allowNull: false ,
        primaryKey: true
    },
    role_id:{
        type: DataTypes.INTEGER
    },
    fin:{
        type: DataTypes.STRING(50)
    },
    type:{
        type: DataTypes.INTEGER
    },
    doc_type:{
        type: DataTypes.STRING(50)
    },
    citizenship:{
        type: DataTypes.STRING(50)
    },
    name:{
        type: DataTypes.STRING(50)
    },
    surname:{
        type: DataTypes.STRING(50)
    },
    father_name:{
        type: DataTypes.STRING(50)
    },
    position:{
        type: DataTypes.STRING(750)
    },
    birthday:{
        type: DataTypes.STRING(50)
    },
    phone:{
        type: DataTypes.STRING(50)
    },
    image:{
        type: DataTypes.STRING(50)
    },
    education_level:{
        type: DataTypes.INTEGER
    },
    work_exp:{
        type: DataTypes.INTEGER
    },
    email:{
        type: DataTypes.STRING(50)
    },
    password:{
        type: DataTypes.STRING(75)
    },
    token:{
        type: DataTypes.TEXT
    },
    login:{
        type: DataTypes.INTEGER ,
        defaultValue: 0
    },
    status:{
        type: DataTypes.STRING(50)
    }
},{freezeTableName: true});