import { Dialog, Menu, Popover, Transition } from '@headlessui/react'
import AllProductReview from '../AllProductReview'


const HelloBar = () => {
    // const { user } = useAuth({ middleware: 'auth' })

    return (
        <div className="hidden w-full lg:flex items-center justify-center bg-indigo-600 h-10 text-sm font-medium text-white px-4 sm:px-6 lg:px-8">
            <div className="w-full flex item-center max-w-7xl">
                <span className="w-full flex self-center justify-start text-white">
                    <a className="mx-2 hover:text-gray-50 hover:underline cursor-pointer" href="tel:704763111">
                        (704) 763 1111
                    </a>
                </span>
                <span className="w-full flex justify-end text-white ">
                    Free Shipping + Free 30 Day Returns
                </span>
                {/* <div className="w-full flex self-center justify-end text-white ">
                    <a className="mx-2  hover:underline cursor-pointer hover:text-hovercolor-500" href="/order-status">
                        Order Status
                    </a>{' '}
                    |{' '}
                    <a className="mx-2 hover:text-hovercolor-500 hover:underline cursor-pointer " href="/blogs">
                        Blog
                    </a>{' '}
                    |{' '}
                    <a className="mx-2 hover:text-hovercolor-500 hover:underline cursor-pointer" href="/customer-service">
                        Contact
                    </a>{' '}
                    |{' '}

                  



                </div> */}
            </div>
        </div>
    )
}

export default HelloBar
