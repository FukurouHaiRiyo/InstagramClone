import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React, {useState, useEffect} from 'react';

import SignUp from '../screens/signup';
import Login from '../screens/login';
import MainPage from '../screens/main_page';

const AuthStack = createStackNavigator();
const MainStack = createStackNavigator();

const AuthScreens = () => {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name='Login' compoent={Login}/>
            <AuthStack.Screen name='SignUp' compoent={SignUp}/>
        </AuthStack.Navigator>
    );
}

const MainScreens = () => {
    return (
      <MainStack.Navigator>
        <MainStack.Screen name='MainPage' component={MainPage} options={{ headerShown: false, tabBarStyle: { display: 'none' } }} />
      </MainStack.Navigator>
    );
};

const Routes = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
};

export default Routes;