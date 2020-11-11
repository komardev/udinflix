import React from 'react'
import './Header.scss'

import Logo from '../../../assets/images/brand-logo.png'


// Components
import {View} from '../../index'

const Header = () => {
    return (
        <View className="head">
            <img className="head__image" src={Logo} alt="brand-logo" />
        </View>
    )
}

export default Header