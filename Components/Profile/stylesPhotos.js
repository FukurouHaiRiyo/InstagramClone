import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
    }, 

    photosContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-round',
        alignItems: 'flex-start',
    }, 

    photosWrapper: {
        width: '33%',
        height: 120,
        padding: 2,
    },

    image: {
        flex: 1,
        width: null,
        alignSelf: 'stretch',
    },

    overlay: {
        flex: 1,
        position: 'absolute',
        left: 0,
        top: 0,
        opacity: 0.5,
        backgroundColor: 'black',
        width: '100%',
        height: '100%'
    },

    iconText: {
        flex: 1,
        position: 'absolute',
        left: 0,
        top: 0,
        color: 'white',
        fontSize: 30,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        textAlign: 'center',
    },

    noPostsText: {
        flex: 1,
        fontSize: 20,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        textAlign: 'center',
    }
});

export default styles;