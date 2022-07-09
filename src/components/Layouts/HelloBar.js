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
                <span className="w-full flex self-center justify-center text-white ">
                    Free Shipping + Free 30 Day Returns
                </span>
                <div className="w-full flex self-center justify-end text-white ">
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

                    <Popover>
                        {({ close }) => (

                            <>
                                <Popover.Button>
                                    <a className="mx-2 hover:text-hovercolor-500 hover:underline cursor-pointer">

                                        Review
                                    </a>
                                </Popover.Button>
                                <Transition

                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0">
                                    <Popover.Panel>
                                        <div className='text-black'>

                                            <AllProductReview closeModal={close} productId={1} />
                                        </div>


                                    </Popover.Panel>
                                </Transition>

                            </>
                        )}
                    </Popover>



                </div>
            </div>
        </div>
    )
}

export default HelloBar
