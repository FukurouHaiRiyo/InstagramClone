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
  username: PropTypes.string.isRequired,
  firstName: PropTypes.string,
  location: PropTypes.string,
  image: PropTypes.any.isRequired,
  profileImage: PropTypes.any.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  bookmarks: PropTypes.number.isRequired,
};

export default UserPost;