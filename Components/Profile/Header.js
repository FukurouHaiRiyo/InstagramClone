import React, {useState, useEffect, useContext} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import useUser from '../../hooks/use-user';
import { isUserFollowingProfile, toggleFollow } from '../../services/firebase';
import UserContext from '../../context/user';
import styles from './styles';

const Header = ({
    photosCount,
    followerCount,
    setFollowerCount,
    profile: {
        docId: profileDocId,
        userId: profileUserId,
        fullName,
        followers,
        following, 
        username: profileUsername
    }
}) => {
    const {user: loggedInUser} = useContext(UserContext);
    const {user} = useUser(loggedInUser?.uid);
    const [isFollowingProfile, setIsFollowingProfile] = useState(null);
    const activeBtnFollow = user?.username && user?.username !== profileUsername;

    const handleToggleFollow = async () => {
        setIsFollowingProfile((isFollowingProfile) => !isFollowingProfile);
        setFollowerCount({
            followerCount: isFollowingProfile ? followerCount - 1 : followerCount + 1
        });
        await toggleFollow(isFollowingProfile, user.docId, profileDocId, profileUserId, user.userId);
    }

    useEffect(() => {
        const isLoggedInUserFollowingProfile = async () => {
            const isFollwing = await isUserFollowingProfile(user.username, profileUserId);
            setIsFollowingProfile(!!isFollwing);
        };

        if(user?.username && profileUserId){
            isLoggedInUserFollowingProfile();
        }
    }, [user?.username, profileUserId]);

    return (
        <View style={styles.container}>
            <View style={styles.profilePictureContainer}>
                {profileUsername ? (
                    <Image 
                        style={styles.profilePicture}
                        source={{uri: `/images/avatars/${profileUsername}.jpg`}}
                        onError={({ nativeEvent: { error } }) => {
                            // Set default image path on error
                            if (error.code === '404') {
                                return <Image source={{uri: '/images/default_profile.png'}}/>
                            }
                        }}
                    />
                ):(
                    <Image 
                        style={styles.profilePicture}
                        source={{uri: '/images/default_profile.png'}}
                    />
                )}
            </View>

            <View style={styles.profileInfoContainer}>
                <View style={styles.usernameContainer}>
                    <Text style={styles.username}>{profileUsername}</Text>
                    
                </View>
            </View>
        </View>
    )
}

Header.propTypes={
    photosCount: PropTypes.number.isRequired,
    followerCount: PropTypes.number.isRequired,
    setFollowerCount: PropTypes.func.isRequired,
    profile: PropTypes.shape({
        docId: PropTypes.string,
        userId: PropTypes.string,
        fullName: PropTypes.string,
        username: PropTypes.string,
        followers: PropTypes.array,
        following: PropTypes.array
    }).isRequired
}

export default Header;