import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

// stack navigators for authentication screens
const AuthStack = createStackNavigator();
const AuthNavigator = () => {
    <AuthStack.Navigator>
        <AuthStack.Screen name='Login' component={Login}/>
        <AuthStack.Screen name='Register' component={Register}/>
    </AuthStack.Navigator>
};

// stack navigators for main screens
const MainStack = createBottomTabNavigator();
const MainTabNavigator = () => {
    <MainStack.Navigator>
        <MainStack.Screen name='Dashboard' component={Dashboard}/>
        <MainStack.Screen name='Profile' component={Profile}/>
    </MainStack.Navigator>
};

// stack navigators for the app
const AppStack = createStackNavigator();
const AppNavigator = () => {
    <AppStack.Navigator>
        <AppStack.Screen name='Auth' component={AuthNavigator} options = {{headerShown: false}}/>
        <AppStack.Screen name='Main' component={MainTabNavigator} options = {{headerShown: false}}/>
    </AppStack.Navigator>
};

export const DASHBOARD = 'Main';
export const LOGIN = 'Login';
export const SIGN_UP = 'SignUp';
export const PROFILE = 'Profile';
export const NOT_FOUND = 'NotFound';