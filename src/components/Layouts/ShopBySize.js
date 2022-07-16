import Link from 'next/link'
import { useState } from 'react';
import { useQuery, } from 'react-query'
import { useCoreApis } from '@/hooks/coreApis'

function ShopBySize() {
    const [sitesttrebute, setsitesttrebute] = useState(null)
    const { getAttributeByIdUrl } = useCoreApis()
    const items = [
        {
            Link: 'size=10x14-and-oversize',
            img: 'images/oversize.png',
            alt: 'oversize',
            title: 'Oversize Rugs',
            description: '10x14 & Up',
        },
        {
            Link: 'size=8x10-and-9x12',
            img: 'images/large.png',
            alt: 'large',
            title: 'Large Rugs',
            description: '8x10 - 9x12',
        },
        {
            Link: 'size=5x8-and-6x9',
            img: 'images/medium.png',
            alt: 'medium',
            title: 'Medium Rugs',
            description: '5x8 - 6x9',
        },
        {
            Link: 'size=2x3',
            img: 'images/small.png',
            alt: 'small',
            title: 'Small Rugs',
            description: '2x3 - 4x6',
        },
        {
            Link: 'size=runner',
            img: 'images/runners.png',
            alt: 'runners',
            title: 'Runners',
            description: '2x6 - 2x14',
        },
        {
            Link: 'size=round-and-square',
            img: 'images/round_square.png',
            alt: 'round_square',
            title: 'Round & Square',
            description: 'Kitchen & dining',
        }, {
            Link: 'size=round-and-square',
            img: 'images/round_square.png',
            alt: 'round_square',
            title: 'Round & Square',
            description: 'Kitchen & dining',
        },
    ]


    const room = useQuery('attr_size', async () => getAttributeByIdUrl(24), {
        onSuccess: (res) => {
            setsitesttrebute(res.data)
            console.log("dsvdv", res.data)
        },
        onError: (err) => console.log("dsvdv", err)
    });
    // Link: 'size=2x3-and-3x5-and-4x6',
    return (
        <div className="flex flex-col lg:my-40 md:my-20 my-10">
            <div className="w-full flex flex-col justify-center items-center  my-4">
                <h2 className="w-full uppercase font-bold text-2xl text-center mb-2">
                    Shop Rugs by Size
                </h2>
                <p className="font-thin text-gray-700">
                Choose the perfect rug and make sure it fits your living spaces.
                </p>
            </div>
            <ul className="grid md:grid-cols-7 sm:grid-cols-3 grid-cols-2 w-full">
                {sitesttrebute ?
                    sitesttrebute.data.options.map(item => (
                        <li
                        
                            key={item.id}
                            className="w-full flex  cursor-pointer px-2 my-3 md:hover:shadow-xl md:hover:mx-1 md:border-2 md:border-white rounded-xl md:hover:border-gray-800
                                transform duration-300">
                            {/* <Link href={`/rugs?color=${item.code}`}> */}
                            <Link href={{
                                pathname: '/rugs',
                                // query: { q: 'size=' + item.id }
                                query:   {size : item.id ,lable:item.label}
                            }}>

                            {/* <a href={{
                                pathname: '/rugs',
                                query: { q: 'color=' + item.code }
                            }, null}> */}
                                <div className="flex  flex-col justify-center items-center ">
                                    <img
                                    loading='lazy'
                                        className="w-full "
                                        src={`${process.env.imgPath}/${item.swatch_value}`}
                                        alt={item.label}
                                    />
                                    <div className="flex flex-col justify-center items-center">
                                        <header className="font-bold text-lg my-2">
                                            {item.label}
                                        </header>
                                    </div>
                                </div>
                            {/* </a> */}
                            </Link>
                        </li>
                    ))
                    : null
                }
            </ul>
        </div >
    )
}

export default ShopBySize
