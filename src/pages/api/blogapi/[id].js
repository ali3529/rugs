import dbConnect from '@/blog/dbConnection'
import blogSchema from '@/blog/blogModel'

dbConnect()
export default async (req, res) => {

    const {
        query: { id },
        method
    } = req;

    switch (method) {
        case 'GET':
            try {
                const blog = await blogSchema.findById(id)

                if (!blog) {
                    res.status(200).json({ success: false, data: 'log not found' })
                }
                res.status(200).json({ success: false, data: blog })
            } catch (error) {
                res.status(400).json({ success: false, data: error })
            }
            break;
        case 'PUT':
            try {
                console.log(req.body);
                const blog = await blogSchema.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });

                if (!blog) {
                    res.status(200).json({ success: false, data: 'log not found' })
                }
                res.status(200).json({ success: true, data: blog })
            } catch (error) {
                console.log(error);
                res.status(400).json({ success: false, data: error })
            }
            break;
        case 'DELETE':
            try {

                const blog = await blogSchema.deleteOne({ _id: id })

                if (!blog) {
                    res.status(200).json({ success: false, data: 'log not found' })
                }
                res.status(200).json({ success: true, data: blog })
            } catch (error) {
                res.status(400).json({ success: false, data: error })
            }
            break;

        default:
            res.status(405).json({ success: false })
            break;
    }
}