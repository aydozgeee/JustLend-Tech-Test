var express = require('express');
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.json());
var cors = require('cors');
const { ContentPasteSearchOutlined } = require('@mui/icons-material');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.post("/", function (req, res) {
    res.send(req.body);
});


app.post("/login", (req, res) => {

    var username = req.body.user;
    var password = req.body.password;

    console.log(username, password);
    const sqlite3 = require('sqlite3').verbose();
    const db = new sqlite3.Database('test.db');

    db.serialize(() => {
        // db.run("CREATE TABLE Users3 (username TEXT , pass TEXT)");

        // const stmt = db.prepare("INSERT INTO Users3 VALUES (?,?)");
        // for (let i = 0; i < 10; i++) {
        //     stmt.run("aa" + i, "bb");
        // }
        // stmt.finalize();


        db.all("SELECT * FROM Users3", function (err, rows) {
            rows.forEach(function (row) {
                console.log(row)
                if (row.username == username && row.pass == password) {
                    console.log("ok")

                    res.end(JSON.stringify({ "status": 200, "username": row.username }))


                }
            })
        });

    });

    db.close();



});

app.listen(3030, () => {
    console.log("Started on PORT 3030");
})




