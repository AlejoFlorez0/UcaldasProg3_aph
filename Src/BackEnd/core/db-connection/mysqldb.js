
var mysql = require('mysql');
const config = require("config");

const mysqlConfig = config.get("dbconnections.mysqldb");

var connection = null;

/**
 * 
 */
exports.initConnection = () => {
    connection = mysql.createConnection({
        host: mysqlConfig.host,
        user: mysqlConfig.user,
        database: mysqlConfig.database,
        password: mysqlConfig.password
    });

    connection.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
    });
}

/**
 * Obtendrá todos los registros de una tabla
 * @param {String} table Tabla al que hace referencia el modelo 
 * @author AlejoFlorez0
 */
exports.getAll = (table) => {

    connection.query('SELECT * FROM ' + table, function (error, results, fields) {
        if (error) {
            throw error;
        }
        else {
            return results;
        }
        /*results.forEach(result => {
            console.log(result);
        });*/
    })
}

/**
 * Obtendrá todos los registros de una tabla con ud id 
 * @param {String} table Tabla al que hace referencia el modelo 
 * @param {*} primaryKey 
 * @param {*} value 
 * @author AlejoFlorez0
 */
exports.getAllById = (table, primaryKey, value) => {

    connection.query('SELECT * FROM ' + table + ' Where ' + primaryKey + ' = ' + value, function (error, results, fields) {
        if (error) {
            throw error;
        }
        else {
            return results[0];
        }
    })
}

/**
 * 
 */
exports.endConnection = () => {
    console.log("finish Connection");
    connection.end();
}
