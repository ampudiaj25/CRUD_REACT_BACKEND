const {Sequelize} = require('sequelize');


const db = new  Sequelize('crud-react','root', '', {
            host: 'localhost',
            dialect: 'mysql',
            
            
        });

module.exports = {db}
