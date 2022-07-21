const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'plea add title'],
        trim: true,
        // maxlength: [40, 'title les than 40 char']
    },
    discription: {
        type: String,
        required: [true, 'plea add description'],
        //  maxlength: [800, 'descrip les than 800 char']
    },
    imgUrl: { type: String },
    slug: { type: String, },
    seotitle: { type: String, },
    seoDiscrip: { type: String },
    keyword: { type: String },
    date: { type: String, },
    category: { type: String, },
    categoryId: { type: String, }
});
blogSchema.plugin(mongoosePaginate)

module.exports = mongoose.models.blogSchema || mongoose.model('blogSchema', blogSchema)