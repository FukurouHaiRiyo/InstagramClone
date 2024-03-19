import React, {useState, useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import propTypes from 'prop-types';
import FirebaseContext from '../../context/firebase';
import UserContext from '../../context/user';

const Actions = (props) => {
    const {firebase, FieldValue} = useContext(FirebaseContext);
    // const {uid} = useContext(UserContext);
    const [toggleLiked, setToggleLiked] = useState(props.likedPhoto);
    const [likes, setLikes] = useState(props.totalLikes);

    const handleToggleLiked = async () => {
        setToggleLiked((prevToggleLiked) => !prevToggleLiked);

        await firebase.firestore().collection('photos').doc(docId).update({
            likes: toggleLiked ? FieldValue.arrayRemove(userId) : FieldValue.arrayUnion(userId)
        });

        setLikes((prevLikes) => (toggleLiked ? prevLikes - 1: prevLikes + 1));
    };

    return (
        <>
            <View style={{fledDirection: 'row', justifyContent: 'space-between', padding: 16}}>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                        onPress={handleToggleLiked}
                        style={{
                            width: 24,
                            height: 24,
                            marginRight: 4,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        {/* <SvgIcon
                            name='heart'
                            fill={toggleLiked ? 'red' : 'none'}
                            stroke={toggleLiked ? 'red' : 'black'}
                            width={24}
                            height={24} 
                        /> */}
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={handleFocus}
                        style={{
                            width: 24,
                            height: 24,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        {/* <SvgIcon name='comment' fill='none' stroke='black' width={24} height={24}/> */}
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{padding: 16, paddingBottom: 0}}>
                <Text style={{fontWeight: 'bold'}}>
                    {likes===1 ? `${likes} like` : `${likes} likes`}
                </Text>
            </View>
        </>
    );
}

Actions.propTypes = {
    docId: propTypes.string.isRequired,
    totalLikes: propTypes.number.isRequired,
    likedPhoto: propTypes.bool.isRequired,
    handleFocus: propTypes.func.isRequired,
}

export default Actions;