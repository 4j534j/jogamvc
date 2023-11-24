const BaseSQLModel = require('./base')

class authorModel extends BaseSQLModel{
	constructor(){
		super('author');
	}
	async findById(id){
		const authors = await super.findById(id)
		return authors
	}
}
module.exports = authorModel