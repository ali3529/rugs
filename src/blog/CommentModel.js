const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'plea add category'],
        maxlength: [20, 'title les than 40 char']
    },

    comment: { type: String, },
    email: { type: String },
    blogId: { type: String, },
    comment_status: { type: String },
    date: { type: String, },
})

module.exports = mongoose.models.commentSchema || mongoose.model('commentSchema', commentSchema)