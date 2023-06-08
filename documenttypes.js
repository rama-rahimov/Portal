const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const Documenttypes = sequelize.define('documenttypes', {
    id:{
        type: DataTypes.INTEGER ,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
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
        name: 'documenttypes_index',
        using: 'BTREE',
        fields: ['name']
}],
});