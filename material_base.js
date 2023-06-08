const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const material_base = sequelize.define('material_base', {
    id:{
        type: DataTypes.INTEGER ,
        allowNull: false ,
        primaryKey: true ,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING(200)
    },
    deleted:{
        type: DataTypes.TINYINT(1),
        defaultValue: 0
    }
},{
    indexes:[{
        name: 'chf_index',
        using: 'BTREE',
        fields: ['name', 'deleted']
}]
});