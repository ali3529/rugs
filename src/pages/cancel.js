import React from 'react'

function cancel() {
    return (
        <div>
            <div className='w-full flex justify-center flex-col items-center my-32'>
                <p className='text-2xl font-bold text-red-600'>Problme to  your order!</p>
                <a href='/profile'>
                    <button className='mt-5 bg-indigo-400 text-white rounded-lg  px-3 py-3 w-64'>Continue Shopping</button>
                
                </a>
            </div>
            <button className='mt-5 bg-indigo-400 text-white rounded-lg  px-3 py-3 w-64'
                        onClick={(e) => {
                            window.close();
                        }}>close</button>
        </div>
    )
}

export default cancel