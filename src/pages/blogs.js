import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactHtmlParser from "react-html-parser";

function blog() {
  const [lastblog, setlastblog] = useState([])
  const [loadinf, setloadinf] = useState(true)

  useEffect(() => {
    axios.get('/api/blogapi')
      .then(res => {
        setlastblog(res.data.data)
        setloadinf(false)
      })
  }, [])

  const blog = () => {
    axios.get('/api/blogapi')
      .then(res => {
        setlastblog(res.data.data)
        setloadinf(false)
      })
  }
  const serachSuggest = (s) => {
    axios.get(`/api/blogapi/s/${s}`)
      .then(res => {
        setlastblog(res.data.data)
        setloadinf(false)
        console.log("dsvsdv", res.data);
      })
  }
  return (
    <div className="mx-auto max-w-7xl">
      <div className="w-full flex flex-col justify-center items-center  my-4">
        <h2 className="font-bold text-2xl text-center">
          Blogs
        </h2>

        <input
          placeholder="Search"
          className="border-indigo-400 border rounded-md px-4 py-1 w-2/4 shadow-none mt-4 "
          onChange={(e) => e.target.value != '' ? serachSuggest(e.target.value) : blog()}

        />
      </div>
      {lastblog == [] ?
        ' not  find item'
        :
        loadinf ? <p className='text-center text-xl font-bold'>Loading...</p>
          : <div className="grid md:grid-cols-3 grid-cols-1 gap-2 ">
            {lastblog.map(item => (
                 item.category == 'pages' ? ''
              :<div
                key={item.id}
                className="bg-white rounded-lg shadow mx-3 my-5">
                <a href={`/blogs/${item._id}`}>
                  <div className=" ">
                    <img
                      className="w-full rounded-lg"
                      src={process.env.app_url + item.imgUrl}
                      alt={item.seotitle}
                    />
                    <div className="flex flex-col items-center justify-center px-1">
                      <h3 className="text-xl my-2">
                        {item.title}

                      </h3>
                      <p className="text-sm my-2">
                        {/* {item.discription} */}
                        {ReactHtmlParser(item.discription)}
                      </p>
                      <div className='flex w-full px-3'>
                        <p className='text-gray-600 text-sm'>
                          {item.date}
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
      }

    </div>
  )
}

export default blog