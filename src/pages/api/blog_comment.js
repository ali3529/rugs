import dbConnect from '@/blog/dbConnection'
import commentSchema from '@/blog/CommentModel'
import nc from 'next-connect';

dbConnect()


const handler = nc();



handler.post(async (req, res) => {
  const data= req.body;
  const d = new Date();
//    data.date=  d.getFullYear()+'-'+d.getMonth()+'-'+d.getDay()
data.date=  new Date().toISOString().split('T')[0]
   console.log(data);
    const comment = await commentSchema.create(data)
    res.status(201).json({ success: true, data: comment })
})

handler.get(async (req, res) => {
    const comment = await commentSchema.find(req.query)
    res.status(200).json({ success: true, data: comment })
})


export default handler;