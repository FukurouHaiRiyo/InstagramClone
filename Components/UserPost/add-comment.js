import React, {useState, useContext} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import FirebaseContext from '../../context/firebase';
import UserContext from '../../context/user';

const AddComment = ({docId, comments, setComments, commentInput}) => {
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
            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 0, paddingRight: 5}}>
                <TextInput
                    placeholder='Add a comment...'
                    style={{
                        flex: 1,
                        fontSize: 14,
                        paddingVertical: 5,
                        paddingHorizontal: 4
                    }}
                    value={comment}
                    onChangeText={(text) => setComment(text)}
                    ref={commentInput}
                />

                <TouchableOpacity 
                    style={{justifyContent: 'center', opacity: comment.length < 1 ? 0.25: 1}}
                    onPress={handleSubmitComment}
                    disabled={comment.length < 1}
                >
                    <Text style={{fontSize: 14, fontWeight: 'bold', color: 'blue'}}>
                        Post
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

AddComment.propTypes = {
    docId: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired,
    setComments: PropTypes.func.isRequired,
    commentInput: PropTypes.object
}

export default AddComment;