import React, { useState } from 'react'
import PropTypes from 'prop-types';

// Style & Icons
import './Searchbar.scss'
import { BsSearch } from "react-icons/bs";

// Components
import { View , Input} from '../../atoms'

const Searchbar = (props) => {
    const [bounce, setBounce] = useState(false)
    const {placeholder, onSubmit, onChange, value, ref} = props

    return (
        <form onSubmit={onSubmit}>
            <View className="search">
                <View className="search__input">
                    <BsSearch onClick={onSubmit} className={`icon ${bounce ? 'bounce' : null}`}/>
                    <Input onBlur={() => setBounce(false)} onFocus={() => setBounce(true)} value={value} onChange={onChange} ref={ref} placeholder={placeholder}/>
                </View>
            </View>
        </form>
    )
}

Searchbar.defaultProps = {
    placeholder: 'Search...'
};

Searchbar.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onSubmit: PropTypes.func,
    onChange: PropTypes.func,
    ref: PropTypes.any
};

export default Searchbar
