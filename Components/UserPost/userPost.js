import React, {useRef} from 'react';
import { View } from 'react-native';
import propTypes from 'prop-types';
import style from './style';

import Header from './Header';
import Footer from './Footer';
import image from './image';
import actions from './actions';
import comments from './comments';

const UserPost = ({content}) => {
  return (
    <View>
      
    </View>
  )
};

UserPost.propTypes = {
  username: propTypes.string.isRequired,
  firstName: propTypes.string,
  location: propTypes.string,
  image: propTypes.any.isRequired,
  profileImage: propTypes.any.isRequired,
  likes: propTypes.number.isRequired,
  comments: propTypes.number.isRequired,
  bookmarks: propTypes.number.isRequired,
};

export default UserPost;