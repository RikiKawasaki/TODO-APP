const mysql = require("mysql");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const express = require("express");
const app = express();
const port = 3000;

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "express_db"
});

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// HOME
app.get("/", (req, res) => {
    const sql = "select * from todos";
    con.query(sql, (err, result, fields) => {
        if(err) throw err;
        res.render("index", {todos: result});
    });
});

// formから受け取る（登録）
app.post("/", (req, res) => {
    const sql = "insert into todos set ?";
    con.query(sql, req.body, (err, result, fields) => {
        if(err) throw err;
        res.redirect("/");
    });
});

// delete
app.get("/delete/:id", (req, res) => {
    const sql = "delete from todos where id = ?";
    con.query(sql, [req.params.id], (err, result, fields) => {
        if(err) throw err;
        res.redirect("/");
    });
});

app.listen(port, () => console.log(`localhost:${port}`));