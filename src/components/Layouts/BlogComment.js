import React, { useEffect, useState } from 'react'

import { Dialog, Menu, Popover, Transition } from '@headlessui/react'
import Button from '../Elements/Button'
import CreateBlogComment from '../CreateBlogComment'
import axios from 'axios'

function BlogComment({ blogtId }) {

    const [comments, setcomments] = useState([])
    useEffect(() => {
        if(blogtId!=undefined)
        axios.get(`/api/blog_comment`,{params:{blogId:blogtId}}).then(res => {
            setcomments(res.data)
            console.log("ascasc", res.data);
        })

    }, [blogtId])

    return (
        <div>

            <div className="flex flex-row justify-between my-1 px-4 sm:px-0">
                <h2 className="font-bold text-lg sm:text-2xl my-2 text-gray-900">
                    Blog Comment
                </h2>
                <Popover>
                    {({ close }) => (

                        <>
                            <Popover.Button>

                                <Button className="bg-indigo-500 py-0 sm:text-lg text-sm">Write a Comment</Button>
                            </Popover.Button>
                            <Transition

                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0">
                                <Popover.Panel>
                                    <div className='flex flex-row justify-center'>
                                        <CreateBlogComment closeModal={close} blogtId={blogtId} />
                                    </div>


                                </Popover.Panel>
                            </Transition>

                        </>
                    )}
                </Popover>
            </div>
            <div>
                {
                    comments.data?.map((item, index) =>
                        <div className='px-4 py-8 shadow-md rounded-xl flex  justify-between '>
                            <div className='flex flex-row space-x-5 items-center'>
                           <div >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className='flex flex-col space-y-4 slee'>

                                <p>{item.name}</p>
                                <p>{item.comment}</p>
                            </div>
                           </div>
                           <div className=' flex flex-col justify-end text-gray-500 text-sm'>
                               {item.date}
                           </div>

                        </div>)
                }
            </div>
        </div>
    )
}

export default BlogComment