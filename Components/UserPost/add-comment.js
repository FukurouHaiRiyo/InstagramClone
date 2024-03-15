import React, {useState, useContext} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import FirebaseContext from '../../context/firebase';
import UserContext from '../../context/user';

const add_comment = ({docId, comments, setComments, commentInput}) => {
    const [comment, setComment] = useState('');
    const {firebase, FieldView} = useContext(FirebaseContext);
    const {displayName} = useContext(UserContext).user;

    const handleSubmitComment = () => {
        if (comment.lenght >= 1) {
            setComments([...comments, {displayName, comments}]);
            setComment('');

            firebase.firestore().collection('photos').doc(docId).update({
                comments: FieldValue.arrayUnion({displayName, comment})
            });
        }
    }

    return (
        <View style={{borderTopWidth: 1, borderTopColor: 'gray'}}>
            
        </View>
    )
}

export default add_comment;