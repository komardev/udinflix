import React from 'react'
import PropTypes from 'prop-types'

// Components
import {Header, BottomNav} from '../../organisms/index'
import { View } from '../../atoms'

const Main = (props) => {
    const {showHeader, showNav, children, className} = props

    return (
        <View className={`${className}`}>
            {showHeader && (<Header/>)}
                <View className="container-fluid">
                    {children}
                </View>
            {showNav && (<BottomNav/>)}
        </View>
    )
}

Main.defaultProps = {
    showHeader: true,
    showNav: true,
}

Main.propTypes = {
    showHeader: PropTypes.bool,
    showFooter: PropTypes.bool,
    className: PropTypes.string
}

export default Main