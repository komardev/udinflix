import React from 'react'
import PropTypes from 'prop-types';

// Style
import './Card.scss'

// Components
import View from '../View/View'

const Card = (props) => {
    const {className, children} = props 

    return (
        <>
            <View className={`${className} card card-set my-3`}>
               {children}
            </View>
        </>
    )
}

Card.defaultProps = {
    children: ''
};

Card.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any
}

export default Card
