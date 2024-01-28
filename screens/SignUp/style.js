import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageWrapper: {
        flex: 3,
        // Additional styles
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    formWrapper: {
        flex: 2,
        // Additional styles
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
        // Additional styles
    },
    input: {
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 4,
        marginBottom: 2,
        padding: 10,
        // Additional styles
    },
    button: {
        backgroundColor: 'blue',
        height: 40,
        justifyContent: 'center',
        borderRadius: 4,
    },
    buttonDisabled: {
        opacity: 0.5,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    loginContainer: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'grey',
        alignItems: 'center',
    },
    loginText: {
        // Additional styles
    },
    loginLink: {
        color: 'blue',
        fontWeight: 'bold',
    },
});

export default styles;
