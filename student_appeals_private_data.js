const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const student_appeals_private_data = sequelize.define('student_appeals_private_data', {
    id:{
        type: DataTypes.INTEGER.UNSIGNED ,
        autoIncrement: true ,
        allowNull: false ,
        primaryKey: true
    },
    fin:{
        type: DataTypes.STRING(30)
    },
    student_appeal_id:{
        type: DataTypes.INTEGER
    },
    user_id:{
        type: DataTypes.INTEGER
    },
    first_name:{
        type: DataTypes.STRING
    },
    last_name:{
        type: DataTypes.STRING
    },
    father_name:{
        type: DataTypes.STRING
    },
    middle_name:{
        type: DataTypes.STRING
    },
    birth_date:{
        type: DataTypes.STRING
    },
    actual_region:{
        type: DataTypes.STRING
    },
    is_address_current:{
        type: DataTypes.TINYINT(1)
    },
    actual_address:{
        type: DataTypes.STRING
    },
    n_country:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    genderId:{
        type: DataTypes.STRING
    },
    passport_series:{
        type: DataTypes.STRING
    },
    passport_number:{
        type: DataTypes.STRING
    },
    citizenship:{
        type: DataTypes.STRING
    },
    maritalStatus:{
        type: DataTypes.TINYINT(1)
    },
    adress_in_foreign:{
        type: DataTypes.STRING
    },
    last_live_country:{
        type: DataTypes.STRING
    },
    phone:{
        type: DataTypes.STRING
    },
    country_code:{
        type: DataTypes.STRING
    },
    birth_certificate:{
        type: DataTypes.STRING
    },
    have_residence_permit:{
        type: DataTypes.TINYINT(1)
    }
});