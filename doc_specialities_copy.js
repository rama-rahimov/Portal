const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const Doc_specialities_copy = sequelize.define('doc_specialities_copy', {
    id:{
        type: DataTypes.INTEGER.UNSIGNED ,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name:{
        type: DataTypes.STRING(200)
    },
    ATIS_ID:{
        type: DataTypes.STRING(200)
    },
    enterprise_ATIS_ID:{
        type: DataTypes.STRING(200)
    },
    teachingYear:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    specialty_code:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    EducationStageId:{
        type: DataTypes.INTEGER(2)
    },
    educationLevelId:{
        type: DataTypes.INTEGER(2)
    },
    basicEducation:{
        type: DataTypes.INTEGER(2),
        allowNull: false
    },
    educationLanguageId:{
        type: DataTypes.INTEGER(2),
        allowNull: false
    },
    paymentTypeId:{
        type: DataTypes.INTEGER(2) ,
        allowNull: false
    },
    entranceSpecialtyPaymentAmount:{
        type: DataTypes.STRING ,
        defaultValue: ''
    }
},{
    freezeTableName: true
});