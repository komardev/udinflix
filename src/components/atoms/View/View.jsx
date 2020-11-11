import React from 'react'
import PropTypes from 'prop-types'

const View = (props) => {
    const {inline, children, className, id, onClick} = props
    return (
        <>
        { inline && (
            <span className={className} id={id} onClick={onClick}>{children}</span>
        )}
        { !inline && (
            <div className={className} id={id} onClick={onClick}>{children}</div>
        )}
        </>
    )
}
View.defaultProps = {
    inline: false, 
    children: '',
};
View.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    inline: PropTypes.bool,
    children: PropTypes.any,
    onClick: PropTypes.func
}
export default View