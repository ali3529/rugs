import dbConnect from '@/blog/dbConnection'
import categorySchema from '@/blog/CategoryModel'
import nc from 'next-connect';

dbConnect()


const handler = nc();


handler.post(async (req, res) => {
    console.log("[dvsdvdsv]", req);
    const category = await categorySchema.create(req.body)
    res.status(201).json({ success: true, data: category })
})

handler.get(async (req, res) => {
    const category = await categorySchema.find({})
    res.status(200).json({ success: true, data: category })
})

handler.delete(async (req, res) => {
    console.log(req.body);
    const category = await categorySchema.deleteOne({ _id: req.body })

    res.status(200).json({ success: true, data: category })
})



export default handler;