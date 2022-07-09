import BlogCategory from '@/components/Elements/BlogCategory'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Dialog, Menu, Popover, Transition } from '@headlessui/react'
import ReactHtmlParser from "react-html-parser";
import AuthContext from '@/context/AuthContext'
import Login from '../login';

function manage() {
    const [lastblog, setlastblog] = useState([])
    const [loading, setloading] = useState({ loading: false, item: 0 })
    const [status, setstatus] = useState('')

    useEffect(() => {
        axios.get('/api/blogapi')
            .then(res => setlastblog(res.data.data))
    }, [])

    const edeletBlog = (id, index) => {
        setloading({ loading: true, item: id })
        axios.delete('/api/blogapi/' + id).then(res => setloading({ loading: true })).catch(err => setloading(false));
        setlastblog(lastblog.filter((item, indexx) => indexx !== index))

    }

    const authContext = useContext(AuthContext)
    const { isAuth, userData, authDispatch,isLoading } = authContext;


      useEffect(() => {
        setTimeout(() => {
            setstatus('Access denied')
          }, 3000);
      }, [])
      
    
    return (
        <>
            {
                isAuth && userData?.data.group?.name == "Admin" ? <div>
                    <div className="mx-auto max-w-7xl body-font relative">
                        <div className='flex flex-col sm:flex-row  justify-between'>
                            <h1 className="text-4xl mx-4">Manage Blog</h1>
                            <div className='flex flex-row justify-end space-x-3'>

                                <Popover>
                                    {({ close }) => (

                                        <>
                                            <Popover.Button>
                                                <button className="text-white bg-indigo-600   border-0 h-11 rounded-lg px-8 
                                        focus:outline-none
                     hover:bg-indigo-900   text-lg"

                                                >
                                                    Manage Category
                                                </button>
                                            </Popover.Button>
                                            <Transition

                                                enter="transition ease-out duration-200"
                                                enterFrom="opacity-0"
                                                enterTo="opacity-100"
                                                leave="transition ease-in duration-150"
                                                leaveFrom="opacity-100"
                                                leaveTo="opacity-0">
                                                <Popover.Panel>
                                                    <div className=''>

                                                        <BlogCategory closeModal={close} />
                                                    </div>


                                                </Popover.Panel>
                                            </Transition>

                                        </>
                                    )}
                                </Popover>
                                <a href='create'>
                                    <button className="text-white bg-indigo-600  border-0 h-11 rounded-lg px-8 focus:outline-none
                     hover:bg-indigo-900   text-lg"

                                    >
                                        Create Blog
                                    </button>
                                </a>
                            </div>

                        </div>

                        {
                            lastblog.map((item, index) => <div className='flex flex-col sm:flex-row shadow-lg p-3 rounded-sm justify-between mt-4'>
                                <div className='flex flex-col sm:flex-row space-x-5 '>
                                    <img
                                        className="w-44 h-44 rounded-lg"
                                        src={process.env.app_url + item.imgUrl}
                                        // src={item.img}
                                        alt={item.seotitle}
                                    />

                                    <div className="flex flex-col  ">
                                        <h3 className="text-2xl ">
                                            {item.title}
                                        </h3>
                                        <p className="text-lg my-3  ">
                                            {/* {ReactHtmlParser(item.discription)} */}
                                            {item.seotitle}
                                         
                                        </p>
                                    </div>
                                </div>
                                <div className='flex flex-row items-end space-x-4 p-4'>
                                    <a href={`/blog/gedite?id=${item._id}`} >
                                        <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none
                     hover:bg-indigo-600 rounded text-lg" >
                                            Edit
                                        </button>
                                    </a>

                                    <button className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none
                     hover:bg-red-600 rounded text-lg"
                                        onClick={() => edeletBlog(item._id, index)}
                                    >
                                        {loading.item && loading.item == item._id ? "Deleting..." : "Delete"}
                                    </button>


                                </div>

                            </div>)
                        }

                    </div>

                </div>
                    : <div className='flex flex-row justify-center my-20 text-2xl font-bold text-red-700'>
                        {status}
                    </div>
            }
        </>

    )
}

export default manage