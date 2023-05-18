const express = require("express");
const mysql = require("mysql");

const app = express();
const port = 3000;

const dbConfig = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const dbConnection = mysql.createConnection(dbConfig);
dbConnection.query("insert into people (name) values ('Arthur')");

app.get("/", function (req, res) {
    dbConnection.query("select * from people", function (error, results) {
        let html = "<h1>Full Cycle Rocks!</h1>";
        html += "<ul>";
        for (let result of results)
            html += "<li>" + result.name + "</li>";
        html += "</ul>\n";
        res.send(html);
    });
});

app.listen(port, console.log("Server listening at port: ", port));