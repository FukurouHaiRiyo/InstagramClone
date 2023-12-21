import React from 'react';
import { View, Text } from 'react-native';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import PropTypes from 'prop-types';

import style from './style';
import UserProfileImage from '../UserProfileImage/UserProfileImage';

const Header = ({username, location, profileImage}) => {
  return (
    <View style={style.user}>
        <View style={style.userContainer}>
            <UserProfileImage profileImage={profileImage} imageDimension={60}/> 

            <View style={style.userTextContainer}>
                <Text style={style.username}>
                    {username}
                </Text>

                {location && <Text style={style.location}>{location}</Text>}
            </View>
        </View>

        <FontAwesomeIcon icon={faEllipsisH} size={24} color={'#79869F'}/>
    </View>
  )
}

Header.protoTypes = {
    username: PropTypes.string.isRequired,
    location: PropTypes.string,
    profileImage: PropTypes.any.isRequired,
};

export default Header;