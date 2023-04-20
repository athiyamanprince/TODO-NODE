const Sequelize = require('sequelize');
const db = require('../dao/database');

const todoDb = db.define('todo',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    title:{
        type:Sequelize.STRING,
        defaultValue:false
    }
});

module.exports = todoDb;