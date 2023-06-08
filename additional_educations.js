const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const Additional_educations = sequelize.define('additional_educations', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    fin:{
        type: DataTypes.STRING
    },
    step:{
        type: DataTypes.INTEGER
    },
    status:{
        type: DataTypes.INTEGER ,
        defaultValue: 0
    },
    ReceptionLineId:{
        type: DataTypes.TINYINT
    },
    user_id:{
        type: DataTypes.INTEGER
    },
    EducationStageId:{
        type: DataTypes.INTEGER
    },
    educationLevelId:{
        type: DataTypes.STRING
    },
    institutionAtisId:{
        type: DataTypes.STRING
    },
    entranceSpecialty:{
        type: DataTypes.STRING
    },
    paymentTypeId:{
        type: DataTypes.INTEGER
    },
    educationFormId:{
        type: DataTypes.INTEGER
    },
    educationLanguageId:{
        type: DataTypes.INTEGER
    },
    entranceSpecialtyPaymentAmount:{
        type: DataTypes.STRING
    },
    specialtyPassword:{
        type: DataTypes.STRING
    },
    previousEduStageId:{
      type:DataTypes.STRING
    },
    previousEduLevelId:{
        type:DataTypes.STRING
    },
    passportScan:{
        type:DataTypes.STRING
    },
    scanningCertificateOfHealth:{
        type:DataTypes.STRING
    },
    previousEducationDocument:{
        type:DataTypes.STRING
    },
    previousEducationLegalizedDocument:{
        type:DataTypes.STRING
    },
    previousEducationTranslatedDocument:{
        type:DataTypes.STRING
    },
    certificateOfLanguageInstruction:{
        type:DataTypes.STRING
    },
    cartType:{
        type:DataTypes.INTEGER
    },
    secondarySpecialEducationDiplomaScan:{
        type:DataTypes.STRING
    },
    equivalenceOfSpecialtyDocScan:{
        type:DataTypes.STRING
    },
    paymentChekScan:{
        type:DataTypes.STRING
    },
    cardBinCode:{
        type:DataTypes.STRING
    },
    EntranceYear:{
        type:DataTypes.INTEGER
    },
    specialtyName:{
        type:DataTypes.STRING
    },
    factorStudyAz:{
        type:DataTypes.STRING
    },
    entranceSubSpecialty:{
        type:DataTypes.STRING
    },
    teachingYear:{
        type:DataTypes.STRING
    },
    graduationYear:{
        type:DataTypes.STRING
    },
    documentType:{
        type:DataTypes.STRING
    },
    documentNo:{
        type:DataTypes.STRING
    },
    additionalEducationTypeId:{
        type:DataTypes.TINYINT
    },
    previousSpecialtyName:{
        type:DataTypes.STRING
    },
    reject_description:{
        type:DataTypes.STRING
    },
    reject_files:{
        type:DataTypes.STRING
    },
    previousInstitutionName:{
        type:DataTypes.STRING
    },
    previousInstitution:{
        type:DataTypes.STRING
    },
    previousSpecialty:{
        type:DataTypes.STRING
    },
    previousSpecialtyCode:{
        type:DataTypes.STRING
    },
    admissionYear:{
        type:DataTypes.STRING
    },
    previousBasicEducation:{
        type:DataTypes.STRING
    },
    basicEducation:{
        type:DataTypes.STRING
    },
    isSend:{
        type:DataTypes.TINYINT ,
        defaultValue: 0
    } 
},{
    indexes:[{
        name: 'additional_educations_index',
        using: 'BTREE',
        fields: ['fin', 'user_id']
}],
freezeTableName: true
  }); 