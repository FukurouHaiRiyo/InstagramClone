import React, {useState, useContext, useEffect} from 'react';
import { View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FirebaseContext from '../../context/firebase';

import styles from './style';

const Login = () => {
    const navigation = useNavigation();
    const {firebase} = useContext(FirebaseContext);

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    const isInvalid = password === '' || emailAddress === '';

    const handleLogin = async () => {
        try{
            await firebase.auth().signInWithEmailAndPassword(emailAddress, password).then(() =>{
                navigation.navigate('MainPage');
                // make sure the user can't go back to the login page
                navigation.reset({
                    index: 0,
                    routes: [{name: 'MainPage'}],
                });
            })
        } catch(error){
            setEmailAddress('');
            setPassword('');
            setError('The email address or password is incorrect. Please try again.');
        }
    };

    const handleSignUp = () => {
        navigation.navigate('SignUp');
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Outbit</Text>
            {error && <Text style={{marginBottom: 16, color: 'red'}}>{error}</Text>}

            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder='Email'
                    placeholderTextColor='#003f5c'
                    onChangeText={(text) => setEmailAddress(text)}
                    value={emailAddress}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder='Password'
                    placeholderTextColor='#003f5c'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    secureTextEntry={true}
                />
            </View>

            <TouchableOpacity disabled={isInvalid} onPress={handleLogin}
                style={isInvalid ? styles.loginButtonDisabled : styles.loginButton}
            >
                <Text style={styles.inputText}>Login</Text> 
            </TouchableOpacity>
            
            <Text style={styles.forgotAndSignUpText}>Don't have an account?</Text>
            <TouchableOpacity onPress={handleSignUp} style={styles.signUpButton}>
                <Text style={styles.inputText}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Login;