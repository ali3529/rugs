import HelloBar from '@/components/Layouts/HelloBar'
import { useCartContext } from '@/context/Store'
import { useCoreApis } from '@/hooks/coreApis'
import { classNames } from '@/utils/helpers'
import { Dialog, Menu, Popover, Transition } from '@headlessui/react'
import {
    HeartIcon,
    MinusIcon,
    PhoneIcon,
    PlusIcon,
    SearchIcon,
    ShoppingBagIcon,
    ShoppingCartIcon,
    UserIcon,
    XIcon,
} from '@heroicons/react/outline'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { Fragment, useContext, useEffect, useState } from 'react'
import ApplicationLogo from '../Elements/ApplicationLogo'
import Button from '../Elements/Button'
import Input from '../Elements/Input'
import NavigationButton from '../Elements/NavigationButton'
import SearchBar from '../Elements/SearchBar'
import { useProductsApis } from '@/hooks/productApis'
import { useCardApi } from '@/hooks/CardApi'

import { useMutation, useQuery, } from 'react-query'
import axios from "@/hooks/AxiosConfig"
import CardContext from '@/context/CardContext'
import WishListContext from '@/context/WishListContext'
import AuthContext from '@/context/AuthContext'
import { authUser } from '@/hooks/authUser'
import Search from '../Elements/Search'

