const Sequelize = require ('sequelize');
const db = new Sequelize ("todo","root","root@12",{
    host: "localhost",
    dialect: 'mariadb'
}) ;

module.exports =db;

// db.sync('force:true')
//     .then(()=>console.log('databse synced'))
//     .catch(()=>console.log('error syncing database:',err ))