import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactHtmlParser from "react-html-parser";
function LastBlog() {
    const [lastblog, setlastblog] = useState([])

    useEffect(() => {
        axios.get('/api/blogapi')
            .then(res => setlastblog(res.data.data))
    }, [])

    // const lastBlogs = [
    // 
    //    
    //         id: '3',
    //         title: 'what is a tribal rug?',
    //         description: 'Save on discontinued products before they disappear.',
    //         img: 'https://www.magicrugs.com/media/blogs_cover_9_.png',
    //     },
    //     {
    //         id: '4',
    //         title: 'what is a kilim rug?',
    //         description:
    //             'Their return, your reward! Shop like-new items for less.',
    //         img: 'https://www.magicrugs.com/media/blogs_cover_8_.png',
    //     },
    // ]

    return (
        <div className="flex flex-col my-40">
            <div className="w-full flex flex-col justify-center items-center  my-4">
                <h2 className="font-bold text-2xl text-center">
                    Last Blog Post
                </h2>
            </div>
            <div className="grid md:grid-cols-4 grid-cols-1 gap-2 ">
                {lastblog.map((item,index) => (
                    index>3?'':
                         <div
                            key={item.id}
                            className="bg-white rounded-lg shadow mx-3 my-5">
                            <a href={`/blogs/${item._id}`}>
                                <div className=" w-full rounded-lg ">
                                 <div className='flex flex-row justify-center '>
                                 <img
                                        className=" max-h-96 object-contain rounded-lg  "
                                        src={process.env.imgPath+'/'  + item.imgUrl}
                                        alt={item.seotitle}
                                    />
                                 </div>
                                    <div className="flex flex-col items-center justify-center px-1">
                                        <h3 className="text-xl my-2">
                                            {item.title}
                                            
                                        </h3>
                                        <p className="text-sm my-2 line-clamp-2">
                                            {/* {item.discription} */}
                                            {/* {ReactHtmlParser(item.seotitle)} */}
                                            {item.seoDiscrip}
                                            {/* {ReactHtmlParser(item.discription)} */}
                                        </p>
                                        <div className='flex w-full px-1 justify-between mt-2'>
                                            <p className='text-gray-600 text-sm'>
                                                {item.date}
                                            </p>
                                            <button>Read More..</button>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            
                        </div>
                ))}
            </div>
            <div className='w-full flex flex-row justify-center mt-6'>
            <a href='/blogs' >
                <button className='text-white bg-indigo-400 p-2 rounded-md text-lg'>
              
                    Load More Blogs ...
                </button>
                </a>
            </div>
        </div>
    )
}

export default LastBlog
