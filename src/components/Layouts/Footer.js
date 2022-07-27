import {
    faFacebook,
    faInstagram,
    faTwitter,
    faPinterestSquare,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MinusIcon, PlusIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { useState } from 'react'
import Button from '../Elements/Button'
import Input from '../Elements/Input'
import MailCimp from '../Elements/MailCimp'

function Footer() {
    const [selectedFooterItem, setSelectedFooterItem] = useState(0)

    function onFooterClick(index) {
        if (selectedFooterItem === index) setSelectedFooterItem(0)
        else setSelectedFooterItem(index)
    }

    const menu = [
        {
            id: 5,
            label: 'Contact Information',
            link: '',
            items: [
                {
                    id: '1',
                    label: 'Address',
                    link: `9315-C Monroe Road
                    Charlotte, NC 28270
                    USA`,
                },
                {
                    id: '2',
                    label: 'Phone',
                    link: '(704) 763-1111',
                },
                {
                    id: '3',
                    label: 'Email',
                    link: 'info@magicrugs.com',
                },
            ],
        },
        {
            id: 1,
            label: 'Customer Service',
            link: '',
            items: [
                {
                    id: '1',
                    label: 'Frequently Asked Questions',
                    link: '/page/faq',
                },
                 {
                    id: '8',
                    label: 'Track My Order',
                    link: '/page/faq',
                },
                // {
                //     id: '2',
                //     label: 'Sales',
                //     link: '/f/Sales/',
                //     // link: 'https://www.magicrugs.com/sales/guest/form/',
                // },
                {
                    id: '3',
                    label: 'Shipping',
                    link: '/page/shipping-policy',
                }, {
                    id: '9',
                    label: 'Returns & Exchanges',
                    link: '/page/returns-exchanges',
                },
                {
                    id: '4',
                    label: 'Learn About Vintage Rugs',
                    link: '/page/about-vintage-rugs',
                },
                {
                    id: '5',
                    label: 'Contact Us',
                    // link: 'https://www.magicrugs.com/contact',
                    link: '/customer-service',
                    //  link: '/f/customer-service',
                },
           

            ],
        },
      





        {
            id: 2,
            label: 'Rewards & Programs',
            link: '',
            items: [
                {
                    id: '2',
                    label: 'Sign Up For An Account',
                    link: '/register',
                    // link: '/rugs?attqribute=style%3DTribal+Rugsl',
                },
                {
                    id: '1',
                    label: 'Rewards Program',
                    link: '/page/rewards',
                },
                {
                    id: '3',
                    label: 'Trade Member Program',
                    link: '/page/trade-program',
                },
                {
                    id: '4',
                    label: 'Buyers & Retailers Program',
                    link: '/page/buyers-retailers-program',
                },
                {
                    id: '5',
                    label: 'Sign In ',
                    link: '/login',
                },
               

            ],
        },
        {
            id: 4,
            label: 'Category',
            link: '',
            


            items: [
                {
                    id: '1',
                    label: 'Persian Rugs',
                    link: '/rugs?collections=116&lable=Persian Rugs',
                },
                {
                    id: '2',
                    label: 'Oriental Rugs',
                    link: '/rugs?collections=108&lable=Oriental Rugs',
                },
                {
                    id: '3',
                    label: 'Custom Size',
                    link: '/page/custom-size',
                },
                {
                    id: '4',
                    label: 'Help Rug Size Guide',
                    link: '/page/rug-guide',
                },  {
                    id: '5',
                    label: 'Clearance',
                    link: '/rugs?Clearance=16&lable=Clearance',
                },
               
            ],
        },
        {
            id: 3,
            label: 'Our Company',
            link: '',
            items: [
                {
                    id: '1',
                    label: 'About',
                    link: '/page/about-us',
                },
                {
                    id: '2',
                    label: 'Why Buy From Magic Rugs',
                    link: '/page/why-buy-from-magic-rugs',
                },
                {
                    id: '3',
                    label: 'Magic Rugs Blog',
                    link: '/blogs',
                },
                {
                    id: '4',
                    label: 'Visit Our Showroom',
                    link: '/page/visit-our showroom',
                }, {
                    id: '4',
                    label: 'Privacy Policy',
                    link: '/page/privacy-policy',
                },
                {
                    id: '5',
                    label: 'Reviews',
                    link: '/reviews',
                },
            ],
        },
       
    ]
    return (
        <footer className="text-gray-600 bg-white">
            <section className="border-t border-b border-gray-200">
                <div className="max-w-7xl px-2 py-8 mx-auto">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-around items-center px-4 sm:px-6 lg:px-8">
                        <div className="flex md:items-start flex-col items-center">
                            <h3 className="font-bold text-sm text-center md:my-0 my-2">
                                Be the first to know about our best deals!
                            </h3>
                        </div>
                        <div className=''>

                            <MailCimp />
                        </div>
                    </div>

                </div>
            </section>

            {/* <section className="text-gray-600">
                <div className="max-w-7xl px-2 py-4 mx-auto">
                    <div className="flex flex-wrap md:space-y-0 space-y-3 px-1 sm:px-3 lg:px-4">
                        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
                                <img
                                    src="/images/phoneicon@2x.webp"
                                    all="phone icon"
                                    className="w-16 h-16"
                                />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg font-bold mb-1">
                                    24/7 Customer Service
                                </h2>
                                <p className="leading-6 text-base">
                                    Trouble with your order? Drop us a line by
                                    phone any time, day or night!
                                </p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
                                <img
                                    src="/images/phoneicon@2x.webp"
                                    all="phone icon"
                                    className="w-16 h-16"
                                />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg font-bold mb-1">
                                    24/7 Customer Service
                                </h2>
                                <p className="leading-6 text-base">
                                    Trouble with your order? Drop us a line by
                                    phone any time, day or night!
                                </p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
                                <img
                                    src="/images/phoneicon@2x.webp"
                                    all="phone icon"
                                    className="w-16 h-16"
                                />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg font-bold mb-1">
                                    24/7 Customer Service
                                </h2>
                                <p className="leading-6 text-base">
                                    Trouble with your order? Drop us a line by
                                    phone any time, day or night!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <div className="block md:hidden">
                {menu.map(item => (
                    <div
                        key={item.id}
                        className="transition hover:bg-indigo-50 my-2">
                        {/* <!-- header --> */}
                        <div
                            className="flex justify-between cursor-pointer transition px-5 items-center h-8"
                            onClick={() => onFooterClick(item.id)}>
                            <h3 className="font-bold text-lg text-gray-900">
                                {item.label}
                            </h3>
                            {selectedFooterItem === item.id ? (
                                <MinusIcon className="w-5 h-5 text-gray-900 focus:transition-all duration-300" />
                            ) : (
                                <PlusIcon className="w-5 h-5 text-gray-900 transition-all duration-300" />
                            )}
                        </div>
                        {/* <!-- Content --> */}
                        <div
                            className={`accordion-content px-5 pt-0 overflow-hidden transition-all duration-300 ${selectedFooterItem === item.id
                                ? `h-[${item.items.length * 8}px]`
                                : 'h-0'
                                }`}>

                            {item.id == 5 ?
                                <nav className="list-none text-center">
                                    {item.items.map(sub => (
                                        <li key={sub.id} className="my-2">
                                            <Link href={sub.link}>
                                                <div className='flex flex-col text-left space-y-2'>
                                                    <a className="font-bold text-lg text-gray-900">
                                                        {sub.label}
                                                    </a>
                                                    <a className="text-gray-600 hover:text-gray-800">
                                                        {sub.link}
                                                    </a>
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </nav>
                                :
                                <nav className="list-none text-center">
                                    {item.items.map(sub => (
                                        <li key={sub.id} className="my-2 text-left">
                                            <Link href={sub.link}>
                                                <a className="text-gray-600 hover:text-gray-800">
                                                    {sub.label}
                                                </a>
                                            </Link>
                                        </li>
                                    ))}
                                </nav>
                            }
                        </div>
                    </div>
                ))}
            </div>

            <div className="hidden md:block">
                <div className="flex flex-nowrap max-w-7xl py-4 mx-auto px-4 sm:px-6 lg:px-8">
                    {menu.map(item => (
                        <div key={item.id} className="w-1/3 px-4">
                            <h2 className="font-bold text-lg text-gray-900 mb-2">
                                {item.label}
                            </h2>
                            {item.id == 5 ?
                                <nav className="list-none text-center">
                                    {item.items.map(sub => (
                                        <li key={sub.id} className="my-2 ">
                                            <Link href=''>
                                                <div className='flex flex-col text-left space-y-2'>
                                                    <a className="font-bold text-lg text-gray-900">
                                                        {sub.label}
                                                    </a>
                                                    <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                                                        {sub.link}
                                                    </a>
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </nav>
                                :
                                <nav className="list-none text-center">
                                    {item.items.map(sub => (
                                        <li key={sub.id} className="my-2 text-left">
                                            <Link href={sub.link}>
                                                <a className="text-gray-600 hover:text-gray-800">
                                                    {sub.label}
                                                </a>
                                            </Link>
                                        </li>
                                    ))}
                                </nav>
                            }

                        </div>
                    ))}
                </div>
            </div>

            {/* <div className="bg-palette-back">
                <div className="max-w-7xl mx-auto flex flex-wrap flex-col sm:flex-row justify-center items-center text-sm  px-4 sm:px-6 lg:px-8">
                    <p className="flex-1 w-32 hidden md:flex " />
                    <div className="w-full flex-shrink-0 md:w-1/3 flex flex-row text-center items-center justify-center my-4">
                        <span className="whitespace-nowrap">
                            Privacy Policy
                        </span>
                        <img
                            className="w-8 h-8 mx-2"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                        />
                        <span className="whitespace-nowrap">Terms of Use</span>
                    </div>
                    <p className="flex-1 w-32 md:w-1/3 flex flex-col text-center items-right text-gray-600 text-sm sm:text-right">
                        © {new Date().getFullYear()} domain
                    </p>
                </div>
            </div> */}
            <section className="max-w-7xl mx-auto border-t border-gray-300">
                <div className="flex flex-row justify-between mx-4 sm:mx-6 lg:mx-8  my-6 items-center">
                    <div className="md:w-2/3 w-full flex flex-col text-xs space-y-2">
                        {/* <div className="space-x-8 text-indigo-600">
                            <span>Terms of Use</span>
                            <span className="border-l md:border-r border-r-0 border-indigo-600 px-8">
                                Privacy Policy
                            </span>
                            <span className="md:inline hidden">
                                Interest-Based Ads
                            </span>
                        </div> */}
                        <span>
                            {`CopyRight © Magic Rugs  ${new Date().getFullYear()} All Rights Reserved.`}
                        </span>
                    </div>
                    <div className="w-1/3 h-4 md:flex hidden space-x-2 text-indigo-600 my-4">
                        <a href="https://twitter.com/magicrugsusa">
                        <FontAwesomeIcon icon={faTwitter} className='w-10 h-10' />
                        </a>
                       <a href="https://www.facebook.com/magicrugsstore">
                       <FontAwesomeIcon icon={faFacebook} className='w-10 h-10' />
                       </a>
                       <a href="https://www.pinterest.com/magicrugsusa/">
                       <FontAwesomeIcon icon={faPinterestSquare} className='w-10 h-10' />
                       </a>
                       <a href="https://www.instagram.com/magicrugsusa/">
                       <FontAwesomeIcon icon={faInstagram} className='w-10 h-10' />
                       </a>
                       
                        
                       
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer
