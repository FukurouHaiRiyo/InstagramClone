import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import style from './style';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

const UserPost = (props) => {
  return (
    <View>
      <View style={style.user}>
        <View style={style.userContainer}>
          <UserProfileImage profileImage={props.profileImage} imageDimension={60}/>

          <View style={style.userTextContainer}>
            <Text style={style.username}>
              {props.firstName}
            </Text>

            {props.location && <Text style={style.location}>{props.location}</Text>}
          </View>
        </View>
        <FontAwesomeIcon icon={faEllipsisH} color={'#79869F'}/>
      </View>
    </View>
  )
};

UserPost.propTypes = {
  firstName: PropTypes.string.isRequired,
  location: PropTypes.string,
  image: PropTypes.any.isRequired,
  profileImage: PropTypes.any.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  bookmarks: PropTypes.number.isRequired,
};

export default UserPost;