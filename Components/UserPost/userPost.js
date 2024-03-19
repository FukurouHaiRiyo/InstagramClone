import React, {useRef} from 'react';
import { View } from 'react-native';
import propTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';
import Imagee from './image';
import Actions from './actions';
import Comments from './comments';

const UserPost = (props) => {
  const commentInput = useRef(null);
  const handleFocus = () => commentInput.current.focus();

  return (
    <View style={{borderRadius: 8, borderWidth: 1, backgroundColor: 'white', borderColor: 'gray', marginBottom: 21}}>
      <Header username={props.username}/>
      <Imagee src={props.imageSrc} caption={props.caption}/>
      
      <Actions
        docId={props.docId}
        totalLikes={props.likes.length}
        likedPhoto={props.userLikedPhoto}
        handleFocus={handleFocus}
      />

      <Footer
        caption={props.caption}
        username={props.username}
      />
      <Comments
        docId={props.docId}
        comments={props.comments}
        posted={props.dateCreated}
        commentInput={commentInput}
      />
    </View>
  )
};

UserPost.propTypes = {
    username: propTypes.string.isRequired,
    imageSrc: propTypes.string.isRequired,
    caption: propTypes.string.isRequired,
    docId: propTypes.string.isRequired,
    userLikedPhoto: propTypes.bool.isRequired,
    likes: propTypes.array.isRequired,
    comments: propTypes.array.isRequired,
    dateCreated: propTypes.number.isRequired
};

export default UserPost;