import {firebase, FieldValue} from '../lib/firebase';


export async function doesUsernameExist(username) {
    const result = await firebase
        .firestore()
        .collection('users')
        .where('username', '==', username.toLowerCase())
        .get();

    return result.docs.length > 0;
}

export async function getUserByUsername(username) {
    const result = await firebase
        .firestore()
        .collection('users')
        .where('username', '==', username.toLowerCase())
        .get();

    return result.docs.map((item) => ({
        ...item.data(),
        docId: item.id
    }));
}

// get user from the database where userId === userId (passed from the auth)
export async function getUserById(userId){
    const result = await firebase
        .firestore()
        .collection('users')
        .where('userId', '==', userId).get();
    
    const user = result.docs.map((item) => ({
        ...item.data(),
        docId: item.id
    }));

    return user;
}

// get suggested profiles 
export async function getSuggestedProfiles(userId, following){
    let query = firebase.firestore().collection('users');

    if (following.length > 0){
        query = query.where('userId', 'not-in', [...following, userId]);
    } else {
        query = query.where('userId', '!=', userId);
    }

    const result = await query.limit(10).get();
    const profiles = result.docs.map((user) => ({
        ...user.data(),
        docId: user.id
    }));

    return profiles;
}

export async function updatedLoggedInUserFollowing(
    loggedInUserDocId, //the current logged in user 
    profileId, // the user that the current user requests to follow
    isFollowingProfile // if the current user is following the profile or not
){
    return firebase.firestore().collection().doc(loggedInUserDocId).update({
        following: isFollowingProfile ? FieldValue.arrayRemove(profileId) : FieldValue.arrayUnion(profileId)
    });
}

export async function updatedFollowedUserFollowers(
    profileDocId, //the current logged in user
    loggedInUserDocId, // the user that the current user requests to follow
    isFollowingProfile // if the current user is following the profile or not
){
    return firebase
    .firestore()
    .collection('users')
    .doc(profileDocId)
    .update({
      followers: isFollowingProfile ?
        FieldValue.arrayRemove(loggedInUserDocId) :
        FieldValue.arrayUnion(loggedInUserDocId)
    });
}

export async function getPhotos(userId, following){
    const result = firebase.firestore().collection('photos').where('userId', 'in', following).get();

    const userFollowedPhotos = result.docs.map((photo) => ({
        ...photo.data(),
        docId: photo.id
    }))

    const photosWithUserDetails = await Promise.all(
        userFollowedPhotos.map(async (photo) => {
            let userLikePhoto = false;
            if(photo.likes.includes(userId)){
                userLikePhoto = true;
            }

            const user = await getUserById(photo.userId);

            const {username} = user[0];
            return {username, ...photo, userLikePhoto};
        })
    );

    return photosWithUserDetails;
}

export async function getUserPhotosByUserId(userId){
    const result = await firebase
        .firestore()
        .collection('photos')
        .where('userId', '==', userId)
        .get();

    const photos = result.docs.map((photo) => ({
        ...photo.data(),
        docId: photo.id
    }));

    return photos;
}

export async function isUserFollowingProfile(loggedInUserUsername, profileUserId){
    const result = await firebase 
        .firestore()    
        .collection('users')
        .where('username', '==', loggedInUserUsername)
        .where('following', 'array-contains', profileUserId)
        .get();

    const [response = {}] = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id
    }));
        
    return response.userId;
}

export async function toggleFollow(
    isFollowingProfile,
    activeUserDocId,
    profileDocId,
    profileUserId,
    followingUserId
){
    await updatedLoggedInUserFollowing(activeUserDocId, profileUserId, isFollowingProfile);
    
    await updatedFollowedUserFollowers(profileDocId, followingUserId, isFollowingProfile);
}
