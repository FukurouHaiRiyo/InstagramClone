import React from 'react';
import {View, Image } from 'react-native';
import propTypes from 'prop-types';

const image = ({src, caption}) => {
    return (
        <View>
            <Image source={{uri: src}} style={{width: '100%', height: 200}}/>
        </View>
    )
}

export default image;