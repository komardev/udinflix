import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// style
import './Input.scss';
import { View, Image} from '..';

const Input = (props) => {
    const { id, type, value, className, icon, placeholder, name, onFocus, onBlur, onChange, pattern, checked, required, maxlength, onClick, disabled } = props;


    return (
        <>
            {type === 'checkbox' && (
                <input disabled={disabled} className={className} id={id} value={value} type={type} placeholder={placeholder} name={name} onFocus={onFocus} onBlur={onBlur} onChange={onChange} pattern={pattern} required={required} maxLength={maxlength} />
            )}
            {icon && (
                <View className="input-icon">
                    <input disabled={disabled} className={`input-icon__first ${className}`} id={id} value={value} type={type} placeholder={placeholder} name={name} onFocus={onFocus} onBlur={onBlur} onChange={onChange} onClick={onClick} pattern={pattern} required={required} maxLength={maxlength} />
                    {/* <Image className="input-icon__image" src={require(`../../../assets/svg/${icon}`)}/> */}
                </View>
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
    onClick: PropTypes.func,
    onBlur: PropTypes.func,
    maxlength: PropTypes.string,
};

export default Input;