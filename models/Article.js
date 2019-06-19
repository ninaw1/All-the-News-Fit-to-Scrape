module.exports = (Schema, model) => {
const Article = new Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String, 
        required: true
    },
    // populate Article with associated Note 
    note: [{
        type: Schema.Types.ObjectId, 
        ref: 'Note'
    }]
})
return model('Article', Article)
}