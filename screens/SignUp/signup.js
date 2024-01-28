import React, {useState, useContext, useEffect} from 'react';
import { Text, Image, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import FirebaseContext from '../../context/firebase';
import {doesUsernameExist} from '../../services/firebase';
import styles from './style';

const SignUp = () => {
  const {firebase} = useContext(FirebaseContext);
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const isInvalid = password === '' || emailAddress === '';

  const handleSignUp = async (event) => {
    const usernameExists = await doesUsernameExist(username);

    if (!usernameExists){
      try{
        const createdUserResult = await firebase.auth().createUserWithEmailAndPassword(emailAddress, password);
        await createdUserResult.user.updateProfile({
          displayName: username
        });

        await firebase.firestore().collection('users').add({
          userId: createdUserResult.user.uid,
          username: username.toLowerCase(),
          fullName,
          emailAddress: emailAddress.toLowerCase(),
          following: ['2'],
          followers: [],
          dateCreated: Date.now()
        });

        navigation.navigate('Login');
        // let the user know the account was created
        alert('Account created successfully!');
      } catch(error){
        setFullName('');
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      }
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.formWrapper}>
        <View style={styles.formContainer}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../../assets/images/oubit.png')} />
          </View>

          {error && <Text style={styles.errorText}>{error}</Text>}

          <TextInput
            style={styles.input}
            onChangeText={(text) => setUsername(text)}
            value={username}
            placeholder='Username'
          />

          <TextInput
            style={styles.input}
            onChangeText={(text) => setFullName(text)}
            value={fullName}
            placeholder='Full Name'
          />

          <TextInput
            style={styles.input}
            onChangeText={(text) => setEmailAddress(text)}
            value={emailAddress}
            placeholder='Email Address'
          />

          <TextInput
            style={styles.input}
            onChangeText={(text) => setPassword(text)}
            value={password}
            placeholder='Password'
            secureTextEntry
          />

          <TouchableOpacity
            onPress={handleSignUp}
            style={[styles.button, isInvalid ? styles.buttonDisabled: null]}
            disabled={isInvalid}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginLink}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default SignUp