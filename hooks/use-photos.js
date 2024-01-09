import {useState, useEffect} from 'react';
import { getPhotos } from '../services/firebase';

const usePhotos = (user) => {
    const [photos, setPhotos] = useState(null);

    useEffect(() => {
        async function getTimeLinePhotos(){
            if(user?.following?.length > 0){ // if the user follows someone
                const followedUserPosts = await getPhotos(user.userId, user.following);
    
                // arrange by the first date created
                followedUserPosts.sort((a, b) => b.dateCreated - a.dateCreated);
                setPhotos(followedUserPosts);
            }
        }

        getTimeLinePhotos();
    }, [user?.userId, user?.following]);

    return {photos};
}

export default usePhotos;