function Nav() {

    const router = useRouter()
    const { getAttributeById } = useCoreApis()
    // const cart = useCartContext()[0]
    const [cartItems, setCartItems] = useState(0)
    const [open, setOpen] = useState(false)
    const [openSearch, setOpenSearch] = useState(false)
    const [selectedSubItem, setSelectedSubItem] = useState(0)

    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)
    const [loading, setLoading] = useState(false)

    const [sizeAttribute, setSizeAttribute] = useState(null)
    const [mainColorAttribute, setMainColorAttribute] = useState(null)
    const [styleAttribute, setStyleAttribute] = useState(null)
    const [patternAttribute, setPatternAttribute] = useState(null)
    const [persianAttrebute, setpersianAttrebute] = useState(null)
    const [count, setcount] = useState(0)
    const { getWhishlistCount } = useProductsApis()
    const { getCartItemCount } = useCardApi()

    const { getUserInfo, logOut } = authUser()

    const [userdata, setuserdata] = useState('')
    // const [isAuth, setisAuth] = useState(false)

    const [hover, setHover] = useState({ hover: false, categoryName: '' })

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setuserdata(JSON.parse(localStorage.getItem('data')))
        }

    }, [])

    function onFooterClick(index) {
        if (selectedSubItem === index) setSelectedSubItem(0)
        else setSelectedSubItem(index)
    }

    useEffect(() => { }, [errors, status, loading])

    // useEffect(() => {
    //     let numItems = 0
    //     cart.forEach(item => {
    //         numItems += item.variantQuantity
    //     })
    //     setCartItems(numItems)
    // }, [cart])

    const [navigation, setNavigation] = useState([
        {
            id: 'home',
            name: 'Home',
            href: '/',
            sections: [],
        },
        {
            id: 'rugs',
            name: 'All Rugs',
            href: '/rugs',
            sections: [],
        },
        {
            id: 'size',
            name: 'Size',
            href: '#',
            sections: [
                {
                    id: '1',
                    name: '',
                    items: [],
                },
            ],
        },
        {
            id: 'color',
            name: 'Color',
            href: '#',
            sections: [
                {
                    id: 'section1',
                    name: 'Section One',
                    items: [],
                },
            ],
        },
        {
            id: 'style',
            name: 'Style',
            href: '#',
            sections: [
                {
                    id: 'section1',
                    name: 'Section One',
                    items: [],
                },
            ],
        },
        {
            id: 'persian',
            name: 'Persian',
            href: '/rugs?typeproduct=16&lable=Persian Rugs',
            sections: [],
        },
        {
            id: 'oriental',
            name: 'Oriental',
            href: '/rugs?=oriental',
            sections: [],
        },
        {
            id: 'pattern',
            name: 'Pattern',
            href: '#',
            sections: [
                {
                    id: 'section1',
                    name: 'Section One',
                    items: [],
                },
            ],
        },
        {
            id: 'clearance',
            name: 'Clearance',
            href: '/rugs?tag=clearance',
            sections: [],
        },
    ])

    useEffect(() => {
        getAttributeById({
            setErrors,
            setStatus,
            setLoading,
            setAttribute: setSizeAttribute,
            id: 24,
        })
        getAttributeById({
            setErrors,
            setStatus,
            setLoading,
            setAttribute: setMainColorAttribute,
            id: 23,
        })
        getAttributeById({
            setErrors,
            setStatus,
            setLoading,
            setAttribute: setStyleAttribute,
            id: 29,
        })
        getAttributeById({
            setErrors,
            setStatus,
            setLoading,
            setAttribute: setPatternAttribute,
            id: 35,
        })
        // getAttributeById({
        //     setErrors,
        //     setStatus,
        //     setLoading,
        //     setAttribute: setpersianAttrebute,
        //     id: 29,
        // })
    }, [])


    const wishListContext = useContext(WishListContext)
    const { whishListCount, wishdispatch } = wishListContext
    // const wishdispatch  = wishListContext.dispatch

    const wish = useQuery('wish_count', async () => getWhishlistCount(), {
        onSuccess: (res) => {
            console.log("[cjasckn]", res.data.data?.length);
            if (res.data.data == null) {
                wishdispatch({ type: 'ADD', whishListCount: 0 })

            } else {
                wishdispatch({ type: 'ADD', whishListCount: res.data.data?.length })
            }
        }
    });



    const cardContext = useContext(CardContext)
    const { cardCount, dispatch } = cardContext

    const { isLoading, error, data, isFetching } = useQuery('card_count', async () => getCartItemCount(), {
        onSuccess: (res) => {
            if (res.data.data == null) {
                dispatch({ type: 'ADD', cardCount: 0 })

            } else {
                dispatch({ type: 'ADD', cardCount: res.data.data?.items.length })
            }
        }
    });


    const authContext = useContext(AuthContext)
    const { isAuth, userData, authDispatch } = authContext;

    useEffect(() => {
        if (sizeAttribute?.data?.options) {
            setNavigation(getNavigation('size', sizeAttribute.data.options))
        }
        if (mainColorAttribute?.data?.options) {
            setNavigation(
                getNavigation('color', mainColorAttribute.data.options),
            )
        }
        if (styleAttribute?.data?.options) {
            setNavigation(getNavigation('style', styleAttribute.data.options))
        }
        if (patternAttribute?.data?.options) {
            setNavigation(
                getNavigation('pattern', patternAttribute.data.options),
            )
        }
        // if (persianAttrebute?.data?.options) {
        //     setNavigation(
        //         getNavigation('persian', persianAttrebute.data.options),
        //     )
        // }
    }, [sizeAttribute, mainColorAttribute, styleAttribute, patternAttribute])

    function getNavigation(tag, array) {
        return navigation.map(item => {
          
            if (item.id === tag) {
                console.log("svdsvsdv",item);
                var sections = []
                for (let index = 0; index < array.length; index++) {
                    const element = array[index]
                    console.log("dsvdsvsdvdv",element);
                    sections.push({
                        id: element.id,
                        name: element.label,
                        href: `/rugs?${tag}=${element.id }&lable=${element.label}`,
                        // query:   {arrivais : item.id ,lable:item.label}
                        isLine: false,
                        image: element.swatch_value,
                    })
                }

                item.sections = [
                    {
                        id: '1',
                        name: '',
                        items: sections,
                    },
                ]
            }
            return item
        })
    }

    function onSearchClick(_show) {
        setOpenSearch(_show)
    }

    function onMenuClick(href) {
        if (href === '#') return
        setOpen(false)
        setSelectedSubItem(0)
        router.push(href)
    }

    const hoverCategory = (hover, categoryName) => {
        setHover({ hover, categoryName })
    }


    useEffect(() => {

        getUserInfo()
    }, [])

    const logout = () => {

        logOut({
            setErrors,
            setStatus,
            setLoading,
        })

    }


    return (
        <div className="flex flex-col w-full item-center justify-center border-b border-palette-lighter top-0 z-20 bg-white p-0 m-0">
            <HelloBar />

            <div className="">
                {/* Mobile menu */}
                <Transition.Root show={open} as={Fragment}>
                    <Dialog
                        as="div"
                        className="fixed inset-0 flex z-40 lg:hidden"
                        onClose={setOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full">
                            <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
                                <div className="px-4 pt-5 pb-2 flex">
                                    <button
                                        type="button"
                                        className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                                        onClick={() => setOpen(false)}>
                                        <span className="sr-only">
                                            Close menu
                                        </span>
                                        <XIcon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </button>
                                </div>

                                {/* Links */}

                                <nav className={`flex-col flex-grow pb-4 flex`}>
                                    {navigation.map(item => (
                                        <div
                                            className="transition hover:bg-indigo-50 my-2"
                                            key={item.id}>
                                            {/* <!-- header --> */}
                                            <div
                                                className="flex justify-between cursor-pointer transition px-5 items-center h-8"
                                                onClick={() =>
                                                    onFooterClick(item.id)
                                                }>
                                                <h3
                                                    onClick={() =>
                                                        onMenuClick(item.href)
                                                    }
                                                    className="font-bold text-xl text-gray-900">
                                                    {item.name}
                                                </h3>
                                                {item.href === '#' ? (
                                                    selectedSubItem ===
                                                        item.id ? (
                                                        <MinusIcon className="w-5 h-5 text-gray-900 focus:transition-all duration-300" />
                                                    ) : (
                                                        <PlusIcon className="w-5 h-5 text-gray-900 transition-all duration-300" />
                                                    )
                                                ) : (
                                                    ''
                                                )}
                                            </div>
                                            {/* <!-- Content --> */}
                                            {item.href === '#' && (
                                                <div
                                                    className={`accordion-content px-5 pt-0 overflow-hidden transition-all duration-300 ${selectedSubItem ===
                                                        item.id
                                                        ? 'h-full'
                                                        : 'h-0'
                                                        }`}>
                                                    <nav className="list-none text-center">
                                                        {item.sections.map(
                                                            section => (
                                                                <div
                                                                    className="mx-2"
                                                                    key={
                                                                        section.id
                                                                    }>
                                                                    <p
                                                                        id={`${section.id}-heading`}
                                                                        className="font-bold font-4xl mb-4 text-gray-900">
                                                                        {
                                                                            section.name
                                                                        }
                                                                    </p>
                                                                    <ul
                                                                        role="list"
                                                                        aria-labelledby={`${section.id}-heading`}
                                                                        className="pb-4 space-y-3">
                                                                        {section.items.map(
                                                                            item => (
                                                                                <li
                                                                                    key={
                                                                                        item.id
                                                                                    }
                                                                                    className="text-left hover:cursor-pointer">
                                                                                    {!item.isLine && (
                                                                                        <a
                                                                                            onClick={() => {
                                                                                                onMenuClick(
                                                                                                    item.href,
                                                                                                )
                                                                                                close()
                                                                                            }}
                                                                                            className="text-gray-600 hover:text-gray-800">
                                                                                            {
                                                                                                item.name
                                                                                            }
                                                                                        </a>
                                                                                    )}
                                                                                    {item.isLine && (
                                                                                        <hr className="w-full my-3" />
                                                                                    )}
                                                                                </li>
                                                                            ),
                                                                        )}
                                                                    </ul>
                                                                </div>
                                                            ),
                                                        )}
                                                    </nav>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                    <div className='border-t-2 mx-3 px-2'>

                                        <a className="mx-2  hover:underline cursor-pointer hover:text-hovercolor-500" href="/blogs" >
                                            <h3

                                                className=" text-xl text-gray-900">
                                                Blog
                                            </h3>
                                        </a>
                                        <a className="mx-2 hover:text-hovercolor-500 hover:underline cursor-pointer " href="/order-status">
                                            <h3

                                                className=" text-xl text-gray-900">
                                                Order Status
                                            </h3>
                                        </a>
                                        <a className="mx-2 hover:text-hovercolor-500 hover:underline cursor-pointer" href="/customer-service">
                                            <h3

                                                className=" text-xl text-gray-900">
                                                Contact
                                            </h3>
                                        </a>
                                    </div>
                                </nav>
                            </div>
                        </Transition.Child>
                    </Dialog>
                </Transition.Root>

                <header className="relative bg-white">
                    {/* Search bar on small screen */}
                    {openSearch && <SearchBar onSearchClick={onSearchClick} />}
                    <nav
                        aria-label="Top"
                        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="">
                            <div className="h-16 flex items-center">
                                <NavigationButton setOpen={setOpen} />

                                {/* Logo */}
                                <a href="/">
                                    <ApplicationLogo />
                                </a>

                                {/* Search box */}
                                <div className="w-full mx-2 px-28 md:block hidden">
                                    <Search />

                                </div>

                                {/* Right buttons */}
                                <div className="ml-auto flex items-center">
                                    {/* Search */}
                                    <div className="flex m-2 md:hidden">
                                        <a
                                            href="#"
                                            className="p-2 text-gray-400 hover:text-gray-500">
                                            <span className="sr-only">
                                                Search
                                            </span>
                                            <SearchIcon
                                                onClick={() =>
                                                    onSearchClick(true)
                                                }
                                                className="w-6 h-6"
                                                aria-hidden="true"
                                            />
                                        </a>


                                    </div>

                                    {/* Profile */}
                                    <Menu
                                        as="div"
                                        className="md:relative flex lg:ml-6">
                                        <div>
                                            <Menu.Button className="flex">
                                                <span className="sr-only">
                                                    Open user menu
                                                </span>
                                                <UserIcon
                                                    className={`${isAuth ? 'text-indigo-700' : 'text-indigo-500'}   w-6 h-6 hover:text-hovercolor-500`}
                                                    aria-hidden="true"
                                                />
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95">
                                            <Menu.Items className="absolute origin-top-right md:w-72 w-full right-0 mt-10 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                                                <Menu.Item>
                                                    {() => (
                                                        <span className="mx-auto text-xl block px-4 py-2 text-gray-700 ">
                                                            Account
                                                        </span>
                                                    )}
                                                </Menu.Item>
                                                {

                                                    isAuth ?
                                                        <>
                                                            <Menu.Item>
                                                                {() => (
                                                                    <div className="mx-4">
                                                                        <span className=''>
                                                                            {/* auuu */}

                                                                            {isAuth ?
                                                                                <div className='flex flex-row py-3 text-indigo-400'>
                                                                                    <p> {userData?.data?.first_name} </p>
                                                                                </div> : ""}
                                                                        </span>

                                                                        <Link href="/profile">
                                                                            <Button className={`w-full my-2 border border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white`}>
                                                                                Profile
                                                                            </Button>
                                                                        </Link>
                                                                        <div >
                                                                            <Button className={`w-full my-2 border border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white`}
                                                                                onClick={logout}>
                                                                                <p> Log Out </p>

                                                                            </Button>
                                                                            {
                                                                                userData?.data.group?.name == "Admin" ?
                                                                                    <a href='/blog/manage'>
                                                                                        <Button className={`w-full my-2 border border-indigo-500 
                                                                            text-indigo-500 hover:bg-indigo-500 hover:text-white`}
                                                                                        >
                                                                                            <p> Manage Blog </p>

                                                                                        </Button>
                                                                                    </a>
                                                                                    : ''
                                                                            }

                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </Menu.Item>
                                                        </>
                                                        :
                                                        <>

                                                            <Menu.Item>
                                                                {() => (
                                                                    <div className=" mx-4">
                                                                        <Link href="/login">
                                                                            <Button className="w-full my-2 bg-indigo-500">
                                                                                Sign in
                                                                            </Button>
                                                                        </Link>
                                                                    </div>
                                                                )}
                                                            </Menu.Item>

                                                            <Menu.Item>
                                                                {() => (
                                                                    <div className="mx-4">
                                                                        <Link href="/register">
                                                                            <Button className="w-full my-2 border border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white">
                                                                                Create
                                                                                Account
                                                                            </Button>
                                                                        </Link>
                                                                    </div>
                                                                )}
                                                            </Menu.Item>
                                                        </>
                                                }

                                                <Menu.Item>
                                                    {() => (
                                                        <div className="my-2 mt-2">
                                                            <a
                                                                href="/customer-service"
                                                                className="group w-full hover:bg-gray-300 rounded-sm">
                                                                <div className="flex flex-row justify-start items-center content-center px-3 my-2">
                                                                    <PhoneIcon className="w-5 h-5" />
                                                                    <span className="text-md mx-1 group-hover:underline">
                                                                        Customer
                                                                        Services
                                                                    </span>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    )}
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>

                                    {/* WishList */}
                                    <div className="ml-4 flow-root lg:ml-6">
                                        <Link href="/wishlist">
                                            <a
                                                href="#"
                                                className="group -m-2 p-2 flex items-center ">
                                                <HeartIcon
                                                    className="flex-shrink-0 h-6 w-6 text-indigo-400 hover:text-hovercolor-500 "
                                                    aria-hidden="true"
                                                />
                                                <span className="ml-2 text-sm font-medium text-gray-700 hover:text-hovercolor-500">
                                                    {whishListCount}
                                                </span>
                                                <span className="sr-only">
                                                    items in wishList
                                                </span>
                                            </a>
                                            {/* www */}
                                        </Link>
                                    </div>

                                    {/* Cart */}
                                    <div className="ml-4 flow-root lg:ml-6">
                                        <Link href="/cart">
                                            <a
                                                href="#"
                                                className="group -m-2 p-2 flex items-center">
                                                <ShoppingBagIcon
                                                    className="flex-shrink-0 h-6 w-6 text-indigo-400 hover:text-hovercolor-500"
                                                    aria-hidden="true"
                                                />
                                                <span className="ml-2 text-sm font-medium text-gray-700 hover:text-hovercolor-500">
                                                    {cardCount}
                                                </span>
                                                <span className="sr-only">
                                                    items in cart, view bag
                                                </span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Flyout menus */}
                            <Popover.Group className="hidden lg:block lg:self-stretch w-full max-w-7xl overflow-hidden">
                                <div className="h-full flex space-x-8 my-2 max-w-7xl">
                                    {navigation.map(category => (
                                        <Popover
                                            key={category.name}
                                            className="flex">
                                            {({ open, close }) => (
                                                <>
                                                    <div className="relative flex">
                                                        <Popover.Button
                                                            className={classNames(
                                                                open &&
                                                                    category
                                                                        .sections
                                                                        .length >
                                                                    0
                                                                    ? 'border-indigo-600 text-indigo-600'
                                                                    : 'border-transparent text-gray-700 hover:text-gray-800',
                                                                'relative text-ellipsis z-10 flex items-center transition-colors ease-out duration-200 text-xl font-medium whitespace-nowrap',
                                                            )}>
                                                            {
                                                                <span
                                                                    onMouseEnter={() => hoverCategory(true, category.name)}
                                                                    onMouseLeave={() => hoverCategory(false, category.name)}
                                                                    onClick={() =>
                                                                        onMenuClick(
                                                                            category.href,
                                                                        )
                                                                    }>
                                                                    <p className='hover:text-hovercolor-500'>
                                                                        {category.name}
                                                                    </p>
                                                                </span>
                                                            }

                                                        </Popover.Button>
                                                    </div>

                                                    <Transition
                                                        as={Fragment}
                                                        show={hover.hover && hover.categoryName == category.name}
                                                        // show={true}
                                                        onMouseEnter={() => hoverCategory(true, category.name)}
                                                        onMouseLeave={() => hoverCategory(false, category.name)}
                                                        enter="transition ease-out duration-200"
                                                        enterFrom="opacity-0"
                                                        enterTo="opacity-100"
                                                        leave="transition ease-in duration-150"
                                                        leaveFrom="opacity-100"
                                                        leaveTo="opacity-0">
                                                        <Popover.Panel className="absolute top-full inset-x-0 text-sm text-gray-500">
                                                            {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                                            <div
                                                                className="absolute inset-0 top-1/2 bg-white shadow"
                                                                aria-hidden="true"
                                                            />

                                                            <div className="relative bg-white ">
                                                                <div className="max-w-7xl mx-auto px-8">
                                                                    <div className=" ">
                                                                        <div className="">
                                                                            {category.sections.map(
                                                                                section => (
                                                                              
                                                                                    <div
                                                                                        className="mx-2 cursor-pointer"
                                                                                        key={
                                                                                            section.id
                                                                                        }>
                                                                                        <p
                                                                                            id={`${section.id}-heading`}
                                                                                            className="font-bold font-4xl mb-4 text-gray-900">
                                                                                            {
                                                                                                section.name
                                                                                            }
                                                                                        </p>
                                                                                        <div
                                                                                            role="list"
                                                                                            aria-labelledby={`${section.id}-heading`}
                                                                                            className={`py-4 gap-8 ${category.id == 'color' ? 'grid grid-cols-5' : category.id == 'style' ? 'grid grid-cols-4' : 'columns-3 flex flex-wra'} p   border-t`}>
                                                                                            {section.items.map(
                                                                                                item => (
                                                                                                    <div
                                                                                                        key={
                                                                                                            item.id
                                                                                                        }
                                                                                                        className="flex">
                                                                                                        {!item.isLine && (
                                                                                                            <a
                                                                                                                onClick={() => {
                                                                                                                    onMenuClick(
                                                                                                                        item.href,
                                                                                                                    )
                                                                                                                    close()
                                                                                                                }}>
                                                                                                                <div className="group hover:cursor-pointer hover:text-hovercolor-500 w-36 ">
                                                                                                                    {item.image && (
                                                                                                                        <img
                                                                                                                            // className="w-28 h-32 group-hover:cursor-pointer"
                                                                                                                            loading='lazy'
                                                                                                                            className="p-2 group-hover:cursor-pointer"
                                                                                                                            src={`${process.env.imgPath}/${item.image}`}
                                                                                                                        />
                                                                                                                    )}
                                                                                                                    <span className="hover:text-gray-900 group-hover:cursor-pointer  text-lg w-full">
                                                                                                                        <p className='hover:text-hovercolor-500  '>  {
                                                                                                                            item.name
                                                                                                                        }
                                                                                                                        </p>
                                                                                                                    </span>
                                                                                                                </div>
                                                                                                            </a>
                                                                                                        )}
                                                                                                        {item.isLine && (
                                                                                                            <hr className="w-full my-3" />
                                                                                                        )}
                                                                                                    </div>
                                                                                                ),
                                                                                            )}
                                                                                        </div>
                                                                                    </div>
                                                                              
                                                                                ),
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Popover.Panel>
                                                    </Transition>
                                                </>
                                            )}
                                        </Popover>
                                    ))}
                                </div>
                            </Popover.Group>
                        </div>
                    </nav>
                </header>
            </div>
        </div>
    )
}

export default Nav
