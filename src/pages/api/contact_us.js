import dbConnect from '@/blog/dbConnection'
import contactUsSchema from '@/dbmodels/ContactUsModel'
import nc from 'next-connect';

dbConnect()


const handler = nc();



handler.post(async (req, res) => {
  const data= req.body;
  const d = new Date();
//    data.date=  d.getUTCFullYear()+'-'+d.getUTCMonth()+'-'+d.getUTCDate()
   data.date=  new Date().toISOString().split('T')[0]
    const save_contact = await contactUsSchema.create(data)
    res.status(201).json({ success: true, data: save_contact })
})

handler.get(async (req, res) => {
    const save_contact = await contactUsSchema.find({})
    res.status(200).json({ success: true, data: save_contact })
})


export default handler;