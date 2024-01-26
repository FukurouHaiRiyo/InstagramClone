import React, {useState, useContext, useEffect} from 'react';
import { Text, SafeAreaView, ScrollView, View } from 'react-native';

import FirebaseContext from '../../context/firebase';
import {doesUsernameExist} from '../../services/firebase';

const SignUp = () => {
  const {firebase} = useContext(FirebaseContext);

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
    <Text>signup</Text>
  )
}

export default SignUp