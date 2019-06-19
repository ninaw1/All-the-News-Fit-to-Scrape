module.export = (Schema, model) => {
    const Note = new Schema({
        title: String, 
        body: String
    })
    return model('Note', Note)
}