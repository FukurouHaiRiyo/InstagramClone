import {useState, useEffect} from 'react';
import {getUserById} from '../services/firebase';

const useUser = (userId) => {
    const [activeUser, setActiveUser] = useState();

    useEffect(() => {
        async function getUserObjByUserId(userId){
            const [user] = await getUserById(userId);
            setActiveUser(user || {});
        }

        if (userId){
            getUserById(userId);
        }
    }, [userId]);

    return {user: activeUser, setActiveUser};
}

export default useUser;
