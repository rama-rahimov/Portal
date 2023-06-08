const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const appealed_vacancies = sequelize.define('appealed_vacancies', {
    id:{
        type:DataTypes.INTEGER ,
        primaryKey: true ,
        autoIncrement: true ,
        allowNull: true
    },
    user_id:{
        type:DataTypes.INTEGER 
    },
    vacancy_appeals_id:{
        type:DataTypes.INTEGER 
    },
    vacancy_id:{
        type:DataTypes.INTEGER 
    },
    districts:{
        type: DataTypes.STRING
    },
    enterprises:{
        type: DataTypes.STRING
    },
    corpuses:{
        type: DataTypes.STRING 
    },
    modules:{
        type: DataTypes.STRING  
    },
    vacant_load:{
        type: DataTypes.INTEGER(3)   
    },
    vacant_place:{
        type: DataTypes.INTEGER(3) 
    },
    status:{
        type: DataTypes.TINYINT(1) 
    },
    teaching_language:{
        type: DataTypes.STRING(100) 
    },
    priority:{
        type: DataTypes.TINYINT(1)  
    },
    position:{
        type: DataTypes.STRING  
    },
    position_id:{
        type: DataTypes.TINYINT(3) 
    },
    reasonMessage:{
        type: DataTypes.STRING  
    }
},{
    freezeTableName: true
});