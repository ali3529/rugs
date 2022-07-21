import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useState, useEffect, useRef, useContext } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import AuthContext from '@/context/AuthContext'
import { Editor } from '@tinymce/tinymce-react';
import useAxiosPublic from "@/hooks/AxiosConfigPublic"

function createBlog() {
    const [title, settitle] = useState('')
    const [discription, setdiscription] = useState('')
    const [imgurl, setimgurl] = useState('')
    const [seotitle, setseotitle] = useState('')
    const [seoDiscrip, setseoDiscrip] = useState('')
    const [keyword, setkeyword] = useState('')
    const [date, setDate] = useState(Date.now())
    const [loading, setloading] = useState(false)
    const [category, setcategory] = useState('')
    const [categoryId, setcategoryId] = useState('')
    const router = useRouter()
    const [status, setstatus] = useState('')
    const { axiosPublic } = useAxiosPublic()
    const authContext = useContext(AuthContext)
    const { isAuth, userData, authDispatch, isLoading } = authContext;
    const editorRef = useRef(null);
    const [uploadStatus, setuploadStatus] = useState('')

    const log = () => {
        let des=''
        if (editorRef.current) {
            console.log("ascjascn", editorRef.current.getContent());
            setdiscription(editorRef.current.getContent());
            des=editorRef.current.getContent();
        }
        return des;
    };


    const createBlog = async() => {

        setuploadStatus('uploding Image ...')
        const formdata = new FormData();

        formdata.append("img[]", imgurl)
        console.log("dsvdsvdsvdsv",formdata);
      const response=await axiosPublic.post('/save_blog_image',formdata);
setuploadStatus('')

        
        log()
        // formdata.append('data', JSON.stringify({ title, discription:log(), seotitle, seoDiscrip, keyword, date, category, categoryId,image:data.image }))
       const data= { title, discription:log(), seotitle, seoDiscrip, keyword, date, category, categoryId,imgUrl:response.data.image }

        setloading(true)
    
        axios.post('/api/blogapi',data ).then(res => {
            setloading(false)
            toastMassage('Blog Creaate successfull',1)
            setTimeout(() => {
                router.push('/blog/manage') 
                clearTimeout()
            }, 2000);
         

        }
        ).catch(err => setloading(false));

    }

    const [categories, setcategories] = useState([])
    useEffect(() => {
        axios.get('/api/category').then(res => setcategories(res.data.data))
    }, [])

    const setcat = (cat) => {

        const catName = categories.filter((item, indexx) => item._id == cat)
        setcategory(catName[0].name)
        setcategoryId(cat)
    }

    useEffect(() => {
        setTimeout(() => {
            setstatus('Access denied')
          }, 3000);
      }, [])

      const toastMassage = (massage, type) => {
        if (type == 1) {
            toast.success(massage, { style: { color: 'green' } });
        } else if (type == 2) {
            toast.error(massage, { style: { color: 'red' } });
        }

    }
    return (

        <>
              <Toaster />
            {
                isAuth && userData?.data.group?.name == "Admin" ?
                    <div>
                        <div className="mx-auto max-w-7xl body-font relative">
                            <h1 className="text-4xl mx-4">Create Blog</h1>

                            <div>
                                <div className='grid grid-cols-2 space-x-4'>

                                    <div className="relative mb-4">
                                        <label
                                            htmlFor="name"
                                            className="leading-7 text-sm text-gray-400">
                                            Title
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="w-full rounded border  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            onChange={(e) => settitle(e.target.value)} value={title}
                                        />
                                    </div>
                                    <div className="relative mb-4 flex flex-col">
                                        <label
                                            htmlFor="name"
                                            className="leading-7 text-sm text-gray-400">
                                            Category
                                        </label>
                                        {/* setcategory(e.target.value.name)
                                setcategoryId(e.target.value._id) */}
                                        <select onChange={(e) => {
                                            setcat(e.target.value)
                                        }} >
                                            <option selected disabled >Select Category</option>
                                            {
                                                categories.map(item =>
                                                    <option value={item._id}>{item.name}</option>
                                                )
                                            }

                                        </select>
                                    </div>


                                </div>
                                <div className='grid grid-cols-1 space-x-4'>

                                    <div className="relative mb-4">
                                        <label
                                            htmlFor="name"
                                            className="leading-7 text-sm text-gray-400">
                                            Content
                                        </label>
                                        <Editor
                                         apiKey='wxrezd7357dzig7e18hec61ursvch4v7s5irsitg7fq563id'
                                            onInit={(evt, editor) => editorRef.current = editor}
                                            init={{
                                                height: 500,
                                                menubar: false,
                                                plugins: [
                                                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
                                                    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                                    'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount'
                                                ],
                                                toolbar: 'undo redo | blocks | ' +
                                                    'bold italic forecolor | alignleft aligncenter ' +
                                                    'alignright alignjustify | bullist numlist outdent indent | ' +
                                                    'removeformat | help',
                                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                            }}
                                            
                                            getContent={(e) => console.log("fdbfdbfdbfd",e)}
                                        />
                                    </div>

                                </div>
                                <div className='grid grid-cols-2 space-x-4'>


                                    <div className="relative mb-4">
                                        <label
                                            htmlFor="name"
                                            className="leading-7 text-sm text-gray-400">
                                            Seo title
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="w-full rounded border  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            onChange={(e) => setseotitle(e.target.value)} value={seotitle}
                                        />
                                    </div>
                                    <div className="relative mb-4">
                                        <label
                                            htmlFor="name"
                                            className="leading-7 text-sm text-gray-400">
                                            Seo description
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="w-full rounded border  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            onChange={(e) => setseoDiscrip(e.target.value)} value={seoDiscrip}
                                        />
                                    </div>


                                </div>

                                <div className='grid grid-cols-2 space-x-4'>
                                    <div className="relative mb-4">
                                        <label
                                            htmlFor="name"
                                            className="leading-7 text-sm text-gray-400">
                                            KeyWord
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="w-full rounded border  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            onChange={(e) => setkeyword(e.target.value)} value={keyword}
                                        />
                                    </div>

                                    <div className="relative mb-4">
                                        <label
                                            htmlFor="name"
                                            className="leading-7 text-sm text-gray-400">
                                            img
                                        </label>
                                        <input
                                            type="file"
                                            id="file"
                                            name="file"
                                            className="w-full rounded border  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            onChange={(e) => setimgurl(e.target.files[0])}
                                        />
                                    </div>


                                </div>

                                <div className='flex flex-row justify-center space-x-4'>
                                    <button className="text-white bg-indigo-500 border-0 py-2 px-6   focus:outline-none
                     hover:bg-indigo-600 rounded text-lg "
                                        onClick={createBlog}
                                    >
                                        {
                                            loading ? "Creating Blog..." : "Create Blog"
                                        }


                                    </button>
                                    <span>{uploadStatus!=''?uploadStatus:''}</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    : <div className='flex flex-row justify-center my-20 text-2xl font-bold text-red-700'>
                        {status}
                    </div>
            }

        </>

    )
}

export default createBlog