const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const Educationstage = sequelize.define('educationstage', {
    id:{
        type: DataTypes.INTEGER ,
        primaryKey: true ,
        allowNull: false ,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING(200)
    },
    nameEn:{
        type: DataTypes.STRING(200)
    }
},{
    freezeTableName: true ,
    indexes:[{
        name: 'educationstage_index',
        using: 'BTREE',
        fields: ['name']
    }]
});