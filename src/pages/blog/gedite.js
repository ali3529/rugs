import React, { useContext, useEffect, useState ,useRef} from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import AuthContext from '@/context/AuthContext'
import { Editor } from '@tinymce/tinymce-react';

function gedite() {
    const router = useRouter()
    const { id } = router.query
    const [title, settitle] = useState('')
    const [discription, setdiscription] = useState('')
    const [imgurl, setimgurl] = useState('')
    const [seotitle, setseotitle] = useState('')
    const [seoDiscrip, setseoDiscrip] = useState('')
    const [keyword, setkeyword] = useState('')
    const [date, setDate] = useState(Date.now())
    const [loading, setloading] = useState(false)
    const [status, setstatus] = useState('')

    useEffect(() => {
        if (id != undefined)
            axios.get('/api/blogapi/' + id).then(res => setDataForEdit(res.data.data)).catch(err => console.log(err))
        const setDataForEdit = (data) => {
            settitle(data.title)
            setdiscription(data.discription)
            editorRef.current = data.discription    
            setseotitle(data.seotitle)
            setseoDiscrip(data.seoDiscrip)
            setkeyword(data.keyword)
        }
    }, [id])

    const editorRef = useRef(null);
    
    const log = () => {
        let des=''
        if (editorRef.current) {
            console.log("ascjascn", editorRef.current.getContent());
            setdiscription(editorRef.current.getContent());
            des=editorRef.current.getContent();
        }
        return des;
    };


    const editeeBlog = () => {

        // const formdata = new FormData();

        // formdata.append("file", imgurl)
     
        // formdata.append('data', JSON.stringify({ title, discription, seotitle, seoDiscrip, keyword, date }))
        console.log("sdvsdvdsvsdv",{ title, discription:log(), seotitle, seoDiscrip, keyword, date });
        setloading(true)
        axios.put('/api/blogapi/' + id, { title, discription:log(), seotitle, seoDiscrip, keyword, date })
            .then(res => router.push('/blog/manage')).catch(err => setloading(false));

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


                                </div>
                                {/* <div className='grid grid-cols-1 space-x-4'>

                                    <div className="relative mb-4">
                                        <label
                                            htmlFor="name"
                                            className="leading-7 text-sm text-gray-400">
                                            Title
                                        </label>
                                        <textarea
                                            type="text"
                                            id="name"
                                            name="disc"
                                            rows={10}
                                            className="w-full rounded border 
                              focus:border-indigo-500 focus:ring-2
                               focus:ring-indigo-900 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            onChange={(e) => setdiscription(e.target.value)} value={discription}
                                        />
                                    </div>

                                </div> */}
                                 <div className="relative mb-4">
                                        <label
                                            htmlFor="name"
                                            className="leading-7 text-sm text-gray-400">
                                            Content
                                        </label>
                                        <Editor
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
                                            initialValue={discription}
                                          
                                            getContent={(e) => console.log(e)}
                                        />
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
                                        onClick={editeeBlog}
                                    >
                                        {
                                            loading ? "Editing Blog..." : "Edit"
                                        }


                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                    : <div className='flex flex-row justify-center my-20 text-2xl font-bold text-red-700'>
                        Access denied
                    </div>
            }
        </>
    )
}

export default gedite