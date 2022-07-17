import React from 'react'
import MultiRangeSlider from "@/components/multiRangeSlider/MultiRangeSlider";


function RangeSlider({ minPrice, maxPrice }) {

   
    return (
        <>
            <MultiRangeSlider
                min={0}
                max={1000}
                onChange={({ min, max }) => {
                    minPrice(min)
                    maxPrice(max)
                }}
            />
        </>
    )
}

export default RangeSlider