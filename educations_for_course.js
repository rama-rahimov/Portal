const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const educations_for_course = sequelize.define('educations_for_course', {
    id:{
        type: DataTypes.INTEGER.UNSIGNED ,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    user_id:{
        type: DataTypes.INTEGER ,
        allowNull: false
    },
    course_appeals_id:{
        type: DataTypes.INTEGER ,
        allowNull: false
    },
    education_type:{
        type: DataTypes.TINYINT(1) ,
        allowNull: false
    },
    abroad_education_type:{
        type: DataTypes.TINYINT(1)
    },
    enterprises:{
        type: DataTypes.STRING
    },
    edu_name:{
        type: DataTypes.STRING
    },
    doc_scan:{
        type: DataTypes.STRING
    },
    country:{
        type: DataTypes.STRING
    },
    specialty:{
        type: DataTypes.STRING
    },
    teaching_language:{
        type: DataTypes.STRING
    },
    material_base:{
        type: DataTypes.STRING
    },
    doc_series_number:{
        type: DataTypes.STRING
    },
    admission_date:{
        type: DataTypes.STRING
    },
    graduate_date:{
        type: DataTypes.STRING
    },
    education_level:{
        type: DataTypes.STRING
    },
    diplom_series_number:{
        type: DataTypes.STRING
    },
    education_duration:{
        type: DataTypes.STRING
    },
    region:{
        type: DataTypes.STRING
    },
    edu_base:{
        type: DataTypes.STRING
    },
    given_date:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});