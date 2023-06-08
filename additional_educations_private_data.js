const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const additional_educations_private_data = sequelize.define('additional_educations_private_data', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true ,
        autoIncrement: true ,
        allowNull: false
    } ,
    fin:{
      type: DataTypes.STRING
    },
    additional_education_id:{
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
        type: DataTypes.TINYINT
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
    address:{
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
},{
    freezeTableName: true
})