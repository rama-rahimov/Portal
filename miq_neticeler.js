const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const miq_neticeler = sequelize.define('miq_neticeler', {
   id:{
    type: DataTypes.INTEGER ,
    allowNull: false ,
    autoIncrement: true ,
    primaryKey: true
   } ,
   user_id:{
    type: DataTypes.INTEGER ,
   },
   fin:{
    type: DataTypes.STRING(100)
   },
   ad:{
    type: DataTypes.STRING(100)
   },
   soyad:{
    type: DataTypes.STRING(100)
   },
   ata_adi:{
    type: DataTypes.STRING(100)
   },
   peshe_istiqameti:{
    type: DataTypes.STRING(100)
   },
   ixtisas_duz:{
    type: DataTypes.INTEGER
   },
   ixtisas_sehv:{
    type: DataTypes.INTEGER
   },
   ixtisas_cavablandirilmayan:{
    type: DataTypes.INTEGER
   },
   metodika_duz:{
    type: DataTypes.INTEGER
   },
   metodika_sehv:{
    type: DataTypes.INTEGER
   },
   metodika_cavablandirilmayan:{
    type: DataTypes.INTEGER
   },
   mentiq_duz:{
    type: DataTypes.INTEGER
   },
   mentiq_sehv:{
    type: DataTypes.INTEGER
   },
   mentiq_cavablandirilmayan:{
    type: DataTypes.INTEGER
   },
   umumi_duz:{
    type: DataTypes.INTEGER
   },
   umumi_sehv:{
    type: DataTypes.INTEGER
   },
   umumi_cavablandirilmayan:{
    type: DataTypes.INTEGER
   },
   imtahan_gunu:{
    type: DataTypes.STRING(100)
   },
   seans:{
    type: DataTypes.STRING(100)
   },
   bashlama_vaxti:{
    type: DataTypes.STRING(100)
   },
   bitirme_vaxti:{
    type: DataTypes.STRING(100)
   },
   istifade_edilen_deqiqe:{
    type: DataTypes.INTEGER
   },
   elave_olunmush_deqiqe:{
    type: DataTypes.INTEGER
   }
});