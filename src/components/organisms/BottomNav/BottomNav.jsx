import React from 'react'
import {NavLink} from 'react-router-dom'

// Icons
import { AiFillHome, AiFillHeart} from "react-icons/ai";

// Style & Images
import './BottomNav.scss'

// Components
import {View} from '../../index'

const BottomNav = () => {
    return (
    <View className="bottom">
        <NavLink exact to="/" className="bottom__nav" activeClassName="bottom__selected">
            <View className="navigation">
                <AiFillHome className="navigation__icon"/>
                Home
            </View>
        </NavLink>
        <NavLink exact to="/favourite" className="bottom__nav" activeClassName="bottom__selected">
            <View className="navigation">
                <AiFillHeart className="navigation__icon"/>
                Favourite
            </View>
        </NavLink>
    </View>
    )
}

export default BottomNav