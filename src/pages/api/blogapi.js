import dbConnect from '@/blog/dbConnection'
import blogSchema from '@/blog/blogModel'
import nc from 'next-connect';
const slugify = require('slugify')
import path from 'path'

import multer from 'multer'

dbConnect()
export const config = {
    api: {
        bodyParser: true,
    },
}
const handler = nc();
let storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, 'public/images/blog')
    },
    filename: function (req, file, cb) {
        cb(null, 'blog' + "-" + Date.now() + path.extname(file.originalname));

    },
});

let upload = multer({ storage: storage })

let uploadFile = upload.single('file');

handler.use(uploadFile);
handler.post(async (req, res) => {

    // let imgUrl = '/images/blog/' + req.file.filename;
    // let imgUrl = req.body.data.image;

    const data = req.body;
    console.log(req.body);
    // data.imgUrl = data.image
    data.slug = slugify(data.title)
    data.date = new Date().toISOString().split('T')[0]

    const blogModels = await blogSchema.create(data)

    res.status(201).json({ success: true, data: blogModels })
})

handler.put(async (req, res) => {
    console.log("dsvdsvdsvdsv", req);
    // let imgUrl = '/images/blog/' + req.file.filename;
    // const data = JSON.parse(req.body.data);
    // data.imgUrl = imgUrl
    // data.slug = slugify(data.title)
    // const d = new Date();
    // // data.date = d.getFullYear()+'-'+d.getMonth()+'-'+d.getDay()
    // data.date=  new Date().toISOString().split('T')[0]


    // const blogModels = await blogSchema.create(data)

    // res.status(201).json({ success: true, data: blogModels })


})



handler.get(async (req, res) => {
    const blogModel = await blogSchema.find({})
    res.status(200).json({ success: true, data: blogModel })
})

export default handler;


