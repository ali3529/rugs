import BlogComment from '@/components/Layouts/BlogComment';
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import ReactHtmlParser from "react-html-parser";
function blogs() {
  const router = useRouter()
  const { blog } = router.query

  const [lastblog, setlastblog] = useState([])
  const [loadinf, setloadinf] = useState(true)

  useEffect(() => {
    if (blog != undefined) {
      axios.get('/api/blogapi/' + blog)
        .then(res => {
          setlastblog(res.data.data)
          setloadinf(false)
          console.log("dcdsvv", res);
        }).catch(errr => console.log(errr))
    }

  }, [blog])
  console.log(process.env.app_url + lastblog.imgUrl);
  return (
    <div>
      <div className="mx-auto max-w-7xl ">

        {
          loadinf ? <p className='text-center text-xl font-bold'>Loading...</p>
            :
            <div className="w-full flex flex-col justify-center   my-4 px-4">

              <h2 className="font-bold text-left text-2xl mb-4">
                {lastblog.title}
              </h2>
              <div className='flex w-full px-3'>
                        <p className='text-gray-600 text-sm'>
                          {lastblog.date}
                        </p>
                      </div>

              <span className='border-b border-gray-500 mb-8'></span>

              <img src={process.env.app_url + lastblog.imgUrl} alt={lastblog.seotitle} />

              <div className='flex flex-col justify-center mt-8 wysiwyg'>
                {ReactHtmlParser(lastblog.discription)}
                {/* {lastblog.discription} */}
              </div>
            </div>
        }

        <div>
          <BlogComment blogtId={lastblog._id} />
        </div>
      </div>



    </div>
  )
}

export default blogs