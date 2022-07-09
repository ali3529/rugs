import dbConnect from '@/blog/dbConnection'
import blogSchema from '@/blog/blogModel'


dbConnect()
export default async (req, res) => {

    const {
        query: { name },
        method
    } = req;


    switch (method) {
        case 'GET':
            try {
                
                // const blog = await blogSchema.find({"blog.title":name})
                var regex = new RegExp(name, "i");
              
                const blog = await blogSchema.find({"title":regex})

                // const blog = await blogSchema.find({"title":name})

                if (!blog) {
                    res.status(200).json({ success: false, data: 'log not found' })
                }
                res.status(200).json({ success: false, data: blog })
                console.log(name);
            } catch (error) {
                res.status(400).json({ success: false, data: {error} })
            }
            break;

            

        default:
            res.status(405).json({ success: false })
            break;
    }
}