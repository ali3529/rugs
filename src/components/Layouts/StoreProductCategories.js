import { ArrowSmLeftIcon, ArrowSmRightIcon } from '@heroicons/react/outline'
import StoreProductCategory from './StoreProductCategory'

function StoreProductCategories() {
    return (
        <div className="flex items-center justify-center w-full py-1 px-4 sm:px-6 lg:px-8">
            <div className="w-full relative flex items-center justify-center">
                <div className="absolute z-30 bg-green-500 hover:bg-green-700 w-10 h-10 flex items-center justify-center rounded-full left-0 ml-2 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer p-0">
                    <ArrowSmLeftIcon className="text-white w-8 h-8 p-1" />
                </div>
                <div
                    className="w-full h-full mx-auto overflow-x-scroll overflow-y-hidden scroll"
                    style={{
                        '-ms-overflow-style': 'none',
                        'scrollbar-width': 'none',
                    }}>
                    <div id="slider" className="h-full flex w-auto">
                        {/* <div className="flex flex-shrink-0 relative w-full sm:w-auto"> */}
                        <StoreProductCategory />
                        <StoreProductCategory />
                        <StoreProductCategory />
                        <StoreProductCategory />
                        <StoreProductCategory />
                        <StoreProductCategory />
                        <StoreProductCategory />
                        <StoreProductCategory />
                        <StoreProductCategory />
                        <StoreProductCategory />
                        {/* </div> */}
                    </div>
                </div>
                <div className="absolute z-30 bg-green-500 hover:bg-green-700 w-10 h-10 flex items-center justify-center rounded-full right-0 mr-2 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer p-0">
                    <ArrowSmRightIcon className="text-white w-8 h-8 p-1" />
                </div>
            </div>
        </div>
    )
}

export default StoreProductCategories
