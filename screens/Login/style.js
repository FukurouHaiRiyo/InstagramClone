import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title:{
        fontWeight: 'bold',
        fontSize: 50,
        color: '#fb5b5a',
        marginBottom: 40,
    },

    inputView:{
        width: '80%',
        backgroundColor: '#d3d3d3',
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: 'center',   
        padding: 20,
    },

    inputText:{
        height: 20,
        color: 'black',
        justifyContent: 'center',
    },

    forgotAndSignUpText: {
        color: 'black',
        fontSize: 13,
        alignItems: 'center',
    },

    forgotAndSignUpTextContainer:{
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },

    loginButton:{
        width: '80%',
        borderRadius: 25,
        justifyContent: 'center',
        height: 50,
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 10,
        backgroundColor: '#0000FF',
        opacity: 0.5,
    },

    loginButtonDisabled:{
        width: '80%',
        backgroundColor: 'grey',
        borderRadius: 25,
        justifyContent: 'center',
        height: 50,
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 20,
        opacity: 0.5,
    },

    signUpButton:{
        width: '80%',
        borderRadius: 25,
        justifyContent: 'center',
        backgroundColor: '#ADD8E6',
        height: 50,
        alignItems: 'center',
        alignContent: 'center',
        marginTop: 10,
        marginBottom: 10,
        opacity: 1,
    },
});

export default styles;