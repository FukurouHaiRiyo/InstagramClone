import React from 'react';
import {View, Image } from 'react-native';
import propTypes from 'prop-types';

const Imagee = ({src, caption}) => {
    return (
        <View>
            <Image source={{uri: src}} style={{width: '100%', height: 200}} alt={caption}/>
        </View>
    )
}

Imagee.propTypes = {
    src: propTypes.string.isRequired,
    caption: propTypes.string.isRequired
}

export default Imagee;