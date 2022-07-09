const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'plea add category'],
        maxlength: [20, 'title les than 40 char']
    },
 


})

module.exports = mongoose.models.categorySchema || mongoose.model('categorySchema', categorySchema)