const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const schools_new = sequelize.define('schools_new', {
    id:{
        type: DataTypes.INTEGER ,
        autoIncrement: true ,
        primaryKey: true ,
        allowNull: true
    },
    student_cart_id:{
        type: DataTypes.STRING 
    },
    DIM_ID:{
        type: DataTypes.STRING 
    },
    DTS_ID:{
        type: DataTypes.STRING  
    },
    DM_NAME:{
        type: DataTypes.STRING  
    },
    name:{
        type: DataTypes.STRING
    }
});                                   