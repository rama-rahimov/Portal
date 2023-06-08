const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const chf = sequelize.define('chf', {
    fin:{
        type: DataTypes.STRING(50)
      }
},{
    freezeTableName: true ,
    indexes:[{
        name: 'chf_index',
        using: 'BTREE',
        fields: ['fin']
}],
});