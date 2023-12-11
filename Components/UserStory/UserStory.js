import React from 'react';
import PropTypes from 'prop-types';
import style from './style';

import { View, Text } from 'react-native';
import UserProfileImage from '../UserProfileImage/UserProfileImage';

const UserStory = (props) => {
  return (
    <View style={style.storyContainer}>
        <UserProfileImage profileImage={props.profileImage} imageDimension={60}/>
        <Text style={style.firstName}>{props.firstName}</Text>
    </View>
  );

  UserStory.propTypes = {
    firstName: PropTypes.string.isRequired,
    profileImage: PropTypes.object.isRequired,
  };
}

export default UserStory;