import { classNames as cn } from '@/utils/helpers'
import PropTypes from 'prop-types'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Arrow from './Arrow'
import Container from './Container'
import Dots from './Dots'
import Slide from './Slide'
import SliderContent from './SliderContent'

const useIntervalWithStop = (callback, delay) => {
    const savedCallback = useRef()
    const intervalId = useRef(null)
    const [currentDelay, setDelay] = useState(delay)

    const toggleRunning = useCallback(
        () =>
            setDelay(currentDelayVar =>
                currentDelayVar === null ? delay : null,
            ),
        [delay],
    )

    const clear = useCallback(() => clearInterval(intervalId.current), [])

    // Remember the latest function.
    useEffect(() => {
        savedCallback.current = callback
    }, [callback])

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current()
        }

        if (intervalId.current) clear()

        if (currentDelay !== null) {
            intervalId.current = setInterval(tick, currentDelay)
        }

        return clear
    }, [currentDelay, clear])

    return [toggleRunning, !!currentDelay]
}

const Slider = ({
    className,
    inContainer = false,
    slideInterval,
    slides,
    size = 'large',
    arrowProps,
    dotsProps,
    slideProps,
    sliderWrapperProps,
    sliderProps,
}) => {
    const [width, setWidth] = useState(0)
    const transitionRef = useRef()
    const resizeRef = useRef()
    const containerRef = useRef(null)

    let togglePausePlay
    let isPlaying

    const firstSlide = slides[0]
    const secondSlide = slides[1]
    const lastSlide = slides[slides.length - 1]
    const SIZES = {
        small: 'h-1/3',
        medium: 'h-1/2',
        large: 'h-full',
    }

    const [state, setState] = useState({
        activeSlide: 0,
        translate: width,
        transition: 0.45,
        _slides: [lastSlide, firstSlide, secondSlide],
    })
    const { activeSlide, translate, transition } = state

    const handleResize = () => {
        setState({ ...state, translate: width, transition: 0 })
    }

    const smoothTransition = () => {
        let _slidesClone = []

        if (activeSlide === slides.length - 1) {
            _slidesClone = [slides[slides.length - 2], lastSlide, firstSlide]
        } else if (activeSlide === 0) {
            _slidesClone = [lastSlide, firstSlide, secondSlide]
        } else _slidesClone = slides.slice(activeSlide - 1, activeSlide + 2)

        setState({
            ...state,
            _slides: _slidesClone,
            transition: 0,
            translate: width,
        })
    }

    const nextSlide = () =>
        setState({
            ...state,
            translate: translate + width,
            activeSlide:
                activeSlide === slides.length - 1 ? 0 : activeSlide + 1,
        })

    const prevSlide = () =>
        setState({
            ...state,
            translate: 0,
            activeSlide:
                activeSlide === 0 ? slides.length - 1 : activeSlide - 1,
        })

    if (slideInterval) {
        const [toggle, running] = useIntervalWithStop(() => {
            nextSlide()
        }, slideInterval * 1000)

        togglePausePlay = toggle
        isPlaying = running
    }

    useEffect(() => {
        setWidth(containerRef.current.clientWidth)

        transitionRef.current = smoothTransition
        resizeRef.current = handleResize
    })

    useEffect(() => {
        setState({ ...state, translate: containerRef.current.clientWidth })
        const smooth = e => {
            if (e.target.className.includes('SliderContent')) {
                transitionRef.current()
            }
        }

        const resize = () => {
            resizeRef.current()
        }

        const transitionEnd = window.addEventListener('transitionend', smooth)
        const onResize = window.addEventListener('resize', resize)

        return () => {
            window.removeEventListener('transitionend', transitionEnd)
            window.removeEventListener('resize', onResize)
        }
    }, [])

    useEffect(() => {
        if (transition === 0) setState({ ...state, transition: 0.45 })
    }, [transition])

    const Element = inContainer ? Container : 'div'

    return (
        <Element
            ref={containerRef}
            className={cn(
                SIZES[size],
                'relative w-full overflow-hidden whitespace-no-wrap p-0 m-0',
                className,
            )}
            {...sliderProps}>
            <SliderContent
                // translate={translate}
                // transition={transition}
                width={width}
                {...sliderWrapperProps}>
                {/* {_slides.map((_slide, i) => ( */}
                <a href={slides[activeSlide].title}>
                    <Slide
                        width={width}
                        // key={_slide + i}
                        content={slides[activeSlide].image_url}
                        title={slides[activeSlide].title}
                        description={slides[activeSlide].content}
                        {...slideProps}
                    />
                </a>
                {/* ))} */}
            </SliderContent>

            <div className='hidden sm:flex'>
                <Arrow direction="left" handleClick={prevSlide} {...arrowProps} />
            </div>
            <div className='hidden sm:flex'>
                <Arrow direction="right" handleClick={nextSlide} {...arrowProps} />
            </div>
            {false && slideInterval && (
                <>
                    <Arrow
                        direction="pause"
                        playState={!isPlaying}
                        handleClick={togglePausePlay}
                        {...arrowProps}
                    />
                    <Arrow
                        direction="play"
                        playState={isPlaying}
                        handleClick={togglePausePlay}
                        {...arrowProps}
                    />
                </>
            )}
 <div className='hidden sm:flex'>
            <Dots slides={slides} activeSlide={activeSlide} {...dotsProps} />
            </div>
        </Element>
    )
}

Slider.propTypes = {
    slides: PropTypes.array,
    slideInterval: PropTypes.number,
    className: PropTypes.string,
    size: PropTypes.string,
    inContainer: PropTypes.bool,
    arrowProps: PropTypes.object,
    dotsProps: PropTypes.object,
    slideProps: PropTypes.object,
    sliderWrapperProps: PropTypes.object,
    sliderProps: PropTypes.object,
}

export default Slider
