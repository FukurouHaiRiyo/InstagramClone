import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    formWrapper: {
        flex: 1,
        paddingHorizontal: 32, 
        paddingTop: 32, 
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: 'white',
    },

    formContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    logoContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },

    logo: {
        width: 165,
        height: 110,
    },

    errorText: {
        color: 'red',
        marginBottom: 16,
    },

    input: {
        padding: 16, 
        width: '90%',
        backgroundColor: '#f3f3f3', 
        color: '#4a4a4a', 
        borderRadius: 12, 
        marginBottom: 12, 
    },

    button: {
        paddingVertical: 12, 
        backgroundColor: '#facc15', 
        borderRadius: 24, 
        width: '100%',
        marginBottom: 12,
    },

    buttonText: {
        fontSize: 18, 
        fontWeight: 'bold', 
        color: '#4a4a4a', 
        textAlign: 'center',
    },

    buttonDisabled: {
        opacity: 0.5,
    },

    loginContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 28, 
    },

    loginText: {
        color: '#808080', 
        fontWeight: '600', 
    },

    loginLink: {
        fontWeight: '600', // font-semibold
        color: '#facc15', // text-yellow-500
    },

    title:{
        fontWeight: 'bold',
        fontSize: 50,
        color: '#fb5b5a',
        marginBottom: 40,
    },
});

export default styles;
