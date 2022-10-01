const mysql = require('mysql2');
const config = require("../Config/config.json");

const { host, user, database, password } = config;

const pool = mysql.createPool({
    host, user, database, password
});

module.exports = pool.promise();
