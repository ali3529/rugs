import React from 'react'
import PropTypes from 'prop-types'

const Dots = ({ slides, activeSlide, wrapperProps, ...dotProps }) => (
    <div
        className="absolute bottom-6 w-full flex justify-center"
        // css={css`
        //     position: absolute;
        //     bottom: 25px;
        //     width: 100%;
        //     display: flex;
        //     align-items: center;
        //     justify-content: center;
        // `}
        {...wrapperProps}>
        {slides.map((slide, i) => (
            <span
                key={slide}
                className={`p-3 mr-1 cursor-pointer rounded-full ${
                    activeSlide === i ? 'bg-black' : 'bg-white'
                }`}
                // css={css`
                //     padding: 10px;
                //     margin-right: 5px;
                //     cursor: pointer;
                //     border-radius: 50%;
                //     background: ${activeSlide === i ? 'black' : 'white'};
                // `}
                {...dotProps}
            />
        ))}
    </div>
)

Dots.propTypes = {
    wrapperProps: PropTypes.object,
    dotProps: PropTypes.object,
    slides: PropTypes.array,
    activeSlide: PropTypes.number,
}

export default Dots
