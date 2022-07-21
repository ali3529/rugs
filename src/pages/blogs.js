import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactHtmlParser from "react-html-parser";
import InfiniteScroll from 'react-infinite-scroller';

let page = 1;
function blog() {
  const [lastblog, setlastblog] = useState([])
  const [loadinf, setloadinf] = useState(true)
  const [hasMore, sethasMore] = useState(false)

 
  useEffect(() => {
    blog()
    // axios.get('/api/blogapi')
    //   .then(res => {
    //     setlastblog(res.data.data)
    //     setloadinf(false)
    //   })
  }, [])

  const blog = () => {
    axios.get(`/api/blogapi?page=${page}&limit=${6}`)
      .then(res => {
        if (res.data.data.length == 0) {
          sethasMore(false)
        }
        setlastblog([...lastblog,...res.data.data])
        setloadinf(false)
        sethasMore(res.data.paginate.hasNextPage)
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

  const nextPage =  () => {
    ++page
     blog()
    console.log(page);
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
          :
        
          <InfiniteScroll
          pageStart={page}
           loadMore={nextPage}
          // hasMore={true || false}
          hasMore={hasMore}
          loader={<div className='flex flex-col'>

              <div className='grid sm:grid-cols-3 grid-cols-1 space-x-4 m-2'>
                  {Array.from({ length: 3 }, (_, i) =>
                      <div class="w-full h-96 sm:h-120 border-2 rounded-xl mx-auto mt-8">
                          <div class="flex animate-pulse flex-col items-center h-full justify-center space-x-5 p-2">
                              <div class=" sm:w-80 bg-gray-300 h-full rounded-lg ">
                              </div>
                              <div class="flex flex-col space-y-3 w-full mt-3 ">
                                  <span class="sm:w-72 bg-gray-300 h-6 rounded-md text-right">
                                  </span>
                                  <span class="sm:w-36 bg-gray-300 h-6 rounded-md ">
                                  </span>
                                  <div className='flex flex-row space-x-5'>
                                      <span class="w-20 bg-gray-300 h-6 rounded-md ">
                                      </span>
                                      <span class="w-20 bg-gray-300 h-5 rounded-md ">
                                      </span>
                                      <span class="w-20 bg-gray-300 h-5 rounded-md ">
                                      </span>
                                  </div>
                                  <div className='flex flex-row space-x-5'>

                                      <span class="w-24 bg-gray-300 h-4 rounded-md ">
                                      </span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  )}
              </div>
          </div>}

      >
          <div className="grid md:grid-cols-3 grid-cols-1 gap-2 ">
            {console.log("jsnkjsdn",lastblog)}
            {lastblog.map(item => (
                 item.category == 'pages' ? ''
              :<div
              
                key={item.id}
                className="bg-white rounded-lg shadow mx-3 my-5">
                <a href={`/blogs/${item._id}`}>
                  <div className=" ">
                    <img
                      className="w-full h-96 rounded-lg"
                      src={process.env.imgPath+'/'  + item.imgUrl}
                      alt={item.seotitle}
                    />
                    <div className="flex flex-col items-center justify-center px-2">
                      <h3 className="text-xl my-2">
                        {item.title}

                      </h3>
                      <p className="text-sm my-2 line-clamp-2">
                        {/* {item.discription} */}
                        {/* {ReactHtmlParser(item.seotitle)} */}
                        {item.seoDiscrip}
                      </p>
                    
                    </div>
                    <div className='flex w-full px-3 justify-between'>
                        <p className='text-gray-600 text-sm'>
                          {item.date}
                        </p>
                        <button>Read More..</button>
                      </div>
                  </div>
                </a>
              </div>
            ))}
          </div>

      </InfiniteScroll>
         
      }

    </div>




  )
}

export default blog