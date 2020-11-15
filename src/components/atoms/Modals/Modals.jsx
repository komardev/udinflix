import React from 'react'
import PropTypes from 'prop-types';

// Style
import './Modals.scss'

// Components
import {View, Text} from '../index'

const Modals = (props) => {
    const {id, children, title} = props 

    return (
        <View className="modal fade" id={id}>
            <View className="modal-dialog modal-dialog-centered" role="document">
                <View className="modal-content">
                <View className="modal-header">
                <Text className="modal-title" h5>{title}</Text>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </View>
                <View className="modal-body">
                        {children}
                </View>
                <View className="modal-footer">
                    <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                </View>
                </View>
            </View>
        </View>
    )
}

Modals.defaultProps = {
    children: ''
};

Modals.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.any
};


export default Modals
