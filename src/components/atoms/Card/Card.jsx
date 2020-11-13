import React from 'react'
import PropTypes from 'prop-types';

// Style
import './Card.scss'

// Components
import View from '../View/View'

const Card = (props) => {
    const {className, children, onClick, dataTarget, dataToggle} = props 

    return (
        <>
            <View dataToggle={dataToggle} dataTarget={dataTarget} onClick={onClick} className={`${className} card card-set my-3`}>
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
    children: PropTypes.any,
    onClick: PropTypes.func,
    dataTarget: PropTypes.string,
    dataToggle: PropTypes.string
}

export default Card
