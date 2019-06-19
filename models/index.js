const { Schema, model } = require('mongoose')

const db = {
    Article: require('./Article.js')(Schema, model),
    Note: require('./Note.js')(Schema, model)
}

module.exports = db