const mysql = require("mysql");
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "miniapps"
});
db.connect(function(){
    console.log("database berhasil konek");
});

module.exports = db;