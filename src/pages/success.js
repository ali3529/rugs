import React from 'react'

function success() {
    return (
        <div>
            <div className='w-full flex justify-center flex-col items-center my-32'>
                <p className='text-2xl font-bold text-green-600'>Thank you for your order!</p>
                <a href='/profile'>
                    <button className='mt-5 bg-indigo-400 text-white rounded-lg  px-3 py-3 w-64'>Continue Shopping</button>
                   
                </a>
                <button className='mt-5 bg-indigo-400 text-white rounded-lg  px-3 py-3 w-64'
                        onClick={(e) => {
                            // window.open("about:blank", "_self");
                            window.close();
                        }}>close</button>
            </div>
        </div>
    )
}

export default success