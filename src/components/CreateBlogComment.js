import axios from 'axios'
import React, { useState } from 'react'

function CreateBlogComment({ closeModal, blogtId }) {
    const [name, setname] = useState('')
    const [comment, setcomment] = useState('')
    const [blogId, setblogID] = useState('')
    const [email, setemail] = useState('')
    const [loading, setloading] = useState(false)
    const [status, setstatus] = useState('')
    const createComment = (e, id) => {
        setloading(true)
        e.preventDefault();
        axios.post('/api/blog_comment', { name, comment, blogId: id,email, comment_status: 'pending' }).then(res => {
            setloading(false)
            setstatus('comment created')
        }).finally(
            setTimeout(() => {
                closeModal()
            }, 3000)
        )

    }
    return (
        <div> <div >
            <div className="  fixed z-50 top-0 left-0 right-0  flex justify-center w-full overflow-scroll md:h-full">

                <div className=" p-4 w-full sm:w-1/2   h-full md:h-auto ">
                    {/* <!-- Modal content --> */}
                    <div className=" bg-white rounded-lg shadow selc dark:bg-gray-700">
                        {/* <!-- Modal header --> */}

                        <div className="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">

                            <p>
                                Write a Comment
                            </p>
                            <button type="button" onClick={() => closeModal()} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="extralarge-modal">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>

                        </div>
                        {/* <!-- Modal body --> */}
                        <div className="flex flex-col justify-center p-6 space-y-6">

                            <form onSubmit={(e) => createComment(e, blogtId)}>
                                <div className=" flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                                    <span className="text-xl font-bold">
                                        Write your Comment
                                    </span>
                                    <div className="relative mb-4">
                                        <label
                                            htmlFor="name"
                                            className="leading-7 text-sm text-gray-400">
                                            nick name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            className="w-full rounded border  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            onChange={(e) => setname(e.target.value)} value={name}
                                        />
                                    </div> 
                                     <div className="relative mb-4">
                                        <label
                                            htmlFor="name"
                                            className="leading-7 text-sm text-gray-400">
                                            Email
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            className="w-full rounded border  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            onChange={(e) => setemail(e.target.value)} value={email}
                                        />
                                    </div>
                                    <div className="relative mb-4">
                                        <label
                                            htmlFor="name"
                                            className="leading-7 text-sm text-gray-400">
                                            comment
                                        </label>
                                        <textarea
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            className="w-full rounded border  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            onChange={(e) => setcomment(e.target.value)} value={comment}
                                        />
                                        {/* 
                            <div className="flex flex-col justify-between mt-6">
                                <label>rate</label>
                                <select className='rounded-lg w-20' onChange={(e)=>setrate(e.target.value)}>
                                    <option selected value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                </select>
                            </div> */}
                                    </div>
                                    <button className="text-white bg-indigo-500 mx-24 border-0 py-2 px-6
                        focus:outline-none hover:bg-indigo-600 rounded text-lg"
                                        type='submit'>
                                        {
                                            loading ? "submiting Comment..." : "submit Comment"
                                        }

                                    </button>
                                    <span className='text-green-500 font-bold text-xl'>{status}</span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </div></div>
    )
}

export default CreateBlogComment