import axios from 'axios'
import React, { useEffect, useState } from 'react'

function BlogCategory({ closeModal }) {
    const [categories, setcategories] = useState([])
    useEffect(() => {
        axios.get('/api/category').then(res => setcategories(res.data.data))
    }, [])

    const [category, setcategory] = useState('')

    const addCategory = () => {
        axios.post('/api/category', { name: category }).then(res =>
            setcategories(prev => [...prev, res.data.data]))

        setcategory('')
    }

    const addCategoryEnter = (e) => {

        if (e.key === "Enter") {
            axios.post('/api/category', { name: category }).then(res =>
                setcategories(prev => [...prev, res.data.data]))

            setcategory('')
        }
    }

    const deletCategory = (id) => {
        axios.delete('/api/category', { data: id }).then(res =>
            setcategories(categories.filter((item, indexx) => item._id !== id)))

    }
    return (
        <div>
            <div >
                <div className="  fixed z-50 top-0 left-0 right-0  flex justify-center w-full md:inset-0 h-modal overflow-scroll md:h-full">
                    <div className=" p-4  w-1/2   h-full md:h-auto ">
                        {/* <!-- Modal content --> */}
                        <div className=" bg-white rounded-lg shadow selc dark:bg-gray-700">
                            {/* <!-- Modal header --> */}
                            <div className="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">

                                <p>
                                    Manage Category
                                </p>
                                <button type="button" onClick={() => closeModal()} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="extralarge-modal">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </button>

                            </div>

                            {/* <!-- Modal body --> */}
                            <div className="flex flex-col justify-center p-6 space-y-6">
                                <div className=" flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">

                                    {/* <span className="text-xl font-bold mb-6">
                                        create category
                                    </span> */}
                                    {/* add category */}
                                    <div className="relative mb-4 flex flex-row space-x-7">
                                        <button
                                            htmlFor="name"
                                            className="leading-7 text-sm bg-indigo-400 text-white px-10 rounded-md"
                                            onClick={(e) => addCategory()}>
                                            add
                                        </button>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder='add category'
                                            className="w-full rounded border  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            onChange={(e) => setcategory(e.target.value)} value={category} onKeyPress={(e) => addCategoryEnter(e)}
                                        />
                                    </div>

                                    <div className="relative mb-4 mt-4 ">
                                        <label
                                            htmlFor="name"
                                            className="leading-7  font-bold text-xl text-indigo-400">
                                            Categories
                                        </label>
                                        <div className='grid grid-rows-1'>
                                            {categories.map((cat, index) =>
                                                <div className='shadow-md p-4 flex flex-row justify-between rounded-md ring-1 ring-indigo-400 m-2'>
                                                    <p>{cat.name}</p>
                                                    <button onClick={(e) => deletCategory(cat._id)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                        </svg>
                                                    </button>
                                                </div>)}
                                        </div>


                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default BlogCategory