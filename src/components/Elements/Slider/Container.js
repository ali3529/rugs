import React from 'react'
import PropTypes from 'prop-types'
// import classNames from 'classnames'
import { forwardRef } from 'react/cjs/react.production.min'
import { classNames } from '@/utils/helpers'

const Container = forwardRef(
    (
        { className, children, element: Element = 'div', marginX = 'mx-auto' },
        ref,
    ) => (
        <Element
            ref={ref}
            className={classNames('container', marginX, className)}>
            {children}
        </Element>
    ),
)

Container.propTypes = {
    marginX: PropTypes.string,
    className: PropTypes.string,
    element: PropTypes.string,
    children: PropTypes.node,
}

export default Container
