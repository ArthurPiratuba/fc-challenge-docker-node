const express = require("express");
const app = express();
const port = 3333;

app.get("/", function (req, res) {
    res.send("<h1>Full Cycle Rocks!</h1>");
});

app.listen(port, console.log("server listening at port: ", port));