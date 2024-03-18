import React, {useRef} from 'react';
import { View } from 'react-native';
import propTypes from 'prop-types';
import style from './style';

import Header from './Header';
import Footer from './Footer';
import Image from './image';
import Actions from './actions';
import Comments from './comments';

const UserPost = ({content}) => {
  const commentInput = useRef(null);
  const handleFocus = () => commentInput.current.focus();

  return (
    <View style={{borderRadius: 8, borderWidth: 1, backgroundColor: 'white', borderColor: 'gray', marginBottom: 21}}>
      <Header username={content.username}/>
      <Image src={content.imageSrc} caption={content.caption}/>
      
      <Actions
        docId={content.docId}
        totalLikes={content.likes.length}
        likedPhoto={content.userLikedPhoto}
        handleFocus={handleFocus}
      />

      <Footer
        caption={content.caption}
        username={content.username}
      />
      <Comments
        docId={content.docId}
        comments={content.comments}
        posted={content.dateCreated}
        commentInput={commentInput}
      />
    </View>
  )
};

UserPost.propTypes = {
  content: propTypes.shape({
    username: propTypes.string.isRequired,
    
  })
};

export default UserPost;