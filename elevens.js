const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const Elevens = sequelize.define('elevens', {
    SOYADI:{
        type: DataTypes.STRING(100)
    },
    ADI:{
        type: DataTypes.STRING(100) 
    },
    ATA_ADI:{
        type: DataTypes.STRING(100) 
    },
    FIN:{
        type: DataTypes.STRING(100) 
    }
}, {
    freezeTableName: true ,
    indexes:[{
        name: 'elevens_index',
        using: 'BTREE',
        fields: ['FIN']
}],
});