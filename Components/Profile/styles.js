import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    profilePictureContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profilePicture: {
        width: 100,
        height: 100,
        borderRadius: 100,
    },
    profileInfoContainer:{
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    usernameContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    username:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    followButton:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    followButtonText:{
        fontSize: 20,
        color: 'blue',
    },
    statsContainer:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    statText:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    statNumber:{
        fontSize: 20,
    },
    fullNameContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    fullName:{
        fontSize: 20,
    },
});