import React from 'react'
import PropTypes from 'prop-types'

const Slide = ({ content, title, description, ...wrapperProps }) => (
    <div className="relative w-full lg:mb-2 mr-2 rounded-2xl border-white  border-2 overflow-hidden">
        <div className="absolute w-full h-full flex justify-center items-start rounded-md px-4  py-8">
            {/* {
                title == '' ? "" :
                    <div className="rounded-lg bg-gray-901 w-full text-center py-2 px-3">
                        <b className="text-yellow-500 sm:text-2xl text-lg font-bold font-mono uppercase">
                            {title}
                        </b>
                        <p className="slider text-yellow-500 sm:text-lg text-sm leading-5 font-mono uppercase">
                            {description.replace(/<[^>]*>?/gm, '')}
                        </p>
                    </div>
            } */}

        </div>
        <img
            className=" w-full h-full "
            src={content}
            {...wrapperProps}
        />
        {/* <img
            className=" w-full h-full sm:h-120 object-fill"
            src={content}
            {...wrapperProps}
        /> */}
    </div>
)

Slide.propTypes = {
    content: PropTypes.string,
    width: PropTypes.number,
    imagePosition: PropTypes.string,
    wrapperProps: PropTypes.object,
}

export default Slide
