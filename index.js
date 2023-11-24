const express = require('express');
const bodyparser = require('body-parser')

const app = express()
app.use(bodyparser.urlencoded({
	extended: false
}))
app.use(bodyparser.json());

const articleControllerClass = require('./controllers/article');
const articleController = new articleControllerClass()

const authorControllerClass = require('./controllers/author');
const authorController = new authorControllerClass()



const articleRoutes = require('./routes/article');
app.use('/', articleRoutes);

const authorRoutes = require('./routes/author');
app.use('/', authorRoutes);

app.listen(3025, () => {
	console.log('App is started at http://localhost:3025')
});