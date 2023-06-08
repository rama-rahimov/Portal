const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const work_exp_list_for_course = sequelize.define('work_exp_list_for_course', {
    id:{
        type: DataTypes.INTEGER.UNSIGNED ,
        allowNull: false ,
        autoIncrement: true ,
        primaryKey: true
    },
    user_id:{
        type: DataTypes.INTEGER
    },
    company:{
        type: DataTypes.STRING
    },
    employer:{
        type: DataTypes.STRING
    },
    contract_type:{
        type: DataTypes.TINYINT(1)
    },
    position:{
        type: DataTypes.STRING
    },
    work_type:{
        type: DataTypes.STRING
    },
    description:{
        type: DataTypes.TEXT('medium')
    },
    start_date:{
        type: DataTypes.STRING
    },
    end_date:{
        type: DataTypes.STRING
    },
    salary:{
        type: DataTypes.STRING
    }
});