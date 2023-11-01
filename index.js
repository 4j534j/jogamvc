const express = require('express')
const app = express()

const path = require('path')
const mysql =require("mysql")

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))

var con = mysql.createConnection({
	host: "localhost",
	user: "rasmus",
	password: "password",
	database: "joga_mysql"
})

con.connect(function(err) {
	if (err) throw err;
	console.log("Connected to joga_mysql db");
})

app.listen(3005, () => {
	console.log("App is started at http://localhost:3005")
})