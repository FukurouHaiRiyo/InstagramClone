import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBookmark, faHeart, faMessage } from '@fortawesome/free-regular-svg-icons';
import PropTypes from 'prop-types';

import style from './style';

const Footer = ({likes, comments, bookmarks}) => {
  return (
    <View style={style.userPostStats}>
        <View style={{flexDirection: 'row'}}>
          <FontAwesomeIcon icon={faHeart} color={'#79869F'}/>
          <Text style={{marginLeft: 3, color: '#79869F'}}>{likes}</Text>
        </View>

        <View style={{flexDirection: 'row', marginLeft: 27}}>
          <FontAwesomeIcon icon={faMessage} color={'#79869F'}/>
          <Text style={{marginLeft: 3, color: '#79869F'}}>{comments}</Text>
        </View>

        <View style={{flexDirection: 'row', marginLeft: 27}}>
          <FontAwesomeIcon icon={faBookmark} color={'#79869F'}/>
          <Text style={{marginLeft: 3, color: '#79869F'}}>{bookmarks}</Text>
        </View>
    </View>
  )
}

Footer.propTypes = {
    likes: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    bookmarks: PropTypes.number.isRequired,
}

export default Footer