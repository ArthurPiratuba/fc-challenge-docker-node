const express = require("express");
const mysql = require("mysql");

const app = express();
const port = 3333;

const dbConfig = {
    host: 'db_app',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const dbConnection = mysql.createConnection(dbConfig);
const commands = [
    "insert into people (name) values ('Arthur')",
    "insert into people (name) values ('Wesley')"
];
for (let command of commands) {
    dbConnection.query(command);
};
dbConnection.end();

app.get("/", function (req, res) {
    res.send("<h1>Full Cycle Rocks!</h1>\n");
});

app.listen(port, () => console.log("Server listening at port: ", port));