import React from 'react';
import { Text, View } from 'react-native';

import style from './style';
import PropTypes from 'prop-types';

const Title = (props) => {
  return (
    <View>
      <Text style={style.title}>{props.title}</Text>
    </View>
  )
};

Title.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Title;