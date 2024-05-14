const Sequelize = require('sequelize');
const envs = require('./config');

const meusequelize = new Sequelize(
    envs.DB, envs.USER, envs.PASSWORD, {
        dialect: 'postgres',
        host: envs.HOST
    }
);

module.exports = meusequelize