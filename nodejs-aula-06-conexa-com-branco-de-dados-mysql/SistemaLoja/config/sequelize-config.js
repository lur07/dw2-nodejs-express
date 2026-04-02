import Sequelize from "sequelize";

const connection = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',

    username: 'root',
    passaword:"", 
    timezone: '-03:00',

});

//exportando modulo
export default connection;
