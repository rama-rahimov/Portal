const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const utis_schools_old = sequelize.define('utis_schools_old', {
    id:{
        type: DataTypes.INTEGER.UNSIGNED ,
        allowNull: false ,
        autoIncrement: true ,
        primaryKey: true
    },
    address:{
        type: DataTypes.STRING
    },
    longitude:{
        type: DataTypes.DECIMAL(30,6)
    },
    paralel:{
        type: DataTypes.DECIMAL(30,6)
    },
    regionId:{
        type: DataTypes.INTEGER
    },
    regionName:{
        type: DataTypes.STRING
    },
    schoolCode:{
        type: DataTypes.INTEGER
    },
    schoolKind:{
        type: DataTypes.STRING
    },
    schoolKindId:{
        type: DataTypes.INTEGER
    },
    name:{
        type: DataTypes.STRING
    },
    schoolType:{
        type: DataTypes.STRING
    },
    schoolTypeId:{
        type: DataTypes.INTEGER
    },
    subjection:{
        type: DataTypes.STRING
    },
    subjectionId:{
        type: DataTypes.INTEGER
    }
});