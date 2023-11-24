const express = require('express');
const bodyparser = require('body-parser')

const app = express()
app.use(bodyparser.urlencoded({
	extended: false
}))
app.use(bodyparser.json());

const articleControllerClass = require('./controllers/article');
const articleController = new articleControllerClass()

const articleRoutes = require('./routes/article');
app.use('/', articleRoutes);

app.listen(3025, () => {
	console.log('App is started at http://localhost:3025')
});