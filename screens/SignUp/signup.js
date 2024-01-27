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