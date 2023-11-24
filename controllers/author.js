const authorDBModel = require("../models/author")
const articleDBModel = require("../models/article")

const authorModel = new authorDBModel();
const articleModel = new articleDBModel();

class authorController {
	constructor() {
		const authors = []
	}
	async getAuthorsByID(req, res){
		console.log(req.params.id)
		const author = await authorModel.findById(req.params.id)
		const articles = await articleModel.findMany(author.id)
		console.log(articles)
		author['articles'] = articles
		res.status(201).json({author:author})
	}
}
module.exports = authorController