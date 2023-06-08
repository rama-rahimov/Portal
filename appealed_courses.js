const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const appealed_courses = sequelize.define('appealed_courses', {
    id:{
        type: DataTypes.INTEGER ,
        primaryKey: true ,
        autoIncrement: true ,
        allowNull: false
    },
    user_id:{
     type: DataTypes.INTEGER
    },
    course_id:{
        type: DataTypes.INTEGER
    },
    course_appeals_id:{
        type: DataTypes.INTEGER
    },
    status:{
        type: DataTypes.TINYINT(3)
    },
    enterprises_id:{
        type: DataTypes.INTEGER
    },
    corpus_id:{
        type: DataTypes.INTEGER
    },
    name:{
        type: DataTypes.STRING
    },
    teaching_year:{
        type: DataTypes.INTEGER
    },
    start_date:{
        type: DataTypes.DATE
    },
    end_date:{
        type: DataTypes.DATE
    },
    amount:{
        type: DataTypes.INTEGER
    },
    oc_direction:{
        type: DataTypes.TINYINT(4)
    },
    specialty_code:{
        type: DataTypes.INTEGER
    },
    specialty:{
        type: DataTypes.INTEGER
    },
    max_student_capacity:{
        type: DataTypes.TINYINT(4)
    },
    special_student_capacity:{
        type: DataTypes.TINYINT(4)
    },
    education_duration:{
        type: DataTypes.TINYINT(4)
    },
    last_date:{
        type: DataTypes.STRING
    },
    lesson_hour:{
        type: DataTypes.STRING
    },
    reason:{
        type: DataTypes.STRING
    },
    holy:{
        type: DataTypes.STRING
    },
    enterprises_name:{
        type: DataTypes.STRING
    },
    corpus_name:{
        type: DataTypes.STRING
    },
    specialty_name:{
        type: DataTypes.STRING
    },
    teaching_language:{
        type: DataTypes.STRING
    },
    teaching_year_name:{
        type: DataTypes.STRING
    },
    oc_direction_name:{
        type: DataTypes.STRING
    },
    specialty_code_name:{
        type: DataTypes.STRING
    },
    financing:{
        type: DataTypes.TINYINT(1)
    }
}, {
    freezeTableName: true
});