import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import style from './style';

import Header from './Header';
import Footer from './Footer';

const UserPost = (props) => {
  return (
    <View style={style.userPostContainer}>
      <Header username={props.username} location={props.location} profileImage={props.profileImage}/>

      <View style={style.postImage}>
        <Image source={props.image} style={{width: '100%', height: 300}}/>
      </View>

      <Footer likes={props.likes} comments={props.comments} bookmarks={props.bookmarks}/>
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