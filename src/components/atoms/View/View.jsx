import React from 'react'
import PropTypes from 'prop-types'

const View = (props) => {
    const {inline, children, className, id, onClick, dataToggle, dataTarget} = props
    return (
        <>
        { inline && (
            <span data-toggle={dataToggle} data-target={dataTarget} className={className} id={id} onClick={onClick}>{children}</span>
        )}
        { !inline && (
            <div data-toggle={dataToggle} data-target={dataTarget} className={className} id={id} onClick={onClick}>{children}</div>
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
    onClick: PropTypes.func,
    dataTarget: PropTypes.string,
    dataToggle: PropTypes.string
}
export default View