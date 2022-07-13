import { useState, Fragment, useEffect, useRef } from 'react'
import Input from '../Elements/Input'
import { useMutation, useQuery, } from 'react-query'
import { useProductsApis } from '@/hooks/productApis'
import { at } from 'next-pwa/cache'
import { useRouter } from 'next/router'
import Select from 'react-select'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline'

let attribute = []
const f = {
    pattern: 0,
    style: 0,
    room: 0,
    rugtype: 0,
    size: 0,
    color: 0,
    name: 0
}
function StoreHeading({ filters, limitHandle }) {
    const router = useRouter()
    const [hover, sethover] = useState({ hover: false, id: 0 })

    const { getAttrebutes } = useProductsApis()

    const [attrebutes, setattrebutes] = useState([])

    const attr = useQuery('attr', async () => getAttrebutes(), {
        onSuccess: (res) => {
            let a = [];
            res.data.data.map(attr => {

                if (attr.id == 50 || attr.id == 51 || attr.id == 52 || attr.id == 53 || attr.id == 11 || attr.id == 24 || attr.id == 23) {
                    console.log("[dsjvdsklv]", attr);
                    a.push(attr)
                }
                setattrebutes(a)
            })
        }
    });




    useEffect(() => {

        if (router.isReady) {
            router.query.pattern != undefined ? handleFlter('pattern', router.query.pattern, router.query.lable) :
                router.query.room != undefined ? handleFlter('room', router.query.room, router.query.lable) :
                    router.query.rugtype != undefined ? handleFlter('rugtype', router.query.rugtype, router.query.lable) :
                        router.query.size != undefined ? handleFlter('size', router.query.size, router.query.lable) :
                            router.query.color != undefined ? handleFlter('color', router.query.color, router.query.lable) :
                                router.query.name != undefined ? handleFlter('name', router.query.name, router.query.name) :
                                    router.query.style != undefined ? handleFlter('style', router.query.style, router.query.lable) : handleFlter('', '', '');
        }

    }, [router.query]);

    useEffect(() => {

    }, [attribute])

    const handleFlter = (code, id, label) => {
        console.log("dvdsvdv33", id);
        const fil = code + '=' + id
        if (attribute.length != 0) {

            attribute = attribute.filter((item, index) => item.code != code)

        }
        // if(code!='' && code!='name')
        if (code != '')
            attribute.push({ filter: fil, code: code, id: id, label: label });

        if (code == 'pattern') f.pattern = id
        else if (code == 'style') f.style = id
        else if (code == 'room') f.room = id
        else if (code == 'rugtype') f.rugtype = id
        else if (code == 'size') f.size = id
        else if (code == 'color') f.color = id
        else if (code == 'name') f.name = id


        filters(clearFilterNotUsed(f))

    }

    const clearFilterNotUsed = (filter) => {
        if (filter.pattern == 0) delete filter.pattern;
        if (filter.style == 0) delete filter.style;
        if (filter.room == 0) delete filter.room;
        if (filter.rugtype == 0) delete filter.rugtype;
        if (filter.size == 0) delete filter.size;
        if (filter.color == 0) delete filter.color;
        if (filter.name == 0) delete filter.name;

        return filter;
    }

    const removAttr = (index, filter) => {
        console.log("dsvdsvdsvdsv", filter);
        attribute = attribute.filter((item, indexx) => indexx !== index)
        router.push({
            pathname: '/rugs',
            query: { q: attribute.map(e => e) }
        },
            undefined, { shallow: true }
        )
        if (filter.code == 'pattern') f.pattern = 0
        else if (filter.code == 'style') f.style = 0
        else if (filter.code == 'room') f.room = 0
        else if (filter.code == 'rugtype') f.rugtype = 0
        else if (filter.code == 'size') f.size = 0
        else if (filter.code == 'color') f.color = 0
        else if (filter.code == 'name') f.name = 0


        filters(clearFilterNotUsed(f))
    }
    const [showZippingInput, setShowZippingInput] = useState(false)
    const [submenu, setsubmenu] = useState({ open: false, menuId: 0 })
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className='flex flex-col'>
                <div className="flex flex-row items-center justify-between lg:flex-row my-1">
                    <h1 className="text-2xl font-bold text-left w-full my-1">
                        Rugs
                    </h1>


                    <div className="items-center hidden sm:flex">
                        <span className="mr-3 whitespace-nowrap">
                            Per page:
                        </span>
                        <div className="relative">
                            <select onChange={(e) => limitHandle(e.target.value)} className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                                <option value={24}>24</option>
                                <option value={48}>48</option>
                                <option value={84}>84</option>
                            </select>
                            <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4"
                                    viewBox="0 0 24 24">
                                    <path d="M6 9l6 6 6-6" />
                                </svg>
                            </span>
                        </div>

                    </div>
                </div>

                {/* filters */}
                {/* {attr.isLoading ? <div className='flex flex-row justify-center mt-4  '> */}
                {attr.isLoading ? <div>
                    <div className='sm:grid  lg:grid-cols-7 md:grid-cols-4 justify-center mt-4 hidden '>
                        {Array.from({ length: 7 }, (_, i) =>
                            <div class="w-40 h-11 rounded-lg border-2 flex justify-center px-5 items-center animate-pulse ">
                                <span class="w-14 bg-gray-300 h-2 rounded-md ">
                                </span>
                            </div>
                        )}
                    </div>
                    <div class="w-80 h-11 px-2 rounded-lg border-2 m-5  justify-center  flex sm:hidden  items-center animate-pulse ">
                        <span class="w-24 bg-gray-300 h-2 rounded-md ">
                        </span>
                    </div>
                </div>
                    : <div>
                        <div className='mt-4  sm:grid grid-cols-2 lg:grid-cols-7 md:grid-cols-4 justify-between hidden '>
                            {
                                attrebutes.map((attr, index) =>



                                    <div className="mt-6 flex flex-row ">
                                        <Menu as="div" className="relative inline-block text-left">
                                            <div>

                                                <Menu.Button className="w-36 h-10 items-center  rounded-md flex flex-row justify-between
                                       text-black bg-opacity-20 ring-1 ring-gray-400 text-left px-4 hover:text-hovercolor-500  "
                                                    onMouseEnter={() => sethover({ hover: true, id: attr.id })}
                                                    onMouseLeave={() => sethover({ hover: false })}
                                                >
                                                    {attr.name == 'main_color' ? 'color' : attr.code == 'price_per_unit' ? 'price' : attr.name}
                                                    <ChevronDownIcon
                                                        className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                                                        aria-hidden="true"
                                                    />
                                                </Menu.Button>
                                            </div>

                                            <Transition

                                                as={Fragment}
                                                show={hover.id == attr.id ? true : false}
                                                onMouseEnter={() => sethover({ hover: true, id: attr.id })}
                                                onMouseLeave={() => sethover({ hover: false })}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"

                                                // className='z-40 absolute bg-white rounded-xl grid grid-cols-2 w-80 '
                                                className={`z-40 absolute bg-white rounded-xl grid ${attr.code == 'color' ? 'grid-cols-3  w-112 ' : 'grid-cols-2  w-80 '} `}
                                            >
                                                <Menu.Items className="absolute  right-0 mt-2  origin-top-right divide-y
                                   divide-gray-100 rounded-md bg-white shadow-lg ring-1
                                    ring-black ring-opacity-5 focus:outline-none">
                                                    {
                                                        attr.code != 50 ? attr.options.map((op, inde) =>

                                                            <div className="px-1 w-36 py-1 rounded-lg md:hover:mx-1 md:border-2 md:border-white md:hover:border-gray-800
                                              transform duration-300 " onClick={(e) => {
                                                                    handleFlter(attr.code, op.id, op.label)
                                                                    sethover({ hover: false, id: 0 })
                                                                }}>
                                                                <Menu.Item>
                                                                    {({ active }) => (
                                                                        <button
                                                                            className='bg-violet-500 text-whitetext-gray-900
                                                                   group flex w-full items-center rounded-md px-2 py-2 text-sm flex-wrap'
                                                                        >
                                                                            {op.swatch_value != null ? <img className='w-12 h-11 m-2' loading='lazy' src={`${process.env.imgPath}/${op.swatch_value}`} /> : ''}
                                                                            <p >  {op.label}</p>

                                                                        </button>
                                                                    )}
                                                                </Menu.Item>
                                                            </div>

                                                        )
                                                            : <div className="px-1 w-36 py-1 rounded-lg " onClick={(e) => {
                                                                handleFlter(attr.code, op.id, op.label)
                                                                sethover({ hover: false, id: 0 })
                                                            }}>
                                                                <Menu.Item>
                                                                    {({ active }) => (
                                                                        <button
                                                                            className='bg-violet-500 text-whitetext-gray-900
                                                               group flex w-full items-center rounded-md px-2 py-2 text-sm'
                                                                        >
                                                                            <p>ivhdsihvu</p>

                                                                        </button>
                                                                    )}
                                                                </Menu.Item>
                                                            </div>

                                                    }

                                                </Menu.Items>
                                            </Transition>

                                        </Menu>
                                    </div>

                                )
                            }


                        </div>
                        <div className="flex flex-col  sm:hidden  items-center">
                            <div
                                className="flex justify-center space-x-6 p-2 flex-row cursor-pointer group ring-1 ring-gray-600
                                 rounded-md w-80  "
                                onClick={() =>
                                    setShowZippingInput(!showZippingInput)
                                }>
                                <span className='font-bold'>Filters</span>
                                {!showZippingInput && (
                                    <ChevronDownIcon className="flex-shrink-0 h-5 w-5 mx-5 group-hover:underline" />
                                )}
                                {showZippingInput && (
                                    <ChevronUpIcon className="flex-shrink-0 h-5 w-5 mx-5 group-hover:underline" />
                                )}
                            </div>
                            <div
                                className={`flex  overflow-scroll transition-all duration-300 w-full ${showZippingInput ? 'h-120 my-2' : 'h-0'
                                    }`}>
                                <span className="flex-1 group-hover:underline">
                                    <div className='p-4'>
                                        {
                                            attrebutes.map((attr, index) =>



                                                <div className="mt-6 flex flex-col justify-center ">
                                                    <div as="div" className="relative inline-block text-left w-full justify-center"

                                                    >
                                                        <div>

                                                            <div className="w-full h-10 items-center  rounded-md flex flex-row justify-between
                                                                                text-black bg-opacity-20 ring-1 ring-gray-400 text-left px-4
                                                                                 hover:text-hovercolor-500  "
                                                                // onMouseEnter={() => sethover({ hover: true, id: attr.id })}
                                                                // onMouseLeave={() => sethover({ hover: false })}
                                                                onClick={() => {
                                                                    setsubmenu({ open: submenu.menuId == attr.id ? false : true, menuId: submenu.menuId == attr.id ? 0 : attr.id })
                                                                    console.log("dsvdsv4t4", submenu)
                                                                }
                                                                    // setsubmenu({ open: !submenu.open, menuId: attr.id })

                                                                }
                                                            >
                                                                <p> {attr.name == 'main_color' ? 'color' : attr.code == 'price_per_unit' ? 'price' : attr.name}</p>
                                                                <ChevronDownIcon
                                                                    className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                                                                    aria-hidden="true"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={` overflow-hidden p-2  transition-all duration-300 w-full ${submenu.open && submenu.menuId == attr.id ? 'h-full my-2' : 'h-0'
                                                        }`}>
                                                        <div className="   mt-2 grid grid-cols-2 
                                   rounded-md bg-white shadow-lg ring-1
                                    ring-black ring-opacity-5 focus:outline-none">
                                                            {
                                                                attr.code != 50 ? attr.options.map((op, inde) =>

                                                                    <div className=" w-36  rounded-lg m-2  
                                                                 ring-1 ring-gray-600 md:hover:border-gray-800 
                                              transform duration-300 " onClick={(e) => {
                                                                            handleFlter(attr.code, op.id, op.label)
                                                                            sethover({ hover: false, id: 0 })
                                                                        }}>
                                                                        <div>

                                                                            <button
                                                                                className='bg-violet-500 text-whitetext-gray-900
                                                                   group flex w-full items-center rounded-md px-2 py-2 text-sm flex-wrap '
                                                                            >
                                                                                {op.swatch_value != null ? <img className='w-12 h-11 m-2' loading='lazy' src={`${process.env.imgPath}/${op.swatch_value}`} /> : ''}
                                                                                <p >  {op.label}</p>

                                                                            </button>

                                                                        </div>
                                                                    </div>

                                                                )
                                                                    : <div className="px-1 w-36 py-1 rounded-lg " onClick={(e) => {
                                                                        handleFlter(attr.code, op.id, op.label)
                                                                        sethover({ hover: false, id: 0 })
                                                                    }}>
                                                                        <div>

                                                                            <button
                                                                                className='bg-violet-500 text-whitetext-gray-900
                                                               group flex w-full items-center rounded-md px-2 py-2 text-sm'
                                                                            >
                                                                                <p>ivhdsihvu</p>

                                                                            </button>

                                                                        </div>
                                                                    </div>

                                                            }

                                                        </div>
                                                    </div>

                                                </div>

                                            )
                                        }


                                    </div>
                                </span>
                            </div>

                        </div>

                    </div>

                }

                <div className='mt-6 flex flex-row'>
                    {
                        attribute.map((filter, index) => <div className='border-2 border-gray-600 rounded-lg p-2 mx-2 flex flex-row'>

                            {filter.code == 'rugtype' ? 'type' + '=' + filter.label : filter.code + '=' + filter.label}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                                onClick={(e) => removAttr(index, filter)}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default StoreHeading
