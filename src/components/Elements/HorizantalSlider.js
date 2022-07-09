import React, { useEffect, useRef, useState } from 'react'

function HorizantalSlider({ children }) {
    const contentWrapper = useRef(null);

    const ArrowLeft = 'https://cdn1.iconfinder.com/data/icons/general-ui-outlined-thick/24/chevron-left-512.png'
    const ArrowRight = 'https://img2.pngio.com/arrow-arrow-right-chevron-chevronright-right-right-icon-icon-arrow-right-png-512_512.png'

    const sideScroll = (element, speed, distance, step) => {
        let scrollAmount = 0;
        const slideTimer = setInterval(() => {
            element.scrollLeft += step;
            scrollAmount += Math.abs(step);
            if (scrollAmount >= distance) {
                clearInterval(slideTimer);
            }
        }, speed);
    };

    return (


        <div className='flex flex-row'>
            <div className='h-12 w-12 self-center bg-gray-200 rounded-full p-2 mx-3 cursor-pointer sm:flex hidden '>
                <img src={ArrowLeft} onClick={() => sideScroll(contentWrapper.current, 10, 250, -6)} />
            </div>

            <div className='flex overflow-auto  sm:overflow-hidden w-full sm:overscroll-x-none overscroll-x-auto ' ref={contentWrapper}>
                <div className='flex'>
                    {children}
                </div>
            </div>

            <div className='h-12 w-12 self-center bg-gray-200 rounded-full p-2 mx-3 cursor-pointer sm:flex hidden'>
                <img src={ArrowRight} onClick={() => sideScroll(contentWrapper.current, 10, 250, 6)} />
            </div>
        </div>

    );


}

export default HorizantalSlider
