const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const specialty_31 = sequelize.define('specialty_31', {
    id:{
        type: DataTypes.INTEGER ,
        autoIncrement: true ,
        allowNull: true ,
        primaryKey: true
    },
    enterprises_id:{
        type: DataTypes.STRING(500)
    },
    code_id:{
        type: DataTypes.INTEGER
    },
    name:{
        type: DataTypes.STRING(550) ,
        allowNull: true
    },
    sifr:{
        type: DataTypes.STRING(50)
    },
    status:{
        type: DataTypes.TINYINT(2),
        defaultValue: 1
    },
    oc_direction:{
        type: DataTypes.INTEGER
    },
    education_duration:{
        type: DataTypes.INTEGER
    },
    education_level:{
        type: DataTypes.INTEGER
    },
    teaching_language:{
        type: DataTypes.INTEGER
    },
    group_limit:{
        type: DataTypes.SMALLINT(3),
        defaultValue: 0
    },
    deleted:{
        type: DataTypes.TINYINT(2) ,
        defaultValue: 0
    },
    deleted_at:{
        type: DataTypes.STRING(100)
    },
    exc:{
        type: DataTypes.TINYINT(1) ,
        defaultValue: 0
    },
    teaching_year:{
        type: DataTypes.INTEGER
    },
    holy:{
        type: DataTypes.STRING(50)
    }
},{
    indexes:[{
        name: 'specialty_31_index',
        using: 'BTREE',
        fields: ['enterprises_id', 'code_id', 'oc_direction', 'teaching_year']
    }]
});