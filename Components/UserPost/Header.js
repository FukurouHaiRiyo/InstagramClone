import React from 'react';
import { View, Text } from 'react-native';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import PropTypes from 'prop-types';

import style from './style';
import UserProfileImage from '../UserProfileImage/UserProfileImage';

const Header = (props) => {
  return (
    <View style={style.user}>
        <View style={style.userContainer}>
            <UserProfileImage profileImage={props.profileImage} imageDimension={60}/> 

            <View style={style.userTextContainer}>
                <Text style={style.username}>
                    {props.username}
                </Text>

                {props.location && <Text style={style.location}>{props.location}</Text>}
            </View>
        </View>

        <FontAwesomeIcon icon={faEllipsisH} size={24} color={'#79869F'}/>
    </View>
  )
}

Header.propTypes = {
    username: PropTypes.string,
    location: PropTypes.string,
    profileImage: PropTypes.any.isRequired,
};

export default Header;