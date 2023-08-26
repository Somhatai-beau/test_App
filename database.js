/*const mysql = require('mysql2');
const dbConnection = mysql.createPool({
    host     : 'localhost', // MYSQL HOST NAME
    user     : 'root', // MYSQL USERNAME
    password : '', // MYSQL PASSWORD
    database : 'nodejs_login' // MYSQL DB NAME
}).promise();
module.exports = dbConnection;

let mysqli = require('mysql');
let connection = mysqli.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodejs_login"
})

connection.connect((error) => {
    if (!!error) {
        console.log(error);
    } else {
        console.log('Connected...');
    }
})

module.exports = connection;*/