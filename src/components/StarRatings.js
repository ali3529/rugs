import { useState } from "react"

function StarRatings({ avg, count }) {
    const [star, setstar] = useState(
        [
            {
                star: 1,
                rate: false
            },
            {
                star: 1,
                rate: false
            }, {
                star: 1,
                rate: false
            }, {
                star: 1,
                rate: false
            }, {
                star: 1,
                rate: false
            },

        ]
    )


    star.map((e, index) => {
        if (index <= count - 1) {
            e.rate = true
        }
    })



    return (
        <span className="flex flex-row  items-center justify-center">
            {
                star.map((item, index) =>
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className={`w-4 h-4 ${item.rate ? 'text-green-500' : 'via-green-900'}`}
                        viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>)
            }


            <span className="text-gray-600 mx-1 text-xs font-bold flex flex-row items-center justify-center">
                {avg} <small className="mx-1">({count})</small>
            </span>
        </span>
    )
}

export default StarRatings
