import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    imageWrapper: {
        flex: 3,
    },

    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },

    formWrapper: {
        flex: 2,
    },

    formContainer: {
        backgroundColor: 'white',
        padding: 10,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 4,
        marginBottom: 4,
    },

    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },

    logo: {
        marginTop: 2,
        width: '60%',
        height: '60%',
        resizeMode: 'contain',
        marginBottom: 4,
    },

    errorText: {
        color: 'red',
        fontSize: 12,
    },

    input: {
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 4,
        maginBottom: 2,
        padding: 10,
    }

    
});