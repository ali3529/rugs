const mongoose = require('mongoose')

const contactUsSchema = new mongoose.Schema({
    name: {
        type: String,
        maxlength: [20, 'title les than 40 char']
    },
    email: { type: String },
    phone: { type: String, },
    text: { type: String },
    date: { type: String, },
})

module.exports = mongoose.models.contactUsSchema || mongoose.model('contactUsSchema', contactUsSchema)