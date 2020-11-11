import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
    const { id, type, value, className, placeholder, name, onFocus, onBlur, onChange, pattern, required, maxlength, disabled } = props;


    return (
        <>
            {type && (
                <input disabled={disabled} className={className} id={id} value={value} type={type} placeholder={placeholder} name={name} onFocus={onFocus} onBlur={onBlur} onChange={onChange} pattern={pattern} required={required} maxLength={maxlength} />
            )}
        </>
    );

};

Input.defaultProps = {
    checked: false,
    required: false,
    disabled:false,
    type: 'text'
};

Input.propTypes = {
    id: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    pattern: PropTypes.string,
    name: PropTypes.string,
    noBorder: PropTypes.bool,
    checked: PropTypes.bool,
    required: PropTypes.bool,
    onFocus: PropTypes.func,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    maxlength: PropTypes.string,
};

export default Input;