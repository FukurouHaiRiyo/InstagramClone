import React, {useState, useContext, useEffect} from 'react';
import { View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FirebaseContext from '../context/firebase';

const Login = () => {
    const navigation = useNavigation();
    // const {firebase} = useContext(FirebaseContext);

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    const isInvalid = password === '' || emailAddress === '';

    const handleLogin = async () => {
        try{

        } catch(error){
            setEmailAddress('');
            setPassword('');
            setError(error.message);
        }
    };

    const handleSignUp = () => {
        navigation.navigate('SignUp');
    }

    return(
        <View style = {{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 3}}>
                <Image
                    source={require('../assets/images/oubit.png')}
                    style={{
                        width: 150,
                        height: 150,
                        marginBottom: 20,
                        alignSelf: 'center',
                    }}
                />

                {error && <Text style={{marginBottom: 16, color: 'red'}}>{error}</Text>}

                <TextInput placeholder='Email address' style={{height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 8, padding: 8}} onChangeText={(text) => setEmailAddress(text)} value={emailAddress}/>
                <TextInput placeholder='Email address' style={{height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 8, padding: 8}} onChangeText={(text) => setPassword(text)} value={password} secureTextEntry={true}/>

                <TouchableOpacity disabled={isInvalid} onPress={handleLogin} style={{
                    backgroundColor: isInvalid ? 'gray' : 'blue',
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 8,
                    marginTop: 8,
                }}>
                    <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>Login</Text>
                </TouchableOpacity>

                <View style={{marginTop: 10, alignItems: 'center', backgroundColor: 'white', padding: 16, borderRadius: 8}}>
                    <Text style={{fontSize: 14}}>
                        Don't have an account?{' '}

                        <TouchableOpacity onPress={handleSignUp}> 
                            <Text style={{marginTop: 10, fontWeight: 'bold', color: 'blue', alignItems: 'center'}}>
                                Sign up 
                            </Text>
                        </TouchableOpacity>
                    </Text>
                </View>
            </View>
        </View>
    );
}

export default Login;