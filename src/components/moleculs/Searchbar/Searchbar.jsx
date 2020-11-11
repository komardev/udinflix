import React from 'react'
import PropTypes from 'prop-types';

// Style & Icons
import './Searchbar.scss'
import { BsSearch } from "react-icons/bs";

// Components
import { View , Input} from '../../atoms'

const Searchbar = (props) => {
    const {placeholder, onSubmit, onChange, value} = props

    return (
        <form onSubmit={onSubmit}>
            <View className="search">
                <View className="search__input">
                    <Input value={value} onChange={onChange} placeholder={placeholder}/>
                    <BsSearch onClick={onSubmit} className="icon"/>
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
    onChange: PropTypes.func
};

export default Searchbar
