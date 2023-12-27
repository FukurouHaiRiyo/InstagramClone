import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import SignUp from '../screens/signup';
import Login from '../screens/login';
import MainPage from '../screens/main_page';

// stack navigators for authentication screens
const Routes = () => {
    const Tab = createBottomTabNavigator();
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Login' component={Login} options={{tabBarIcon: () => null, tabBarLabel: ''}}/>
                <Tab.Screen name='SignUp' component={SignUp} options={{tabBarIcon: () => null, tabBarLabel: ''}}/>
                <Tab.Screen name='MainPage' component={MainPage} options={{tabBarIcon: () => null, tabBarLabel: '', headerShown: false}}/>
            </Tab.Navigator>
        </NavigationContainer>
    ); 
};

export default Routes;